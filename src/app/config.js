export default function AppConfig($urlRouterProvider) {
  // $httpProvider.interceptors.push('HttpInterceptor')
  $urlRouterProvider.otherwise('/#')
}