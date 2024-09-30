const jsonServer=require('json-server')
const mpserver=jsonServer.create()
const middlewares=jsonServer.defaults()

const routes=jsonServer.router('db.json')
mpserver.use(middlewares)
mpserver.use(routes)

const PORT=3000|| process.env.PORT
mpserver.listen(PORT,()=>{
    console.log("server running at "+PORT)
})