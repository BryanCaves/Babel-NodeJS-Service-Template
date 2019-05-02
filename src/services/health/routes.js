export default [
    {
        path: "/liveness",
        method: "get",
        handler: (req, res) => {
            res.send("Service is healthy");
        }
    },
    {
        path: "/readiness",
        method: "get",
        handler: (req, res, next) => {
            res.send("Service is ready");
        }
    }
]