// monkey patch

function createProxy(subject) {
  const helloOrig = subject.helloOrig;

  subject.hello = () => helloOrig.call(this) + " world !";

  return subject;
}
