Trying to use jest in node esm
But getting below error

```
pradeep@DESKTOP:~/workspace/nodejs/jest-esm$ node --experimental-vm-modules  ./node_modules/.bin/jest
(node:7181) ExperimentalWarning: VM Modules is an experimental feature. This feature could change at any time
(Use `node --trace-warnings ...` to show where the warning was created)
 FAIL  mods/__tests__/modA.test.js
  ✕ should call some service (3 ms)

  ● should call some service

    expect(received).toBeCalled()

    Matcher error: received value must be a mock or spy function

    Received has type:  function
    Received has value: [Function default]

      16 | it('should call some service', async () => {
      17 |   await modA();
    > 18 |   expect(someService).toBeCalled();
         |                       ^
      19 | });
      20 |

      at Object.<anonymous> (mods/__tests__/modA.test.js:18:23)

Test Suites: 1 failed, 1 total
Tests:       1 failed, 1 total
Snapshots:   0 total
Time:        0.234 s, estimated 1 s
Ran all test suites.
```
