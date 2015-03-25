module test
{
    /**
    * cacheAsBitmap��������������QQ�������1G�ڴ�Ļ����������ʹ��20��Canvas������
    */
    class test2
    {

        private _pool: Array<egret.RenderTexture>;
        private _maxNum: number;
        private _useNum: number;

        /**
         * ���캯��
         */
        public constructor() {
            this._pool = [];
            this._useNum = 0;

            if (this.isLowerQQBrowser()) {
                this._maxNum = 18;
            }
            else {
                this._maxNum = -1;
            }
        }

        private static ins: RenderTextureManager;

        public static get Ins(): RenderTextureManager {
            if (this.ins == null) this.ins = new RenderTextureManager();
            return this.ins;
        }

        /**
         * �Ƿ��ǵͶ��ֻ���QQ�����
         * @returns {boolean}
         */
        private isLowerQQBrowser(): boolean {
            if (egret.MainContext.runtimeType == egret.MainContext.RUNTIME_HTML5 && navigator.userAgent.indexOf('MQQBrowser') != -1) {
                //�ж����ͣ���Ϊ�ò����ڴ���Ϣ������ֻ�ܸ��ݻ��ͽ����ж�
                var arr: Array<string> = [
                    "2013022",
                    "Lenovo A630t",
                    "SM-G3818",
                    "vivo X3t",
                    "GT-I9100"
                ];

                var lower: boolean = false;
                for (var i = 0, len = arr.length; i < len; i++) {
                    if (navigator.userAgent.indexOf(arr[i]) != -1) {
                        lower = true;
                        break;
                    }
                }
                return lower;
            }
            return false;
        }

        /**
         * ��ȡһ��egret.RenderTexture
         * @returns {egret.RenderTexture}
         */
        public pop(): egret.RenderTexture {
            var result = this._pool.pop();
            if (!result) {
                if (this._maxNum == -1 || this._useNum < this._maxNum) {
                    result = new egret.RenderTexture();
                    this._useNum++;
                }
            }
            return result;
        }

        /**
         * ����һ��egret.RenderTexture
         * @param texture
         */
        public push(texture: egret.RenderTexture): void {
            var exists: boolean = false;
            for (var i = 0, len = this._pool.length; i < len; i++) {
                if (this._pool[i] == texture) {
                    exists = true;
                    break;
                }
            }

            if (!exists) {
                this._pool.push(texture);
            }
        }
    }
    
}