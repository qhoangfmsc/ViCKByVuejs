<template>
  <v-dialog :value="dialogState" max-width="500">
    <template v-slot:activator="{ props: activatorProps }">
      <v-btn
        class="mx-2 rounded-lg"
        :class="classButton"
        :text="title"
        :color="colorButton"
        :variant="variantButton"
        v-bind="activatorProps"
      ></v-btn>
    </template>

    <v-card rounded="xl">
      <v-tabs v-model="tab" align-tabs="title" class="mb-4">
        <v-tab
          class="tab login-tab"
          text="Đăng nhập"
          color="var(--vick-primary)"
          value="tab-login"
        />
        <v-tab
          class="tab register-tab"
          text="Đăng ký"
          color="var(--vick-secondary)"
          value="tab-register"
        />
      </v-tabs>
      <v-tabs-window v-model="tab">
        <v-tabs-window-item value="tab-login">
          <v-card v-if="loginForm.loginStep == 1" flat>
            <v-sheet class="mx-auto px-6" width="100%">
              <form @submit.prevent="loginSubmit">
                <v-text-field
                  v-model="loginForm.loginPhoneNumber"
                  :rules="[rules.required]"
                  clearable
                  label="Số điện thoại"
                ></v-text-field>

                <v-text-field
                  v-model="loginForm.loginPassword"
                  :append-inner-icon="
                    loginForm.isShowPassword ? 'mdi-eye' : 'mdi-eye-off'
                  "
                  :rules="[rules.required]"
                  :type="isShowPassword ? 'text' : 'password'"
                  label="Mật khẩu"
                  clearable
                  @click:append-inner="
                    loginForm.isShowPassword = !loginForm.isShowPassword
                  "
                ></v-text-field>

                <div class="text-center mb-4 mt-2">
                  <v-btn
                    class="px-12 rounded-lg text-white rounded-xl"
                    text="Đăng nhập"
                    color="var(--vick-primary)"
                    variant="flat"
                    v-bind="activatorProps"
                    type="submit"
                  />
                </div>
              </form>
            </v-sheet>
          </v-card>
          <v-card v-if="loginForm.loginStep == 2" flat>
            <div
              class="py-1 px-6 text-center mx-auto ma-4"
              max-width="400"
              width="100%"
            >
              <h3 class="text-h6 mt-0 mb-4">
                Tài khoản
                <span class="text-success">{{
                  loginForm.loginPhoneNumber
                }}</span>
                đăng nhập thành công
              </h3>
              <div class="d-flex justify-center">
                <div class="register-completed">
                  <div class="line-md--check-all"></div>
                </div>
              </div>
              <v-btn
                class="mb-4 mt-2 text-white"
                color="success"
                height="40"
                text="Tiếp tục"
                variant="flat"
                width="50%"
                rounded="xl"
                @click="onLogin"
              ></v-btn>
            </div>
          </v-card>
        </v-tabs-window-item>
        <v-tabs-window-item value="tab-register">
          <v-card v-if="registerForm.registerStep == 1" flat>
            <v-sheet class="mx-auto px-6" width="100%">
              <form @submit.prevent="registerSubmit">
                <v-text-field
                  v-model="registerForm.registerFirstName"
                  :rules="[rules.required]"
                  clearable
                  label="Họ và Tên đệm"
                ></v-text-field>
                <v-text-field
                  v-model="registerForm.registerLastName"
                  :rules="[rules.required]"
                  clearable
                  label="Tên"
                ></v-text-field>
                <v-text-field
                  v-model="registerForm.registerPhoneNumber"
                  :rules="[rules.required]"
                  clearable
                  label="Số điện thoại"
                ></v-text-field>
                <v-text-field
                  v-model="registerForm.registerEmail"
                  :rules="[rules.required]"
                  clearable
                  type="email"
                  label="Email"
                ></v-text-field>
                <div class="text-center mb-4 mt-2">
                  <v-btn
                    class="px-12 rounded-lg rounded-xl"
                    text="Đăng ký"
                    color="var(--vick-primary)"
                    variant="outlined"
                    v-bind="activatorProps"
                    type="submit"
                  />
                </div>
              </form>
            </v-sheet>
          </v-card>
          <v-card v-if="registerForm.registerStep == 2" flat>
            <v-btn
              class="line-md--arrow-left ml-4"
              @click="onPreviousStepRegister"
            >
              <v-tooltip activator="parent" location="top"
                >Quay lại bước trước</v-tooltip
              >
            </v-btn>
            <div
              class="py-2 px-6 text-center mx-auto ma-4"
              max-width="400"
              width="100%"
            >
              <h3 class="text-h6 mb-4">Xác thực tài khoản</h3>
              <div class="text-body-2">
                Chúng tôi đã gửi mã xác nhận tới số điện thoại
                {{ registerForm.registerPhoneNumber }}. Hãy kiểm tra tin nhắn và
                nhập OTP để hoàn tất đăng ký
              </div>

              <v-sheet color="surface">
                <v-otp-input
                  v-model="registerForm.otp"
                  variant="solo"
                ></v-otp-input>
              </v-sheet>

              <v-btn
                class="my-4 text-white"
                color="var(--vick-secondary)"
                height="40"
                text="Xác nhận"
                variant="flat"
                width="70%"
                @click="onRegisterCompleted"
              ></v-btn>

              <div class="text-caption">
                Chưa nhận được OTP?
                <a href="#" @click.prevent="registerForm.otp = ''">Gửi lại</a>
              </div>
            </div>
          </v-card>
          <v-card v-if="registerForm.registerStep == 3" flat>
            <div
              class="py-1 px-6 text-center mx-auto ma-4"
              max-width="400"
              width="100%"
            >
              <h3 class="text-h6 my-0">
                Tài khoản của
                <span class="text-success">{{
                  registerForm.registerLastName
                }}</span>
                đã được tạo thành công
              </h3>
              <p class="mb-4">Xin vui lòng đăng nhập để tiếp tục</p>
              <div class="d-flex justify-center">
                <div class="register-completed">
                  <div class="line-md--account-add"></div>
                </div>
              </div>
              <v-btn
                class="mb-4 mt-2 text-white"
                color="success"
                height="40"
                text="Xác nhận"
                variant="flat"
                width="50%"
                rounded="xl"
                @click="changeLoginTab"
              ></v-btn>
            </div>
          </v-card>
        </v-tabs-window-item>
      </v-tabs-window>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true,
    },
    classButton: {
      type: String,
    },
    variantButton: {
      type: String,
      default: "flat",
    },
    colorButton: {
      type: String,
      required: true,
    },
    dialogState: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      // TABS
      tab: null,
      tabs: [
        {
          formName: "Đăng nhập",
          formTab: "login",
        },
        {
          formName: "Đăng ký",
          formTab: "register",
        },
      ],
      // LOGIN FORM
      loginForm: {
        loginStep: 1,
        loginPhoneNumber: "",
        loginPassword: "",
        isShowPassword: false,
      },
      // REGISTER FORM
      registerForm: {
        otp: "",
        registerStep: 1,
        registerFirstName: "",
        registerLastName: "",
        registerPhoneNumber: "",
        registerEmail: "",
      },
      // VALID RULES
      rules: {
        required: (value) => !!value || "Bắt buộc.",
      },
    };
  },
  methods: {
    switchTab(event, item) {
      console.log(event, item);
    },
    // LOGIN FORM
    loginSubmit(values) {
      console.log(values);
      this.onNextStepLogin();
    },
    onLogin() {
      this.$emit("onLogin");
    },
    onNextStepLogin() {
      this.loginForm.loginStep++;
    },
    onPreviousStepLogin() {
      this.loginForm.loginStep--;
    },
    // REGISTER FORM
    registerSubmit(values) {
      console.log(values);
      this.onNextStepRegister();
    },
    onRegisterCompleted() {
      this.onNextStepRegister();
    },
    changeLoginTab() {
      let loginTab = document.querySelector(".login-tab");
      loginTab.click();
    },
    onNextStepRegister() {
      this.registerForm.registerStep++;
    },
    onPreviousStepRegister() {
      this.registerForm.registerStep--;
    },
  },
};
</script>

