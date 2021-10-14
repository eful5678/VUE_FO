<template>
  <div>
    <div class="contents">
      <table>
        <tr>
          <th>순번</th>
          <th>컨테이너 번호</th>
          <th>수리비</th>
        </tr>
        <tr v-for="(container, conIndex) in this.repairs" :key="conIndex">
          <td>{{ conIndex + 1 }}</td>
          <td>{{ container.containerCode }}</td>
          <td>{{ container.repairCost }}</td>
        </tr>
      </table>
    </div>
  </div>
</template>

<script>
import { Container } from "@/entity";
import { repairList } from "@/api/repair";
export default {
  data() {
    return {
      container: {
        class: new Container(),
      },
      repairs: [],
    };
  },
  created() {
    this.search();
  },
  methods: {
    search: async function () {
      try {
        const response = await repairList(this.container.class.search());
        console.log(response);
        this.repairs = response.data;
      } catch (error) {
        console.log(error);
      }
    },
  },
};
</script>

<style></style>
