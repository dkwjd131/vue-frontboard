<template>
  <div>
    <el-upload
      class="upload-demo"
      action="https://jsonplaceholder.typicode.com/posts/"
      :before-upload="beforeUpload"
      :on-preview="handlePreview"
      :on-remove="handleRemove"
      :before-remove="beforeRemove"
      multiple
      :limit="3"
      :on-exceed="handleExceed"
      :file-list="fileList"
    >
      <el-button size="small" type="primary">Click to upload</el-button>
      <div slot="tip" class="el-upload__tip">jpg/png files with a size less than 500kb</div>
    </el-upload>
    <div style="font-size: 20px; margin-bottom: 10px; margin-top: 30px; font-weight: 600;">file 타입 (Blob의 한 종류)</div>
    <div>{{ fileList[0] }}</div>
    <div>file은 Blob을 상속받았다.</div>
    <div style="font-size: 20px; margin-bottom: 10px; margin-top: 30px; font-weight: 600;">Blob 이란</div>
    <div>Blob 이란 특정 MIME Type의 바이더리 데이터를 저장하는 객체</div>
    <div>Blob 은 Binary Large Object의 약자로 바이너리 데이터를 다루기 때문에 파일 형태가 아닌 바이너리 데이터를 다룬다.</div>
    <div>Blob 은 대용량 데이터를 chunk 단위로 쪼개어 사용하는데, 예를 들어 마이크 소리가 Blob 객체 형태로 여러차례 연달아 들어오며, 개발자는 여러 Blob 객체를 배열에 담아 새로운 Blob으로 통합해 사용한다.</div>
    <div style="font-size: 20px; margin-bottom: 10px; margin-top: 30px; font-weight: 600;">FileReader</div>
    <div>비동기적으로 데이터를 읽어온다.</div>
    <div>파일을 버퍼로 읽어 컴퓨터에 저장할 수 있다.</div>
    <div>텍스트, 이미지, 오디도 등의 데이터를 바이너리 데이터로 변환 가능하다.</div>
    <div style="font-size: 20px; margin-bottom: 10px; margin-top: 30px; font-weight: 600;">FileReader의 주요 이벤트</div>
    <div>1) load: 파일 읽기 작업이 완료되면 작동합니다.</div>
    <div>2) error: 에러로 인해 파일을 읽을 수 없을 때 동작합니다.</div>
    <div>3) abort: abort() 함수를 호출하여 파일 읽기 작업이 취소될 때 동작합니다.</div>
    <div>4) progress: 파일을 읽는 동안 일정한 간격으로 동작합니다.</div>
    <div style="font-size: 20px; margin-bottom: 10px; margin-top: 30px; font-weight: 600;">FileReader의 주요 메서드</div>
    <div>1) readAsText: 파일 객체 내용을 읽어 텍스트 문자열로 반환한다.</div>
    <div>2) readAsDataURL: 파일 객체 내용을 읽어 파일 데이터를 나타내는 data:URL 표현으로 반환한다.</div>
    <div>3) readAsBinaryString: 파일 객체 내용을 읽어 비트 문자열로 반환한다.</div>
    <div>4) readAsArrayButter: blob을 읽기 시작하며, 동작이 완료되면 파일 데이터가 포함된 ArrayBuffer를 반환한다.</div>
    <div style="font-size: 20px; margin-bottom: 10px; margin-top: 30px; font-weight: 600;">FileReader 객체의 주요 속성</div>
    <div>1) result: 파일 읽은 결과를 가지고 있거나 null 값을 가집니다.</div>
    <div>2) error: 읽기 작업에서 발생한 오류를 설명하는 Error 객체를 가지거나 null 값을 가집니다.</div>
    <div>3) readyState: 객체의 상태를 숫자로 관리합니다. 0은 비어있음(Empty)으로 FileReader 객체에서 읽기 작업이 수행되지 않았음을 의미합니다. 1은 로딩 중(Loading)으로 파일을 읽는 중을 의미합니다. 2는 파일 읽기 작업이 완료(Done)되었음을 의미합니다.</div>
    <div style="font-size: 20px; margin-bottom: 10px; margin-top: 30px; font-weight: 600;">ArrayBuffer</div>
    <div>자바스크립트에서 버퍼를 구현하는 객체</div>
    <div>연속된 메모리 영역을 생성하고, 해당 메모리의 레퍼런스를 반환한다.</div>
    <div>인자로 할당할 byte 크기를 넘겨주며, 넘겨준 사이즈 만큼의 고정 메모리를 할당하며 이는 수정 불가하다.</div>
    <div>const buffer = new ArrayBuffer(8); // 8byte 의 버퍼 생성</div>
    <div>개별 byte에 접근하기 위해서 index로 접근이 불가하고, view 객체를 통해 접근할 수 있다.</div>
    <div>ArrayBuffer(16)로 16byte 버퍼를 생성한 후 Unit8Array, Unit16Array를 통해 8bit씩 또는 16bit씩 끊어 읽을 수 있다. </div>
    <div>Unit8Array로 끊으면 16개, Unit16Array로 끊으면 8개로 나눠진다. </div>
    <div style="font-size: 20px; margin-bottom: 10px; margin-top: 30px; font-weight: 600;">Base64</div>
    <div>바이너리 데이터를 문자 코드에 영향을 받지 않는 공통 ASCII 문자로 표현하는 바이너리-텍스트 인코딩 체계</div>
    <div> -- 주요 함수 -- </div>
    <div> String.fromCharCode(97, 98) : {{ String.fromCharCode(97, 98) }} / 아스키 코드 숫자을 받아 문자열로 반환</div>
    <div> String.fromCharCode.apply(null, 배열) : / 배열을 받아 문자열로 반환</div>
    <div> btoa() : 문자열의 각 문자가 이진 데이터의 바이트 단위로 처리되는 이진 문자열 > Base64로 인코딩한 ASCII 문자열 </div>
    <div> atob() : Base64로 인코딩한 ASCII 문자열 > 바이너리 데이터(이진 문자열) </div>
    <div style="font-size: 20px; margin-bottom: 10px; margin-top: 30px; font-weight: 600;">참고 사이트</div>
    <div>https://u-u002.tistory.com/172</div>
    <div>https://curryyou.tistory.com/442</div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      fileList: [
        {
          name: 'food.jpeg',
          url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'
        },
        {
          name: 'food2.jpeg',
          url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'
        }
      ]
    };
  },
  methods: {
    beforeUpload(file) {
      console.log('before upload > file >', file);
      const fileReader = new FileReader();
      fileReader.readAsArrayBuffer(file);
      fileReader.onload = function(evt) {
        const arrayBuffer = evt.target.result;
        console.log('arrayBuffer >> ', arrayBuffer);

        const arrayBufferView = new Uint8Array(arrayBuffer);
        console.log('arrayBufferView >> ', arrayBufferView);

        // const base64Data = btoa(
        //     Array.from(arrayBufferView).map(b => String.fromCharCode(b)).join('')
        // );
        const base64Data = btoa(String.fromCharCode.apply(null, arrayBufferView));
        console.log('base64Data >> ', base64Data);
      };
    },
    handleRemove(file, fileList) {
      console.log('handle remove > file >', file);
      console.log('handle remove > fileList >', fileList);
    },
    handlePreview(file) {
      console.log('handlePreview > file >', file);
    },
    handleExceed(files, fileList) {
      this.$message.warning(`The limit is 3, you selected ${files.length} files this time, add up to ${files.length + fileList.length} totally`);
    },
    beforeRemove(file, fileList) {
      return this.$confirm(`Cancel the transfer of ${file.name} ?`);
    }
  }
};
</script>
