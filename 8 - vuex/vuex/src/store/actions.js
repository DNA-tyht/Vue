export default {
  actionUpdateInfo(context, payload) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        context.commit("updateInfo");
        console.log(payload);
        resolve();
      }, 1000)
    }).then( res => {
      console.log("完成提交");
      console.log(res);
    })
  }
}