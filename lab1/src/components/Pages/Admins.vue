<template>
  <div>
    <h2>Admins</h2>
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
          <tr v-for="(admin, index) in admins" :key="index">
            <td>{{ admin.name }}</td>
            <td>{{ admin.age }}</td>
            <td>
              <button
                type="button"
                class="btn btn-danger btn-sm"
                @click="deleteAdmin(index)">
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
  name: "AdminsList",
  props: {
    admins: {
      type: Array,
      default: () => [],
    },
  },
  methods: {
    deleteAdmin(index) {
      this.$emit("delete", index);
    },
  },
};
</script>

<style scoped></style>
