import axios from "axios";

export default {
  methods: {
    GetPrdById(id) {
      return axios
        .get(`http://localhost:2000/recipes/${id}`)
        .then((res) => res.data)
        .catch((err) => {
          console.log(err);
          throw err;
        });
    },
  },
};
