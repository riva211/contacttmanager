import React from "react";
var message = "";
class AddContact extends React.Component {
  state = {
   
    name: "",
    email: "",
    number: "",
  };

  add = (e) => {
    e.preventDefault();
    if (this.state.name === "" || this.state.email === "" || this.state.number === "") {
       message= "ALl the fields are mandatory!";

      return;
    }
    this.props.addContactHandler(this.state);
    this.setState({ name: "", email: "", number: "" });
  };
  render() {
    return (
      <div>
        <div className="bg-gray-200 my-6 mx-2 rounded-lg bg-opacity-50">
          <h2 className="text-lg text-center  font-bold text-gray-500 ">
            Add Conatct
          </h2>
        </div>
        <div className="mx-6 my-7">
          <form className="form" onSubmit={this.add}>
            <div className=" mb-6 md:grid-cols-3 justify-center">
              <div className="justify-center">
                <label className="w-100 block mb-2 text-xl font-medium text-gray-800 my-2">
                  First name
                </label>
                
                <input
                  type="text"
                  value={this.state.name}
                  onChange={(e) => this.setState({ name: e.target.value })}
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-100 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="John"
                />

                <label className="block mb-2 text-xl font-medium text-gray-800 my-4">
                  Email
                </label>
                <input
                  type="text"
                  value={this.state.email}
                  onChange={(e) => this.setState({ email: e.target.value })}
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-100 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="John@gmail.com"
                />
                <label className="block mb-2 text-xl font-medium text-gray-800 my-4">
                  Mobile
                </label>
                <input
                  type="text"
                  value={this.state.number}
                  onChange={(e) => this.setState({ number: e.target.value })}
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-100 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="6355301626"
                />
                <button
                  type="button"
                  className="inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded-full shadow-md  my-5 hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
                  onClick={this.add}
                >
                  Add
                </button>
                <div>{message}</div>
              </div>
            </div>
          </form>
        </div>
      </div>
    );
  }
}
export default AddContact;
