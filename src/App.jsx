// styles
import "./App.css";
import { useState } from "react";

// components
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import UserList from "./components/userList/userList";
import NewUserForm from "./components/newuser/NewUserForm";

function App() {
  const [showModal, setShowModal] = useState(false)
  const [users, setUsers] = useState([]);

  const deleteUser = (id) => {
    setUsers((prev) => {
      return prev.filter((user) => {
        return user.id !== id;
      });
    });
  };

  const closeModal = (e) => {
    if (e.target.className === 'overlay') setShowModal(false)
    if (e.key === 'Escape') setShowModal(false)
  }

  return (
    <div onClick={closeModal} onKeyDown={closeModal} className="App">
      <Navbar usersLength={users.length} />
      <main>
        <div className="no-users">
          {users.length === 0 && <h2>No Users</h2>}
        </div>
        <UserList users={users} deleteUser={deleteUser} />
      </main>
      {showModal && <NewUserForm/>}
      <button onClick={() => setShowModal(true)} className="create-user">Create user</button>
      <Footer />
    </div>
  );
}

export default App;

/* 
      id: 1,
      image: "https://picsum.photos/400?random=1",
      firstName: "Akhmadjon",
      lastName: "Abduhamidov",
      age: 16,
      from: "Uzbekistan",
      job: "Frontent Developer",
      gender: "Male"
*/