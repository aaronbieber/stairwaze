export default function timeout(ms, promise) {
  return new Promise((resolve, reject) => {
    setTimeout(() => reject(new Error("Activity timed out")), ms);
    promise.then(resolve, reject);
  });
}
