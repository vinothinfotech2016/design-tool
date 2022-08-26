export const formNewUserSchema = (role) => ({
  type: "object",
  required: [
    // "userName",
    // "userEmail",
    // "userNumber",
    // "selectRole",
    // "password",
    // "confirmPassword",
    // "selectProducts",
    "name",
    "email",
    "mobileNumber",
    "roleId",
    "password",
    "confirmPassword",
    "userType",
  ],
  properties: {
    // userName: {
    name: {
      type: "string",
      label: "User Name",
      name: "name",
    },
    // userEmail: {
    email: {
      type: "string",
      label: "User Email",
    },
    // userNumber: {
    mobileNumber: {
      type: "number",
      label: "User Number",
    },
    // selectRole: {
    roleId: {
      type: "string",
      label: "Select Role",
      options: role,
    },
    password: {
      type: "string",
      label: "Password",
    },
    confirmPassword: {
      type: "string",
      label: "Confirm Password",
    },
    // selectProducts: {
    userType: {
      type: "string",
      label: "Select Product(s)",
      options: [
        { id: "1", name: "Product Name 1" },
        { id: "2", name: "Product Name 2" },
        { id: "3", name: "Product Name 3" },
        { id: "4", name: "Product Name 4" },
      ],
    },
  },
});

export const formNewUserUiSchema = () => ({
  name: {},
  email: { xs: 6 },
  mobileNumber: { xs: 6 },
  roleId: {
    "ui:widget": "SelectWidget",
  },
  password: { xs: 6, showEyeIcon: true, "ui:widget": "PasswordWidget" },
  confirmPassword: { xs: 6, showEyeIcon: true, "ui:widget": "PasswordWidget" },
  userType: {
    "ui:widget": "SelectWidget",
  },
});
