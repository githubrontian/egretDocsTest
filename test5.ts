module Test {

    export class test5 {
        public constructor() {

        }

        /**
             * addChild �ĸ�Чʵ�֣�����
             * @param container
             * @param child
             */
        public addChild(container: egret.DisplayObjectContainer, child: egret.DisplayObject): void {
            if (child._parent != container) {
                if (child._parent)
                    this.removeFromParent(child);
                container._children.push(child);
                child._parent = container;
            }
        }

        /**
         * addChildAt �ĸ�Чʵ�֣�����
         * @param container
         * @param child
         * @param index
         */
        public addChildAt(container: egret.DisplayObjectContainer, child: egret.DisplayObject, index: number): void {
            if (child._parent != container) {
                if (child._parent)
                    this.removeFromParent(child);
                container._children.splice(index, 0, child);
                child._parent = container;
            }
        }

        /**
         * removeFromParent �ĸ�Чʵ�֣�����
         * @param child
         */
        public removeFromParent(child: egret.DisplayObject): void {
            if (child && child._parent) {
                var index = child._parent._children.indexOf(child);
                child._parent._children.splice(index, 1);
                child._parent = null;
            }
        }

        /**
         * removeChildAt �ĸ�Чʵ�֣�����
         * @param container
         * @param index
         */
        public removeChildAt(container: egret.DisplayObjectContainer, index: number): void {
            var child: egret.DisplayObject = container._children[index];
            if (child) {
                container._children.splice(index, 1);
                child._parent = null;
                child.visible = false;
            }
        }

        /**
         * removeAllChild �ĸ�Чʵ�֣�����
         * @param container
         */
        public removeAllChild(container: egret.DisplayObjectContainer): void {
            while (container._children.length) {
                this.removeChildAt(container, 0);
            }
        }

    }
} 