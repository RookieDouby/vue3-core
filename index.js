class Compute {
  plus(a, b) {
    return a + b
  }
  minus(a, b) {
    return a - b
  }
  multiple(a, b) {
    return a * b
  }
  div(a, b) {
    return a / b
  }
}

class Calculator extends Compute{
  constructor(doc) {
    super();
    const oCal = doc.getElementsByClassName('calculator')[0]

    this.fInput = oCal.getElementsByTagName('input')[0] 
    this.sInput = oCal.getElementsByTagName('input')[1] 

    // 事件代理用
    this.oBtnGroup = oCal.getElementsByClassName('btn-group')[0]
    this.oBtnItems = this.oBtnGroup.getElementsByTagName('button')

    this.oResult = oCal.getElementsByClassName('result')[0]

    this.data = this.defineData();
    // 点击切换btn
    this.btnIndedx = 0;
  }

  init() {
    this.bindEvents();
  }

  bindEvents() {
    this.oBtnGroup.addEventListener('click', this.onFieldBtnClick.bind(this), false)
    this.fInput.addEventListener('input', this.onNumberInput.bind(this), false)
    this.sInput.addEventListener('input', this.onNumberInput.bind(this), false)
  }

  defineData() {
    let _obj = {},
        fNumber = 0,
        sNumber = 0,
        field = 'plus';

    const _self = this;

    Object.defineProperties(_obj, {
      fNumber: {
        get() {
          console.log(`fNumber is been got.`);
          return fNumber;
        },
        set(newVal) {
          fNumber = newVal;
          _self.computeResult(fNumber, sNumber, field)
          console.log(`The value "fNumber" has been changed.[${fNumber}]`);
        }
      },
      sNumber: {
        get() {
          console.log(`sNumber is been got.`);
          return sNumber;
        },
        set(newVal) {
          sNumber = newVal;
          _self.computeResult(fNumber, sNumber, field)
          console.log(`The value "sNumber" has been changed.[${sNumber}]`);
        }
      },
      field: {
        get() {
          console.log(`field is been got.`);
          return field;
        },
        set(newVal) {
          field = newVal;
          _self.computeResult(fNumber, sNumber, field)
          console.log(`The value "field" has been changed.[${field}]`);
        }
      },
    });

    return _obj;
  }

  onFieldBtnClick(ev) {
    const e = ev || window.event,
          tar = e.target || e.srcElement,
          tagName = tar.tagName.toLowerCase();
    
    tagName === 'button' && this.fieldUpdate(tar);
  }

  fieldUpdate(target) {
    this.oBtnItems[this.btnIndedx].className = '';
    this.btnIndedx = [].indexOf.call(this.oBtnItems, target) // 借用数组的indexOf 方法 
    target.className += 'current';

    this.data.field = target.getAttribute('data-field')
    console.log(this.data.field)
  }

  onNumberInput(ev) {
    const e = ev.event || window.event,
          tar = e.target || e.srcElement,
          className = tar.className,
          val = Number(tar.value.replace(/\s+/g, '')) || 0;

    switch(className) {
      case 'f-input':
        this.data.fNumber = val;
        break;
      case 's-input':
        this.data.sNumber = val;
        break;
      default:
        break;
    }
  }

  // 计算结果
  computeResult(fNumber, sNumber, field) {
    this.oResult.innerText = this[field](fNumber, sNumber)
  }
}

new Calculator(document).init();