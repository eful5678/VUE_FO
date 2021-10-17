<template>
  <div>
    <div class="contents">
      <div>
        <button @click="insertContainer">등록</button>
      </div>
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
                    <th>등록일</th>
                    <th>수리일</th>
                    <th>선사</th>
                    <th>컨테이너 번호</th>
                    <th>수리비</th>
                  </tr>
                  <tr>
                    <td>
                      <input type="date" v-model="container.class.regDate" />
                    </td>
                    <td>
                      <input type="date" v-model="container.class.repairDate" />
                    </td>
                    <td>
                      <input
                        type="text"
                        v-model="container.class.shippingCompany"
                      />
                    </td>
                    <td>
                      <input
                        type="text"
                        v-model="container.class.containerCode"
                      />
                    </td>
                    <td>
                      <input type="text" v-model="container.repairCost" />
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>
        </div>
      </div>
    </div>
    <div class="contents">
      <table>
        <tr>
          <th>순번</th>
          <th>등록일자</th>
          <th>수리일자</th>
          <th>선사</th>
          <th>컨테이너 번호</th>
          <th>수리비</th>
          <th>지급금액</th>
        </tr>
        <tr v-for="(container, conIndex) in this.repairs" :key="conIndex">
          <td>{{ conIndex + 1 }}</td>
          <td>{{ container.regDate || "등록일X" }}</td>
          <td>{{ container.repairDate || "미수리" }}</td>
          <td>{{ container.shippingCompany || "선사 없음" }}</td>
          <td>{{ container.containerCode }}</td>
          <td>{{ container.repairCost }}</td>
          <td>{{ container.paymentAmount }}</td>
        </tr>
      </table>
    </div>
  </div>
</template>

<script>
import { Container } from "@/entity";
import { repairList, insertContainer } from "@/api/repair";
export default {
  data() {
    return {
      container: {
        class: new Container(),
      },
      repairs: [],
      regDate: "",
      repairDate: "",
    };
  },
  created() {
    this.search();
  },
  methods: {
    setDate: function () {
      // let date = new Date();
      // this.regDate = this.common.long
    },
    search: async function () {
      try {
        const response = await repairList(this.container.class.search());
        console.log(response);
        this.repairs = response.data;
      } catch (error) {
        console.log(error);
      }
    },
    insertContainer: async function () {
      try {
        const response = await insertContainer(this.container.class.insert());
        console.log(response);
        this.search();
      } catch (error) {
        console.log(error);
      }
    },
  },
};
</script>

<style></style>
