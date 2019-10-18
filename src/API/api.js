import {get ,post} from './index';


class Api{
  async  getData(){
     return  await get("/api/v1/lists")
    }
    postData(){
        console.log(get("test","123"))
    }
}

export default new Api();