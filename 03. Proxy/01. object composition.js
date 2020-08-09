// 1) Subject가 프로토타입을 가지고 있고 제대로 된 프로토타입 체인을 유지하기 위한 특정한 사례
// 프로토타입 체인 유지 관리가 중요한 경우에만(Subject와 관련된 코드와의 호환성 개선하는 데 유용).
function createProxy(subject) {
  const proto = Object.getPrototypeOf(subject);

  function Proxy(subject) {
    this.subject = subject;
  }

  Proxy.prototype = Object.create(proto);

  // 프록시된 메소드
  Proxy.prototype.hello = function () {
    return this.subject.hello() + " world!";
  };

  // 델리게이트된 메소드
  Proxy.prototype.goodbye = function () {
    return this.subject.goodbye.apply(this.subject, arguments);
  };

  return new Proxy(subject);
}

module.exports = createProxy;

// 2) 즉각적인 접근 방식
function createProxy(subject) {
  return {
    hello: () => subject.hello() + " world!",
    goodbye: () => subject.goodbye.apply(subject, arguments),
  };
}
