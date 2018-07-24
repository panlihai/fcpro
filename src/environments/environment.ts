// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  pid: "SYSTEM",
  projectName: "FC核心平台",
  systemurl: "/server/",
  apiurl: "/server/api/",
  logurl: "/server/api/",
  authurl: "/server/api/",
  //wsurl: "ws://pcorp.cn/server/msg", 
  // wsurl: "ws://10.56.23.218/server/msg",
  // wsurl: "ws://10.56.23.117:8000/server/msg", 
  // wsurl: "ws://192.168.0.117/server/msg",
  wsurl: "ws://10.56.23.218/server/msg",
  license:''
};
