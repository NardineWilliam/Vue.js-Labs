<template>
  <div class="container">
    <div class="form-section">
      <h2 class="text-center mt-3">Users Form</h2>
      <form @submit.prevent="submitForm" class="mt-3">
        <div class="form-group">
          <label for="name">Name</label>
          <input
            type="text"
            id="name"
            v-model="name"
            class="form-control"
            required />
        </div>
        <div class="form-group">
          <label for="age">Age</label>
          <input
            type="number"
            id="age"
            v-model.number="age"
            class="form-control"
            required />
        </div>
        <div class="form-group">
          <label for="role">Role</label>
          <select id="role" v-model="role" class="form-control" required>
            <option value="admin">Admin</option>
            <option value="user">User</option>
          </select>
        </div>
        <div class="text-center">
          <button type="submit" class="btn btn-primary">Submit</button>
        </div>
      </form>
    </div>

    <div class="buttons-section text-center">
      <button @click="flag = 'Users'" class="btn btn-primary me-2">
        Users
      </button>
      <button @click="flag = 'Admins'" class="btn btn-primary">Admins</button>
    </div>

    <div class="lists-section">
      <Users v-if="flag === 'Users'" :users="users" @delete="deleteUser" />
      <Admins
        v-else-if="flag === 'Admins'"
        :admins="admins"
        @delete="deleteAdmin" />
    </div>
  </div>
</template>

<script>
import Users from "./Users";
import Admins from "./Admins";

export default {
  name: "HomePage",
  data() {
    return {
      name: "",
      age: null,
      role: "user",
      flag: "Users",
      users: [],
      admins: [],
    };
  },
  components: {
    Users,
    Admins,
  },
  methods: {
    submitForm() {
      console.log("submitUsers:", this.users);

      if (this.role === "admin") {
        this.admins.push({ name: this.name, age: this.age });
      } else {
        this.users.push({ name: this.name, age: this.age });
      }

      this.name = "";
      this.age = null;
      this.role = "user";
    },

    deleteUser(index) {
      this.users.splice(index, 1);
      console.log("DeleteUsers:", this.users);
    },

    deleteAdmin(index) {
      this.admins.splice(index, 1);
      console.log("DeleteAdmins:", this.admins);
    },
  },
};
</script>

<style scoped>
.container {
  padding-top: 50px;
}

.form-section {
  background-color: #f8f9fa;
  padding: 20px;
  border-radius: 10px;
  margin-bottom: 30px;
  height: auto;
}

.buttons-section {
  margin-bottom: 20px;
}

.buttons-section button {
  margin: 0 5px;
}

.lists-section {
  border: 1px solid #dee2e6;
  padding: 20px;
  border-radius: 10px;
}

.form-group {
  margin-bottom: 20px;
}
</style>
