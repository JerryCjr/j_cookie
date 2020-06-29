// import { main, testAsyncFunc } from '../../src/index.ts';
import { convert } from '../../src/utils';

describe('util_cover_test', () => {
  it("convert should return '' when the arguments[0] is undefined", () => {
    const options = undefined;
    expect(convert(options)).to.be.equal('');
  });
  it("convert should return ';path=/' when the arguments[0] is null", () => {
    const options = null;
    expect(convert(options)).to.be.equal('');
  });
  it("convert should return ';path=/' when the arguments[0] is {}", () => {
    const options = {};
    expect(convert(options)).to.be.equal(';path=/');
  });
  it('convert should return expected value', () => {
    const expires = new Date(-1);
    const path = '/';
    const domain = '.babyfs.cn';
    const secure = false;

    const options = {
      expires,
      path,
      domain,
      secure,
    };
    expect(convert(options)).to.be.equal(`;expires=${expires.toUTCString()};path=${path};domain=${domain}`);
  });
});

describe('index_test', function () {
  before(function () {
    // 在本区块的所有测试用例之前执行
  });

  after(function () {
    // 在本区块的所有测试用例之后执行
  });

  beforeEach(function () {
    // 在本区块的每个测试用例之前执行
  });

  afterEach(function () {
    // 在本区块的每个测试用例之后执行
  });

  it('should_be_return_correctly', async () => {
    let text = await main();
    let test = await testAsyncFunc();
    // let text = main();
    expect(text).to.be.equal('Hello world!');
    expect(test).to.be.equal(1);
  });
});
