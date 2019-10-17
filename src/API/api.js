import Server from './index';

class Api extends  Server{
    async getData(datae){
      console.log(datae)
        try{
          let result = await this.axios('post', "from",datae); 
          if(result){
            return result.data;
          }else{
            let err = {tip: '获取记录数据失败',}
            throw err;
          }
        }catch(err){
          console.log("err")
          //console.log(err)
          //throw err;
        }
      }
}

export default new Api();