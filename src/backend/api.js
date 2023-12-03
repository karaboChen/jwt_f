import axios from "axios";
import router from "../router/index";
const instance = axios.create({
  //本地
  baseURL: "http://localhost:5291",

  timeout: 50000,
});

instance.interceptors.request.use(
  (config) => {
    // if (localStorage.getItem("token")) {
    //   config.headers.Authorization = `Bearer ${localStorage.getItem("token")}`;
    // }
    console.log("起", config.headers.Authorization);
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

instance.interceptors.response.use(
  (response) => {
    // 如果是登入 API ，就將 token 放到 header
    if (response.config.url === "/get") {
      console.log(
        `interceptors response, url: ${response.config.url}, token: ${response.data}`
      );
      instance.defaults.headers.common[
        "Authorization"
      ] = `Bearer ${response.data}`;
    }
    return response;
  },
  (error) => {
    if (error.response.status) {
      switch (error.response.status) {
        case 401:
          router.push({
            path: "/login",
            query: {
              redirect: router.options.history.state.current,
            },
          });
          break;
      }
    }
    return Promise.reject(error);
  }
);

export const Get_key = () => instance.get("/get");
export const Get_gg = () => instance.get("/gg");

export const Get_log = (aa, cc) => instance.get(`/vvw/get?aa=${aa}&cc=${cc}`);

export const Get_log2 = (e) => instance.post('/vvw/post',e);


