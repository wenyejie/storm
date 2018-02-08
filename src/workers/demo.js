/**
 * demo workers
 *
 * @author: Storm
 * @date: 2018/02/08
 */
onmessage = request => {
  postMessage(request.data.addend + request.data.augend);
}