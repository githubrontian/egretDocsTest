module Test {

    export class test3 {
        public constructor() {

        }

        public start(): void {
            var fn2_1T: number = egret.getTimer();
            this.Fn2_1(50000);
            console.log(egret.getTimer() - fn2_1T);//��ʱ��54
            var fn2_2T: number = egret.getTimer();
            this.Fn2_2(50000);
            console.log(egret.getTimer() - fn2_2T);//��ʱ��30
        }

        private a: number = 1;
        private b: number = 1;

        private Fn2_1(n: number): number//ֱ�ӵ���this
        {

            for (var i: number = 3; i <= n; i++) {
                this.b = this.a + this.b;
                this.a = this.b - this.a;
            }
            return this.b;
        }

        private Fn2_2(n: number): number//�ȸ�ֵ���������
        {

            var a: number = this.a;
            var b: number = this.b;

            for (var i: number = 3; i <= n; i++) {
                b = a + b;
                a = b - a;
            }
            return b;
        }
    }
} 