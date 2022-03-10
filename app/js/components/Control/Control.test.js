import Control from './Control';

describe('Control', () => {
  let control;
  beforeEach(() => {
    document.body.innerHTML = `<fieldset style="text-align: center;">
        <br>
        <div>
            <button id="js-moveup-btn" >Move Up</button>
            <button id="js-movedown-btn" >Move Down</button>
            <button id="js-moveleft-btn" >Move Left</button>
            <button id="js-moveright-btn" >Move Right</button>
            <button id="js-scaleup-btn">Scale Up</button>
            <button id="js-scaledown-btn" >Scale Down</button>
        </div>
        <br><br>
        <div>
            <button id="js-export-json">Export to JSON</button>
        </div>   
    </fieldset>  
    `;
    control = new Control();
  });

  test('Buttons render', () => {
    expect(control.moveUpBtn).toBeDefined();
    expect(control.moveDownBtn).toBeDefined();
    expect(control.moveLeftBtn).toBeDefined();
    expect(control.moveRightBtn).toBeDefined();
    expect(control.scaleUpBtn).toBeDefined();
    expect(control.scaleDownBtn).toBeDefined();
    expect(control.exportJsonBtn).toBeDefined();
  });
});
