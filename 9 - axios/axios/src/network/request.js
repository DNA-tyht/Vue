import axios from "axios";

export function request1(config, success, failure) {
  const instance = axios.create({
    baseURL: "http://152.136.185.210:7878/api/m5/",
    timeout: 5000
  })

  instance(config)
      .then(res => {
      })
      .catch(err => {
      })
}


export function request2(config) {
  return new Promise((resolve, reject) => {
    const instance = axios.create({
      baseURL: "http://152.136.185.210:7878/api/m5/",
      timeout: 5000
    });
    instance(config)
        .then(res => {
          resolve(res);
        })
        .catch(err => {
          reject(err);
        })
  })
}

export function request(config) {
  return new Promise((resolve, reject) => {
    const instance = axios.create({
      baseURL: "http://152.136.185.210:7878/api/m5/",
      timeout: 5000
    });
    return instance(config);
  })
}