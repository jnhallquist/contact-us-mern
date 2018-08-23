import React, { Component } from 'react';
import ReactTable from "react-table";
import Moment from 'moment'
import 'react-table/react-table.css';

export default class MessagesIndex extends Component {
  constructor() {
    super();

    this.state = {
      messages: []
    };
  }

  componentWillMount() {
    fetch('http://localhost:3000/messages')
    .then(response => response.json())
    .then((messages) => {
      this.setState({ messages });
    });
  }

  render() {
    const data = this.state.messages;

    return (
      <div>
        <ReactTable
          data={data}
          filterable={true}
          defaultFilterMethod={(filter, row, column) => {
            const id = filter.pivotId || filter.id
            return row[id] !== undefined ? String(row[id].toLowerCase()).startsWith(filter.value.toLowerCase()) : true
          }}
          columns={[
            {
              Header: 'Contact Info',
              columns: [
                {
                  Header: 'Email',
                  accessor: 'email'
                }
              ]
            },
            {
              Header: 'Name',
              columns: [
                {
                  Header: 'First Name',
                  accessor: 'firstName'
                },
                {
                  Header: 'Last Name',
                  accessor: 'lastName'
                }
              ]
            },
            {
              Header: 'Message Info',
              columns: [
                {
                  Header: 'Body',
                  accessor: 'body',
                  style: { 'whiteSpace': 'unset' }
                },
                {
                  Header: 'Received at',
                  id: 'createdDate',
                  accessor: d => {
                    return Moment(d.createdDate)
                      .local()
                      .format('DD-MM-YYYY hh:mm a')
                  }
                }
              ]
            }
          ]}
          defaultSorted={[
            {
              id: 'createdDate',
              desc: true
            }
          ]}
          defaultPageSize={10}
          className='-striped -highlight'
        />
      </div>
    );
  }
}
