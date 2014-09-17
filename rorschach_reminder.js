function archipelago_for(domain_name, user_name) {
  var s = domain_name + "/" + user_name;
  var code = 0;
  for (var i = 0; i < s.length; i++) {
    code = (code * 31 + s.charCodeAt(i)) & 0xFFFFFFFF;
  }
  return Archipelago(code % 10000);
}

