getDateTimeUTC = function(format, add_day){
  if (format == null) format = null;
  if (add_day == null) add_day = 0;

  var obj = {};
  var dt = new Date();
  dt.setTime(dt.getTime() + add_day * 60*1000*60*24);
  var week_jp = ['日','月','火','水','木','金','土'];
  obj.Y = dt.getUTCFullYear();
  obj.m = ('0'+(dt.getUTCMonth() + 1)).slice(-2);
  obj.n = dt.getUTCMonth() + 1;
  obj.d = ('0'+dt.getUTCDate()).slice(-2);
  obj.j = dt.getUTCDate();
  obj.H = ('0'+dt.getUTCHours()).slice(-2);
  obj.G = dt.getUTCHours();
  obj.i = ('0'+dt.getUTCMinutes()).slice(-2);
  obj.s = ('0'+dt.getUTCSeconds()).slice(-2);
  obj.ms = ('0'+dt.getUTCMilliseconds()).slice(-3);
  obj.w = dt.getUTCDay();
  obj.w_jp = week_jp[dt.getUTCDay()];
  if(format != null){
    var str = format;
    str = str.replace('w_jp', obj.w_jp);
    str = str.replace('Y', obj.Y);
    str = str.replace('m', obj.m);
    str = str.replace('n', obj.n);
    str = str.replace('d', obj.d);
    str = str.replace('j', obj.j);
    str = str.replace('H', obj.H);
    str = str.replace('G', obj.G);
    str = str.replace('i', obj.i);
    str = str.replace('s', obj.s);
    str = str.replace('ms', obj.ms);
    str = str.replace('w', obj.w);
    return str;
  }else{
    return obj;
  }
};