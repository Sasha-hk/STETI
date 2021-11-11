// async function rewrites() {
//     return [
//         {
//             source: '/api/:path*',
//             destination: 'http://127.0.0.1:8000/:path*/',
//         },
//         {
//             source: '/admin/:path*',
//             destination: 'http://127.0.0.1:8000/admin/:path*/',
//         },
//         {
//             source: '/s/:path*',
//             destination: 'http://127.0.0.1:8000/s/:path*',
//         },
//         {
//             source: '/m/:path*',
//             destination: 'http://127.0.0.1:8000/m/:path*',
//         },
//     ]
// }

let exp = {
    reactStrictMode: true,
    // rewrites,
}

if (process.env.PROJECT_STATE === 'development') {
    exp.env = {
        API_URL: process.env.DEV_API_URL,
        rewrites
    }
}
else {
    exp.env = {
        API_URL: process.env.PROD_API_URL
    }
}


module.exports = exp
