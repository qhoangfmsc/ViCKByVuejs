<template>
  <v-toolbar
    :elevation="8"
    style="border-bottom: 2px solid var(--vick-primary)"
  >
    <div class="w-100 mx-10 d-flex justify-space-between">
      <RouterLink to="/" class="bg-transparent align-content-center">
        <v-img
          :width="100"
          aspect-ratio="16/9"
          cover
          src="https://vick.vn/static/image/stalk-01.svg"
        ></v-img>
      </RouterLink>
      <div class="w-100 d-none d-md-flex justify-end">
        <div class="align-content-center" v-if="authen.state">
          <div class="d-flex">
            <my-profile-component :authen="authen" @logOut="logout" />
            <notification-component />
          </div>
        </div>
        <div
          class="d-flex align-content-center w-40 justify-space-between"
          v-if="!authen.state"
        >
          <div class="align-content-center text-body-2">
            <RouterLink
              class="text-grey-darken-2 text-decoration-none mx-2"
              to="/trang-gioi-thieu"
              >Về chúng tôi</RouterLink
            >
            <RouterLink
              class="text-grey-darken-2 text-decoration-none mx-2"
              to="/trang-gioi-thieu"
              >Cố vấn đầu tư</RouterLink
            >
          </div>
          <div class="d-flex align-content-center">
            <dialog-component
              :title="'Đăng nhập'"
              :colorButton="'var(--vick-primary)'"
              :dialogState="dialogState"
              :classButton="'text-white'"
              @onLogin="onCloseDialog"
            />
          </div>
        </div>
        <div class="align-content-center">
          <v-btn
            class="mx-2 rounded-lg bg-red"
            variant="outlined"
            href="tel:(+84)916 356 836"
          >
            <div class="line-md--phone-call-loop mr-2"></div>
            <span>0916 356 836</span>
          </v-btn>
        </div>
      </div>
    </div>
  </v-toolbar>
</template>

<script>
import MyProfileComponent from "@/components/MyProfileComponent.vue";
import NotificationComponent from "@/components/NotificationComponent.vue";
import DialogComponent from "@/components/LoginDialogComponent.vue";

export default {
  components: {
    MyProfileComponent,
    NotificationComponent,
    DialogComponent,
  },
  data() {
    return {
      dialogState: false,
      authen: {
        state: false,
        info: {
          avatar: "https://vick.vn/static/image/empty.jpeg",
          username: "130901",
          lastname: "Hoàng",
          firstname: "Nguyễn",
          gender: "male",
          phonereligion: 84,
          phonenumber: "1",
          email: "email@gmail.com",
          acceptsystememail: false,
          usertype: "CUSTOMER",
          userstatus: "USING_SERVICE",
          isemailverified: false,
          registinvitecode: "10421",
          loginusername: "1",
          id: 130901,
          createduser: "system",
          lastmodifieduser: "system",
          createddate: "2023-04-04 10:44",
          lastmodifieddate: "2023-04-24 17:38",
        },
      },
    };
  },
  methods: {
    login() {
      this.authen.state = true;
    },
    logout() {
      this.authen.state = false;
    },
    onCloseDialog() {
      this.login();
      this.dialogState = false;
    },
  },
};
</script>

<style scoped>
.line-md--phone-call-loop {
  display: inline-block;
  width: 1.5rem;
  height: 1.5rem;
  --svg: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Cg fill='none' stroke='%23000' stroke-linecap='round' stroke-linejoin='round' stroke-width='2'%3E%3Cpath stroke-dasharray='64' stroke-dashoffset='64' d='M8 3C8.5 3 10.5 7.5 10.5 8C10.5 9 9 10 8.5 11C8 12 9 13 10 14C10.3943 14.3943 12 16 13 15.5C14 15 15 13.5 16 13.5C16.5 13.5 21 15.5 21 16C21 18 19.5 19.5 18 20C16.5 20.5 15.5 20.5 13.5 20C11.5 19.5 10 19 7.5 16.5C5 14 4.5 12.5 4 10.5C3.5 8.5 3.5 7.5 4 6C4.5 4.5 6 3 8 3Z'%3E%3Canimate fill='freeze' attributeName='stroke-dashoffset' dur='0.6s' values='64;0'/%3E%3CanimateTransform attributeName='transform' begin='0.6s;lineMdPhoneCallLoop0.begin+2.6s' dur='0.5s' type='rotate' values='0 12 12;15 12 12;0 12 12;-12 12 12;0 12 12;12 12 12;0 12 12;-15 12 12;0 12 12'/%3E%3C/path%3E%3Cpath stroke-dasharray='4' stroke-dashoffset='4' d='M14 7.04404C14.6608 7.34734 15.2571 7.76718 15.7624 8.27723M16.956 10C16.6606 9.35636 16.2546 8.77401 15.7624 8.27723' opacity='0'%3E%3Cset id='lineMdPhoneCallLoop0' attributeName='opacity' begin='0.7s;lineMdPhoneCallLoop0.begin+2.7s' to='1'/%3E%3Canimate fill='freeze' attributeName='stroke-dashoffset' begin='0.7s;lineMdPhoneCallLoop0.begin+2.7s' dur='0.2s' values='4;8'/%3E%3Canimate fill='freeze' attributeName='stroke-dashoffset' begin='1.3s;lineMdPhoneCallLoop0.begin+3.3s' dur='0.3s' values='0;4'/%3E%3Cset attributeName='opacity' begin='1.6s;lineMdPhoneCallLoop0.begin+3.6s' to='0'/%3E%3C/path%3E%3Cpath stroke-dasharray='10' stroke-dashoffset='10' d='M20.748 9C20.3874 7.59926 19.6571 6.347 18.6672 5.3535M15 3.25203C16.4105 3.61507 17.6704 4.3531 18.6672 5.3535' opacity='0'%3E%3Cset attributeName='opacity' begin='1s;lineMdPhoneCallLoop0.begin+3s' to='1'/%3E%3Canimate fill='freeze' attributeName='stroke-dashoffset' begin='1s;lineMdPhoneCallLoop0.begin+3s' dur='0.2s' values='10;20'/%3E%3Canimate fill='freeze' attributeName='stroke-dashoffset' begin='1.5s;lineMdPhoneCallLoop0.begin+3.5s' dur='0.3s' values='0;10'/%3E%3Cset attributeName='opacity' begin='1.8s;lineMdPhoneCallLoop0.begin+3.8s' to='0'/%3E%3C/path%3E%3C/g%3E%3C/svg%3E");
  background-color: currentColor;
  -webkit-mask-image: var(--svg);
  mask-image: var(--svg);
  -webkit-mask-repeat: no-repeat;
  mask-repeat: no-repeat;
  -webkit-mask-size: 100% 100%;
  mask-size: 100% 100%;
}
</style>
