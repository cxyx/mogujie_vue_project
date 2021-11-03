import Mock from 'mockjs'

Mock.setup({
  tiemout:'300-600'  //希望数据在 300-600ms 之间返回
})

Mock.mock('/api/user','get',getUser)

function getUser(){
  return Mock.mock({
    data:{
      "data":{
        "name":"@cname",
        "phone|11":"@interget(0,9)",
        "city":"@city"
      },
      "status":"200",
      "msg":"请求成功"
    }
  })
}