<style scoped>
.tab[aria-selected="false"] {
  color: grey;
}
.register-completed {
  border-radius: 100px;
  align-content: center;
  width: 7rem;
  height: 7rem;
  padding: 0.5rem;
  background: rgba(76, 175, 80);
}
.line-md--arrow-left {
  display: inline-block;
  width: 1.5rem;
  height: 1.5rem;
  --svg: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Cg fill='none' stroke='%23000' stroke-linecap='round' stroke-linejoin='round' stroke-width='2'%3E%3Cpath stroke-dasharray='20' stroke-dashoffset='20' d='M21 12H3.5'%3E%3Canimate fill='freeze' attributeName='stroke-dashoffset' dur='0.3s' values='20;0'/%3E%3C/path%3E%3Cpath stroke-dasharray='12' stroke-dashoffset='12' d='M3 12L10 19M3 12L10 5'%3E%3Canimate fill='freeze' attributeName='stroke-dashoffset' begin='0.3s' dur='0.2s' values='12;0'/%3E%3C/path%3E%3C/g%3E%3C/svg%3E");
  background-color: grey;
  -webkit-mask-image: var(--svg);
  mask-image: var(--svg);
  -webkit-mask-repeat: no-repeat;
  mask-repeat: no-repeat;
  -webkit-mask-size: 100% 100%;
  mask-size: 100% 100%;
}
.line-md--check-all {
  display: inline-block;
  width: 5rem;
  height: 5rem;
  --svg: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Cdefs%3E%3Cmask id='lineMdCheckAll0'%3E%3Cg fill='none' stroke='%23fff' stroke-dasharray='22' stroke-dashoffset='22' stroke-linecap='round' stroke-linejoin='round' stroke-width='2'%3E%3Cpath d='M2 13.5l4 4l10.75 -10.75'%3E%3Canimate fill='freeze' attributeName='stroke-dashoffset' dur='0.4s' values='22;0'/%3E%3C/path%3E%3Cpath stroke='%23000' stroke-width='4' d='M7.5 13.5l4 4l10.75 -10.75' opacity='0'%3E%3Cset attributeName='opacity' begin='0.4s' to='1'/%3E%3Canimate fill='freeze' attributeName='stroke-dashoffset' begin='0.4s' dur='0.4s' values='22;0'/%3E%3C/path%3E%3Cpath d='M7.5 13.5l4 4l10.75 -10.75' opacity='0'%3E%3Cset attributeName='opacity' begin='0.4s' to='1'/%3E%3Canimate fill='freeze' attributeName='stroke-dashoffset' begin='0.4s' dur='0.4s' values='22;0'/%3E%3C/path%3E%3C/g%3E%3C/mask%3E%3C/defs%3E%3Crect width='24' height='24' fill='%23000' mask='url(%23lineMdCheckAll0)'/%3E%3C/svg%3E");
  background-color: white;
  -webkit-mask-image: var(--svg);
  mask-image: var(--svg);
  -webkit-mask-repeat: no-repeat;
  mask-repeat: no-repeat;
  -webkit-mask-size: 100% 100%;
  mask-size: 100% 100%;
}
.line-md--account-add {
  display: inline-block;
  width: 5rem;
  height: 5rem;
  --svg: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Cg fill='none' stroke='%23000' stroke-linecap='round' stroke-width='2'%3E%3Cpath stroke-dasharray='20' stroke-dashoffset='20' d='M3 21V20C3 17.7909 4.79086 16 7 16H11C13.2091 16 15 17.7909 15 20V21'%3E%3Canimate fill='freeze' attributeName='stroke-dashoffset' dur='0.4s' values='20;0'/%3E%3C/path%3E%3Cpath stroke-dasharray='20' stroke-dashoffset='20' d='M9 13C7.34315 13 6 11.6569 6 10C6 8.34315 7.34315 7 9 7C10.6569 7 12 8.34315 12 10C12 11.6569 10.6569 13 9 13Z'%3E%3Canimate fill='freeze' attributeName='stroke-dashoffset' begin='0.5s' dur='0.4s' values='20;0'/%3E%3C/path%3E%3Cpath stroke-dasharray='8' stroke-dashoffset='8' d='M15 6H21'%3E%3Canimate fill='freeze' attributeName='stroke-dashoffset' begin='1s' dur='0.2s' values='8;0'/%3E%3C/path%3E%3Cpath stroke-dasharray='8' stroke-dashoffset='8' d='M18 3V9'%3E%3Canimate fill='freeze' attributeName='stroke-dashoffset' begin='1.2s' dur='0.2s' values='8;0'/%3E%3C/path%3E%3C/g%3E%3C/svg%3E");
  background-color: white;
  -webkit-mask-image: var(--svg);
  mask-image: var(--svg);
  -webkit-mask-repeat: no-repeat;
  mask-repeat: no-repeat;
  -webkit-mask-size: 100% 100%;
  mask-size: 100% 100%;
}
</style>
