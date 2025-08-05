import http from 'k6/http';
import { check } from 'k6';
import { Trend, Counter } from 'k6/metrics';

export let MyTrend = new Trend('my_duration');
export let MyCounter = new Counter('my_custom_counter');

export const options = {
  vus: 5,
  duration: '10s',
  insecureSkipTLSVerify: true,

};

export default function () {
  const headers = {
    'Content-Type': 'application/json',
    'Cookie': 'ASP.NET_SessionId=uunpu12crcldhkrhi0nmiir3; NextechToken=eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJhbXIiOiJwd2QiLCJhdXRoX3RpbWUiOiIxNzU0MzI1MDQwIiwiaWF0IjoiMTc1NDMyNTA0MCIsImp0aSI6Ijk4YjA5ZTAzLTllMmYtNGFlYS1hM2RkLWJhNjc0N2YyNmY5ZiIsInN1YiI6IjE0NjA2IiwibnhfaXNueHVzZXIiOiJGYWxzZSIsInN1Yl9qd2siOiJyLytteFVMT093ZVJlSWdacVRwbGltV1FyeW9la0M2NHlaeUFuL1gzMEg4am1reTFHem1XU29BVVNhaEdRaktiOU5xeWRQSHJpY1g4SnVtRkFhYWJLTHAvcFhsSEEzdGlyTllIZ2Fyb2c1Y2tsQjR5SFZIUTdYY0xIWmwxRzBHTEdVaFErUytLbWdRTGhUWlJtUEEwWDlscUZTTitlT3NqL1E5OHpEemhsSEtjMjJacDVNM0hJekljNWMzd3l0R21LOXJQdkZEVTZPTUM0NExzcVhZOTd5SldPMzB6bXpxVFc5eVdTa1l1ODdVUG51R2RJaWNlL3lYZEYvN2xMc3c2QWdVajVjY1R2WXFPT050VlE2UjkrQTFsRDBid1cwcWVYQzNjMlp3SGREck9DTUg5M1dYdEhqQ3JXS2Uzb2JPQUZoVDF2dUhTWk1MZ2JlTVErWDkrTFE9PSIsInVwZGF0ZWRfYXQiOiIxNzU0MzI1MDQwIiwidXBuIjoiYS5qYXJpZkBuZXh0ZWNoLmNvbSIsImVtYWlsIjoiYS5qYXJpZkBuZXh0ZWNoLmNvbSIsIm54X3BwX2FjY3QiOiJQTEEwMDEiLCJueF9pY3BfYWNjdCI6IlBMQVlXUkkiLCJueF9uZXhfYWNjdCI6IiIsIm5iZiI6MTc1NDMyNTA0MCwiZXhwIjoxNzU0MzY4MjQwLCJpc3MiOiJodHRwczovL3Nzby5uZXh0ZWNoLmNvbS8iLCJhdWQiOiJuZXh0ZWNoLmNvbSJ9.ISJyLrsHEiKuznJJcLKXOLIQ1Q7mB1gRm6HJ1P-JK8WtBAUSIc9goTpRsr5pfvOqaNNIzuVaAYQAiHz4EM1wP_3zIHpePXmF8HmrWCi4ATasBZUHsxKcr6ZLVi2OEsP1fAoZ1s-yTB_f5yJaf2UW5I28JplU_Ep51FceZxkxFWwz6R0jWargFRy0nJXGRVj6Lw0TwkkmnrYzqRLLhvBzt5H00KpD0Pfqv06rNzIgbpv31RZrLnvGZ1I6lURolTHSHGbIVJw0bLPUO6Ui94-IPBCzFRHDAuLj0XlJXhs1TTfna3oLVkRaLuwA4LuVukdguJ1jdnEUSUivCDuTQBmS2w; __RequestVerificationToken=kZRsjE6AzpcZpPSsuBek1FHIIaROJgvIuy7k4enhNTJvdcCaSfY04CIsvFZuyPPngkDkfaSFfyW4sm9iZpbeai0zrw9UAMVxHEZ_Edk1UzQ1'
  };


  const url3 = 'https://dev-pm.centralus.cloudapp.azure.com/api/provider';
  const res3 = http.get(url3, { headers });
  MyTrend.add(res3.timings.duration);
  MyCounter.add(1);

  check(res3, {
    'status is 200': (r) => r.status === 200,
    'response time < 1s': (r) => r.timings.duration < 1000,
  });

  console.log('Response status: ' + res3.status);
  console.log('Response body: ' + res3.body);

}

