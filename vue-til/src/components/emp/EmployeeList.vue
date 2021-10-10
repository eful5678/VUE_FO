<template>
  <div>
    <div class="contents">
      <div class="col">
        <div class="button-right">
          <button>검색</button>
          <button @click="createEmp">직원등록</button>
        </div>
      </div>
    </div>
    <div class="contents">
      <div class="row">
        <div class="col">
          <section>
            <div>
              <table>
                <colgroup>
                  <col width="25%" />
                  <col width="25%" />
                  <col width="25%" />
                  <col width="25%" />
                </colgroup>
                <tbody>
                  <tr>
                    <th>순번</th>
                    <th>이름</th>
                    <th>직급</th>
                    <th>입사일</th>
                  </tr>
                  <tr v-for="Employee in Employees" :key="Employee.id">
                    <td>
                      {{ Employee.id }}
                    </td>
                    <td>
                      <a href="">{{ Employee.name }}</a>
                    </td>
                    <td>아직</td>
                    <td>아직</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { empList } from "@/api/emp";
import { Employee } from "@/entity";
export default {
  data() {
    return {
      emp: {
        class: new Employee(),
      },
      Employees: [],
    };
  },
  created() {
    this.search();
    console.log(this);
  },
  methods: {
    search: async function () {
      try {
        const response = await empList({
          params: this.emp.class.search(),
        });
        console.log(response);
        this.Employees = response.data;
        console.log(this.Employees);
      } catch (error) {
        console.log(error);
      }
    },
    createEmp: function () {
      this.$router.push("/empRegist");
    },
  },
};
</script>

<style></style>
