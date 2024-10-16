import axios from "axios"
const utvcdAPI = axios.create({
  baseURL: "https://utvcd-1122.botics.co",
  headers: { Accept: "application/json", "Content-Type": "application/json" }
})
function api_docs_schema_retrieve(payload) {
  return utvcdAPI.get(`/api-docs/schema/`, { params: { lang: payload.lang } })
}
function api_v1_login_create(payload) {
  return utvcdAPI.post(`/api/v1/login/`, payload)
}
function api_v1_signup_create(payload) {
  return utvcdAPI.post(`/api/v1/signup/`, payload)
}
function api_v1_yvdfdg_list(payload) {
  return utvcdAPI.get(`/api/v1/yvdfdg/`)
}
function api_v1_yvdfdg_create(payload) {
  return utvcdAPI.post(`/api/v1/yvdfdg/`, payload)
}
function api_v1_yvdfdg_retrieve(payload) {
  return utvcdAPI.get(`/api/v1/yvdfdg/${payload.id}/`)
}
function api_v1_yvdfdg_update(payload) {
  return utvcdAPI.put(`/api/v1/yvdfdg/${payload.id}/`, payload)
}
function api_v1_yvdfdg_partial_update(payload) {
  return utvcdAPI.patch(`/api/v1/yvdfdg/${payload.id}/`, payload)
}
function api_v1_yvdfdg_destroy(payload) {
  return utvcdAPI.delete(`/api/v1/yvdfdg/${payload.id}/`)
}
function rest_auth_login_create(payload) {
  return utvcdAPI.post(`/rest-auth/login/`, payload)
}
function rest_auth_logout_create(payload) {
  return utvcdAPI.post(`/rest-auth/logout/`)
}
function rest_auth_password_change_create(payload) {
  return utvcdAPI.post(`/rest-auth/password/change/`, payload)
}
function rest_auth_password_reset_create(payload) {
  return utvcdAPI.post(`/rest-auth/password/reset/`, payload)
}
function rest_auth_password_reset_confirm_create(payload) {
  return utvcdAPI.post(`/rest-auth/password/reset/confirm/`, payload)
}
function rest_auth_registration_create(payload) {
  return utvcdAPI.post(`/rest-auth/registration/`, payload)
}
function rest_auth_registration_resend_email_create(payload) {
  return utvcdAPI.post(`/rest-auth/registration/resend-email/`, payload)
}
function rest_auth_registration_verify_email_create(payload) {
  return utvcdAPI.post(`/rest-auth/registration/verify-email/`, payload)
}
function rest_auth_user_retrieve(payload) {
  return utvcdAPI.get(`/rest-auth/user/`)
}
function rest_auth_user_update(payload) {
  return utvcdAPI.put(`/rest-auth/user/`, payload)
}
function rest_auth_user_partial_update(payload) {
  return utvcdAPI.patch(`/rest-auth/user/`, payload)
}
export const apiService = {
  api_docs_schema_retrieve,
  api_v1_login_create,
  api_v1_signup_create,
  api_v1_yvdfdg_list,
  api_v1_yvdfdg_create,
  api_v1_yvdfdg_retrieve,
  api_v1_yvdfdg_update,
  api_v1_yvdfdg_partial_update,
  api_v1_yvdfdg_destroy,
  rest_auth_login_create,
  rest_auth_logout_create,
  rest_auth_password_change_create,
  rest_auth_password_reset_create,
  rest_auth_password_reset_confirm_create,
  rest_auth_registration_create,
  rest_auth_registration_resend_email_create,
  rest_auth_registration_verify_email_create,
  rest_auth_user_retrieve,
  rest_auth_user_update,
  rest_auth_user_partial_update
}
