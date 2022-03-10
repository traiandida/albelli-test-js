import FileInput from './FileInput';

describe('FileInput', () => {
  let fileInput;
  beforeEach(() => {
    document.body.innerHTML = '<input type="file" id="fileSelector" />';
    fileInput = new FileInput(document.getElementById('fileSelector'));
  });

  test('File input render', () => {
    expect(fileInput.fileInput).toBeDefined();
  });
});
