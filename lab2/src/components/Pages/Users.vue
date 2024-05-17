<template>
  <div>
    <h2>Users</h2>
    <div class="d-flex justify-content-center text-center">
      <table class="table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Age</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(user, index) in users" :key="index">
            <td>{{ user.name }}</td>
            <td>{{ user.age }}</td>
            <td>
              <button
                type="button"
                class="btn btn-danger btn-sm"
                @click="deleteUser(index)">
                Delete
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  name: "UsersList",
  props: {
    users: {
      type: Array,
      default: () => [],
    },
  },
  methods: {
    deleteUser(index) {
      this.$emit("delete", index);
    },
  },
};
</script>

<style scoped></style>
