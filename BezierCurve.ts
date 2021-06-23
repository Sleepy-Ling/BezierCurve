class GameUtils{
   /**
    * n阶贝塞尔曲线函数 
    * @param startPoint 起始点
    * @param endPoint 结束点
    * @param midPoint[] 拐点数组
    * @param elapsedTime 经过时间（百分比 0-1）
    */
    public static BezierCurveFun2(startPoint: Point, endPoint: Point, midPoint: Point[], elapsedTime: number) {
        let pointArr = [];//待计算的点数组
        pointArr.push(startPoint);
        if (midPoint && midPoint.length > 0) {
            pointArr.push(...midPoint);
        }
        pointArr.push(endPoint);
        let t = elapsedTime;
        let resultPoint = new Point();
        let n = pointArr.length - 1;//点个数（决定是几阶贝塞尔曲线）3个点则是二阶贝塞尔曲线
        let k = 0;//当前第几个点(0:第一个点)
        while (pointArr.length > 0) {
            let curPoint: Point;
            curPoint = pointArr.shift();
            let t1 = Math.pow((1 - t), n - k);
            let t2 = Math.pow(t, k);
            let t3 = GameUtils.factorial(n) / GameUtils.factorial(k) / GameUtils.factorial(n - k); //二项式系数
            let x = curPoint.x * t1 * t2 * t3;
            let y = curPoint.y * t1 * t2 * t3;
            resultPoint = Point.Add(resultPoint, new Point(x, y));
            k++;
        }
        return resultPoint;
    }
    
    /**
     * 阶乘
     * @param baseNum 基础数
     */
    public static factorial(baseNum): number {
        let n = 1;
        let res: number = 1;
        while (baseNum >= n) {
            res *= n;
            n++;
        }
        return res;
    }
}
