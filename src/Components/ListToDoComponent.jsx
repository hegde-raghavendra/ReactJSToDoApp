import React, {Component} from 'react';

class ListToDoComponent extends Component {

    constructor(props) {
      super(props)
      this.state = { 
                    todos : [
                      {id:1, description:"Learn React", done:false, targetDate: new Date()},
                      {id:2, description:"Learn Ember", done:false, targetDate: new Date()},
                      {id:3, description:"Learn SpringBoot", done:false, targetDate: new Date()},
                      {id:4, description:"Learn AWS", done:false, targetDate: new Date()}
                    ]
                  }

                }
  
    render() {
      return (
      
      <div>

        <div className="container">

          <h1>To Do List</h1>

          <table className="table">

            <thead>
              <tr>
                <th>Id</th>
                <th>Description</th>
                <th>Done?</th>
                <th>Target Date</th>

              </tr>

            </thead>

            <tbody>
              {
                this.state.todos.map(
                  todo =>

                  <tr key={todo.id}>
                    <td>{todo.id}</td>
                    <td>{todo.description}</td>
                    <td>{todo.done.toString()}</td>
                    <td>{todo.targetDate.toString()}</td>
                  </tr>
                  
                )
              }

            </tbody>


          </table>


        </div>
  
      </div>
  
  
      )
    }
  }


  
  export default ListToDoComponent;