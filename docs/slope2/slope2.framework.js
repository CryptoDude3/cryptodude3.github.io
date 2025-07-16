function unityFramework(_0x3e078a) {
  var _0x3e078a = typeof _0x3e078a !== "undefined" ? _0x3e078a : {};
  _0x3e078a.USER_JSPRE_PLACEHOLDER = "USER_JSPRE_PLACEHOLDER";
  function _0x25adcd(_0x917238, _0x1bda00) {
    _0x8cebcb("The JavaScript function 'Pointer_stringify(ptrToSomeCString)' is obsoleted and will be removed in a future Unity version. Please call 'UTF8ToString(ptrToSomeCString)' instead.");
    return _0x3f3179(_0x917238, _0x1bda00);
  }
  _0x3e078a.Pointer_stringify = _0x25adcd;
  var _0x39ce8e = "(^|\\n)(\\s+at\\s+|)jsStackTrace(\\s+\\(|@)([^\\n]+):\\d+:\\d+(\\)|)(\\n|$)";
  var _0x1374cd = _0x13c2d9().match(new RegExp(_0x39ce8e));
  if (_0x1374cd) {
    _0x3e078a.stackTraceRegExp = new RegExp(_0x39ce8e.replace("([^\\n]+)", _0x1374cd[4].replace(/[\\^${}[\]().*+?|]/g, "\\$&")).replace("jsStackTrace", "[^\\n]+"));
  }
  function _0xb4b2ae(_0x47a383) {
    if (_0x591d6a) {
      return;
    }
    _0x591d6a = true;
    _0x1cd3c3 = 1;
    if (typeof ENVIRONMENT_IS_PTHREAD !== "undefined" && ENVIRONMENT_IS_PTHREAD) {
      console.error("Pthread aborting at " + new Error().stack);
    }
    if (_0x47a383 !== undefined) {
      _0x56a098(_0x47a383);
      _0x516167(_0x47a383);
      _0x47a383 = JSON.stringify(_0x47a383);
    } else {
      _0x47a383 = "";
    }
    var _0x5e5fa9 = "abort(" + _0x47a383 + ") at " + _0x2d7851();
    if (_0x3e078a.abortHandler && _0x3e078a.abortHandler(_0x5e5fa9)) {
      return;
    }
    throw _0x5e5fa9;
  }
  _0x3e078a.SetFullscreen = function (_0x4d0b9b) {
    if (typeof _0x316be2 === "undefined" || !_0x316be2) {
      console.log("Runtime not initialized yet.");
    } else if (typeof _0x55d55a === "undefined") {
      console.log("Player not loaded yet.");
    } else {
      var _0x29c011 = _0x55d55a.canPerformEventHandlerRequests;
      _0x55d55a.canPerformEventHandlerRequests = function () {
        return 1;
      };
      _0x3e078a.ccall("SetFullscreen", null, ["number"], [_0x4d0b9b]);
      _0x55d55a.canPerformEventHandlerRequests = _0x29c011;
    }
  };
  if (typeof ENVIRONMENT_IS_PTHREAD === "undefined" || !ENVIRONMENT_IS_PTHREAD) {
    _0x3e078a.preRun.push(function () {
      var _0x55a0a7 = _0x3e078a.unityFileSystemInit || function () {
        _0x221e83.mkdir("/idbfs");
        _0x221e83.mount(_0x21775c, {}, "/idbfs");
        _0x3e078a.addRunDependency("JS_FileSystem_Mount");
        _0x221e83.syncfs(true, function (_0x6473ae) {
          if (_0x6473ae) {
            console.log("IndexedDB is not available. Data will not persist in cache and PlayerPrefs will not be saved.");
          }
          _0x3e078a.removeRunDependency("JS_FileSystem_Mount");
        });
      };
      _0x55a0a7();
    });
  }
  var _0x1038e2 = [];
  var _0x19ecc6 = false;
  var _0x3fcb90;
  var _0x3e04ff = null;
  function _0x308a6b(_0x147178) {
    var _0x49b912 = Object.keys(_0x1038e2);
    for (var _0x5e1c15 = 0; _0x5e1c15 < _0x49b912.length; ++_0x5e1c15) {
      var _0x2c05d0 = _0x1038e2[_0x49b912[_0x5e1c15]];
      if (_0x2c05d0.deviceId && _0x2c05d0.deviceId == _0x147178.deviceId) {
        return _0x2c05d0;
      }
    }
    for (var _0x5e1c15 = 0; _0x5e1c15 < _0x49b912.length; ++_0x5e1c15) {
      var _0x2c05d0 = _0x1038e2[_0x49b912[_0x5e1c15]];
      if (_0x2c05d0 == _0x147178) {
        return _0x2c05d0;
      }
    }
    for (var _0x5e1c15 = 0; _0x5e1c15 < _0x49b912.length; ++_0x5e1c15) {
      var _0x2c05d0 = _0x1038e2[_0x49b912[_0x5e1c15]];
      if (_0x2c05d0.label && _0x2c05d0.label == _0x147178.label) {
        return _0x2c05d0;
      }
    }
    for (var _0x5e1c15 = 0; _0x5e1c15 < _0x49b912.length; ++_0x5e1c15) {
      var _0x2c05d0 = _0x1038e2[_0x49b912[_0x5e1c15]];
      if (_0x2c05d0.groupId && _0x2c05d0.kind && _0x2c05d0.groupId == _0x147178.groupId && _0x2c05d0.kind == _0x147178.kind) {
        return _0x2c05d0;
      }
    }
  }
  function _0x29ccd7() {
    for (var _0x1e1fe0 = 0;; ++_0x1e1fe0) {
      if (!_0x1038e2[_0x1e1fe0]) {
        return _0x1e1fe0;
      }
    }
  }
  function _0x4e3748(_0x4d9a89) {
    _0x3fcb90();
    _0x1038e2 = [];
    var _0x5cfc74 = {};
    var _0x1aab0a = [];
    _0x4d9a89.forEach(function (_0x238f58) {
      if (_0x238f58.kind === "videoinput") {
        var _0x4b4c55 = _0x308a6b(_0x238f58);
        if (_0x4b4c55) {
          _0x5cfc74[_0x4b4c55.id] = _0x4b4c55;
        } else {
          _0x1aab0a.push(_0x238f58);
        }
      }
    });
    _0x1038e2 = _0x5cfc74;
    _0x1aab0a.forEach(function (_0x128005) {
      if (!_0x128005.id) {
        _0x128005.id = _0x29ccd7();
        _0x128005.name = _0x128005.label || "Video input #" + (_0x128005.id + 1);
        _0x128005.isFrontFacing = _0x128005.name.toLowerCase().includes("front") || !_0x128005.name.toLowerCase().includes("front") && !_0x128005.name.toLowerCase().includes("back");
        _0x1038e2[_0x128005.id] = _0x128005;
      }
    });
  }
  function _0x59a5fa() {
    if (!_0x1038e2) {
      return;
    }
    navigator.mediaDevices.enumerateDevices().then(function (_0xfbd959) {
      _0x4e3748(_0xfbd959);
      _0x19ecc6 = true;
    }).catch(function (_0x4fb8d0) {
      console.warn("Unable to enumerate media devices: " + _0x4fb8d0 + "\nWebcams will not be available.");
      _0x55442f();
    });
    if (/Firefox/.test(navigator.userAgent)) {
      setTimeout(_0x59a5fa, 60000);
      _0x8cebcb("Applying workaround to Firefox bug https://bugzilla.mozilla.org/show_bug.cgi?id=1397977");
    }
  }
  function _0x55442f() {
    if (navigator.mediaDevices && navigator.mediaDevices.removeEventListener) {
      navigator.mediaDevices.removeEventListener("devicechange", _0x59a5fa);
    }
    _0x1038e2 = null;
  }
  _0x3e078a.disableAccessToMediaDevices = _0x55442f;
  if (!navigator.mediaDevices) {
    console.warn("navigator.mediaDevices not supported by this browser. Webcam access will not be available." + (location.protocol == "https:" ? "" : " Try hosting the page over HTTPS, because some browsers disable webcam access when insecure HTTP is being used."));
    _0x55442f();
  } else if (typeof ENVIRONMENT_IS_PTHREAD === "undefined" || !ENVIRONMENT_IS_PTHREAD) {
    setTimeout(function () {
      try {
        _0x1c2630("enumerateMediaDevices");
        _0x3fcb90 = function () {
          if (_0x3e04ff !== null) {
            clearTimeout(_0x3e04ff);
          }
          _0x1a1081("enumerateMediaDevices");
          if (navigator.mediaDevices) {
            console.log("navigator.mediaDevices support available");
          }
          _0x3fcb90 = function () {};
        };
        _0x59a5fa();
        _0x3e04ff = setTimeout(_0x3fcb90, 1000);
        navigator.mediaDevices.addEventListener("devicechange", _0x59a5fa);
      } catch (_0x19ccca) {
        console.warn("Unable to enumerate media devices: " + _0x19ccca);
        _0x55442f();
      }
    }, 0);
  }
  function _0x4fe31a(_0x423e0b, _0xe221de, _0x3a7840) {
    var _0x495313 = _0x59a36d(_0xe221de);
    var _0x14d65a = _0x59a36d(_0x423e0b);
    var _0x145eb5 = 0;
    try {
      if (_0x3a7840 === undefined) {
        _0x233dd5(_0x14d65a, _0x495313);
      } else if (typeof _0x3a7840 === "string") {
        _0x145eb5 = _0x59a36d(_0x3a7840);
        _0x844b45(_0x14d65a, _0x495313, _0x145eb5);
      } else if (typeof _0x3a7840 === "number") {
        _0x1b6c38(_0x14d65a, _0x495313, _0x3a7840);
      } else {
        throw "" + _0x3a7840 + " is does not have a type which is supported by SendMessage.";
      }
    } finally {
      _0x2b8491(_0x145eb5);
      _0x2b8491(_0x14d65a);
      _0x2b8491(_0x495313);
    }
  }
  _0x3e078a.SendMessage = _0x4fe31a;
  var _0x4ee321 = {};
  var _0x4b1d0e;
  for (_0x4b1d0e in _0x3e078a) {
    if (_0x3e078a.hasOwnProperty(_0x4b1d0e)) {
      _0x4ee321[_0x4b1d0e] = _0x3e078a[_0x4b1d0e];
    }
  }
  var _0x114f02 = [];
  var _0x2048af = "./this.program";
  function _0x29446d(_0x101b88, _0x2a22a2) {
    throw _0x2a22a2;
  }
  var _0xde4b9c = false;
  var _0x433b11 = false;
  var _0x23eb2f = false;
  var _0x4cbaeb = false;
  _0xde4b9c = typeof window === "object";
  _0x433b11 = typeof importScripts === "function";
  _0x23eb2f = typeof process === "object" && typeof process.versions === "object" && typeof process.versions.node === "string";
  _0x4cbaeb = !_0xde4b9c && !_0x23eb2f && !_0x433b11;
  var _0x4d00bd = "";
  function _0x3c24ca(_0x5d79b2) {
    if (_0x3e078a.locateFile) {
      return _0x3e078a.locateFile(_0x5d79b2, _0x4d00bd);
    }
    return _0x4d00bd + _0x5d79b2;
  }
  var _0x37393c;
  var _0xdb3350;
  var _0x282d86;
  var _0x5210df;
  var _0x9df614;
  var _0x3bfa06;
  if (_0x23eb2f) {
    if (_0x433b11) {
      _0x4d00bd = require("path").dirname(_0x4d00bd) + "/";
    } else {
      _0x4d00bd = __dirname + "/";
    }
    _0x37393c = function _0xc3b440(_0xeff840, _0x5bf671) {
      if (!_0x9df614) {
        _0x9df614 = require("fs");
      }
      if (!_0x3bfa06) {
        _0x3bfa06 = require("path");
      }
      _0xeff840 = _0x3bfa06.normalize(_0xeff840);
      return _0x9df614.readFileSync(_0xeff840, _0x5bf671 ? null : "utf8");
    };
    _0x282d86 = function _0x3775e4(_0x3342da) {
      var _0xb7c667 = _0x37393c(_0x3342da, true);
      if (!_0xb7c667.buffer) {
        _0xb7c667 = new Uint8Array(_0xb7c667);
      }
      _0x5181b0(_0xb7c667.buffer);
      return _0xb7c667;
    };
    if (process.argv.length > 1) {
      _0x2048af = process.argv[1].replace(/\\/g, "/");
    }
    _0x114f02 = process.argv.slice(2);
    if (typeof module !== "undefined") {
      module.exports = _0x3e078a;
    }
    process.on("uncaughtException", function (_0x5bee15) {
      if (!(_0x5bee15 instanceof _0x295f08)) {
        throw _0x5bee15;
      }
    });
    process.on("unhandledRejection", _0xb4b2ae);
    _0x29446d = function (_0x58a30d) {
      process.exit(_0x58a30d);
    };
    _0x3e078a.inspect = function () {
      return "[Emscripten Module object]";
    };
  } else if (_0x4cbaeb) {
    if (typeof read != "undefined") {
      _0x37393c = function _0x4c26ed(_0x117ecf) {
        return read(_0x117ecf);
      };
    }
    _0x282d86 = function _0x14f0fa(_0x338e71) {
      var _0x59a6e8;
      if (typeof readbuffer === "function") {
        return new Uint8Array(readbuffer(_0x338e71));
      }
      _0x59a6e8 = read(_0x338e71, "binary");
      _0x5181b0(typeof _0x59a6e8 === "object");
      return _0x59a6e8;
    };
    if (typeof scriptArgs != "undefined") {
      _0x114f02 = scriptArgs;
    } else if (typeof arguments != "undefined") {
      _0x114f02 = arguments;
    }
    if (typeof quit === "function") {
      _0x29446d = function (_0x265f0b) {
        quit(_0x265f0b);
      };
    }
    if (typeof print !== "undefined") {
      if (typeof console === "undefined") {
        console = {};
      }
      console.log = print;
      console.warn = console.error = typeof printErr !== "undefined" ? printErr : print;
    }
  } else if (_0xde4b9c || _0x433b11) {
    if (_0x433b11) {
      _0x4d00bd = self.location.href;
    } else if (typeof document !== "undefined" && document.currentScript) {
      _0x4d00bd = document.currentScript.src;
    }
    if (_0x4d00bd.indexOf("blob:") !== 0) {
      _0x4d00bd = _0x4d00bd.substr(0, _0x4d00bd.lastIndexOf("/") + 1);
    } else {
      _0x4d00bd = "";
    }
    {
      _0x37393c = function (_0x5110df) {
        var _0x5ccaee = new XMLHttpRequest();
        _0x5ccaee.open("GET", _0x5110df, false);
        _0x5ccaee.send(null);
        return _0x5ccaee.responseText;
      };
      if (_0x433b11) {
        _0x282d86 = function (_0x229576) {
          var _0x3baa6e = new XMLHttpRequest();
          _0x3baa6e.open("GET", _0x229576, false);
          _0x3baa6e.responseType = "arraybuffer";
          _0x3baa6e.send(null);
          return new Uint8Array(_0x3baa6e.response);
        };
      }
      _0xdb3350 = function (_0x1648f8, _0x531726, _0x47b6bf) {
        var _0x2fa50e = new XMLHttpRequest();
        _0x2fa50e.open("GET", _0x1648f8, true);
        _0x2fa50e.responseType = "arraybuffer";
        _0x2fa50e.onload = function () {
          if (_0x2fa50e.status == 200 || _0x2fa50e.status == 0 && _0x2fa50e.response) {
            _0x531726(_0x2fa50e.response);
            return;
          }
          _0x47b6bf();
        };
        _0x2fa50e.onerror = _0x47b6bf;
        _0x2fa50e.send(null);
      };
    }
    _0x5210df = function (_0xfbabde) {
      document.title = _0xfbabde;
    };
  } else {}
  var _0x56a098 = _0x3e078a.print || console.log.bind(console);
  var _0x516167 = _0x3e078a.printErr || console.warn.bind(console);
  for (_0x4b1d0e in _0x4ee321) {
    if (_0x4ee321.hasOwnProperty(_0x4b1d0e)) {
      _0x3e078a[_0x4b1d0e] = _0x4ee321[_0x4b1d0e];
    }
  }
  _0x4ee321 = null;
  if (_0x3e078a.arguments) {
    _0x114f02 = _0x3e078a.arguments;
  }
  if (_0x3e078a.thisProgram) {
    _0x2048af = _0x3e078a.thisProgram;
  }
  if (_0x3e078a.quit) {
    _0x29446d = _0x3e078a.quit;
  }
  var _0x1efa24 = 16;
  function _0x508820(_0xd942e7, _0x2a475d) {
    if (!_0x2a475d) {
      _0x2a475d = _0x1efa24;
    }
    return Math.ceil(_0xd942e7 / _0x2a475d) * _0x2a475d;
  }
  function _0x8cebcb(_0x5a518d) {
    if (!_0x8cebcb.shown) {
      _0x8cebcb.shown = {};
    }
    if (!_0x8cebcb.shown[_0x5a518d]) {
      _0x8cebcb.shown[_0x5a518d] = 1;
      _0x516167(_0x5a518d);
    }
  }
  var _0x2c4be6 = 0;
  function _0x41dc07(_0x57870e) {
    _0x2c4be6 = _0x57870e;
  }
  function _0x1b1938() {
    return _0x2c4be6;
  }
  var _0xf1557c;
  if (_0x3e078a.wasmBinary) {
    _0xf1557c = _0x3e078a.wasmBinary;
  }
  var _0x537d8b = _0x3e078a.noExitRuntime || true;
  if (typeof WebAssembly !== "object") {
    _0xb4b2ae("no native wasm support detected");
  }
  var _0x26bdd5;
  var _0x591d6a = false;
  var _0x1cd3c3;
  function _0x5181b0(_0x2e68c4, _0x3defae) {
    if (!_0x2e68c4) {
      _0xb4b2ae("Assertion failed: " + _0x3defae);
    }
  }
  function _0x176819(_0x260e55) {
    var _0x570088 = _0x3e078a["_" + _0x260e55];
    _0x5181b0(_0x570088, "Cannot call unknown function " + _0x260e55 + ", make sure it is exported");
    return _0x570088;
  }
  function _0x363c67(_0x4fb6c0, _0x7ad2a2, _0x25b9cf, _0x115639, _0x3e466a) {
    var _0x26eeff = {
      string: function (_0x2fa03e) {
        var _0x57d85c = 0;
        if (_0x2fa03e !== null && _0x2fa03e !== undefined && _0x2fa03e !== 0) {
          var _0x4ec7f4 = (_0x2fa03e.length << 2) + 1;
          _0x57d85c = _0x42f156(_0x4ec7f4);
          _0x53c85c(_0x2fa03e, _0x57d85c, _0x4ec7f4);
        }
        return _0x57d85c;
      },
      array: function (_0x22a6f4) {
        var _0x484517 = _0x42f156(_0x22a6f4.length);
        _0x4bce85(_0x22a6f4, _0x484517);
        return _0x484517;
      }
    };
    function _0x408c3a(_0x1bce47) {
      if (_0x7ad2a2 === "string") {
        return _0x3f3179(_0x1bce47);
      }
      if (_0x7ad2a2 === "boolean") {
        return Boolean(_0x1bce47);
      }
      return _0x1bce47;
    }
    var _0x2dd9e8 = _0x176819(_0x4fb6c0);
    var _0x4aab69 = [];
    var _0x56236b = 0;
    if (_0x115639) {
      for (var _0xc3d7d4 = 0; _0xc3d7d4 < _0x115639.length; _0xc3d7d4++) {
        var _0x376e9f = _0x26eeff[_0x25b9cf[_0xc3d7d4]];
        if (_0x376e9f) {
          if (_0x56236b === 0) {
            _0x56236b = _0x5ebf8c();
          }
          _0x4aab69[_0xc3d7d4] = _0x376e9f(_0x115639[_0xc3d7d4]);
        } else {
          _0x4aab69[_0xc3d7d4] = _0x115639[_0xc3d7d4];
        }
      }
    }
    var _0x577f43 = _0x2dd9e8.apply(null, _0x4aab69);
    _0x577f43 = _0x408c3a(_0x577f43);
    if (_0x56236b !== 0) {
      _0x4c4e79(_0x56236b);
    }
    return _0x577f43;
  }
  function _0x3a41ee(_0x40b14d, _0x21811d, _0x2e994e, _0x377810) {
    _0x2e994e = _0x2e994e || [];
    var _0x5a8ca0 = _0x2e994e.every(function (_0x4a1617) {
      return _0x4a1617 === "number";
    });
    var _0x99895b = _0x21811d !== "string";
    if (_0x99895b && _0x5a8ca0 && !_0x377810) {
      return _0x176819(_0x40b14d);
    }
    return function () {
      return _0x363c67(_0x40b14d, _0x21811d, _0x2e994e, arguments, _0x377810);
    };
  }
  var _0x5dc9f8 = typeof TextDecoder !== "undefined" ? new TextDecoder("utf8") : undefined;
  function _0x1f45b0(_0x3db342, _0x1b2245, _0x56566f) {
    var _0x2c921b = _0x1b2245 + _0x56566f;
    var _0x50ccb6 = _0x1b2245;
    while (_0x3db342[_0x50ccb6] && !(_0x50ccb6 >= _0x2c921b)) {
      ++_0x50ccb6;
    }
    if (_0x50ccb6 - _0x1b2245 > 16 && _0x3db342.subarray && _0x5dc9f8) {
      return _0x5dc9f8.decode(_0x3db342.subarray(_0x1b2245, _0x50ccb6));
    } else {
      var _0x4659b8 = "";
      while (_0x1b2245 < _0x50ccb6) {
        var _0x4b9568 = _0x3db342[_0x1b2245++];
        if (!(_0x4b9568 & 128)) {
          _0x4659b8 += String.fromCharCode(_0x4b9568);
          continue;
        }
        var _0x282c0b = _0x3db342[_0x1b2245++] & 63;
        if ((_0x4b9568 & 224) == 192) {
          _0x4659b8 += String.fromCharCode((_0x4b9568 & 31) << 6 | _0x282c0b);
          continue;
        }
        var _0x1b2c5b = _0x3db342[_0x1b2245++] & 63;
        if ((_0x4b9568 & 240) == 224) {
          _0x4b9568 = (_0x4b9568 & 15) << 12 | _0x282c0b << 6 | _0x1b2c5b;
        } else {
          _0x4b9568 = (_0x4b9568 & 7) << 18 | _0x282c0b << 12 | _0x1b2c5b << 6 | _0x3db342[_0x1b2245++] & 63;
        }
        if (_0x4b9568 < 65536) {
          _0x4659b8 += String.fromCharCode(_0x4b9568);
        } else {
          var _0x3a1c61 = _0x4b9568 - 65536;
          _0x4659b8 += String.fromCharCode(_0x3a1c61 >> 10 | 55296, _0x3a1c61 & 1023 | 56320);
        }
      }
    }
    return _0x4659b8;
  }
  function _0x3f3179(_0x265e09, _0x4852e5) {
    if (_0x265e09) {
      return _0x1f45b0(_0x4f26b1, _0x265e09, _0x4852e5);
    } else {
      return "";
    }
  }
  function _0x3e4fca(_0x3b68b4, _0x3dbb62, _0x39b5e4, _0x38f907) {
    if (!(_0x38f907 > 0)) {
      return 0;
    }
    var _0x12d841 = _0x39b5e4;
    var _0x5693b0 = _0x39b5e4 + _0x38f907 - 1;
    for (var _0x1d1250 = 0; _0x1d1250 < _0x3b68b4.length; ++_0x1d1250) {
      var _0x451d6b = _0x3b68b4.charCodeAt(_0x1d1250);
      if (_0x451d6b >= 55296 && _0x451d6b <= 57343) {
        var _0x9bf406 = _0x3b68b4.charCodeAt(++_0x1d1250);
        _0x451d6b = 65536 + ((_0x451d6b & 1023) << 10) | _0x9bf406 & 1023;
      }
      if (_0x451d6b <= 127) {
        if (_0x39b5e4 >= _0x5693b0) {
          break;
        }
        _0x3dbb62[_0x39b5e4++] = _0x451d6b;
      } else if (_0x451d6b <= 2047) {
        if (_0x39b5e4 + 1 >= _0x5693b0) {
          break;
        }
        _0x3dbb62[_0x39b5e4++] = _0x451d6b >> 6 | 192;
        _0x3dbb62[_0x39b5e4++] = _0x451d6b & 63 | 128;
      } else if (_0x451d6b <= 65535) {
        if (_0x39b5e4 + 2 >= _0x5693b0) {
          break;
        }
        _0x3dbb62[_0x39b5e4++] = _0x451d6b >> 12 | 224;
        _0x3dbb62[_0x39b5e4++] = _0x451d6b >> 6 & 63 | 128;
        _0x3dbb62[_0x39b5e4++] = _0x451d6b & 63 | 128;
      } else {
        if (_0x39b5e4 + 3 >= _0x5693b0) {
          break;
        }
        _0x3dbb62[_0x39b5e4++] = _0x451d6b >> 18 | 240;
        _0x3dbb62[_0x39b5e4++] = _0x451d6b >> 12 & 63 | 128;
        _0x3dbb62[_0x39b5e4++] = _0x451d6b >> 6 & 63 | 128;
        _0x3dbb62[_0x39b5e4++] = _0x451d6b & 63 | 128;
      }
    }
    _0x3dbb62[_0x39b5e4] = 0;
    return _0x39b5e4 - _0x12d841;
  }
  function _0x53c85c(_0x18f302, _0x8bd7da, _0x25b87f) {
    return _0x3e4fca(_0x18f302, _0x4f26b1, _0x8bd7da, _0x25b87f);
  }
  function _0x3e3578(_0x6d45ef) {
    var _0x1e2fd1 = 0;
    for (var _0x55559d = 0; _0x55559d < _0x6d45ef.length; ++_0x55559d) {
      var _0x118638 = _0x6d45ef.charCodeAt(_0x55559d);
      if (_0x118638 >= 55296 && _0x118638 <= 57343) {
        _0x118638 = 65536 + ((_0x118638 & 1023) << 10) | _0x6d45ef.charCodeAt(++_0x55559d) & 1023;
      }
      if (_0x118638 <= 127) {
        ++_0x1e2fd1;
      } else if (_0x118638 <= 2047) {
        _0x1e2fd1 += 2;
      } else if (_0x118638 <= 65535) {
        _0x1e2fd1 += 3;
      } else {
        _0x1e2fd1 += 4;
      }
    }
    return _0x1e2fd1;
  }
  function _0x1efc62(_0x823168) {
    var _0x279ecc = _0x3e3578(_0x823168) + 1;
    var _0x330e97 = _0x253dd7(_0x279ecc);
    if (_0x330e97) {
      _0x3e4fca(_0x823168, _0xb3d98, _0x330e97, _0x279ecc);
    }
    return _0x330e97;
  }
  function _0x3e5820(_0x345f48) {
    var _0x17df0f = _0x3e3578(_0x345f48) + 1;
    var _0x5ca788 = _0x42f156(_0x17df0f);
    _0x3e4fca(_0x345f48, _0xb3d98, _0x5ca788, _0x17df0f);
    return _0x5ca788;
  }
  function _0x4bce85(_0x207766, _0x2ac801) {
    _0xb3d98.set(_0x207766, _0x2ac801);
  }
  function _0x26daf7(_0x1b8d5f, _0x32da8e, _0x2b8699) {
    for (var _0x3b5b13 = 0; _0x3b5b13 < _0x1b8d5f.length; ++_0x3b5b13) {
      _0xb3d98[_0x32da8e++ >> 0] = _0x1b8d5f.charCodeAt(_0x3b5b13);
    }
    if (!_0x2b8699) {
      _0xb3d98[_0x32da8e >> 0] = 0;
    }
  }
  function _0x1499a2(_0xef6189, _0x4c1f14) {
    if (_0xef6189 % _0x4c1f14 > 0) {
      _0xef6189 += _0x4c1f14 - _0xef6189 % _0x4c1f14;
    }
    return _0xef6189;
  }
  var _0x47e5e9;
  var _0xb3d98;
  var _0x4f26b1;
  var _0x30f41b;
  var _0x2cfdbc;
  var _0x5cc2c4;
  var _0x52253e;
  var _0x2c2a07;
  var _0x5b41dc;
  function _0x25eba3(_0x3f741c) {
    _0x47e5e9 = _0x3f741c;
    _0x3e078a.HEAP8 = _0xb3d98 = new Int8Array(_0x3f741c);
    _0x3e078a.HEAP16 = _0x30f41b = new Int16Array(_0x3f741c);
    _0x3e078a.HEAP32 = _0x5cc2c4 = new Int32Array(_0x3f741c);
    _0x3e078a.HEAPU8 = _0x4f26b1 = new Uint8Array(_0x3f741c);
    _0x3e078a.HEAPU16 = _0x2cfdbc = new Uint16Array(_0x3f741c);
    _0x3e078a.HEAPU32 = _0x52253e = new Uint32Array(_0x3f741c);
    _0x3e078a.HEAPF32 = _0x2c2a07 = new Float32Array(_0x3f741c);
    _0x3e078a.HEAPF64 = _0x5b41dc = new Float64Array(_0x3f741c);
  }
  var _0x3acbca = _0x3e078a.INITIAL_MEMORY || 33554432;
  var _0xf66fc4;
  var _0x5a5466 = [];
  var _0x14f1d7 = [];
  var _0x46b5b8 = [];
  var _0x14606e = [];
  var _0x503c3f = [];
  var _0x316be2 = false;
  var _0x402c19 = false;
  function _0x20288c() {
    if (_0x3e078a.preRun) {
      if (typeof _0x3e078a.preRun == "function") {
        _0x3e078a.preRun = [_0x3e078a.preRun];
      }
      while (_0x3e078a.preRun.length) {
        _0x521dea(_0x3e078a.preRun.shift());
      }
    }
    _0x350628(_0x5a5466);
  }
  function _0x5cbbfc() {
    _0x316be2 = true;
    if (!_0x3e078a.noFSInit && !_0x221e83.init.initialized) {
      _0x221e83.init();
    }
    _0x12c425.init();
    _0x22ae67.root = _0x221e83.mount(_0x22ae67, {}, null);
    _0x3c97bd.root = _0x221e83.mount(_0x3c97bd, {}, null);
    _0x350628(_0x14f1d7);
  }
  function _0x37c010() {
    _0x221e83.ignorePermissions = false;
    _0x350628(_0x46b5b8);
  }
  function _0x46297f() {
    _0x402c19 = true;
  }
  function _0x1fe0e2() {
    if (_0x3e078a.postRun) {
      if (typeof _0x3e078a.postRun == "function") {
        _0x3e078a.postRun = [_0x3e078a.postRun];
      }
      while (_0x3e078a.postRun.length) {
        _0x25e79c(_0x3e078a.postRun.shift());
      }
    }
    _0x350628(_0x503c3f);
  }
  function _0x521dea(_0x1875a6) {
    _0x5a5466.unshift(_0x1875a6);
  }
  function _0x3f2f94(_0x5cd93d) {
    _0x14f1d7.unshift(_0x5cd93d);
  }
  function _0x25e79c(_0x273449) {
    _0x503c3f.unshift(_0x273449);
  }
  var _0x1478ad = 0;
  var _0x2e6720 = null;
  var _0x28110c = null;
  function _0x1f40d2(_0x30e943) {
    return _0x30e943;
  }
  function _0x1c2630(_0x5d6fee) {
    _0x1478ad++;
    if (_0x3e078a.monitorRunDependencies) {
      _0x3e078a.monitorRunDependencies(_0x1478ad);
    }
  }
  function _0x1a1081(_0x48f911) {
    _0x1478ad--;
    if (_0x3e078a.monitorRunDependencies) {
      _0x3e078a.monitorRunDependencies(_0x1478ad);
    }
    if (_0x1478ad == 0) {
      if (_0x2e6720 !== null) {
        clearInterval(_0x2e6720);
        _0x2e6720 = null;
      }
      if (_0x28110c) {
        var _0x74da74 = _0x28110c;
        _0x28110c = null;
        _0x74da74();
      }
    }
  }
  _0x3e078a.preloadedImages = {};
  _0x3e078a.preloadedAudios = {};
  function _0xb4b2ae(_0x580239) {
    if (_0x3e078a.onAbort) {
      _0x3e078a.onAbort(_0x580239);
    }
    _0x580239 += "";
    _0x516167(_0x580239);
    _0x591d6a = true;
    _0x1cd3c3 = 1;
    _0x580239 = "abort(" + _0x580239 + "). Build with -s ASSERTIONS=1 for more info.";
    var _0x55d001 = new WebAssembly.RuntimeError(_0x580239);
    throw _0x55d001;
  }
  var _0x739972 = "data:application/octet-stream;base64,";
  function _0x2e0ac9(_0x59629b) {
    return _0x59629b.startsWith(_0x739972);
  }
  function _0x1eb32e(_0x3757fc) {
    return _0x3757fc.startsWith("file://");
  }
  var _0x4ffe50 = "build.wasm";
  if (!_0x2e0ac9(_0x4ffe50)) {
    _0x4ffe50 = _0x3c24ca(_0x4ffe50);
  }
  function _0x641bfc(_0xde2614) {
    try {
      if (_0xde2614 == _0x4ffe50 && _0xf1557c) {
        return new Uint8Array(_0xf1557c);
      }
      if (_0x282d86) {
        return _0x282d86(_0xde2614);
      } else {
        throw "both async and sync fetching of the wasm failed";
      }
    } catch (_0x2ce8ac) {
      _0xb4b2ae(_0x2ce8ac);
    }
  }
  function _0x22b961() {
    if (!_0xf1557c && (_0xde4b9c || _0x433b11)) {
      if (typeof fetch === "function" && !_0x1eb32e(_0x4ffe50)) {
        return fetch(_0x4ffe50, {
          credentials: "same-origin"
        }).then(function (_0xcc52fd) {
          if (!_0xcc52fd.ok) {
            throw "failed to load wasm binary file at '" + _0x4ffe50 + "'";
          }
          return _0xcc52fd.arrayBuffer();
        }).catch(function () {
          return _0x641bfc(_0x4ffe50);
        });
      } else if (_0xdb3350) {
        return new Promise(function (_0x450d00, _0x42123b) {
          _0xdb3350(_0x4ffe50, function (_0x2019af) {
            _0x450d00(new Uint8Array(_0x2019af));
          }, _0x42123b);
        });
      }
    }
    return Promise.resolve().then(function () {
      return _0x641bfc(_0x4ffe50);
    });
  }
  function _0x568d8c() {
    var _0x3c0165 = {
      a: _0x4d783c
    };
    function _0x585362(_0x2e0361, _0x1a40b2) {
      var _0x94a11f = _0x2e0361.exports;
      _0x3e078a.asm = _0x94a11f;
      _0x26bdd5 = _0x3e078a.asm.yj;
      _0x25eba3(_0x26bdd5.buffer);
      _0xf66fc4 = _0x3e078a.asm.Yj;
      _0x3f2f94(_0x3e078a.asm.zj);
      _0x1a1081("wasm-instantiate");
    }
    _0x1c2630("wasm-instantiate");
    function _0x5e72e9(_0x2bea48) {
      _0x585362(_0x2bea48.instance);
    }
    function _0x1614da(_0x16baae) {
      return _0x22b961().then(function (_0x32a817) {
        var _0xa77ee9 = WebAssembly.instantiate(_0x32a817, _0x3c0165);
        return _0xa77ee9;
      }).then(_0x16baae, function (_0x4daf1f) {
        _0x516167("failed to asynchronously prepare wasm: " + _0x4daf1f);
        _0xb4b2ae(_0x4daf1f);
      });
    }
    function _0x2f37ed() {
      if (!_0xf1557c && typeof WebAssembly.instantiateStreaming === "function" && !_0x2e0ac9(_0x4ffe50) && !_0x1eb32e(_0x4ffe50) && typeof fetch === "function") {
        return fetch(_0x4ffe50, {
          credentials: "same-origin"
        }).then(function (_0x57a437) {
          var _0x4ffefb = WebAssembly.instantiateStreaming(_0x57a437, _0x3c0165);
          return _0x4ffefb.then(_0x5e72e9, function (_0x3dc658) {
            _0x516167("wasm streaming compile failed: " + _0x3dc658);
            _0x516167("falling back to ArrayBuffer instantiation");
            return _0x1614da(_0x5e72e9);
          });
        });
      } else {
        return _0x1614da(_0x5e72e9);
      }
    }
    if (_0x3e078a.instantiateWasm) {
      try {
        var _0x39328f = _0x3e078a.instantiateWasm(_0x3c0165, _0x585362);
        return _0x39328f;
      } catch (_0x1f40a4) {
        _0x516167("Module.instantiateWasm callback failed with error: " + _0x1f40a4);
        return false;
      }
    }
    _0x2f37ed();
    return {};
  }
  var _0x2453c8;
  var _0x300ee3;
  var _0x244594 = {
    4273976: function () {
      return _0x3e078a.webglContextAttributes.premultipliedAlpha;
    },
    4274037: function () {
      return _0x3e078a.webglContextAttributes.preserveDrawingBuffer;
    },
    4274101: function () {
      return _0x3e078a.webglContextAttributes.powerPreference;
    }
  };
  function _0x350628(_0x1f710a) {
    while (_0x1f710a.length > 0) {
      var _0x244a1a = _0x1f710a.shift();
      if (typeof _0x244a1a == "function") {
        _0x244a1a(_0x3e078a);
        continue;
      }
      var _0x5b2f68 = _0x244a1a.func;
      if (typeof _0x5b2f68 === "number") {
        if (_0x244a1a.arg === undefined) {
          (function () {
            _0x4f38c0.call(null, _0x5b2f68);
          })();
        } else {
          (function (_0x28a22c) {
            _0x37c083.apply(null, [_0x5b2f68, _0x28a22c]);
          })(_0x244a1a.arg);
        }
      } else {
        _0x5b2f68(_0x244a1a.arg === undefined ? null : _0x244a1a.arg);
      }
    }
  }
  function _0x1c2843(_0xeaf649) {
    return _0xeaf649;
  }
  function _0x538f54(_0x9ecce9) {
    var _0x2b5f79 = /\b_Z[\w\d_]+/g;
    return _0x9ecce9.replace(_0x2b5f79, function (_0x451b8a) {
      var _0x290743 = _0x1c2843(_0x451b8a);
      if (_0x451b8a === _0x290743) {
        return _0x451b8a;
      } else {
        return _0x290743 + " [" + _0x451b8a + "]";
      }
    });
  }
  function _0x3d5e55(_0x17b4a6, _0x481167, _0x16ff57) {
    var _0x87f786 = _0x3e078a["dynCall_" + _0x17b4a6];
    if (_0x16ff57 && _0x16ff57.length) {
      return _0x87f786.apply(null, [_0x481167].concat(_0x16ff57));
    } else {
      return _0x87f786.call(null, _0x481167);
    }
  }
  function _0x3bdef4(_0x44db09, _0x1da91b, _0x20f6a0) {
    return _0x3d5e55(_0x44db09, _0x1da91b, _0x20f6a0);
  }
  function _0x13c2d9() {
    var _0x3caa3c = new Error();
    if (!_0x3caa3c.stack) {
      try {
        throw new Error();
      } catch (_0x1a6b7e) {
        _0x3caa3c = _0x1a6b7e;
      }
      if (!_0x3caa3c.stack) {
        return "(no stack trace available)";
      }
    }
    return _0x3caa3c.stack.toString();
  }
  var _0x59e854 = 0;
  function _0x578875() {
    return _0x537d8b || _0x59e854 > 0;
  }
  function _0x2d7851() {
    var _0x52cc31 = _0x13c2d9();
    if (_0x3e078a.extraStackTrace) {
      _0x52cc31 += "\n" + _0x3e078a.extraStackTrace();
    }
    return _0x538f54(_0x52cc31);
  }
  function _0xfc9684(_0xbf4d38, _0x124101, _0x288953, _0x1f33cd, _0x53d465) {
    var _0x906025 = _0x3f3179(_0xbf4d38);
    var _0x493cac = _0x3f3179(_0x124101);
    var _0x25bf73 = _0x3f3179(_0x288953);
    var _0xc0a1ae = _0x3f3179(_0x1f33cd);
    var _0x4eacd7 = _0x3f3179(_0x53d465);
    try {
      firebase.firestore().collection(_0x906025).add(JSON.parse(_0x493cac)).then(function (_0x366070) {
        window.unityInstance.SendMessage(_0x25bf73, _0xc0a1ae, "Success: document added in collection " + _0x906025);
      }).catch(function (_0x26582c) {
        window.unityInstance.SendMessage(_0x25bf73, _0x4eacd7, JSON.stringify(_0x26582c, Object.getOwnPropertyNames(_0x26582c)));
      });
    } catch (_0x1b611f) {
      window.unityInstance.SendMessage(_0x25bf73, _0x4eacd7, JSON.stringify(_0x1b611f, Object.getOwnPropertyNames(_0x1b611f)));
    }
  }
  function _0x17ab14(_0x1c58d4, _0x258cfa, _0x3d1978, _0x3ee354, _0x3c6e52, _0x7e9f14, _0x385c39) {
    var _0x48ca21 = _0x3f3179(_0x1c58d4);
    var _0x181bf3 = _0x3f3179(_0x258cfa);
    var _0x593200 = _0x3f3179(_0x3d1978);
    var _0x226a44 = _0x3f3179(_0x3ee354);
    var _0x2a4c4e = _0x3f3179(_0x3c6e52);
    var _0x50cafe = _0x3f3179(_0x7e9f14);
    var _0x7102e2 = _0x3f3179(_0x385c39);
    try {
      var _0x3ee354 = {};
      _0x3ee354[_0x593200] = firebase.firestore.FieldValue.arrayUnion(JSON.parse(_0x226a44));
      firebase.firestore().collection(_0x48ca21).doc(_0x181bf3).update(_0x3ee354).then(function () {
        window.unityInstance.SendMessage(_0x2a4c4e, _0x50cafe, "Success: element " + _0x226a44 + " was added in " + _0x593200);
      }).catch(function (_0x5858d6) {
        window.unityInstance.SendMessage(_0x2a4c4e, _0x7102e2, JSON.stringify(_0x5858d6, Object.getOwnPropertyNames(_0x5858d6)));
      });
    } catch (_0x4faed2) {
      window.unityInstance.SendMessage(_0x2a4c4e, _0x7102e2, JSON.stringify(_0x4faed2, Object.getOwnPropertyNames(_0x4faed2)));
    }
  }
  function _0x488296(_0x132453, _0x278866, _0x33042b, _0x131f05, _0x28d34d) {
    var _0x583277 = _0x3f3179(_0x132453);
    var _0x19d050 = _0x3f3179(_0x278866);
    var _0x2c555b = _0x3f3179(_0x33042b);
    var _0x528bb1 = _0x3f3179(_0x131f05);
    var _0x49e1bd = _0x3f3179(_0x28d34d);
    try {
      firebase.auth().createUserWithEmailAndPassword(_0x583277, _0x19d050).then(function (_0x4f6c0e) {
        window.unityInstance.SendMessage(_0x2c555b, _0x528bb1, "Success: signed up for " + _0x583277);
      }).catch(function (_0xc77483) {
        window.unityInstance.SendMessage(_0x2c555b, _0x49e1bd, JSON.stringify(_0xc77483, Object.getOwnPropertyNames(_0xc77483)));
      });
    } catch (_0x3c2b74) {
      window.unityInstance.SendMessage(_0x2c555b, _0x49e1bd, JSON.stringify(_0x3c2b74, Object.getOwnPropertyNames(_0x3c2b74)));
    }
  }
  function _0x3f2a25(_0x1d9811, _0x138132, _0x17eb05, _0x5429dc, _0x93fe76) {
    var _0x40c7b1 = _0x3f3179(_0x1d9811);
    var _0x4b3521 = _0x3f3179(_0x138132);
    var _0x106c09 = _0x3f3179(_0x17eb05);
    var _0x3d22f2 = _0x3f3179(_0x5429dc);
    var _0x3d50a9 = _0x3f3179(_0x93fe76);
    try {
      firebase.firestore().collection(_0x40c7b1).doc(_0x4b3521).delete().then(function () {
        window.unityInstance.SendMessage(_0x106c09, _0x3d22f2, "Success: document " + _0x4b3521 + " was deleted");
      }).catch(function (_0xe3160f) {
        window.unityInstance.SendMessage(_0x106c09, _0x3d50a9, JSON.stringify(_0xe3160f, Object.getOwnPropertyNames(_0xe3160f)));
      });
    } catch (_0x44d18a) {
      window.unityInstance.SendMessage(_0x106c09, _0x3d50a9, JSON.stringify(_0x44d18a, Object.getOwnPropertyNames(_0x44d18a)));
    }
  }
  function _0x235e19(_0x5de40c, _0x379c02, _0x5a56a4, _0x450de6, _0x2afc5d, _0x324144) {
    var _0xae7d4c = _0x3f3179(_0x5de40c);
    var _0x4b72e8 = _0x3f3179(_0x379c02);
    var _0x2d04c5 = _0x3f3179(_0x5a56a4);
    var _0x350ff6 = _0x3f3179(_0x450de6);
    var _0x4fa488 = _0x3f3179(_0x2afc5d);
    var _0x21a218 = _0x3f3179(_0x324144);
    try {
      var _0x128417 = {};
      _0x128417[_0x2d04c5] = firebase.firestore.FieldValue.delete();
      firebase.firestore().collection(_0xae7d4c).doc(_0x4b72e8).update(_0x128417).then(function () {
        window.unityInstance.SendMessage(_0x350ff6, _0x4fa488, "Success: field " + _0x2d04c5 + " was deleted");
      }).catch(function (_0x251176) {
        window.unityInstance.SendMessage(_0x350ff6, _0x21a218, JSON.stringify(_0x251176, Object.getOwnPropertyNames(_0x251176)));
      });
    } catch (_0x218bd9) {
      window.unityInstance.SendMessage(_0x350ff6, _0x21a218, JSON.stringify(_0x218bd9, Object.getOwnPropertyNames(_0x218bd9)));
    }
  }
  function _0x3721e7(_0x3115ea, _0x3b67a4, _0x17b6c3, _0x2f44dd) {
    var _0x2cd852 = _0x3f3179(_0x3115ea);
    var _0x1f961d = _0x3f3179(_0x3b67a4);
    var _0x56e71d = _0x3f3179(_0x17b6c3);
    var _0x59646a = _0x3f3179(_0x2f44dd);
    try {
      firebase.database().ref(_0x2cd852).remove().then(function (_0x5e5566) {
        window.unityInstance.SendMessage(_0x1f961d, _0x56e71d, "Success: " + _0x2cd852 + " was deleted");
      });
    } catch (_0xac403e) {
      window.unityInstance.SendMessage(_0x1f961d, _0x59646a, JSON.stringify(_0xac403e, Object.getOwnPropertyNames(_0xac403e)));
    }
  }
  function _0x20b605(_0x68d5cc, _0x489cc1, _0x336ba1, _0x8c4bc0) {
    var _0x5f2469 = _0x3f3179(_0x68d5cc);
    var _0x4a85eb = _0x3f3179(_0x489cc1);
    var _0x1cbf22 = _0x3f3179(_0x336ba1);
    var _0x5171a4 = _0x3f3179(_0x8c4bc0);
    try {
      firebase.storage().ref(_0x5f2469).getDownloadURL().then(function (_0x1b7280) {
        var _0x153138 = new XMLHttpRequest();
        _0x153138.responseType = "arraybuffer";
        _0x153138.onload = function (_0x15d904) {
          var _0x7eedda = _0x153138.response;
          window.unityInstance.SendMessage(_0x4a85eb, _0x1cbf22, _0x49eb92(_0x7eedda));
        };
        _0x153138.open("GET", _0x1b7280);
        _0x153138.send();
      }).catch(function (_0x5d9eba) {
        window.unityInstance.SendMessage(_0x4a85eb, _0x5171a4, JSON.stringify(_0x5d9eba, Object.getOwnPropertyNames(_0x5d9eba)));
      });
    } catch (_0x5cb293) {
      window.unityInstance.SendMessage(_0x4a85eb, _0x5171a4, JSON.stringify(_0x5cb293, Object.getOwnPropertyNames(_0x5cb293)));
    }
    function _0x49eb92(_0x56d3be) {
      var _0x50bf08 = "";
      var _0x4593a4 = new Uint8Array(_0x56d3be);
      var _0x39f8da = _0x4593a4.byteLength;
      for (var _0x2123f2 = 0; _0x2123f2 < _0x39f8da; _0x2123f2++) {
        _0x50bf08 += String.fromCharCode(_0x4593a4[_0x2123f2]);
      }
      return window.btoa(_0x50bf08);
    }
  }
  function _0x484065() {
    try {
      window[preroll.config.loaderObjectName].log("WGSDK: Getting WeeGoo InGame Ad");
      window[preroll.config.loaderObjectName].refetchAd();
    } catch (_0x558870) {
      console.log("No WeeGooAFG implementation found!");
    }
  }
  function _0x241e59(_0x4a2bc4) {
    _0x4a2bc4 = _0x25adcd(_0x4a2bc4);
    window.GD_OPTIONS = {
      debug: false,
      gameId: _0x4a2bc4,
      onEvent: function (_0x12ec54) {
        switch (_0x12ec54.name) {
          case "SDK_GAME_START":
            _0x4fe31a("GameDistribution", "ResumeGameCallback");
            break;
          case "SDK_GAME_PAUSE":
            _0x4fe31a("GameDistribution", "PauseGameCallback");
            break;
          case "SDK_REWARDED_WATCH_COMPLETE":
            _0x4fe31a("GameDistribution", "RewardedCompleteCallback");
            break;
          case "SDK_ERROR":
            break;
        }
      }
    };
    (function (_0x31a3ab, _0x5a61ed, _0x29aaf6) {
      var _0x429bf0;
      var _0x880b13 = _0x31a3ab.getElementsByTagName(_0x5a61ed)[0];
      if (_0x31a3ab.getElementById(_0x29aaf6)) {
        return;
      }
      _0x429bf0 = _0x31a3ab.createElement(_0x5a61ed);
      _0x429bf0.id = _0x29aaf6;
      _0x429bf0.src = "//html5.api.gamedistribution.com/main.min.js";
      _0x880b13.parentNode.insertBefore(_0x429bf0, _0x880b13);
    })(document, "script", "gamedistribution-jssdk");
  }
  function _0x40e4f6() {
    if (typeof gdsdk !== "undefined" && typeof gdsdk.preloadAd !== "undefined") {
      gdsdk.preloadAd(gdsdk.AdType.Rewarded).then(function (_0x39aa31) {
        _0x4fe31a("GameDistribution", "PreloadRewardedVideoCallback", 1);
      }).catch(function (_0x4ac37d) {
        _0x4fe31a("GameDistribution", "PreloadRewardedVideoCallback", 0);
      });
    }
  }
  function _0x4d3ad6(_0x5b6446) {
    _0x5b6446 = _0x25adcd(_0x5b6446);
    if (typeof gdsdk !== "undefined" && typeof gdsdk.sendEvent !== "undefined" && typeof _0x5b6446 !== "undefined") {
      gdsdk.sendEvent(_0x5b6446).then(function (_0x220a0c) {
        console.log("Game event post message sent Succesfully...");
      }).catch(function (_0x233d39) {
        console.log(_0x233d39.message);
      });
    }
  }
  function _0x4676d2(_0x245321) {
    if (typeof gdsdk !== "undefined" && typeof gdsdk.showAd !== "undefined") {
      _0x245321 = _0x25adcd(_0x245321) || gdsdk.AdType.Interstitial;
      console.log("gd show ads: " + _0x245321);
      gdsdk.showAd(_0x245321).then(function (_0x42b4c2) {
        if (_0x245321 === gdsdk.AdType.Rewarded) {
          _0x4fe31a("GameDistribution", "RewardedVideoSuccessCallback");
        }
      }).catch(function (_0x4f111f) {
        if (_0x245321 === gdsdk.AdType.Rewarded) {
          _0x4fe31a("GameDistribution", "RewardedVideoFailureCallback");
        }
      });
    }
  }
  function _0x175b11(_0x888cbd) {
    try {
      window[preroll.config.loaderObjectName].log("WGSDK: Sending game event");
      window[preroll.config.loaderObjectName].GameEvent(_0x888cbd);
    } catch (_0x4880c8) {
      console.log("No WeeGooAFG implementation found!");
    }
  }
  function _0x377c66() {
    var _0x418ef3 = firebaseConfig.projectId;
    var _0x183831 = _0x3e3578(_0x418ef3) + 1;
    var _0x2e2538 = _0x253dd7(_0x183831);
    _0x53c85c(_0x418ef3, _0x2e2538, _0x183831);
    return _0x2e2538;
  }
  function _0x4d2e43(_0x1deb4e, _0x3203c1, _0x4c83d5, _0xbc3e7d, _0x51ab53) {
    var _0x2ed8ed = _0x3f3179(_0x1deb4e);
    var _0x81f5db = _0x3f3179(_0x3203c1);
    var _0x2bfe3f = _0x3f3179(_0x4c83d5);
    var _0x25e7f5 = _0x3f3179(_0xbc3e7d);
    var _0x4fd575 = _0x3f3179(_0x51ab53);
    try {
      firebase.firestore().collection(_0x2ed8ed).doc(_0x81f5db).get().then(function (_0x12c4bd) {
        if (_0x12c4bd.exists) {
          window.unityInstance.SendMessage(_0x2bfe3f, _0x25e7f5, JSON.stringify(_0x12c4bd.data()));
        } else {
          window.unityInstance.SendMessage(_0x2bfe3f, _0x25e7f5, "null");
        }
      }).catch(function (_0x3dc637) {
        window.unityInstance.SendMessage(_0x2bfe3f, _0x4fd575, JSON.stringify(_0x3dc637, Object.getOwnPropertyNames(_0x3dc637)));
      });
    } catch (_0x491367) {
      window.unityInstance.SendMessage(_0x2bfe3f, _0x4fd575, JSON.stringify(_0x491367, Object.getOwnPropertyNames(_0x491367)));
    }
  }
  function _0x4b33de(_0x1e01d7, _0x24fc93, _0x56ddec, _0x593d60) {
    var _0x594fd4 = _0x3f3179(_0x1e01d7);
    var _0xc4123a = _0x3f3179(_0x24fc93);
    var _0x41425a = _0x3f3179(_0x56ddec);
    var _0x61ef81 = _0x3f3179(_0x593d60);
    try {
      firebase.firestore().collection(_0x594fd4).get().then(function (_0x337faf) {
        var _0x141965 = {};
        _0x337faf.forEach(function (_0x5ec842) {
          _0x141965[_0x5ec842.id] = _0x5ec842.data();
        });
        window.unityInstance.SendMessage(_0xc4123a, _0x41425a, JSON.stringify(_0x141965));
      }).catch(function (_0x38080e) {
        window.unityInstance.SendMessage(_0xc4123a, _0x61ef81, JSON.stringify(_0x38080e, Object.getOwnPropertyNames(_0x38080e)));
      });
    } catch (_0xedcb9e) {
      window.unityInstance.SendMessage(_0xc4123a, _0x61ef81, JSON.stringify(_0xedcb9e, Object.getOwnPropertyNames(_0xedcb9e)));
    }
  }
  function _0x246e81(_0x562e09, _0x567b3, _0x3635ff, _0x3720f5) {
    var _0x58cfa8 = _0x3f3179(_0x562e09);
    var _0x1a4f5e = _0x3f3179(_0x567b3);
    var _0x5498e1 = _0x3f3179(_0x3635ff);
    var _0x28e5b2 = _0x3f3179(_0x3720f5);
    try {
      firebase.database().ref(_0x58cfa8).once("value").then(function (_0x3b085e) {
        window.unityInstance.SendMessage(_0x1a4f5e, _0x5498e1, JSON.stringify(_0x3b085e.val()));
      });
    } catch (_0x111282) {
      window.unityInstance.SendMessage(_0x1a4f5e, _0x28e5b2, JSON.stringify(_0x111282, Object.getOwnPropertyNames(_0x111282)));
    }
  }
  function _0x400a89(_0x2e204a, _0x30efc3, _0x389c45, _0x13e157, _0x3ef9f5, _0x3e88d7, _0x3c9263) {
    var _0x2d54fa = _0x3f3179(_0x2e204a);
    var _0x6ba4fd = _0x3f3179(_0x30efc3);
    var _0x56f74a = _0x3f3179(_0x389c45);
    var _0x99bf61 = _0x3f3179(_0x3ef9f5);
    var _0x118704 = _0x3f3179(_0x3e88d7);
    var _0x3136e1 = _0x3f3179(_0x3c9263);
    try {
      var _0x4a4806 = {};
      _0x4a4806[_0x56f74a] = firebase.firestore.FieldValue.increment(_0x13e157);
      firebase.firestore().collection(_0x2d54fa).doc(_0x6ba4fd).update(_0x4a4806).then(function () {
        window.unityInstance.SendMessage(_0x99bf61, _0x118704, "Success: incremented " + _0x56f74a + " by " + _0x13e157);
      }).catch(function (_0x36cffb) {
        window.unityInstance.SendMessage(_0x99bf61, _0x3136e1, JSON.stringify(_0x36cffb, Object.getOwnPropertyNames(_0x36cffb)));
      });
    } catch (_0x2271d5) {
      window.unityInstance.SendMessage(_0x99bf61, _0x3136e1, JSON.stringify(_0x2271d5, Object.getOwnPropertyNames(_0x2271d5)));
    }
  }
  function _0x4c5836(_0x5ed85f) {
    var _0x49dc24 = _0x25adcd(_0x5ed85f);
    var _0x5394ee = window[_0x49dc24];
    if (_0x5394ee) {
      _0x5394ee();
    }
  }
  function _0x331b65() {
    return /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
  }
  var _0x2592e8 = null;
  var _0x5cbe67 = 0;
  function _0x5c47a1() {
    return _0x2592e8 && _0x2592e8.activated || _0x5cbe67 != 0;
  }
  var _0x38f1f8 = 1;
  var _0x513aa7 = {
    x: 0,
    y: 0,
    z: 0
  };
  function _0x2f29bb() {
    _0x513aa7 = {
      x: _0x2592e8.x * _0x38f1f8,
      y: _0x2592e8.y * _0x38f1f8,
      z: _0x2592e8.z * _0x38f1f8
    };
    if (_0x5cbe67 != 0) {
      _0x38b26e(_0x5cbe67, _0x513aa7.x, _0x513aa7.y, _0x513aa7.z);
    }
  }
  var _0x1cb3e9 = 0;
  var _0xa2f756 = 0;
  var _0x425002 = 0;
  var _0x115e38 = 0;
  var _0x172832 = 0;
  function _0xb46d45(_0x4e69b5, _0xb35acb) {
    var _0x567568 = {
      x: _0x4e69b5.x - _0xb35acb.x,
      y: _0x4e69b5.y - _0xb35acb.y,
      z: _0x4e69b5.z - _0xb35acb.z
    };
    var _0xe3d637 = _0x567568.x * _0x567568.x + _0x567568.y * _0x567568.y + _0x567568.z * _0x567568.z;
    var _0x12726d = {
      x: _0x4e69b5.x + _0xb35acb.x,
      y: _0x4e69b5.y + _0xb35acb.y,
      z: _0x4e69b5.z + _0xb35acb.z
    };
    var _0x44ae07 = _0x12726d.x * _0x12726d.x + _0x12726d.y * _0x12726d.y + _0x12726d.z * _0x12726d.z;
    if (_0xe3d637 <= _0x44ae07) {
      return _0x567568;
    } else {
      return _0x12726d;
    }
  }
  function _0x4c1d75(_0x266d3d) {
    var _0x141625 = {
      x: _0x266d3d.accelerationIncludingGravity.x * _0x38f1f8,
      y: _0x266d3d.accelerationIncludingGravity.y * _0x38f1f8,
      z: _0x266d3d.accelerationIncludingGravity.z * _0x38f1f8
    };
    if (_0x5cbe67 != 0) {
      _0x38b26e(_0x5cbe67, _0x141625.x, _0x141625.y, _0x141625.z);
    }
    var _0x191318 = {
      x: _0x266d3d.acceleration.x * _0x38f1f8,
      y: _0x266d3d.acceleration.y * _0x38f1f8,
      z: _0x266d3d.acceleration.z * _0x38f1f8
    };
    if (_0x425002 != 0) {
      _0x38b26e(_0x425002, _0x191318.x, _0x191318.y, _0x191318.z);
    }
    if (_0x115e38 != 0) {
      var _0x317410 = _0xb46d45(_0x141625, _0x191318);
      _0x38b26e(_0x115e38, _0x317410.x, _0x317410.y, _0x317410.z);
    }
    if (_0x172832 != 0) {
      var _0x21fa5d = Math.PI / 180;
      _0x38b26e(_0x172832, _0x266d3d.rotationRate.alpha * _0x21fa5d, _0x266d3d.rotationRate.beta * _0x21fa5d, _0x266d3d.rotationRate.gamma * _0x21fa5d);
    }
  }
  var _0x38273b = 0;
  function _0x1baeb7(_0x3aa14f) {
    if (_0x3aa14f & 1) {
      if (typeof DeviceOrientationEvent.requestPermission === "function") {
        DeviceOrientationEvent.requestPermission().then(function (_0x28f368) {
          if (_0x28f368 === "granted") {
            _0x38273b &= ~1;
          } else {
            _0x8cebcb("DeviceOrientationEvent permission not granted");
          }
        }).catch(function (_0x419876) {
          _0x8cebcb(_0x419876);
          _0x38273b |= 1;
        });
      }
    }
    if (_0x3aa14f & 2) {
      if (typeof DeviceMotionEvent.requestPermission === "function") {
        DeviceMotionEvent.requestPermission().then(function (_0x204ed8) {
          if (_0x204ed8 === "granted") {
            _0x38273b &= ~2;
          } else {
            _0x8cebcb("DeviceMotionEvent permission not granted");
          }
        }).catch(function (_0x1145f4) {
          _0x8cebcb(_0x1145f4);
          _0x38273b |= 2;
        });
      }
    }
  }
  function _0x748110() {
    if (_0x5cbe67 == 0 && _0x425002 == 0 && _0x115e38 == 0 && _0x172832 == 0) {
      _0x1baeb7(2);
      window.addEventListener("devicemotion", _0x4c1d75);
    }
  }
  function _0x3b8e4e() {
    var _0x1a9333 = 9.80665;
    _0x38f1f8 = /(iPhone|iPad|Macintosh)/i.test(navigator.userAgent) ? 1 / _0x1a9333 : -1 / _0x1a9333;
  }
  function _0x19bf7a(_0x3b7651, _0x54e6e6) {
    _0x3b8e4e();
    if (typeof Accelerometer === "undefined") {
      _0x748110();
      if (_0x3b7651 != 0) {
        _0x5cbe67 = _0x3b7651;
      }
      return;
    }
    if (_0x3b7651 != 0) {
      _0x5cbe67 = _0x3b7651;
    }
    function _0x58fdbd(_0x405027) {
      _0x2592e8 = new Accelerometer({
        frequency: _0x405027,
        referenceFrame: "device"
      });
      _0x2592e8.addEventListener("reading", _0x2f29bb);
      _0x2592e8.addEventListener("error", function (_0x176fd6) {
        _0x8cebcb(_0x176fd6.error ? _0x176fd6.error : _0x176fd6);
      });
      _0x2592e8.start();
      _0xa2f756 = _0x405027;
    }
    if (_0x2592e8) {
      if (_0xa2f756 != _0x54e6e6) {
        _0x2592e8.stop();
        _0x2592e8.removeEventListener("reading", _0x2f29bb);
        _0x58fdbd(_0x54e6e6);
      }
    } else if (_0x1cb3e9 != 0) {
      _0x1cb3e9 = _0x54e6e6;
    } else {
      _0x1cb3e9 = _0x54e6e6;
      navigator.permissions.query({
        name: "accelerometer"
      }).then(function (_0x151cb5) {
        if (_0x151cb5.state === "granted") {
          _0x58fdbd(_0x1cb3e9);
        } else {
          _0x8cebcb("No permission to use Accelerometer.");
        }
        _0x1cb3e9 = 0;
      });
    }
  }
  function _0x14d986() {
    if (_0x5cbe67 == 0 && _0x425002 == 0 && _0x115e38 == 0 && _0x172832 == 0) {
      window.removeEventListener("devicemotion", _0x476780);
    }
  }
  function _0x21576f() {
    if (_0x2592e8) {
      if (typeof GravitySensor !== "undefined" || _0x115e38 == 0) {
        _0x2592e8.stop();
        _0x2592e8.removeEventListener("reading", _0x2f29bb);
        _0x2592e8 = null;
      }
      _0x5cbe67 = 0;
      _0xa2f756 = 0;
    } else if (_0x5cbe67 != 0) {
      _0x5cbe67 = 0;
      _0x14d986();
    }
  }
  function _0x1dfc4b(_0x3c399f, _0x19455d) {
    var _0x477cec = "";
    for (var _0x467251 = 0; _0x467251 < _0x19455d; _0x467251++) {
      _0x477cec += String.fromCharCode(_0x4f26b1[_0x3c399f + _0x467251]);
    }
    _0x3e078a.canvas.style.cursor = "url(data:image/cur;base64," + btoa(_0x477cec) + "),default";
  }
  function _0x126d28(_0x47d165) {
    _0x3e078a.canvas.style.cursor = _0x47d165 ? "default" : "none";
  }
  function _0x20fd0f(_0x55bad5) {
    if (typeof window.CSS !== "undefined" && typeof window.CSS.escape !== "undefined") {
      return window.CSS.escape(_0x55bad5);
    }
    return _0x55bad5.replace(/(#|\.|\+|\[|\]|\(|\)|\{|\})/g, "\\$1");
  }
  function _0x28f20f() {
    var _0x196da5 = _0x3e078a.canvas ? _0x3e078a.canvas.id : "unity-canvas";
    return "#" + _0x20fd0f(_0x196da5);
  }
  function _0x56c6c3(_0x3e9f37, _0x45ddec, _0x23aa26, _0x349bb7) {
    var _0x462f3f = document.querySelector(_0x28f20f());
    var _0x46577a = _0x462f3f && _0x462f3f.getBoundingClientRect();
    _0x52253e[_0x23aa26 >> 2] = _0x3e9f37 - (_0x46577a ? _0x46577a.left : 0);
    _0x52253e[_0x349bb7 >> 2] = _0x45ddec - (_0x46577a ? _0x46577a.top : 0);
  }
  function _0x59a36d(_0x3f821b) {
    var _0x4410a1 = _0x3e3578(_0x3f821b) + 1;
    var _0x1cea48 = _0x253dd7(_0x4410a1);
    _0x53c85c(_0x3f821b, _0x1cea48, _0x4410a1);
    return _0x1cea48;
  }
  function _0x38e61d() {
    var _0x532d73 = _0x28f20f();
    if (_0x38e61d.selector != _0x532d73) {
      _0x2b8491(_0x38e61d.ptr);
      _0x38e61d.ptr = _0x59a36d(_0x532d73);
      _0x38e61d.selector = _0x532d73;
    }
    return _0x38e61d.ptr;
  }
  function _0x55589a(_0x3b262a) {
    var _0x4d7221 = _0x3f3179(_0x3b262a);
    try {
      eval(_0x4d7221);
    } catch (_0x52303a) {
      console.error(_0x52303a);
    }
  }
  function _0x541938(_0x410ab2) {
    var _0x2332f2 = _0x3f3179(_0x410ab2);
    window.open(_0x2332f2, "_blank", "");
  }
  var _0x53a1d0 = {
    numPendingSync: 0,
    syncInternal: 1000,
    syncInProgress: false,
    sync: function (_0x3a994e) {
      if (_0x3a994e) {
        if (_0x53a1d0.numPendingSync == 0) {
          return;
        }
      } else if (_0x53a1d0.syncInProgress) {
        _0x53a1d0.numPendingSync++;
        return;
      }
      _0x53a1d0.syncInProgress = true;
      _0x221e83.syncfs(false, function (_0x4bcb64) {
        _0x53a1d0.syncInProgress = false;
      });
      _0x53a1d0.numPendingSync = 0;
    }
  };
  function _0x1db2c2() {
    _0x3e078a.setInterval(function () {
      _0x53a1d0.sync(true);
    }, _0x53a1d0.syncInternal);
  }
  function _0x1ceef3() {
    _0x53a1d0.sync(false);
  }
  var _0x77585f = null;
  function _0x5e0509() {
    if (typeof GravitySensor !== "undefined") {
      return _0x77585f && _0x77585f.activated;
    } else {
      return _0x115e38 != 0;
    }
  }
  function _0x564de2() {
    if (_0x115e38 != 0) {
      _0x38b26e(_0x115e38, _0x77585f.x * _0x38f1f8, _0x77585f.y * _0x38f1f8, _0x77585f.z * _0x38f1f8);
    }
  }
  var _0x2b02ea = 0;
  var _0x7f2699 = null;
  function _0x46c4ef() {
    var _0x477779 = {
      x: _0x7f2699.x * _0x38f1f8,
      y: _0x7f2699.y * _0x38f1f8,
      z: _0x7f2699.z * _0x38f1f8
    };
    if (_0x425002 != 0) {
      _0x38b26e(_0x425002, _0x477779.x, _0x477779.y, _0x477779.z);
    }
    if (_0x115e38 != 0 && typeof GravitySensor === "undefined") {
      var _0x19a140 = _0xb46d45(_0x513aa7, _0x477779);
      _0x38b26e(_0x115e38, _0x19a140.x, _0x19a140.y, _0x19a140.z);
    }
  }
  var _0x25f3d9 = 0;
  var _0x4f1011 = 0;
  function _0x3da009(_0x6695a9, _0x3f2c24) {
    _0x3b8e4e();
    if (typeof LinearAccelerationSensor === "undefined") {
      _0x748110();
      if (_0x6695a9 != 0) {
        _0x425002 = _0x6695a9;
      }
      return;
    }
    if (_0x6695a9 != 0) {
      _0x425002 = _0x6695a9;
    }
    function _0x29db5e(_0x5f53cf) {
      _0x7f2699 = new LinearAccelerationSensor({
        frequency: _0x5f53cf,
        referenceFrame: "device"
      });
      _0x7f2699.addEventListener("reading", _0x46c4ef);
      _0x7f2699.addEventListener("error", function (_0x434676) {
        _0x8cebcb(_0x434676.error ? _0x434676.error : _0x434676);
      });
      _0x7f2699.start();
      _0x4f1011 = _0x5f53cf;
    }
    if (_0x7f2699) {
      if (_0x4f1011 != _0x3f2c24) {
        _0x7f2699.stop();
        _0x7f2699.removeEventListener("reading", _0x46c4ef);
        _0x29db5e(_0x3f2c24);
      }
    } else if (_0x25f3d9 != 0) {
      _0x25f3d9 = _0x3f2c24;
    } else {
      _0x25f3d9 = _0x3f2c24;
      navigator.permissions.query({
        name: "accelerometer"
      }).then(function (_0x4aa41a) {
        if (_0x4aa41a.state === "granted") {
          _0x29db5e(_0x25f3d9);
        } else {
          _0x8cebcb("No permission to use LinearAccelerationSensor.");
        }
        _0x25f3d9 = 0;
      });
    }
  }
  function _0x5d8d52(_0x2b15f3, _0x4fed01) {
    if (typeof GravitySensor === "undefined") {
      _0x19bf7a(0, Math.max(_0x4fed01, _0xa2f756));
      _0x3da009(0, Math.max(_0x4fed01, _0x4f1011));
      _0x115e38 = _0x2b15f3;
      return;
    }
    _0x3b8e4e();
    _0x115e38 = _0x2b15f3;
    function _0x31ef15(_0x582966) {
      _0x77585f = new GravitySensor({
        frequency: _0x582966,
        referenceFrame: "device"
      });
      _0x77585f.addEventListener("reading", _0x564de2);
      _0x77585f.addEventListener("error", function (_0x378be5) {
        _0x8cebcb(_0x378be5.error ? _0x378be5.error : _0x378be5);
      });
      _0x77585f.start();
    }
    if (_0x77585f) {
      _0x77585f.stop();
      _0x77585f.removeEventListener("reading", _0x564de2);
      _0x31ef15(_0x4fed01);
    } else if (_0x2b02ea != 0) {
      _0x2b02ea = _0x4fed01;
    } else {
      _0x2b02ea = _0x4fed01;
      navigator.permissions.query({
        name: "accelerometer"
      }).then(function (_0x42edde) {
        if (_0x42edde.state === "granted") {
          _0x31ef15(_0x2b02ea);
        } else {
          _0x8cebcb("No permission to use GravitySensor.");
        }
        _0x2b02ea = 0;
      });
    }
  }
  function _0x54e8bb() {
    if (_0x7f2699) {
      if (typeof GravitySensor !== "undefined" || _0x115e38 == 0) {
        _0x7f2699.stop();
        _0x7f2699.removeEventListener("reading", _0x46c4ef);
        _0x7f2699 = null;
      }
      _0x425002 = 0;
      _0x4f1011 = 0;
    } else if (_0x425002 != 0) {
      _0x425002 = 0;
      _0x14d986();
    }
  }
  function _0x15d2c4() {
    _0x115e38 = 0;
    if (typeof GravitySensor === "undefined") {
      if (_0x5cbe67 == 0) {
        _0x21576f();
      }
      if (_0x425002 == 0) {
        _0x54e8bb();
      }
      return;
    }
    if (_0x77585f) {
      _0x77585f.stop();
      _0x77585f.removeEventListener("reading", _0x564de2);
      _0x77585f = null;
    }
  }
  function _0xda32c3(_0xf29b6a) {
    try {
      (function () {
        _0x4f38c0.call(null, _0xf29b6a);
      })();
    } catch (_0x3f5785) {
      console.warn(_0x3f5785);
    }
  }
  var _0x5a6321 = null;
  function _0x2166b5() {
    return _0x5a6321 && _0x5a6321.activated || _0x172832 != 0;
  }
  function _0x37d9d9() {
    if (_0x172832 != 0) {
      _0x38b26e(_0x172832, _0x5a6321.x, _0x5a6321.y, _0x5a6321.z);
    }
  }
  var _0xd9d532 = 0;
  function _0x586d7d(_0x78ec17, _0x53f2a2) {
    if (typeof Gyroscope === "undefined") {
      _0x748110();
      _0x172832 = _0x78ec17;
      return;
    }
    _0x172832 = _0x78ec17;
    function _0x28f487(_0x652686) {
      _0x5a6321 = new Gyroscope({
        frequency: _0x652686,
        referenceFrame: "device"
      });
      _0x5a6321.addEventListener("reading", _0x37d9d9);
      _0x5a6321.addEventListener("error", function (_0x5b8f31) {
        _0x8cebcb(_0x5b8f31.error ? _0x5b8f31.error : _0x5b8f31);
      });
      _0x5a6321.start();
    }
    if (_0x5a6321) {
      _0x5a6321.stop();
      _0x5a6321.removeEventListener("reading", _0x37d9d9);
      _0x28f487(_0x53f2a2);
    } else if (_0xd9d532 != 0) {
      _0xd9d532 = _0x53f2a2;
    } else {
      _0xd9d532 = _0x53f2a2;
      navigator.permissions.query({
        name: "gyroscope"
      }).then(function (_0x161289) {
        if (_0x161289.state === "granted") {
          _0x28f487(_0xd9d532);
        } else {
          _0x8cebcb("No permission to use Gyroscope.");
        }
        _0xd9d532 = 0;
      });
    }
  }
  function _0x31aadb() {
    if (_0x5a6321) {
      _0x5a6321.stop();
      _0x5a6321.removeEventListener("reading", _0x37d9d9);
      _0x5a6321 = null;
      _0x172832 = 0;
    } else if (_0x172832 != 0) {
      _0x172832 = 0;
      _0x14d986();
    }
  }
  function _0x56bf1c() {
    const _0x469642 = function (_0x2c80e8) {
      if (_0x2c80e8.target.localName !== "canvas") {
        _0x284aca();
      }
    };
    document.addEventListener("contextmenu", _0x469642);
    _0x3e078a.deinitializers.push(function () {
      document.removeEventListener("contextmenu", _0x469642);
    });
  }
  function _0x5dc6e6() {
    return _0x7f2699 && _0x7f2699.activated || _0x425002 != 0;
  }
  function _0x1be19f(_0x22bf7a, _0x56f4d3) {
    var msg = _0x3f3179(_0x22bf7a);
    if (typeof dump == "function") {
      dump(msg);
    }
    switch (_0x56f4d3) {
      case 0:
      case 1:
      case 4:
        console.error(msg);
        return;
      case 2:
        console.warn(msg);
        return;
      case 3:
      case 5:
        console.log(msg);
        return;
      default:
        console.error("Unknown console message type!");
        console.error(msg);
    }
  }
  function _0x5e47f3(_0x239c74, _0x46dd7d) {
    var _0x4ce112 = _0x2d7851();
    if (_0x239c74) {
      _0x53c85c(_0x4ce112, _0x239c74, _0x46dd7d);
    }
    return _0x3e3578(_0x4ce112);
  }
  var _0x31356a = null;
  var _0x1acdf9 = 0;
  function _0x19bf63() {
    return _0x31356a && _0x31356a.activated || _0x1acdf9 != 0;
  }
  function _0x1935ab() {
    if (_0x1acdf9 != 0) {
      _0x54f8ae(_0x1acdf9, _0x31356a.quaternion[0], _0x31356a.quaternion[1], _0x31356a.quaternion[2], _0x31356a.quaternion[3]);
    }
  }
  var _0x5a70c2 = 0;
  function _0x476780(_0x19714e) {
    if (_0x1acdf9) {
      var _0x486671 = Math.PI / 180;
      var _0x5b8eac = _0x19714e.beta * _0x486671;
      var _0x3d36a4 = _0x19714e.gamma * _0x486671;
      var _0x542bd3 = _0x19714e.alpha * _0x486671;
      var _0x208d2e = Math.cos(_0x5b8eac / 2);
      var _0x49c82c = Math.sin(_0x5b8eac / 2);
      var _0xffd672 = Math.cos(_0x3d36a4 / 2);
      var _0x2b5ceb = Math.sin(_0x3d36a4 / 2);
      var _0x17d9f6 = Math.cos(_0x542bd3 / 2);
      var _0x12e7e9 = Math.sin(_0x542bd3 / 2);
      var _0x138f65 = _0x49c82c * _0xffd672 * _0x17d9f6 - _0x208d2e * _0x2b5ceb * _0x12e7e9;
      var _0x3b11bd = _0x208d2e * _0x2b5ceb * _0x17d9f6 + _0x49c82c * _0xffd672 * _0x12e7e9;
      var _0x47d679 = _0x208d2e * _0xffd672 * _0x12e7e9 + _0x49c82c * _0x2b5ceb * _0x17d9f6;
      var _0x1ca441 = _0x208d2e * _0xffd672 * _0x17d9f6 - _0x49c82c * _0x2b5ceb * _0x12e7e9;
      _0x54f8ae(_0x1acdf9, _0x138f65, _0x3b11bd, _0x47d679, _0x1ca441);
    }
  }
  function _0x589095(_0x3f615f, _0x1b9b09) {
    if (typeof RelativeOrientationSensor === "undefined") {
      if (_0x1acdf9 == 0) {
        _0x1acdf9 = _0x3f615f;
        _0x1baeb7(1);
        window.addEventListener("deviceorientation", _0x476780);
      }
      return;
    }
    _0x1acdf9 = _0x3f615f;
    function _0x177af5(_0x1d2fa3) {
      _0x31356a = new RelativeOrientationSensor({
        frequency: _0x1d2fa3,
        referenceFrame: "device"
      });
      _0x31356a.addEventListener("reading", _0x1935ab);
      _0x31356a.addEventListener("error", function (_0x27e37f) {
        _0x8cebcb(_0x27e37f.error ? _0x27e37f.error : _0x27e37f);
      });
      _0x31356a.start();
    }
    if (_0x31356a) {
      _0x31356a.stop();
      _0x31356a.removeEventListener("reading", _0x1935ab);
      _0x177af5(_0x1b9b09);
    } else if (_0x5a70c2 != 0) {
      _0x5a70c2 = _0x1b9b09;
    } else {
      _0x5a70c2 = _0x1b9b09;
      Promise.all([navigator.permissions.query({
        name: "accelerometer"
      }), navigator.permissions.query({
        name: "gyroscope"
      })]).then(function (_0x56ddc4) {
        if (_0x56ddc4.every(function (_0x25f527) {
          return _0x25f527.state === "granted";
        })) {
          _0x177af5(_0x5a70c2);
        } else {
          _0x8cebcb("No permissions to use RelativeOrientationSensor.");
        }
        _0x5a70c2 = 0;
      });
    }
  }
  function _0x281783() {
    if (_0x31356a) {
      _0x31356a.stop();
      _0x31356a.removeEventListener("reading", _0x1935ab);
      _0x31356a = null;
    } else if (_0x1acdf9 != 0) {
      window.removeEventListener("deviceorientation", _0x476780);
    }
    _0x1acdf9 = 0;
  }
  function _0x10c2e6() {
    if (_0x38273b == 0) {
      return;
    }
    _0x1baeb7(_0x38273b);
  }
  function _0x21323b() {
    _0x3e078a.QuitCleanup();
  }
  var _0x5b2e24 = 0;
  function _0x3fe98a() {
    if (_0x5b2e24) {
      _0x1cd87a(_0x5b2e24, window.innerWidth, window.innerHeight, screen.orientation ? screen.orientation.angle : window.orientation);
    }
  }
  function _0x571f94() {
    _0x5b2e24 = 0;
    window.removeEventListener("resize", _0x3fe98a);
    if (screen.orientation) {
      screen.orientation.removeEventListener("change", _0x3fe98a);
    }
  }
  function _0x52dc08(_0x4f7835) {
    if (!_0x5b2e24) {
      if (screen.orientation) {
        screen.orientation.addEventListener("change", _0x3fe98a);
      }
      window.addEventListener("resize", _0x3fe98a);
      _0x5b2e24 = _0x4f7835;
      setTimeout(_0x3fe98a, 0);
    }
  }
  var _0x527f17 = -1;
  var _0x4af7b0 = -1;
  var _0x27f29b = -1;
  function _0x3dc66c(_0x523ff0) {
    if (!screen.orientation || !screen.orientation.lock) {
      return;
    }
    function _0x1996de() {
      _0x4af7b0 = _0x527f17;
      var _0x1bf9c4 = ["any", 0, "landscape", "portrait", "portrait-primary", "portrait-secondary", "landscape-primary", "landscape-secondary"];
      var _0x5e7550 = _0x1bf9c4[_0x4af7b0];
      screen.orientation.lock(_0x5e7550).then(function () {
        if (_0x527f17 != _0x4af7b0) {
          _0x27f29b = setTimeout(_0x1996de, 0);
        } else {
          _0x27f29b = -1;
        }
      }).catch(function (_0x1314f1) {
        _0x8cebcb(_0x1314f1);
        _0x27f29b = -1;
      });
    }
    _0x527f17 = _0x523ff0;
    if (_0x27f29b == -1 && _0x523ff0 != _0x4af7b0) {
      _0x27f29b = setTimeout(_0x1996de, 0);
    }
  }
  var _0x295b40 = {
    audioInstanceIdCounter: 0,
    audioInstances: {},
    audioContext: null,
    audioWebEnabled: 0,
    audioCache: [],
    pendingAudioSources: {}
  };
  function _0x241911(_0x37d92b) {
    _0x37d92b.estimatePlaybackPosition = function () {
      var _0x1d150f = (_0x295b40.audioContext.currentTime - _0x37d92b.playbackStartTime) * _0x37d92b.playbackRate.value;
      if (_0x37d92b.loop && _0x1d150f >= _0x37d92b.loopStart) {
        _0x1d150f = (_0x1d150f - _0x37d92b.loopStart) % (_0x37d92b.loopEnd - _0x37d92b.loopStart) + _0x37d92b.loopStart;
      }
      return _0x1d150f;
    };
    _0x37d92b.setPitch = function (_0x1d7caa) {
      var _0x1e568f = _0x37d92b.estimatePlaybackPosition();
      if (_0x1e568f >= 0) {
        _0x37d92b.playbackStartTime = _0x295b40.audioContext.currentTime - _0x1e568f / _0x1d7caa;
      }
      if (_0x37d92b.playbackRate.value !== _0x1d7caa) {
        _0x37d92b.playbackRate.value = _0x1d7caa;
      }
    };
  }
  function _0xcc6ce7(_0x3a3260, _0x1956b3) {
    var _0x3a84a2 = {
      buffer: _0x3a3260,
      error: _0x1956b3
    };
    _0x3a84a2.release = function () {};
    _0x3a84a2.getLength = function () {
      if (!this.buffer) {
        console.log("Trying to get length of sound which is not loaded.");
        return 0;
      }
      var _0x1a9a10 = 44100 / this.buffer.sampleRate;
      return this.buffer.length * _0x1a9a10;
    };
    _0x3a84a2.getData = function (_0x4ab945, _0x43b60e) {
      if (!this.buffer) {
        console.log("Trying to get data of sound which is not loaded.");
        return 0;
      }
      var _0x5d9392 = _0x4ab945 >> 2;
      var _0x20f383 = _0x2c2a07.subarray(_0x5d9392, _0x5d9392 + (_0x43b60e >> 2));
      var _0x57a5e6 = Math.floor((_0x43b60e >> 2) / this.buffer.numberOfChannels);
      var _0x475ab5 = Math.min(this.buffer.length, _0x57a5e6);
      for (var _0x232d01 = 0; _0x232d01 < this.buffer.numberOfChannels; _0x232d01++) {
        var _0x51fb37 = this.buffer.getChannelData(_0x232d01).subarray(0, _0x475ab5);
        _0x20f383.set(_0x51fb37, _0x232d01 * _0x475ab5);
      }
      return _0x475ab5 * this.buffer.numberOfChannels * 4;
    };
    _0x3a84a2.getNumberOfChannels = function () {
      if (!this.buffer) {
        console.log("Trying to get metadata of sound which is not loaded.");
        return 0;
      }
      return this.buffer.numberOfChannels;
    };
    _0x3a84a2.getFrequency = function () {
      if (!this.buffer) {
        console.log("Trying to get metadata of sound which is not loaded.");
        return 0;
      }
      return this.buffer.sampleRate;
    };
    _0x3a84a2.createSourceNode = function () {
      if (!this.buffer) {
        console.log("Trying to play sound which is not loaded.");
      }
      var _0x28fa5b = _0x295b40.audioContext.createBufferSource();
      _0x28fa5b.buffer = this.buffer;
      _0x241911(_0x28fa5b);
      return _0x28fa5b;
    };
    return _0x3a84a2;
  }
  function _0x5e8668(_0x151e8d, _0x4f222d) {
    var _0x46c74a = {
      callback: _0x151e8d,
      userData: _0x4f222d,
      source: null,
      gain: _0x295b40.audioContext.createGain(),
      panner: _0x295b40.audioContext.createPanner(),
      threeD: false,
      loop: false,
      loopStart: 0,
      loopEnd: 0,
      pitch: 1
    };
    _0x46c74a.panner.rolloffFactor = 0;
    _0x46c74a.release = function () {
      this.disconnectSource();
      this.gain.disconnect();
      this.panner.disconnect();
    };
    _0x46c74a.playSoundClip = function (_0x55088, _0x56f601, _0x1f6cd4) {
      try {
        var _0x3b7234 = this;
        this.source = _0x55088.createSourceNode();
        this.setupPanning();
        this.source.onended = function () {
          _0x3b7234.source.isStopped = true;
          _0x3b7234.disconnectSource();
          if (_0x3b7234.callback) {
            _0x3bdef4("vi", _0x3b7234.callback, [_0x3b7234.userData]);
          }
        };
        this.source.loop = this.loop;
        this.source.loopStart = this.loopStart;
        this.source.loopEnd = this.loopEnd;
        this.source.start(_0x56f601, _0x1f6cd4);
        this.source.playbackStartTime = _0x56f601 - _0x1f6cd4 / this.source.playbackRate.value;
        this.source.setPitch(this.pitch);
      } catch (_0x62c280) {
        console.error("Channel.playSoundClip error. Exception: " + _0x62c280);
      }
    };
    _0x46c74a.stop = function (_0x491557) {
      if (!this.source) {
        return;
      }
      try {
        _0x46c74a.source.stop(_0x295b40.audioContext.currentTime + _0x491557);
      } catch (_0xd622d2) {}
      if (_0x491557 == 0) {
        this.disconnectSource();
      }
    };
    _0x46c74a.isPaused = function () {
      if (!this.source) {
        return true;
      }
      if (this.source.isPausedMockNode) {
        return true;
      }
      if (this.source.mediaElement) {
        return this.source.mediaElement.paused || this.source.pauseRequested;
      }
      return false;
    };
    _0x46c74a.pause = function () {
      if (!this.source || this.source.isPausedMockNode) {
        return;
      }
      if (this.source.mediaElement) {
        this.source._pauseMediaElement();
        return;
      }
      var _0x20377c = {
        isPausedMockNode: true,
        buffer: this.source.buffer,
        loop: this.source.loop,
        loopStart: this.source.loopStart,
        loopEnd: this.source.loopEnd,
        playbackRate: this.source.playbackRate.value,
        scheduledStopTime: undefined,
        playbackPausedAtPosition: this.source.estimatePlaybackPosition(),
        setPitch: function (_0x17e22) {
          this.playbackRate = _0x17e22;
        },
        stop: function (_0x3de9d8) {
          this.scheduledStopTime = _0x3de9d8;
        }
      };
      this.stop(0);
      this.disconnectSource();
      this.source = _0x20377c;
    };
    _0x46c74a.resume = function () {
      if (this.source && this.source.mediaElement) {
        this.source.start(undefined, this.source.currentTime);
        return;
      }
      if (!this.source || !this.source.isPausedMockNode) {
        return;
      }
      var _0x4790c2 = this.source;
      var _0x38d3df = _0xcc6ce7(_0x4790c2.buffer, false);
      this.playSoundClip(_0x38d3df, _0x295b40.audioContext.currentTime, Math.max(0, _0x4790c2.playbackPausedAtPosition));
      this.source.loop = _0x4790c2.loop;
      this.source.loopStart = _0x4790c2.loopStart;
      this.source.loopEnd = _0x4790c2.loopEnd;
      this.source.setPitch(_0x4790c2.playbackRate);
      if (typeof _0x4790c2.scheduledStopTime !== "undefined") {
        var _0x457a9c = Math.max(_0x4790c2.scheduledStopTime - _0x295b40.audioContext.currentTime, 0);
        this.stop(_0x457a9c);
      }
    };
    _0x46c74a.setLoop = function (_0x257853) {
      this.loop = _0x257853;
      if (!this.source || this.source.loop == _0x257853) {
        return;
      }
      this.source.loop = _0x257853;
    };
    _0x46c74a.setLoopPoints = function (_0x4516ae, _0x458e4e) {
      this.loopStart = _0x4516ae;
      this.loopEnd = _0x458e4e;
      if (!this.source) {
        return;
      }
      if (this.source.loopStart !== _0x4516ae) {
        this.source.loopStart = _0x4516ae;
      }
      if (this.source.loopEnd !== _0x458e4e) {
        this.source.loopEnd = _0x458e4e;
      }
    };
    _0x46c74a.set3D = function (_0x523381) {
      if (this.threeD == _0x523381) {
        return;
      }
      this.threeD = _0x523381;
      if (!this.source) {
        return;
      }
      this.setupPanning();
    };
    _0x46c74a.setPitch = function (_0x20db80) {
      this.pitch = _0x20db80;
      if (!this.source) {
        return;
      }
      this.source.setPitch(_0x20db80);
    };
    _0x46c74a.setVolume = function (_0x3b32be) {
      if (this.gain.gain.value == _0x3b32be) {
        return;
      }
      this.gain.gain.value = _0x3b32be;
    };
    _0x46c74a.setPosition = function (_0x32966f, _0x303788, _0x6319f2) {
      var _0x7b9333 = this.panner;
      if (_0x7b9333.positionX) {
        if (_0x7b9333.positionX.value !== _0x32966f) {
          _0x7b9333.positionX.value = _0x32966f;
        }
        if (_0x7b9333.positionY.value !== _0x303788) {
          _0x7b9333.positionY.value = _0x303788;
        }
        if (_0x7b9333.positionZ.value !== _0x6319f2) {
          _0x7b9333.positionZ.value = _0x6319f2;
        }
      } else if (_0x7b9333._x !== _0x32966f || _0x7b9333._y !== _0x303788 || _0x7b9333._z !== _0x6319f2) {
        _0x7b9333.setPosition(_0x32966f, _0x303788, _0x6319f2);
        _0x7b9333._x = _0x32966f;
        _0x7b9333._y = _0x303788;
        _0x7b9333._z = _0x6319f2;
      }
    };
    _0x46c74a.disconnectSource = function () {
      if (!this.source || this.source.isPausedMockNode) {
        return;
      }
      if (this.source.mediaElement) {
        this.source._pauseMediaElement();
      }
      this.source.onended = null;
      this.source.disconnect();
      delete this.source;
    };
    _0x46c74a.setupPanning = function () {
      if (this.source.isPausedMockNode) {
        return;
      }
      this.source.disconnect();
      this.panner.disconnect();
      this.gain.disconnect();
      if (this.threeD) {
        this.source.connect(this.panner);
        this.panner.connect(this.gain);
      } else {
        this.source.connect(this.gain);
      }
      this.gain.connect(_0x295b40.audioContext.destination);
    };
    _0x46c74a.isStopped = function () {
      if (!this.source) {
        return true;
      }
      if (this.source.mediaElement) {
        return this.source.isStopped;
      }
      return false;
    };
    return _0x46c74a;
  }
  function _0x51d87c(_0x49e813, _0x1e947e) {
    if (_0x295b40.audioWebEnabled == 0) {
      return;
    }
    _0x295b40.audioInstances[++_0x295b40.audioInstanceIdCounter] = _0x5e8668(_0x49e813, _0x1e947e);
    return _0x295b40.audioInstanceIdCounter;
  }
  function _0x474dbd(_0x5077f9) {
    if (_0x295b40.audioWebEnabled == 0) {
      return 0;
    }
    var _0x574d11 = _0x295b40.audioInstances[_0x5077f9];
    if (!_0x574d11) {
      return 0;
    }
    return _0x574d11.getLength();
  }
  function _0x38b792(_0x4c8dbb) {
    if (_0x295b40.audioWebEnabled == 0) {
      return 2;
    }
    var _0x92efc = _0x295b40.audioInstances[_0x4c8dbb];
    if (_0x92efc.error) {
      return 2;
    }
    if (_0x92efc.buffer || _0x92efc.url) {
      return 0;
    }
    return 1;
  }
  function _0x5d628e(_0x4f597c) {
    var _0x4185bd = _0x295b40.pendingAudioSources[_0x4f597c];
    _0x4185bd.sourceNode._startPlayback(_0x4185bd.offset);
    delete _0x295b40.pendingAudioSources[_0x4f597c];
  }
  function _0x4bce5a() {
    Object.keys(_0x295b40.pendingAudioSources).forEach(function (_0x393f60) {
      _0x5d628e(_0x393f60);
    });
  }
  function _0x231443() {
    try {
      window.AudioContext = window.AudioContext || window.webkitAudioContext;
      _0x295b40.audioContext = new AudioContext();
      function _0x160e8e() {
        if (_0x295b40.audioContext.state === "suspended") {
          _0x295b40.audioContext.resume().catch(function (_0xd3017c) {
            console.warn("Could not resume audio context. Exception: " + _0xd3017c);
          });
        } else {
          _0x3e078a.clearInterval(_0x151582);
        }
      }
      var _0x151582 = _0x3e078a.setInterval(_0x160e8e, 400);
      _0x295b40.audioWebEnabled = 1;
      function _0x21ad22() {
        try {
          if (_0x295b40.audioContext.state !== "running" && _0x295b40.audioContext.state !== "closed") {
            _0x295b40.audioContext.resume().catch(function (_0x52a917) {
              console.warn("Could not resume audio context. Exception: " + _0x52a917);
            });
          }
          _0x4bce5a();
          var _0x54d635 = 20;
          while (_0x295b40.audioCache.length < _0x54d635) {
            var _0x1b00e5 = new Audio();
            _0x1b00e5.autoplay = false;
            _0x295b40.audioCache.push(_0x1b00e5);
          }
        } catch (_0x4e97a1) {}
      }
      window.addEventListener("mousedown", _0x21ad22);
      window.addEventListener("touchstart", _0x21ad22);
      _0x3e078a.deinitializers.push(function () {
        window.removeEventListener("mousedown", _0x21ad22);
        window.removeEventListener("touchstart", _0x21ad22);
      });
    } catch (_0x2e4f9e) {
      alert("Web Audio API is not supported in this browser");
    }
  }
  function _0x4e6e2f(_0x3dd17d) {
    var _0x13f321 = _0xcc6ce7(null, false);
    _0x295b40.audioContext.decodeAudioData(_0x3dd17d, function (_0x219a18) {
      _0x13f321.buffer = _0x219a18;
    }, function (_0x1bb3ae) {
      _0x13f321.error = true;
      console.log("Decode error: " + _0x1bb3ae);
    });
    return _0x13f321;
  }
  function _0x4e2af6(_0x16a853, _0x2fdf76) {
    _0x295b40.pendingAudioSources[_0x16a853.mediaElement.src] = {
      sourceNode: _0x16a853,
      offset: _0x2fdf76
    };
  }
  function _0x49ab9b(_0x300133) {
    switch (_0x300133) {
      case 13:
        return "audio/mpeg";
      case 20:
        return "audio/wav";
      default:
        return "audio/mp4";
    }
  }
  function _0x4d26dd(_0x34c7e1, _0x5d3e90) {
    var _0x8c06f7 = _0x49ab9b(_0x5d3e90);
    var _0x31bd06 = new Blob([_0x34c7e1], {
      type: _0x8c06f7
    });
    var _0x3f1ff7 = {
      url: URL.createObjectURL(_0x31bd06),
      error: false,
      mediaElement: new Audio()
    };
    _0x3f1ff7.mediaElement.preload = "metadata";
    _0x3f1ff7.mediaElement.src = _0x3f1ff7.url;
    _0x3f1ff7.release = function () {
      if (!this.mediaElement) {
        return;
      }
      this.mediaElement.src = "";
      URL.revokeObjectURL(this.url);
      delete this.mediaElement;
      delete this.url;
    };
    _0x3f1ff7.getLength = function () {
      return this.mediaElement.duration * 44100;
    };
    _0x3f1ff7.getData = function (_0xbfe67e, _0x56d21e) {
      console.warn("getData() is not supported for compressed sound.");
      return 0;
    };
    _0x3f1ff7.getNumberOfChannels = function () {
      console.warn("getNumberOfChannels() is not supported for compressed sound.");
      return 0;
    };
    _0x3f1ff7.getFrequency = function () {
      console.warn("getFrequency() is not supported for compressed sound.");
      return 0;
    };
    _0x3f1ff7.createSourceNode = function () {
      var _0x162808 = this;
      var _0x19e9ed = _0x295b40.audioCache.length ? _0x295b40.audioCache.pop() : new Audio();
      _0x19e9ed.preload = "metadata";
      _0x19e9ed.src = this.url;
      var _0x5d7965 = _0x295b40.audioContext.createMediaElementSource(_0x19e9ed);
      Object.defineProperty(_0x5d7965, "loop", {
        get: function () {
          return _0x5d7965.mediaElement.loop;
        },
        set: function (_0x3ba3fb) {
          if (_0x5d7965.mediaElement.loop !== _0x3ba3fb) {
            _0x5d7965.mediaElement.loop = _0x3ba3fb;
          }
        }
      });
      _0x5d7965.playbackRate = {};
      Object.defineProperty(_0x5d7965.playbackRate, "value", {
        get: function () {
          return _0x5d7965.mediaElement.playbackRate;
        },
        set: function (_0x58cbb4) {
          if (_0x5d7965.mediaElement.playbackRate !== _0x58cbb4) {
            _0x5d7965.mediaElement.playbackRate = _0x58cbb4;
          }
        }
      });
      Object.defineProperty(_0x5d7965, "currentTime", {
        get: function () {
          return _0x5d7965.mediaElement.currentTime;
        },
        set: function (_0x46ac3c) {
          if (_0x5d7965.mediaElement.currentTime !== _0x46ac3c) {
            _0x5d7965.mediaElement.currentTime = _0x46ac3c;
          }
        }
      });
      Object.defineProperty(_0x5d7965, "mute", {
        get: function () {
          return _0x5d7965.mediaElement.mute;
        },
        set: function (_0x4c824c) {
          if (_0x5d7965.mediaElement.mute !== _0x4c824c) {
            _0x5d7965.mediaElement.mute = _0x4c824c;
          }
        }
      });
      Object.defineProperty(_0x5d7965, "onended", {
        get: function () {
          return _0x5d7965.mediaElement.onended;
        },
        set: function (_0x5f062c) {
          _0x5d7965.mediaElement.onended = _0x5f062c;
        }
      });
      _0x5d7965.playPromise = null;
      _0x5d7965.playTimeout = null;
      _0x5d7965.pauseRequested = false;
      _0x5d7965.isStopped = false;
      _0x5d7965._pauseMediaElement = function () {
        if (_0x5d7965.playPromise || _0x5d7965.playTimeout) {
          _0x5d7965.pauseRequested = true;
        } else {
          _0x5d7965.mediaElement.pause();
        }
      };
      _0x5d7965._startPlayback = function (_0x23db9a) {
        if (_0x5d7965.playPromise || _0x5d7965.playTimeout) {
          _0x5d7965.mediaElement.currentTime = _0x23db9a;
          _0x5d7965.pauseRequested = false;
          return;
        }
        _0x5d7965.mediaElement.currentTime = _0x23db9a;
        _0x5d7965.playPromise = _0x5d7965.mediaElement.play();
        if (_0x5d7965.playPromise) {
          _0x5d7965.playPromise.then(function () {
            if (_0x5d7965.pauseRequested) {
              _0x5d7965.mediaElement.pause();
              _0x5d7965.pauseRequested = false;
            }
            _0x5d7965.playPromise = null;
          }).catch(function (_0x56f8d7) {
            _0x5d7965.playPromise = null;
            if (_0x56f8d7.name !== "NotAllowedError") {
              throw _0x56f8d7;
            }
            _0x4e2af6(_0x5d7965, _0x23db9a);
          });
        }
      };
      _0x5d7965.start = function (_0x455b09, _0x1506f6) {
        if (typeof _0x455b09 === "undefined") {
          _0x455b09 = _0x295b40.audioContext.currentTime;
        }
        if (typeof _0x1506f6 === "undefined") {
          _0x1506f6 = 0;
        }
        var _0x39ca78 = 4;
        var _0x4a7997 = (_0x455b09 - _0x295b40.audioContext.currentTime) * 1000;
        if (_0x4a7997 > _0x39ca78) {
          _0x5d7965.playTimeout = setTimeout(function () {
            _0x5d7965.playTimeout = null;
            _0x5d7965._startPlayback(_0x1506f6);
          }, _0x4a7997);
        } else {
          _0x5d7965._startPlayback(_0x1506f6);
        }
      };
      _0x5d7965.stop = function (_0x4bafd4) {
        if (typeof _0x4bafd4 === "undefined") {
          _0x4bafd4 = _0x295b40.audioContext.currentTime;
        }
        var _0x48bc6e = 4;
        var _0xad9163 = (_0x4bafd4 - _0x295b40.audioContext.currentTime) * 1000;
        if (_0xad9163 > _0x48bc6e) {
          setTimeout(function () {
            _0x5d7965._pauseMediaElement();
            _0x5d7965.isStopped = true;
          }, _0xad9163);
        } else {
          _0x5d7965._pauseMediaElement();
          _0x5d7965.isStopped = true;
        }
      };
      _0x241911(_0x5d7965);
      return _0x5d7965;
    };
    return _0x3f1ff7;
  }
  function _0x8cd80(_0xa0f42f, _0x47d1dc, _0x3b0a65, _0x55d0c4) {
    if (_0x295b40.audioWebEnabled == 0) {
      return 0;
    }
    var _0xf9d1eb = _0x4f26b1.buffer.slice(_0xa0f42f, _0xa0f42f + _0x47d1dc);
    if (_0x47d1dc < 131072) {
      _0x3b0a65 = 1;
    }
    var _0x161aab;
    if (_0x3b0a65) {
      _0x161aab = _0x4e6e2f(_0xf9d1eb);
    } else {
      _0x161aab = _0x4d26dd(_0xf9d1eb, _0x55d0c4);
    }
    _0x295b40.audioInstances[++_0x295b40.audioInstanceIdCounter] = _0x161aab;
    return _0x295b40.audioInstanceIdCounter;
  }
  function _0x11617c(_0x2045b3, _0x353189, _0x4b64d5, _0x95f7d0) {
    var _0x2097f2 = _0x295b40.audioContext.createBuffer(_0x2045b3, _0x353189, _0x4b64d5);
    for (var _0x3a95dc = 0; _0x3a95dc < _0x2045b3; _0x3a95dc++) {
      var _0x41a1a1 = (_0x95f7d0 >> 2) + _0x353189 * _0x3a95dc;
      var _0x5689ba = _0x2097f2.copyToChannel || function (_0x25391c, _0x1110af, _0x22ed7d) {
        var _0x491564 = _0x25391c.subarray(0, Math.min(_0x25391c.length, this.length - (_0x22ed7d | 0)));
        this.getChannelData(_0x1110af | 0).set(_0x491564, _0x22ed7d | 0);
      };
      _0x5689ba.apply(_0x2097f2, [_0x2c2a07.subarray(_0x41a1a1, _0x41a1a1 + _0x353189), _0x3a95dc, 0]);
    }
    return _0xcc6ce7(_0x2097f2, false);
  }
  function _0x2dfd56(_0x8316b8, _0x2c2e1d, _0x5202b9, _0x34720d) {
    if (_0x295b40.audioWebEnabled == 0) {
      return 0;
    }
    var _0x467134 = _0x11617c(_0x8316b8, _0x2c2e1d, _0x5202b9, _0x34720d);
    _0x295b40.audioInstances[++_0x295b40.audioInstanceIdCounter] = _0x467134;
    return _0x295b40.audioInstanceIdCounter;
  }
  function _0x17333b(_0x39e046, _0x492893, _0x4d0045, _0x2f5760) {
    if (_0x295b40.audioWebEnabled == 0) {
      return;
    }
    _0x259478(_0x492893, 0);
    var _0x460f41 = _0x295b40.audioInstances[_0x39e046];
    var _0x4d649f = _0x295b40.audioInstances[_0x492893];
    if (!_0x460f41) {
      console.log("Trying to play sound which is not loaded.");
      return;
    }
    try {
      _0x4d649f.playSoundClip(_0x460f41, _0x295b40.audioContext.currentTime + _0x2f5760, _0x4d0045);
    } catch (_0x952a9a) {
      console.error("playSoundClip error. Exception: " + e);
    }
  }
  function _0x9e27a6(_0x3a73d4) {
    var _0x47ede1 = _0x295b40.audioInstances[_0x3a73d4];
    if (_0x47ede1) {
      _0x47ede1.release();
    }
    delete _0x295b40.audioInstances[_0x3a73d4];
  }
  function _0x3aadd1() {
    if (_0x295b40.audioWebEnabled == 0) {
      return;
    }
    if (_0x295b40.audioContext.state === "suspended") {
      _0x295b40.audioContext.resume().catch(function (_0xa951f0) {
        console.warn("Could not resume audio context. Exception: " + _0xa951f0);
      });
    }
  }
  function _0x3e4bb1(_0x1f71a8, _0x3dd48e) {
    var _0x1343f9 = _0x295b40.audioInstances[_0x1f71a8];
    _0x1343f9.set3D(_0x3dd48e);
  }
  function _0x21f0f3(_0x4b0665, _0x429137, _0x2e633b, _0x4581b3, _0xc660b4, _0x266334) {
    if (_0x295b40.audioWebEnabled == 0) {
      return;
    }
    _0x4b0665 = -_0x4b0665;
    _0x429137 = -_0x429137;
    _0x2e633b = -_0x2e633b;
    var _0x14903e = _0x295b40.audioContext.listener;
    if (_0x14903e.forwardX) {
      if (_0x14903e.forwardX.value !== _0x4b0665) {
        _0x14903e.forwardX.value = _0x4b0665;
      }
      if (_0x14903e.forwardY.value !== _0x429137) {
        _0x14903e.forwardY.value = _0x429137;
      }
      if (_0x14903e.forwardZ.value !== _0x2e633b) {
        _0x14903e.forwardZ.value = _0x2e633b;
      }
      if (_0x14903e.upX.value !== _0x4581b3) {
        _0x14903e.upX.value = _0x4581b3;
      }
      if (_0x14903e.upY.value !== _0xc660b4) {
        _0x14903e.upY.value = _0xc660b4;
      }
      if (_0x14903e.upZ.value !== _0x266334) {
        _0x14903e.upZ.value = _0x266334;
      }
    } else if (_0x14903e._forwardX !== _0x4b0665 || _0x14903e._forwardY !== _0x429137 || _0x14903e._forwardZ !== _0x2e633b || _0x14903e._upX !== _0x4581b3 || _0x14903e._upY !== _0xc660b4 || _0x14903e._upZ !== _0x266334) {
      _0x14903e.setOrientation(_0x4b0665, _0x429137, _0x2e633b, _0x4581b3, _0xc660b4, _0x266334);
      _0x14903e._forwardX = _0x4b0665;
      _0x14903e._forwardY = _0x429137;
      _0x14903e._forwardZ = _0x2e633b;
      _0x14903e._upX = _0x4581b3;
      _0x14903e._upY = _0xc660b4;
      _0x14903e._upZ = _0x266334;
    }
  }
  function _0x194e5e(_0x532b8c, _0x3f0c1e, _0x96e754) {
    if (_0x295b40.audioWebEnabled == 0) {
      return;
    }
    var _0x5c21da = _0x295b40.audioContext.listener;
    if (_0x5c21da.positionX) {
      if (_0x5c21da.positionX.value !== _0x532b8c) {
        _0x5c21da.positionX.value = _0x532b8c;
      }
      if (_0x5c21da.positionY.value !== _0x3f0c1e) {
        _0x5c21da.positionY.value = _0x3f0c1e;
      }
      if (_0x5c21da.positionZ.value !== _0x96e754) {
        _0x5c21da.positionZ.value = _0x96e754;
      }
    } else if (_0x5c21da._positionX !== _0x532b8c || _0x5c21da._positionY !== _0x3f0c1e || _0x5c21da._positionZ !== _0x96e754) {
      _0x5c21da.setPosition(_0x532b8c, _0x3f0c1e, _0x96e754);
      _0x5c21da._positionX = _0x532b8c;
      _0x5c21da._positionY = _0x3f0c1e;
      _0x5c21da._positionZ = _0x96e754;
    }
  }
  function _0x4bede5(_0x246995, _0x103b87) {
    if (_0x295b40.audioWebEnabled == 0) {
      return;
    }
    var _0x3ec720 = _0x295b40.audioInstances[_0x246995];
    _0x3ec720.setLoop(_0x103b87);
  }
  function _0x5c44bc(_0x1a16a6, _0x4b116e, _0x1aff75) {
    if (_0x295b40.audioWebEnabled == 0) {
      return;
    }
    var _0x21b971 = _0x295b40.audioInstances[_0x1a16a6];
    _0x21b971.setLoopPoints(_0x4b116e, _0x1aff75);
  }
  function _0x5b3566(_0xe178ed, _0x5563e1) {
    if (_0x295b40.audioWebEnabled == 0) {
      return;
    }
    var _0x23e7c4 = _0x295b40.audioInstances[_0xe178ed];
    if (_0x5563e1 != _0x23e7c4.isPaused()) {
      if (_0x5563e1) {
        _0x23e7c4.pause();
      } else {
        _0x23e7c4.resume();
      }
    }
  }
  function _0x393ef4(_0x81de2c, _0x3307f8) {
    if (_0x295b40.audioWebEnabled == 0) {
      return;
    }
    try {
      var _0x5d78d1 = _0x295b40.audioInstances[_0x81de2c];
      _0x5d78d1.setPitch(_0x3307f8);
    } catch (_0x586cac) {
      console.error("JS_Sound_SetPitch(channel=" + _0x81de2c + ", pitch=" + _0x3307f8 + ") threw an exception: " + _0x586cac);
    }
  }
  function _0x1c29ae(_0x533c56, _0x3e897a, _0x505bf4, _0x5b2343) {
    if (_0x295b40.audioWebEnabled == 0) {
      return;
    }
    var _0x26db7e = _0x295b40.audioInstances[_0x533c56];
    _0x26db7e.setPosition(_0x3e897a, _0x505bf4, _0x5b2343);
  }
  function _0x26161e(_0x519fb0, _0x4a1958) {
    if (_0x295b40.audioWebEnabled == 0) {
      return;
    }
    try {
      var _0x41644a = _0x295b40.audioInstances[_0x519fb0];
      _0x41644a.setVolume(_0x4a1958);
    } catch (_0x50d8a5) {
      console.error("JS_Sound_SetVolume(channel=" + _0x519fb0 + ", volume=" + _0x4a1958 + ") threw an exception: " + _0x50d8a5);
    }
  }
  function _0x259478(_0x238329, _0xe43219) {
    if (_0x295b40.audioWebEnabled == 0) {
      return;
    }
    var _0x409e48 = _0x295b40.audioInstances[_0x238329];
    _0x409e48.stop(_0xe43219);
  }
  function _0x237a4e(_0x41c78d, _0x59aef2, _0x83420e) {
    var _0x313821 = _0x3f3179(_0x41c78d);
    var _0x20df2b = _0x313821 == "#canvas" ? _0x3e078a.canvas : document.querySelector(_0x313821);
    var _0x56be2d = 0;
    var _0x553fba = 0;
    if (_0x20df2b) {
      var _0x5827e0 = _0x20df2b.getBoundingClientRect();
      _0x56be2d = _0x5827e0.width;
      _0x553fba = _0x5827e0.height;
    }
    _0x5b41dc[_0x59aef2 >> 3] = _0x56be2d;
    _0x5b41dc[_0x83420e >> 3] = _0x553fba;
  }
  function _0x54170e(_0x591e03, _0x5a400b) {
    if (_0x591e03) {
      _0x53c85c(document.URL, _0x591e03, _0x5a400b);
    }
    return _0x3e3578(document.URL);
  }
  function _0x36e481(_0x4bd371, _0x5d7635) {
    var _0x4e29a7 = _0x3e078a.SystemInfo.gpu;
    if (_0x4bd371) {
      _0x53c85c(_0x4e29a7, _0x4bd371, _0x5d7635);
    }
    return _0x3e3578(_0x4e29a7);
  }
  function _0x2027cd() {
    return _0x3e078a.matchWebGLToCanvasSize || _0x3e078a.matchWebGLToCanvasSize === undefined;
  }
  function _0x327740() {
    return _0x4f26b1.length / 1048576;
  }
  function _0x1ed386(_0x2beded, _0x8afbe) {
    var _0x397204 = _0x3e078a.SystemInfo.os + " " + _0x3e078a.SystemInfo.osVersion;
    if (_0x2beded) {
      _0x53c85c(_0x397204, _0x2beded, _0x8afbe);
    }
    return _0x3e3578(_0x397204);
  }
  function _0x3a1b70() {
    if (_0x3e078a.matchWebGLToCanvasSize == false) {
      return 1;
    } else {
      return _0x3e078a.devicePixelRatio || window.devicePixelRatio || 1;
    }
  }
  function _0x374e68(_0x4666e2, _0xae29b4) {
    _0x5b41dc[_0x4666e2 >> 3] = _0x3e078a.SystemInfo.width;
    _0x5b41dc[_0xae29b4 >> 3] = _0x3e078a.SystemInfo.height;
  }
  function _0x3d7c93(_0xba188f, _0x13c2a5) {
    if (_0xba188f) {
      _0x53c85c(_0x3e078a.streamingAssetsUrl, _0xba188f, _0x13c2a5);
    }
    return _0x3e3578(_0x3e078a.streamingAssetsUrl);
  }
  function _0x4d54ce() {
    var _0xa45b84 = _0x283457.getExtension("WEBGL_compressed_texture_astc");
    if (_0xa45b84 && _0xa45b84.getSupportedProfiles) {
      return _0xa45b84.getSupportedProfiles().includes("hdr");
    }
    return false;
  }
  function _0x390367() {
    return _0x3e078a.SystemInfo.hasCursorLock;
  }
  function _0x806d3c() {
    return _0x3e078a.SystemInfo.hasFullscreen;
  }
  function _0x346861() {
    return _0x3e078a.SystemInfo.hasWebGL;
  }
  function _0x57eac1() {
    return !!_0x3e078a.shouldQuit;
  }
  var _0x29b44b = {
    requests: {},
    responses: {},
    abortControllers: {},
    timer: {},
    nextRequestId: 1
  };
  function _0x5af12c(_0x3faf08) {
    var _0x158f45 = _0x29b44b.abortControllers[_0x3faf08];
    if (!_0x158f45 || _0x158f45.signal.aborted) {
      return;
    }
    _0x158f45.abort();
  }
  function _0x4a91d7(_0x375e11, _0xbe543a) {
    var _0x4c2dd5 = _0x3f3179(_0x375e11);
    var _0x19e62d = _0x3f3179(_0xbe543a);
    var _0x16afbf = new AbortController();
    var _0x408c84 = {
      url: _0x4c2dd5,
      init: {
        method: _0x19e62d,
        signal: _0x16afbf.signal,
        headers: {},
        enableStreamingDownload: true
      },
      tempBuffer: null,
      tempBufferSize: 0
    };
    _0x29b44b.abortControllers[_0x29b44b.nextRequestId] = _0x16afbf;
    _0x29b44b.requests[_0x29b44b.nextRequestId] = _0x408c84;
    return _0x29b44b.nextRequestId++;
  }
  function _0x4ed2c0(_0x1dd9f3) {
    var _0x1d526c = _0x29b44b.responses[_0x1dd9f3];
    if (!_0x1d526c) {
      return "";
    }
    if (_0x1d526c.headerString) {
      return _0x1d526c.headerString;
    }
    var _0x22ccda = "";
    var _0x64ad8d = _0x1d526c.headers.entries();
    for (var _0x257ee6 = _0x64ad8d.next(); !_0x257ee6.done; _0x257ee6 = _0x64ad8d.next()) {
      _0x22ccda += _0x257ee6.value[0] + ": " + _0x257ee6.value[1] + "\r\n";
    }
    _0x1d526c.headerString = _0x22ccda;
    return _0x22ccda;
  }
  function _0x330f6d(_0x4dad6a, _0x3fa55b, _0x2440f7, _0x310e60, _0x502fdd) {
    var _0xd1ac9c = _0x29b44b.responses[_0x4dad6a];
    if (!_0xd1ac9c) {
      _0x53c85c("", _0x3fa55b, _0x2440f7);
      _0x53c85c("", _0x310e60, _0x502fdd);
      return;
    }
    if (_0x3fa55b) {
      var _0x3d6253 = _0x4ed2c0(_0x4dad6a);
      _0x53c85c(_0x3d6253, _0x3fa55b, _0x2440f7);
    }
    if (_0x310e60) {
      _0x53c85c(_0xd1ac9c.url, _0x310e60, _0x502fdd);
    }
  }
  function _0x2f0563(_0x34c068, _0x44f7a3) {
    var _0x44c50c = _0x29b44b.responses[_0x34c068];
    if (!_0x44c50c) {
      _0x52253e[_0x44f7a3 >> 2] = 0;
      _0x52253e[(_0x44f7a3 >> 2) + 1] = 0;
      return;
    }
    var _0x3b5902 = _0x4ed2c0(_0x34c068);
    _0x52253e[_0x44f7a3 >> 2] = _0x3e3578(_0x3b5902);
    _0x52253e[(_0x44f7a3 >> 2) + 1] = _0x3e3578(_0x44c50c.url);
  }
  function _0x1e5a0a(_0x3d96cc) {
    if (_0x29b44b.timer[_0x3d96cc]) {
      clearTimeout(_0x29b44b.timer[_0x3d96cc]);
    }
    delete _0x29b44b.requests[_0x3d96cc];
    delete _0x29b44b.responses[_0x3d96cc];
    delete _0x29b44b.abortControllers[_0x3d96cc];
    delete _0x29b44b.timer[_0x3d96cc];
  }
  function _0x387102(_0x13c03e, _0x13011e, _0xe4349, _0x102ee2, _0x5995ae, _0x4e8572) {
    var _0x3cdbfe = _0x29b44b.requests[_0x13c03e];
    var _0x1d0f24 = _0x29b44b.abortControllers[_0x13c03e];
    function _0x16351a(_0x4f70cc) {
      if (!_0x3cdbfe.tempBuffer) {
        const _0x1b603f = Math.max(_0x4f70cc, 1024);
        _0x3cdbfe.tempBuffer = _0x253dd7(_0x1b603f);
        _0x3cdbfe.tempBufferSize = _0x1b603f;
      }
      if (_0x3cdbfe.tempBufferSize < _0x4f70cc) {
        _0x2b8491(_0x3cdbfe.tempBuffer);
        _0x3cdbfe.tempBuffer = _0x253dd7(_0x4f70cc);
        _0x3cdbfe.tempBufferSize = _0x4f70cc;
      }
      return _0x3cdbfe.tempBuffer;
    }
    function _0x247463() {
      if (_0x29b44b.timer[_0x13c03e]) {
        clearTimeout(_0x29b44b.timer[_0x13c03e]);
        delete _0x29b44b.timer[_0x13c03e];
      }
    }
    function _0x2bb233(_0x1f65ad, _0x152cf7) {
      _0x247463();
      if (!_0x5995ae) {
        return;
      }
      var _0x429aff = 0;
      if (_0x3cdbfe.init.enableStreamingDownload) {
        _0x3bdef4("viiiiii", _0x5995ae, [_0x102ee2, _0x1f65ad.status, 0, _0x152cf7.length, 0, _0x429aff]);
      } else if (_0x152cf7.length != 0) {
        var _0x5c1999 = _0x253dd7(_0x152cf7.length);
        _0x4f26b1.set(_0x152cf7, _0x5c1999);
        _0x3bdef4("viiiiii", _0x5995ae, [_0x102ee2, _0x1f65ad.status, _0x5c1999, _0x152cf7.length, 0, _0x429aff]);
      } else {
        _0x3bdef4("viiiiii", _0x5995ae, [_0x102ee2, _0x1f65ad.status, 0, 0, 0, _0x429aff]);
      }
      if (_0x3cdbfe.tempBuffer) {
        _0x2b8491(_0x3cdbfe.tempBuffer);
      }
    }
    function _0x977017(_0x2452a7, _0x1fcea1) {
      _0x247463();
      if (!_0x5995ae) {
        return;
      }
      var _0xc4a836 = _0x3e3578(_0x2452a7) + 1;
      var _0x34e451 = _0x253dd7(_0xc4a836);
      _0x53c85c(_0x2452a7, _0x34e451, _0xc4a836);
      _0x3bdef4("viiiiii", _0x5995ae, [_0x102ee2, 500, 0, 0, _0x34e451, _0x1fcea1]);
      _0x2b8491(_0x34e451);
      if (_0x3cdbfe.tempBuffer) {
        _0x2b8491(_0x3cdbfe.tempBuffer);
      }
    }
    function _0x3f49e9(_0x4565c4) {
      if (!_0x4e8572 || !_0x4565c4.lengthComputable) {
        return;
      }
      var _0x121e2d = _0x4565c4.response;
      _0x29b44b.responses[_0x13c03e] = _0x121e2d;
      if (_0x4565c4.chunk) {
        var _0x4735f3 = _0x16351a(_0x4565c4.chunk.length);
        _0x4f26b1.set(_0x4565c4.chunk, _0x4735f3);
        _0x3bdef4("viiiiii", _0x4e8572, [_0x102ee2, _0x121e2d.status, _0x4565c4.loaded, _0x4565c4.total, _0x4735f3, _0x4565c4.chunk.length]);
      } else {
        _0x3bdef4("viiiiii", _0x4e8572, [_0x102ee2, _0x121e2d.status, _0x4565c4.loaded, _0x4565c4.total, 0, 0]);
      }
    }
    try {
      if (_0xe4349 > 0) {
        var _0x35849d = _0x4f26b1.subarray(_0x13011e, _0x13011e + _0xe4349);
        _0x3cdbfe.init.body = new Blob([_0x35849d]);
      }
      if (_0x3cdbfe.timeout) {
        _0x29b44b.timer[_0x13c03e] = setTimeout(function () {
          _0x3cdbfe.isTimedOut = true;
          _0x1d0f24.abort();
        }, _0x3cdbfe.timeout);
      }
      var _0x16fbac = _0x3e078a.fetchWithProgress;
      _0x3cdbfe.init.onProgress = _0x3f49e9;
      if (_0x3e078a.companyName && _0x3e078a.productName && _0x3e078a.cachedFetch) {
        _0x16fbac = _0x3e078a.cachedFetch;
        _0x3cdbfe.init.companyName = _0x3e078a.companyName;
        _0x3cdbfe.init.productName = _0x3e078a.productName;
        _0x3cdbfe.control = _0x3e078a.cacheControl(_0x3cdbfe.url);
      }
      _0x16fbac(_0x3cdbfe.url, _0x3cdbfe.init).then(function (_0x5e2e2a) {
        _0x29b44b.responses[_0x13c03e] = _0x5e2e2a;
        _0x2bb233(_0x5e2e2a, _0x5e2e2a.parsedBody);
      }).catch(function (_0x1c0873) {
        var _0x56577b = 2;
        var _0x420722 = 17;
        var _0x19061c = 14;
        if (_0x3cdbfe.isTimedOut) {
          _0x977017("Connection timed out.", _0x19061c);
        } else if (_0x1d0f24.signal.aborted) {
          _0x977017("Aborted.", _0x420722);
        } else {
          _0x977017(_0x1c0873.message, _0x56577b);
        }
      });
    } catch (_0x1a3f38) {
      var _0xcbbcc4 = 2;
      _0x977017(_0x1a3f38.message, _0xcbbcc4);
    }
  }
  function _0xdc9087(_0x40c227, _0x2e4038) {
    var _0x328019 = _0x29b44b.requests[_0x40c227];
    if (!_0x328019) {
      return;
    }
    _0x328019.init.redirect = _0x2e4038 === 0 ? "error" : "follow";
  }
  function _0x38accb(_0x398e63, _0x140c5e, _0x469423) {
    var _0x11d6f9 = _0x29b44b.requests[_0x398e63];
    if (!_0x11d6f9) {
      return;
    }
    var _0x410b03 = _0x3f3179(_0x140c5e);
    var _0x51b564 = _0x3f3179(_0x469423);
    _0x11d6f9.init.headers[_0x410b03] = _0x51b564;
  }
  function _0x48b2a0(_0x4ca364, _0x2b6cf8) {
    var _0x19a48c = _0x29b44b.requests[_0x4ca364];
    if (!_0x19a48c) {
      return;
    }
    _0x19a48c.timeout = _0x2b6cf8;
  }
  function _0x2f5ee2(_0x3ff457, _0x2c4584, _0x1af677, _0x3eaeb8) {
    var _0x2468a0 = _0x3f3179(_0x3ff457);
    var _0x5263fc = _0x3f3179(_0x2c4584);
    var _0x150c83 = _0x3f3179(_0x1af677);
    var _0x37a8bd = _0x3f3179(_0x3eaeb8);
    try {
      firebase.database().ref(_0x2468a0).on("child_added", function (_0x509ed2) {
        window.unityInstance.SendMessage(_0x5263fc, _0x150c83, JSON.stringify(_0x509ed2.val()));
      });
    } catch (_0x123cbe) {
      window.unityInstance.SendMessage(_0x5263fc, _0x37a8bd, JSON.stringify(_0x123cbe, Object.getOwnPropertyNames(_0x123cbe)));
    }
  }
  function _0x4a8db9(_0x38c8ba, _0x2f44ac, _0x5b32a8, _0x418969) {
    var _0x3b0eb8 = _0x3f3179(_0x38c8ba);
    var _0x29dab1 = _0x3f3179(_0x2f44ac);
    var _0x55a8f9 = _0x3f3179(_0x5b32a8);
    var _0x4319d1 = _0x3f3179(_0x418969);
    try {
      firebase.database().ref(_0x3b0eb8).on("child_changed", function (_0x28d135) {
        window.unityInstance.SendMessage(_0x29dab1, _0x55a8f9, JSON.stringify(_0x28d135.val()));
      });
    } catch (_0x17391c) {
      window.unityInstance.SendMessage(_0x29dab1, _0x4319d1, JSON.stringify(_0x17391c, Object.getOwnPropertyNames(_0x17391c)));
    }
  }
  function _0x2a3498(_0x380250, _0x3c80d4, _0x4e7c3e, _0x309c3a) {
    var _0x4b2022 = _0x3f3179(_0x380250);
    var _0xeef871 = _0x3f3179(_0x3c80d4);
    var _0x5217e = _0x3f3179(_0x4e7c3e);
    var _0x3a10ec = _0x3f3179(_0x309c3a);
    try {
      firebase.database().ref(_0x4b2022).on("child_removed", function (_0x5d2d56) {
        window.unityInstance.SendMessage(_0xeef871, _0x5217e, JSON.stringify(_0x5d2d56.val()));
      });
    } catch (_0x568271) {
      window.unityInstance.SendMessage(_0xeef871, _0x3a10ec, JSON.stringify(_0x568271, Object.getOwnPropertyNames(_0x568271)));
    }
  }
  function _0x1c385b(_0x3dbfb5, _0x5cdbe3, _0x5bf357, _0x19144c, _0x2395db) {
    var _0x23d5a2 = _0x3f3179(_0x3dbfb5);
    var _0x4528b8 = _0x3f3179(_0x5bf357);
    var _0x241333 = _0x3f3179(_0x19144c);
    var _0x1b9144 = _0x3f3179(_0x2395db);
    try {
      if (typeof firestorelisteners === "undefined") {
        firestorelisteners = {};
      }
      this.firestorelisteners[_0x23d5a2 + "/collection/"] = firebase.firestore().collection(_0x23d5a2).onSnapshot({
        includeMetadataChanges: _0x5cdbe3 == 1
      }, function (_0x2c06ea) {
        var _0x966d6c = {};
        _0x2c06ea.forEach(function (_0x541fc6) {
          _0x966d6c[_0x541fc6.id] = _0x541fc6.data();
        });
        window.unityInstance.SendMessage(_0x4528b8, _0x241333, JSON.stringify(_0x966d6c));
      }, function (_0x211081) {
        window.unityInstance.SendMessage(_0x4528b8, _0x1b9144, JSON.stringify(_0x211081, Object.getOwnPropertyNames(_0x211081)));
      });
    } catch (_0x437b24) {
      window.unityInstance.SendMessage(_0x4528b8, _0x1b9144, JSON.stringify(_0x437b24, Object.getOwnPropertyNames(_0x437b24)));
    }
  }
  function _0x56f595(_0x388587, _0x369dd3, _0x58ce82, _0x50f7dc, _0x4a3bf1, _0x2e569c) {
    var _0x3a99da = _0x3f3179(_0x388587);
    var _0xcde5f9 = _0x3f3179(_0x369dd3);
    var _0x1c4592 = _0x3f3179(_0x50f7dc);
    var _0x22c4d5 = _0x3f3179(_0x4a3bf1);
    var _0x1381b2 = _0x3f3179(_0x2e569c);
    try {
      if (typeof firestorelisteners === "undefined") {
        firestorelisteners = {};
      }
      this.firestorelisteners[_0x3a99da + "/" + _0xcde5f9] = firebase.firestore().collection(_0x3a99da).doc(_0xcde5f9).onSnapshot({
        includeMetadataChanges: _0x58ce82 == 1
      }, function (_0x486ce9) {
        window.unityInstance.SendMessage(_0x1c4592, _0x22c4d5, JSON.stringify(_0x486ce9.data()));
      }, function (_0x5781ec) {
        window.unityInstance.SendMessage(_0x1c4592, _0x1381b2, JSON.stringify(_0x5781ec, Object.getOwnPropertyNames(_0x5781ec)));
      });
    } catch (_0x4fe4e8) {
      window.unityInstance.SendMessage(_0x1c4592, _0x1381b2, JSON.stringify(_0x4fe4e8, Object.getOwnPropertyNames(_0x4fe4e8)));
    }
  }
  function _0x4a7282(_0x102a33, _0x350d13, _0x559b0a, _0x2ce34f) {
    var _0x2163b6 = _0x3f3179(_0x102a33);
    var _0x834a9b = _0x3f3179(_0x350d13);
    var _0x15538f = _0x3f3179(_0x559b0a);
    var _0x54fc1d = _0x3f3179(_0x2ce34f);
    try {
      firebase.database().ref(_0x2163b6).on("value", function (_0x305652) {
        window.unityInstance.SendMessage(_0x834a9b, _0x15538f, JSON.stringify(_0x305652.val()));
      });
    } catch (_0x10a667) {
      window.unityInstance.SendMessage(_0x834a9b, _0x54fc1d, JSON.stringify(_0x10a667, Object.getOwnPropertyNames(_0x10a667)));
    }
  }
  function _0x3a59db(_0x2b4450) {
    var _0x46acdf = _0x3f3179(_0x2b4450);
    firebaseLogEvent(_0x46acdf);
  }
  function _0x50685c(_0x520d56, _0x42807b) {
    var _0x55a103 = _0x3f3179(_0x520d56);
    var _0x272b2f = JSON.parse(_0x3f3179(_0x42807b));
    firebaseLogEventParameter(_0x55a103, _0x272b2f);
  }
  function _0x337f9b(_0x2f0999, _0x2eef81, _0xcdfc07, _0x292cf2, _0x4df4bf) {
    var _0x376fc6 = _0x3f3179(_0x2f0999);
    var _0x55b6fa = _0x3f3179(_0xcdfc07);
    var _0x20f31e = _0x3f3179(_0x292cf2);
    var _0x3a918b = _0x3f3179(_0x4df4bf);
    try {
      firebase.database().ref(_0x376fc6).transaction(function (_0x986661) {
        if (!isNaN(_0x986661)) {
          return _0x986661 + _0x2eef81;
        } else {
          return _0x2eef81;
        }
      }).then(function (_0x3cefab) {
        window.unityInstance.SendMessage(_0x55b6fa, _0x20f31e, "Success: transaction run in " + _0x376fc6);
      });
    } catch (_0x99bc0b) {
      window.unityInstance.SendMessage(_0x55b6fa, _0x3a918b, JSON.stringify(_0x99bc0b, Object.getOwnPropertyNames(_0x99bc0b)));
    }
  }
  function _0x18090b(_0x460179, _0x2b7a93, _0x35549b) {
    var _0xe6b11a = _0x3f3179(_0x460179);
    var _0x4185c2 = _0x3f3179(_0x2b7a93);
    var _0xb319fa = _0x3f3179(_0x35549b);
    firebase.auth().onAuthStateChanged(function (_0x57e1f1) {
      if (_0x57e1f1) {
        window.unityInstance.SendMessage(_0xe6b11a, _0x4185c2, JSON.stringify(_0x57e1f1));
      } else {
        window.unityInstance.SendMessage(_0xe6b11a, _0xb319fa, "User signed out");
      }
    });
  }
  function _0x2eb687(_0x3e6586) {
    _0x3e6586 = _0x25adcd(_0x3e6586);
    window.open(_0x3e6586, "_blank");
  }
  function _0x390ac9(_0x1dab50) {
    window.wgUnityInstance = _0x3e078a;
    try {
      window[preroll.config.loaderObjectName].log("WGSDK: WeeGoo InGame Ad, pinging.");
      window[preroll.config.loaderObjectName].ping(_0x1dab50);
    } catch (_0x2ef50c) {
      console.log("WGSDK: No production WGSDK resources found, loading development resources.");
      var _0x101a0b = document.createElement("script");
      _0x101a0b.addEventListener("load", function (_0x43968b) {
        var _0xf4b2d1 = document.createElement("script");
        _0xf4b2d1.addEventListener("load", function (_0x3c0365) {
          console.log("WGSDK: Development resources loaded.");
          _0x1c0fd1(_0x1dab50, true);
        }.bind(this));
        document.getElementsByTagName("head")[0].appendChild(_0xf4b2d1);
        _0xf4b2d1.src = "https://afg.wgplayer.com/wgplayer.com/js/RkQDh8KWt62VoH09FPNYqA/2357995679/wgAds.js";
      }.bind(this));
      document.getElementsByTagName("head")[0].appendChild(_0x101a0b);
      _0x101a0b.src = "https://afg.wgplayer.com/wgplayer.com/wgAds.iframe.conf.js";
    }
  }
  function _0x1c0fd1(_0x56014c, _0x47e6a3) {
    var _0x23401d;
    if (_0x47e6a3 === true) {
      _0x23401d = _0x56014c;
    } else {
      _0x23401d = _0x25adcd(_0x56014c);
    }
    setTimeout(function () {
      _0x390ac9(_0x23401d);
    }, 250);
  }
  function _0x5ad044(_0x3480bb, _0x45a59e, _0x5ba676, _0x434967, _0x281d2c) {
    var _0x3b78a0 = _0x3f3179(_0x3480bb);
    var _0x380485 = _0x3f3179(_0x45a59e);
    var _0x357fb9 = _0x3f3179(_0x5ba676);
    var _0x5a3d6a = _0x3f3179(_0x434967);
    var _0x4920a9 = _0x3f3179(_0x281d2c);
    try {
      firebase.database().ref(_0x3b78a0).set(JSON.parse(_0x380485)).then(function (_0x598b58) {
        window.unityInstance.SendMessage(_0x357fb9, _0x5a3d6a, "Success: " + _0x380485 + " was posted to " + _0x3b78a0);
      });
    } catch (_0x85851a) {
      window.unityInstance.SendMessage(_0x357fb9, _0x4920a9, JSON.stringify(_0x85851a, Object.getOwnPropertyNames(_0x85851a)));
    }
  }
  function _0x1c8f81(_0x14ffd9, _0x514ad4, _0x541095, _0x30e897, _0x12dd27) {
    var _0x4a9bb2 = _0x3f3179(_0x14ffd9);
    var _0x26fbaa = _0x3f3179(_0x514ad4);
    var _0x4fd3b8 = _0x3f3179(_0x541095);
    var _0x489adc = _0x3f3179(_0x30e897);
    var _0xdf2d30 = _0x3f3179(_0x12dd27);
    try {
      firebase.database().ref(_0x4a9bb2).push().set(JSON.parse(_0x26fbaa)).then(function (_0x57d7d6) {
        window.unityInstance.SendMessage(_0x4fd3b8, _0x489adc, "Success: " + _0x26fbaa + " was pushed to " + _0x4a9bb2);
      });
    } catch (_0x534d13) {
      window.unityInstance.SendMessage(_0x4fd3b8, _0xdf2d30, JSON.stringify(_0x534d13, Object.getOwnPropertyNames(_0x534d13)));
    }
  }
  function _0x8fadd7(_0x36fda) {
    _0x36fda = _0x25adcd(_0x36fda);
    window.open(_0x36fda);
  }
  function _0x1ca8f4(_0x30dafa, _0x17e5c5) {
    var _0x4ae5ad = true;
    var _0x23b92f = _0x25adcd(_0x30dafa);
    var _0x54732a = _0x25adcd(_0x17e5c5);
    var _0xf287f6 = _0x23b92f.split("|");
    for (var _0x2b9a81 = 0; _0x2b9a81 < _0xf287f6.length; _0x2b9a81++) {
      var _0x422977 = _0xf287f6[_0x2b9a81];
      if (document.location.host == _0x422977) {
        _0x4ae5ad = false;
      }
    }
    if (_0x4ae5ad) {
      document.location = _0x54732a;
      return true;
    }
    return false;
  }
  function _0x57aad1() {
    try {
      window[preroll.config.loaderObjectName].log("WGSDK: Refetching reward ad.");
      window[preroll.config.loaderObjectName].rewarded.initSlot.call(window[preroll.config.loaderObjectName]);
    } catch (_0x3cc565) {
      console.log("No WeeGooAFG implementation found!");
    }
  }
  function _0x508db8() {
    try {
      window[preroll.config.loaderObjectName].log("WGSDK: Game controls registered.");
      window[window.preroll.config.loaderObjectName].registerGameControls(_0x3e078a);
    } catch (_0x6de01) {
      console.log("WGSDK: Can not register game controls.");
      setTimeout(function () {
        _0x508db8();
      }, 250);
    }
  }
  function _0x11564b() {
    try {
      window[preroll.config.loaderObjectName].log("WGSDK: Reward callbacks registered.");
      window[window.preroll.config.loaderObjectName].registerRewardCallbacks({
        onReady: "OnReadyMethod",
        onSuccess: "OnSuccessMethod",
        onFail: "OnFailMethod"
      });
    } catch (_0x1ef7e7) {
      console.log("WGSDK: Can not register reward ad callbacks.");
      _0x5c6ccb();
    }
  }
  function _0x5c6ccb() {
    setTimeout(function () {
      _0x11564b();
    }, 250);
  }
  function _0x1def3e(_0x346ba4, _0x12adc2, _0x443217, _0x2f9b6a, _0x2ba327, _0x4697c0, _0x3f79e1) {
    var _0x255f31 = _0x3f3179(_0x346ba4);
    var _0x1fdaa3 = _0x3f3179(_0x12adc2);
    var _0x58ec3b = _0x3f3179(_0x443217);
    var _0x4d06aa = _0x3f3179(_0x2f9b6a);
    var _0x3a2ac4 = _0x3f3179(_0x2ba327);
    var _0x4d6c51 = _0x3f3179(_0x4697c0);
    var _0x38c92c = _0x3f3179(_0x3f79e1);
    try {
      var _0x2f9b6a = {};
      _0x2f9b6a[_0x58ec3b] = firebase.firestore.FieldValue.arrayRemove(JSON.parse(_0x4d06aa));
      firebase.firestore().collection(_0x255f31).doc(_0x1fdaa3).update(_0x2f9b6a).then(function () {
        window.unityInstance.SendMessage(_0x3a2ac4, _0x4d6c51, "Success: element " + _0x4d06aa + " was removed in " + _0x58ec3b);
      }).catch(function (_0x5ee713) {
        window.unityInstance.SendMessage(_0x3a2ac4, _0x38c92c, JSON.stringify(_0x5ee713, Object.getOwnPropertyNames(_0x5ee713)));
      });
    } catch (_0x309c2b) {
      window.unityInstance.SendMessage(_0x3a2ac4, _0x38c92c, JSON.stringify(_0x309c2b, Object.getOwnPropertyNames(_0x309c2b)));
    }
  }
  function _0x498ebe(_0xa88809, _0x54fc85) {
    gmEvent(_0x3f3179(_0xa88809), _0x3f3179(_0x54fc85));
  }
  function _0x30b253(_0x1b0f96, _0x3b76ee, _0x36d8f3, _0x1a4c8e, _0xfb173c, _0x1ea5e3, _0x2447a5) {}
  function _0x596b51() {
    _0x4fe31a("GmSoft", "SetUnityHostName", "127.0.0.1");
    _0x4fe31a("GmSoft", "SetParam", JSON.stringify(window.GMSOFT_OPTIONS));
  }
  function _0x374e3d() {
    if (window.GMSOFT_OPTIONS.enableAds == true) {
      if (window.GMSOFT_OPTIONS.sdkType == "wgplayer") {
        console.log("Setup rewarded ads called");
        window[window.preroll.config.loaderObjectName].registerRewardCallbacks({
          onReady: function (_0x3505ae) {
            _0x4fe31a("GmSoft", "PreloadRewardedVideoCallback", 1);
            this._showRewardAdFn = showAdFn;
            console.log("The rewarded ad is ready. ");
          },
          onSuccess: function (_0x6a1de4) {
            this._showRewardAdFn = null;
            _0x4fe31a("GmSoft", "RewardedVideoSuccessCallback");
            console.log("The rewarded ad has been succesfully displayed, you can now grand the reward to user.");
          },
          onFail: function (_0x249004) {
            this._showRewardAdFn = null;
            _0x4fe31a("GmSoft", "RewardedVideoFailureCallback");
            console.log("The user did not go thrught");
          }
        });
      } else if (window.GMSOFT_OPTIONS.sdkType == "h5") {
        if (afg.ready) {
          _0x4fe31a("GmSoft", "PreloadRewardedVideoCallback", 1);
          afg.adBreak({
            type: "reward",
            name: "reward ads",
            beforeReward: function (_0x4c608c) {
              this._showRewardAdFn = _0x4c608c;
              console.log("before reward");
            }.bind(this),
            adViewed: function () {
              this._showRewardAdFn = null;
              _0x4fe31a("GmSoft", "RewardedVideoSuccessCallback");
              console.log("ad viewed");
            }.bind(this),
            adDismissed: function () {
              this._showRewardAdFn = null;
              _0x4fe31a("GmSoft", "RewardedVideoFailureCallback");
              console.log("ad failure");
            }.bind(this),
            adBreakDone: function (_0x5217cb) {
              console.log("ad break done");
              console.log("reward break done");
              _0x4fe31a("GmSoft", "ResumeGameCallback");
            }.bind(this)
          });
        } else {
          console.log("no reward ads");
          _0x4fe31a("GmSoft", "PreloadRewardedVideoCallback", 0);
          _0x4fe31a("GmSoft", "ResumeGameCallback");
        }
      }
    } else {
      _0x4fe31a("GmSoft", "ResumeGameCallback");
    }
  }
  function _0x19849d(_0x2223a3) {
    _0x2223a3 = _0x3f3179(_0x2223a3);
    if (typeof gdsdk !== "undefined" && typeof gdsdk.sendEvent !== "undefined" && typeof _0x2223a3 !== "undefined") {
      gdsdk.sendEvent(_0x2223a3).then(function (_0x2ab846) {
        console.log("Game event post message sent Succesfully...");
      }).catch(function (_0x376b4a) {
        console.log(_0x376b4a.message);
      });
    }
  }
  function _0x19dd4e(_0x2079e4) {
    if (window.GMSOFT_OPTIONS.enableAds == true) {
      _0x2079e4 = _0x3f3179(_0x2079e4);
      var _0x5e8362 = ["preroll", "start", "pause", "next", "midroll", "browse", "reward", "preload-reward"];
      if (_0x5e8362.indexOf(_0x2079e4) > -1 == false) {
        _0x2079e4 = "start";
      }
      console.log("adType ===> :" + _0x2079e4);
      console.log("GMSOFT_OPTIONS.sdkType ===> :" + GMSOFT_OPTIONS.sdkType);
      if (_0x2079e4 == "start" || _0x2079e4 == "preroll" || _0x2079e4 == "next" || _0x2079e4 == "midroll") {
        if (window.GMSOFT_OPTIONS.sdkType == "wgplayer") {
          if (_0x2079e4 == "start" || _0x2079e4 == "preroll") {
            window[preroll.config.loaderObjectName].fetchAd(function (_0x40a25b) {
              _0x4fe31a("GmSoft", "ResumeGameCallback");
              console.log("Afg preroll has been displayed and is now finished, we cand now load the game");
            });
          } else if (_0x2079e4 == "midroll" || _0x2079e4 == "next") {
            window[preroll.config.loaderObjectName].refetchAd(function (_0x34ec83) {
              _0x4fe31a("GmSoft", "ResumeGameCallback");
              console.log("Afg preroll has been displayed and is now finished, we cand now load the game");
            });
          }
        } else if (window.GMSOFT_OPTIONS.sdkType == "h5") {
          if (afg.ready) {
            afg.adBreak({
              type: _0x2079e4,
              name: _0x2079e4,
              beforeAd: function () {
                afg.onBeforeAd();
                console.log("before ad");
                _0x4fe31a("GmSoft", "PauseGameCallback");
              }.bind(this),
              adBreakDone: function () {
                console.log("Preroll done viewed");
                _0x4fe31a("GmSoft", "ResumeGameCallback");
              }.bind(this)
            });
          } else {
            console.log("no " + _0x2079e4 + " ads");
            _0x4fe31a("GmSoft", "ResumeGameCallback");
          }
        }
      } else if (_0x2079e4 == "reward") {
        if (window.GMSOFT_OPTIONS.sdkType == "wgplayer") {
          if (this._showRewardAdFn) {
            _0x4fe31a("GmSoft", "PauseGameCallback");
            window[window.preroll.config.loaderObjectName].showRewardAd();
          }
        } else if (window.GMSOFT_OPTIONS.sdkType == "h5") {
          if (this._showRewardAdFn) {
            _0x4fe31a("GmSoft", "PauseGameCallback");
            this._showRewardAdFn();
          }
        }
      }
    } else {
      _0x4fe31a("GmSoft", "ResumeGameCallback");
    }
  }
  function _0x3bc29e(_0x3289cb, _0x18526d, _0x13521a, _0x5c61af, _0x162006, _0x5458a5) {
    var _0x1b394f = _0x3f3179(_0x3289cb);
    var _0x4a859f = _0x3f3179(_0x18526d);
    var _0x178cb8 = _0x3f3179(_0x13521a);
    var _0x347b8d = _0x3f3179(_0x5c61af);
    var _0x1b7f4d = _0x3f3179(_0x162006);
    var _0x559517 = _0x3f3179(_0x5458a5);
    try {
      firebase.firestore().collection(_0x1b394f).doc(_0x4a859f).set(JSON.parse(_0x178cb8)).then(function () {
        window.unityInstance.SendMessage(_0x347b8d, _0x1b7f4d, "Success: document " + _0x4a859f + " was set");
      }).catch(function (_0x3874af) {
        window.unityInstance.SendMessage(_0x347b8d, _0x559517, JSON.stringify(_0x3874af, Object.getOwnPropertyNames(_0x3874af)));
      });
    } catch (_0x197277) {
      window.unityInstance.SendMessage(_0x347b8d, _0x559517, JSON.stringify(_0x197277, Object.getOwnPropertyNames(_0x197277)));
    }
  }
  function _0x44543b(_0x22b3ae) {
    var _0x175ef3 = JSON.parse(_0x3f3179(_0x22b3ae));
    firebaseSetUserProperties(_0x175ef3);
  }
  function _0x4db8f9() {
    window[preroll.config.loaderObjectName].showRewardAd();
  }
  function _0x342477(_0x719f17, _0x573f7b, _0x17c579) {
    var _0x2c7c69 = _0x3f3179(_0x719f17);
    var _0x3e92f6 = _0x3f3179(_0x573f7b);
    var _0x302936 = _0x3f3179(_0x17c579);
    try {
      firebase.auth().signInAnonymously().then(function (_0x548d1c) {
        window.unityInstance.SendMessage(_0x2c7c69, _0x3e92f6, "Success: signed up for " + _0x548d1c);
      }).catch(function (_0x208504) {
        window.unityInstance.SendMessage(_0x2c7c69, _0x302936, JSON.stringify(_0x208504, Object.getOwnPropertyNames(_0x208504)));
      });
    } catch (_0x2a7529) {
      window.unityInstance.SendMessage(_0x2c7c69, _0x302936, JSON.stringify(_0x2a7529, Object.getOwnPropertyNames(_0x2a7529)));
    }
  }
  function _0x958548(_0x597550, _0x367164, _0x55a112, _0x1734fd, _0x395a22) {
    var _0x57002b = _0x3f3179(_0x597550);
    var _0x186515 = _0x3f3179(_0x367164);
    var _0x7a4e22 = _0x3f3179(_0x55a112);
    var _0x15fb97 = _0x3f3179(_0x1734fd);
    var _0x364239 = _0x3f3179(_0x395a22);
    try {
      firebase.auth().signInWithEmailAndPassword(_0x57002b, _0x186515).then(function (_0xedf00e) {
        window.unityInstance.SendMessage(_0x7a4e22, _0x15fb97, "Success: signed in for " + _0x57002b);
      }).catch(function (_0x5d3f87) {
        window.unityInstance.SendMessage(_0x7a4e22, _0x364239, JSON.stringify(_0x5d3f87, Object.getOwnPropertyNames(_0x5d3f87)));
      });
    } catch (_0x19956f) {
      window.unityInstance.SendMessage(_0x7a4e22, _0x364239, JSON.stringify(_0x19956f, Object.getOwnPropertyNames(_0x19956f)));
    }
  }
  function _0x49bd64(_0x58c126, _0x2f483b, _0x9fbba5) {
    var _0x17991c = _0x3f3179(_0x58c126);
    var _0xb56d77 = _0x3f3179(_0x2f483b);
    var _0x13add8 = _0x3f3179(_0x9fbba5);
    try {
      var _0xae22da = new firebase.auth.FacebookAuthProvider();
      firebase.auth().signInWithRedirect(_0xae22da).then(function (_0x308d6a) {
        window.unityInstance.SendMessage(_0x17991c, _0xb56d77, "Success: signed in with Facebook!");
      }).catch(function (_0x40b5b4) {
        window.unityInstance.SendMessage(_0x17991c, _0x13add8, JSON.stringify(_0x40b5b4, Object.getOwnPropertyNames(_0x40b5b4)));
      });
    } catch (_0x32be64) {
      window.unityInstance.SendMessage(_0x17991c, _0x13add8, JSON.stringify(_0x32be64, Object.getOwnPropertyNames(_0x32be64)));
    }
  }
  function _0x4ae78a(_0x475d96, _0x972a90, _0x14d36b) {
    var _0x4f61d1 = _0x3f3179(_0x475d96);
    var _0x331b66 = _0x3f3179(_0x972a90);
    var _0x38163d = _0x3f3179(_0x14d36b);
    try {
      var _0x317eb6 = new firebase.auth.GoogleAuthProvider();
      firebase.auth().signInWithRedirect(_0x317eb6).then(function (_0x316656) {
        window.unityInstance.SendMessage(_0x4f61d1, _0x331b66, "Success: signed in with Google!");
      }).catch(function (_0x334080) {
        window.unityInstance.SendMessage(_0x4f61d1, _0x38163d, JSON.stringify(_0x334080, Object.getOwnPropertyNames(_0x334080)));
      });
    } catch (_0x4a1a96) {
      window.unityInstance.SendMessage(_0x4f61d1, _0x38163d, JSON.stringify(_0x4a1a96, Object.getOwnPropertyNames(_0x4a1a96)));
    }
  }
  function _0x5ba645(_0x4bdf9a, _0x390143, _0x46137e, _0x5d097b) {
    var _0x4bd62c = _0x3f3179(_0x4bdf9a);
    var _0x158fde = _0x3f3179(_0x390143);
    var _0xe28bf7 = _0x3f3179(_0x46137e);
    var _0x1ffac6 = _0x3f3179(_0x5d097b);
    try {
      firebase.database().ref(_0x4bd62c).off("child_added");
      window.unityInstance.SendMessage(_0x158fde, _0xe28bf7, "Success: listener removed");
    } catch (_0x5d1700) {
      window.unityInstance.SendMessage(_0x158fde, _0x1ffac6, JSON.stringify(_0x5d1700, Object.getOwnPropertyNames(_0x5d1700)));
    }
  }
  function _0x171939(_0x4cc04b, _0x1aeded, _0x10e615, _0x195e95) {
    var _0x59dcec = _0x3f3179(_0x4cc04b);
    var _0x5f0441 = _0x3f3179(_0x1aeded);
    var _0x76d165 = _0x3f3179(_0x10e615);
    var _0x4eed5c = _0x3f3179(_0x195e95);
    try {
      firebase.database().ref(_0x59dcec).off("child_changed");
      window.unityInstance.SendMessage(_0x5f0441, _0x76d165, "Success: listener removed");
    } catch (_0x12daff) {
      window.unityInstance.SendMessage(_0x5f0441, _0x4eed5c, JSON.stringify(_0x12daff, Object.getOwnPropertyNames(_0x12daff)));
    }
  }
  function _0x1c2df1(_0x196262, _0x1f407f, _0x50eb67, _0x10a7bf) {
    var _0x3474bd = _0x3f3179(_0x196262);
    var _0x1cd1f9 = _0x3f3179(_0x1f407f);
    var _0x474739 = _0x3f3179(_0x50eb67);
    var _0x383fce = _0x3f3179(_0x10a7bf);
    try {
      firebase.database().ref(_0x3474bd).off("child_removed");
      window.unityInstance.SendMessage(_0x1cd1f9, _0x474739, "Success: listener removed");
    } catch (_0x39698b) {
      window.unityInstance.SendMessage(_0x1cd1f9, _0x383fce, JSON.stringify(_0x39698b, Object.getOwnPropertyNames(_0x39698b)));
    }
  }
  function _0x359b0b(_0x5dc7c8, _0x1f6dc8, _0x55879b, _0x9bc7a3) {
    var _0x100dc0 = _0x3f3179(_0x5dc7c8);
    var _0x323f8f = _0x3f3179(_0x1f6dc8);
    var _0x1b33b2 = _0x3f3179(_0x55879b);
    var _0x3ece96 = _0x3f3179(_0x9bc7a3);
    try {
      if (typeof firestorelisteners === "undefined") {
        firestorelisteners = {};
      }
      this.firestorelisteners[_0x100dc0 + "/collection/"]();
      window.unityInstance.SendMessage(_0x323f8f, _0x1b33b2, "Success: listener was removed");
    } catch (_0x5374cf) {
      window.unityInstance.SendMessage(_0x323f8f, _0x3ece96, JSON.stringify(_0x5374cf, Object.getOwnPropertyNames(_0x5374cf)));
    }
  }
  function _0x2c9ce2(_0x2b745d, _0x25b494, _0x42b218, _0x3a58b6, _0x800009) {
    var _0x5f3564 = _0x3f3179(_0x2b745d);
    var _0x24648a = _0x3f3179(_0x25b494);
    var _0x8967e8 = _0x3f3179(_0x42b218);
    var _0x369bd9 = _0x3f3179(_0x3a58b6);
    var _0x2ad86a = _0x3f3179(_0x800009);
    try {
      if (typeof firestorelisteners === "undefined") {
        firestorelisteners = {};
      }
      this.firestorelisteners[_0x5f3564 + "/" + _0x24648a]();
      window.unityInstance.SendMessage(_0x8967e8, _0x369bd9, "Success: listener was removed");
    } catch (_0x525ca0) {
      window.unityInstance.SendMessage(_0x8967e8, _0x2ad86a, JSON.stringify(_0x525ca0, Object.getOwnPropertyNames(_0x525ca0)));
    }
  }
  function _0x2e05f0(_0x81c42d, _0x5ec1b8, _0x33d1a2, _0x53996a) {
    var _0x2349cb = _0x3f3179(_0x81c42d);
    var _0x49f282 = _0x3f3179(_0x5ec1b8);
    var _0x464180 = _0x3f3179(_0x33d1a2);
    var _0x32bf1b = _0x3f3179(_0x53996a);
    try {
      firebase.database().ref(_0x2349cb).off("value");
      window.unityInstance.SendMessage(_0x49f282, _0x464180, "Success: listener removed");
    } catch (_0x114d5c) {
      window.unityInstance.SendMessage(_0x49f282, _0x32bf1b, JSON.stringify(_0x114d5c, Object.getOwnPropertyNames(_0x114d5c)));
    }
  }
  function _0x2712d8(_0x2fe205, _0xce0cf3, _0x58b6af, _0x28552b) {
    var _0x271efe = _0x3f3179(_0x2fe205);
    var _0x3eabf8 = _0x3f3179(_0xce0cf3);
    var _0x5756aa = _0x3f3179(_0x58b6af);
    var _0x4c313a = _0x3f3179(_0x28552b);
    try {
      firebase.database().ref(_0x271efe).transaction(function (_0x863d8e) {
        if (typeof _0x863d8e === "boolean") {
          return !_0x863d8e;
        } else {
          return true;
        }
      }).then(function (_0x5a0f44) {
        window.unityInstance.SendMessage(_0x3eabf8, _0x5756aa, "Success: transaction run in " + _0x271efe);
      });
    } catch (_0x31c0b5) {
      window.unityInstance.SendMessage(_0x3eabf8, _0x4c313a, JSON.stringify(_0x31c0b5, Object.getOwnPropertyNames(_0x31c0b5)));
    }
  }
  function _0x21f791(_0x497aff, _0x12b814, _0x1d6fb1, _0xfae653, _0x251c77, _0x3f0fbb) {
    var _0x5a3bf2 = _0x3f3179(_0x497aff);
    var _0x3c5437 = _0x3f3179(_0x12b814);
    var _0x385caa = _0x3f3179(_0x1d6fb1);
    var _0x2f80f1 = _0x3f3179(_0xfae653);
    var _0x5ec013 = _0x3f3179(_0x251c77);
    var _0x55d4bc = _0x3f3179(_0x3f0fbb);
    try {
      firebase.firestore().collection(_0x5a3bf2).doc(_0x3c5437).update(JSON.parse(_0x385caa)).then(function () {
        window.unityInstance.SendMessage(_0x2f80f1, _0x5ec013, "Success: document " + _0x3c5437 + " was updated");
      }).catch(function (_0x5e57d7) {
        window.unityInstance.SendMessage(_0x2f80f1, _0x55d4bc, JSON.stringify(_0x5e57d7, Object.getOwnPropertyNames(_0x5e57d7)));
      });
    } catch (_0x2f01b4) {
      window.unityInstance.SendMessage(_0x2f80f1, _0x55d4bc, JSON.stringify(_0x2f01b4, Object.getOwnPropertyNames(_0x2f01b4)));
    }
  }
  function _0x2a11f3(_0x28ba51, _0x159360, _0x2cf9ab, _0x24780d, _0x577e9c) {
    var _0x5e14dd = _0x3f3179(_0x28ba51);
    var _0x33fa4d = _0x3f3179(_0x159360);
    var _0x3b5ed5 = _0x3f3179(_0x2cf9ab);
    var _0x203f08 = _0x3f3179(_0x24780d);
    var _0xed5de7 = _0x3f3179(_0x577e9c);
    try {
      firebase.database().ref(_0x5e14dd).update(JSON.parse(_0x33fa4d)).then(function (_0x5e8a39) {
        window.unityInstance.SendMessage(_0x3b5ed5, _0x203f08, "Success: " + _0x33fa4d + " was updated in " + _0x5e14dd);
      });
    } catch (_0x50cac2) {
      window.unityInstance.SendMessage(_0x3b5ed5, _0xed5de7, JSON.stringify(_0x50cac2, Object.getOwnPropertyNames(_0x50cac2)));
    }
  }
  function _0x2309c1(_0x24260b, _0x75988e, _0x48f1b3, _0x36f274, _0x460792) {
    var _0x318bd4 = _0x3f3179(_0x24260b);
    var _0x54558e = _0x3f3179(_0x75988e);
    var _0x3a7e03 = _0x3f3179(_0x48f1b3);
    var _0x33e21a = _0x3f3179(_0x36f274);
    var _0x427504 = _0x3f3179(_0x460792);
    try {
      firebase.storage().ref(_0x318bd4).put(_0x143344(_0x54558e)).then(function (_0x3bc5ed) {
        window.unityInstance.SendMessage(_0x3a7e03, _0x33e21a, "Success: data was posted to " + _0x318bd4);
      });
    } catch (_0x2efbeb) {
      window.unityInstance.SendMessage(_0x3a7e03, _0x427504, JSON.stringify(_0x2efbeb, Object.getOwnPropertyNames(_0x2efbeb)));
    }
    function _0x143344(_0x182fe3) {
      var _0x3e7d1f = window.atob(_0x182fe3);
      var _0x13746c = _0x3e7d1f.length;
      var _0x1ed4c7 = new Uint8Array(_0x13746c);
      for (var _0x4a5f25 = 0; _0x4a5f25 < _0x13746c; _0x4a5f25++) {
        _0x1ed4c7[_0x4a5f25] = _0x3e7d1f.charCodeAt(_0x4a5f25);
      }
      return _0x1ed4c7.buffer;
    }
  }
  var _0x172b00 = {
    requestInstances: {},
    nextRequestId: 1,
    loglevel: 2,
    SendTextToCSharpSide: function (_0x5cafe9, _0x4e03c6, _0x4405e3) {
      const _0x5cd82a = new TextEncoder();
      const _0x44164 = _0x5cd82a.encode(_0x4405e3);
      const _0x5bab50 = function (_0x5a85fc, _0x37b487) {
        return _0x5562d3.apply(null, [_0x172b00.onallocbuffer, _0x5a85fc, _0x37b487]);
      }(_0x5cafe9, _0x44164.length);
      _0x4f26b1.set(_0x44164, _0x5bab50);
      (function (_0x9edd99, _0x375e63, _0x2224c8) {
        _0x1cd87a.apply(null, [_0x4e03c6, _0x9edd99, _0x375e63, _0x2224c8]);
      })(_0x5cafe9, _0x5bab50, _0x44164.length);
    },
    GetResponseHeaders: function (_0x11eba4, _0x4a9c53) {
      if (_0x172b00.loglevel <= 1) {
        console.log("GetResponseHeaders(" + _0x11eba4 + ")");
      }
      var _0x5a7e28 = "";
      if (document && document.cookie) {
        var _0xbd3f75 = document.cookie.split(";");
        for (var _0x529268 = 0; _0x529268 < _0xbd3f75.length; ++_0x529268) {
          const _0x341dfd = _0xbd3f75[_0x529268].trim();
          if (_0x341dfd.length > 0) {
            _0x5a7e28 += "Set-Cookie:" + _0x341dfd + "\n";
          }
        }
      }
      const _0x16ff0f = _0x172b00.requestInstances[_0x11eba4].getAllResponseHeaders().trim().split(/[\r\n]+/);
      _0x16ff0f.forEach(_0x3d2e4d => {
        const _0x212209 = _0x3d2e4d.split(": ");
        const _0x4363ea = _0x212209.shift();
        const _0x1b82af = _0x212209.join(": ");
        if (_0x4363ea !== "content-length") {
          _0x5a7e28 += _0x4363ea + ":" + _0x1b82af + "\n";
        }
      });
      _0x172b00.SendTextToCSharpSide(_0x11eba4, _0x4a9c53, _0x5a7e28);
    }
  };
  function _0x172b50(_0x1bd809) {
    if (_0x172b00.loglevel <= 1) {
      console.log("XHR_Abort(" + _0x1bd809 + ")");
    }
    _0x172b00.requestInstances[_0x1bd809].abort();
  }
  function _0x28c88c(_0x11da48, _0x4c3738, _0x1f3c6d, _0x5f41eb, _0x9af3a3) {
    var _0x13d793 = new URL(_0x3f3179(_0x4c3738));
    var _0x92a234 = _0x3f3179(_0x11da48);
    if (_0x172b00.loglevel <= 1) {
      console.log("XHR_Create (" + _0x172b00.nextRequestId + ", " + _0x92a234 + ", " + _0x13d793.toString() + ", " + _0x9af3a3 + ")");
    }
    var _0x44f57b = new XMLHttpRequest();
    if (_0x1f3c6d && _0x5f41eb) {
      var _0x346369 = _0x3f3179(_0x1f3c6d);
      var _0x271c13 = _0x3f3179(_0x5f41eb);
      _0x44f57b.withCredentials = true;
      _0x44f57b.open(_0x92a234, _0x13d793.toString(), true, _0x346369, _0x271c13);
    } else {
      _0x44f57b.withCredentials = _0x9af3a3;
      _0x44f57b.open(_0x92a234, _0x13d793.toString(), true);
    }
    _0x44f57b.responseType = "arraybuffer";
    _0x172b00.requestInstances[_0x172b00.nextRequestId] = _0x44f57b;
    return _0x172b00.nextRequestId++;
  }
  function _0xd7a1b6(_0x4faf33) {
    if (_0x172b00.loglevel <= 1) {
      console.log("XHR_Release(" + _0x4faf33 + ")");
    }
    delete _0x172b00.requestInstances[_0x4faf33];
  }
  function _0x5d2dd9(_0x6debe1, _0x22c647, _0x28ddbf) {
    if (_0x172b00.loglevel <= 1) {
      console.log("XHR_Send(" + _0x6debe1 + ", " + _0x22c647 + ", " + _0x28ddbf + ")");
    }
    var _0x25f824 = _0x172b00.requestInstances[_0x6debe1];
    try {
      if (_0x28ddbf > 0) {
        _0x25f824.send(_0x4f26b1.subarray(_0x22c647, _0x22c647 + _0x28ddbf));
      } else {
        _0x25f824.send();
      }
    } catch (_0x1da4d2) {
      if (_0x172b00.loglevel <= 4) {
        console.error("XHR_Send(" + _0x6debe1 + "): " + _0x1da4d2.name + " : " + _0x1da4d2.message);
      }
    }
  }
  function _0x49775d(_0x13235b) {
    _0x172b00.loglevel = _0x13235b;
  }
  function _0x1277c3(_0x39ede5, _0x596157, _0x54f106) {
    if (_0x172b00.loglevel <= 1) {
      console.log("XHR_SetProgressHandler(" + _0x39ede5 + ")");
    }
    var _0x3d4bd2 = _0x172b00.requestInstances[_0x39ede5];
    if (_0x3d4bd2) {
      if (_0x596157) {
        _0x3d4bd2.onprogress = function _0xb36678(_0x5bf09b) {
          if (_0x172b00.loglevel <= 1) {
            console.log("XHR_SetProgressHandler download(" + _0x39ede5 + ", " + _0x5bf09b.loaded + ", " + _0x5bf09b.total + ")");
          }
          if (_0x5bf09b.lengthComputable) {
            (function (_0x4ca8cd, _0x3c85d8, _0x3033a9) {
              _0x1cd87a.apply(null, [_0x596157, _0x4ca8cd, _0x3c85d8, _0x3033a9]);
            })(_0x39ede5, _0x5bf09b.loaded, _0x5bf09b.total);
          }
        };
      }
      if (_0x54f106) {
        _0x3d4bd2.upload.addEventListener("progress", function _0x5c13a6(_0x2a3c13) {
          if (_0x172b00.loglevel <= 1) {
            console.log("XHR_SetProgressHandler upload(" + _0x39ede5 + ", " + _0x2a3c13.loaded + ", " + _0x2a3c13.total + ")");
          }
          if (_0x2a3c13.lengthComputable) {
            (function (_0x40881e, _0x3bf860, _0x35f8b9) {
              _0x1cd87a.apply(null, [_0x54f106, _0x40881e, _0x3bf860, _0x35f8b9]);
            })(_0x39ede5, _0x2a3c13.loaded, _0x2a3c13.total);
          }
        }, true);
      }
    }
  }
  function _0x14a71e(_0x460a0a, _0x54bfa1, _0x55d015) {
    var _0x65441d = _0x3f3179(_0x54bfa1);
    var _0x23cc8f = _0x3f3179(_0x55d015);
    if (_0x172b00.loglevel <= 1) {
      console.log("XHR_SetRequestHeader(" + _0x65441d + ", " + _0x23cc8f + ")");
    }
    if (_0x65441d != "Cookie") {
      _0x172b00.requestInstances[_0x460a0a].setRequestHeader(_0x65441d, _0x23cc8f);
    } else {
      var _0x4775c0 = _0x23cc8f.split(";");
      for (var _0x4a8fa0 = 0; _0x4a8fa0 < _0x4775c0.length; _0x4a8fa0++) {
        document.cookie = _0x4775c0[_0x4a8fa0];
      }
    }
  }
  function _0x18a7dc(_0x4f58d5, _0x29fd3d, _0x495a19, _0x4f0367, _0xa9fc1b, _0x5eff93, _0x200732) {
    if (_0x172b00.loglevel <= 1) {
      console.log("XHR_SetResponseHandler(" + _0x4f58d5 + ")");
    }
    _0x172b00.onallocbuffer = _0x200732;
    var _0x581db4 = _0x172b00.requestInstances[_0x4f58d5];
    _0x581db4.onreadystatechange = _0x58e169 => {
      if (_0x172b00.loglevel <= 1) {
        console.log(_0x4f58d5 + " onreadystatechange(" + _0x581db4.readyState + ")");
      }
      switch (_0x581db4.readyState) {
        case XMLHttpRequest.UNSENT:
          break;
        case XMLHttpRequest.OPENED:
          break;
        case XMLHttpRequest.HEADERS_RECEIVED:
          {
            _0x172b00.SendTextToCSharpSide(_0x4f58d5, _0x5eff93, "HTTP/1.1 " + _0x581db4.status + " " + _0x581db4.statusText + "\n");
            _0x172b00.GetResponseHeaders(_0x4f58d5, _0x5eff93);
            break;
          }
        case XMLHttpRequest.LOADING:
          break;
        case XMLHttpRequest.DONE:
          break;
      }
    };
    _0x581db4.onloadstart = _0x5224ec => {
      if (_0x172b00.loglevel <= 1) {
        console.log(_0x4f58d5 + " onloadstart: " + _0x5224ec);
      }
    };
    _0x581db4.onload = function _0x3108fa(_0x309f7a) {
      if (_0x172b00.loglevel <= 1) {
        console.log(_0x4f58d5 + " onload(" + _0x581db4.status + ", " + _0x581db4.statusText + ")");
      }
      if (_0x29fd3d) {
        var _0x34aeb8 = 0;
        var _0x51a175 = 0;
        if (_0x581db4.response) {
          var _0x16ddde = _0x581db4.response;
          _0x34aeb8 = _0x16ddde.byteLength;
          _0x172b00.SendTextToCSharpSide(_0x4f58d5, _0x5eff93, "content-length:" + _0x34aeb8 + "\n\n");
          _0x51a175 = function (_0xab4cd4, _0x38ea29) {
            return _0x5562d3.apply(null, [_0x200732, _0xab4cd4, _0x38ea29]);
          }(_0x4f58d5, _0x34aeb8);
          var _0x3905f2 = new Uint8Array(_0x16ddde);
          var _0x1272c1 = _0x4f26b1.subarray(_0x51a175, _0x51a175 + _0x34aeb8);
          _0x1272c1.set(_0x3905f2);
        } else {
          _0x172b00.SendTextToCSharpSide(_0x4f58d5, _0x5eff93, "content-length:0\n\n");
        }
        (function (_0x167817, _0x31bdc6, _0x441d29) {
          _0x1cd87a.apply(null, [_0x29fd3d, _0x167817, _0x31bdc6, _0x441d29]);
        })(_0x4f58d5, _0x51a175, _0x34aeb8);
      }
    };
    if (_0x495a19) {
      _0x581db4.onerror = function _0x5c1d2b(_0xdfeef6) {
        function _0x115a5c(_0x2327d3) {
          var _0x3cf16b = _0x3e3578(_0x2327d3) + 1;
          var _0x4ec224 = _0x253dd7(_0x3cf16b);
          _0x3e4fca(_0x2327d3, _0x4f26b1, _0x4ec224, _0x3cf16b);
          (function (_0xb1ac47, _0x49d118) {
            _0x592745.apply(null, [_0x495a19, _0xb1ac47, _0x49d118]);
          })(_0x4f58d5, _0x4ec224);
          _0x2b8491(_0x4ec224);
        }
        if (_0xdfeef6.error) {
          _0x115a5c(_0xdfeef6.error);
        } else {
          _0x115a5c("Unknown Error! Maybe a CORS porblem?");
        }
      };
    }
    if (_0x4f0367) {
      _0x581db4.ontimeout = function _0x426863(_0x38646e) {
        (function (_0xdbc6b5) {
          _0x37c083.apply(null, [_0x4f0367, _0xdbc6b5]);
        })(_0x4f58d5);
      };
    }
    if (_0xa9fc1b) {
      _0x581db4.onabort = function _0xf46960(_0x1d0e6c) {
        (function (_0x70e2fa) {
          _0x37c083.apply(null, [_0xa9fc1b, _0x70e2fa]);
        })(_0x4f58d5);
      };
    }
  }
  function _0x18715a(_0x4425ee, _0x43e711) {
    if (_0x172b00.loglevel <= 1) {
      console.log("XHR_SetTimeout(" + _0x4425ee + ", " + _0x43e711 + ")");
    }
    _0x172b00.requestInstances[_0x4425ee].timeout = _0x43e711;
  }
  function _0x250112(_0x5dcb47) {
    return _0x253dd7(_0x5dcb47 + 16) + 16;
  }
  function _0xe78a0a(_0x46235f) {
    this.excPtr = _0x46235f;
    this.ptr = _0x46235f - 16;
    this.set_type = function (_0x20b4e4) {
      _0x5cc2c4[this.ptr + 8 >> 2] = _0x20b4e4;
    };
    this.get_type = function () {
      return _0x5cc2c4[this.ptr + 8 >> 2];
    };
    this.set_destructor = function (_0x16a6b5) {
      _0x5cc2c4[this.ptr + 0 >> 2] = _0x16a6b5;
    };
    this.get_destructor = function () {
      return _0x5cc2c4[this.ptr + 0 >> 2];
    };
    this.set_refcount = function (_0x448c8c) {
      _0x5cc2c4[this.ptr + 4 >> 2] = _0x448c8c;
    };
    this.set_caught = function (_0x282319) {
      _0x282319 = _0x282319 ? 1 : 0;
      _0xb3d98[this.ptr + 12 >> 0] = _0x282319;
    };
    this.get_caught = function () {
      return _0xb3d98[this.ptr + 12 >> 0] != 0;
    };
    this.set_rethrown = function (_0x53a1ef) {
      _0x53a1ef = _0x53a1ef ? 1 : 0;
      _0xb3d98[this.ptr + 13 >> 0] = _0x53a1ef;
    };
    this.get_rethrown = function () {
      return _0xb3d98[this.ptr + 13 >> 0] != 0;
    };
    this.init = function (_0x313701, _0x1867fc) {
      this.set_type(_0x313701);
      this.set_destructor(_0x1867fc);
      this.set_refcount(0);
      this.set_caught(false);
      this.set_rethrown(false);
    };
    this.add_ref = function () {
      var _0x18cc65 = _0x5cc2c4[this.ptr + 4 >> 2];
      _0x5cc2c4[this.ptr + 4 >> 2] = _0x18cc65 + 1;
    };
    this.release_ref = function () {
      var _0x2f1781 = _0x5cc2c4[this.ptr + 4 >> 2];
      _0x5cc2c4[this.ptr + 4 >> 2] = _0x2f1781 - 1;
      return _0x2f1781 === 1;
    };
  }
  function _0x7fcb86(_0x17f9f5) {
    this.free = function () {
      _0x2b8491(this.ptr);
      this.ptr = 0;
    };
    this.set_base_ptr = function (_0x42562d) {
      _0x5cc2c4[this.ptr >> 2] = _0x42562d;
    };
    this.get_base_ptr = function () {
      return _0x5cc2c4[this.ptr >> 2];
    };
    this.set_adjusted_ptr = function (_0x307977) {
      var _0x2a0fb7 = 4;
      _0x5cc2c4[this.ptr + _0x2a0fb7 >> 2] = _0x307977;
    };
    this.get_adjusted_ptr = function () {
      var _0x3c58a4 = 4;
      return _0x5cc2c4[this.ptr + _0x3c58a4 >> 2];
    };
    this.get_exception_ptr = function () {
      var _0x90a4bc = _0x217ce3(this.get_exception_info().get_type());
      if (_0x90a4bc) {
        return _0x5cc2c4[this.get_base_ptr() >> 2];
      }
      var _0x68e16b = this.get_adjusted_ptr();
      if (_0x68e16b !== 0) {
        return _0x68e16b;
      }
      return this.get_base_ptr();
    };
    this.get_exception_info = function () {
      return new _0xe78a0a(this.get_base_ptr());
    };
    if (_0x17f9f5 === undefined) {
      this.ptr = _0x253dd7(8);
      this.set_adjusted_ptr(0);
    } else {
      this.ptr = _0x17f9f5;
    }
  }
  var _0x1b66d2 = [];
  function _0x465289(_0x1a3caa) {
    _0x1a3caa.add_ref();
  }
  var _0xf4f26 = 0;
  function _0x5e8700(_0x82bd83) {
    var _0x219038 = new _0x7fcb86(_0x82bd83);
    var _0x55c544 = _0x219038.get_exception_info();
    if (!_0x55c544.get_caught()) {
      _0x55c544.set_caught(true);
      _0xf4f26--;
    }
    _0x55c544.set_rethrown(false);
    _0x1b66d2.push(_0x219038);
    _0x465289(_0x55c544);
    return _0x219038.get_exception_ptr();
  }
  var _0x5c4b32 = 0;
  function _0x583e22(_0xe779ca) {
    return _0x2b8491(new _0xe78a0a(_0xe779ca).ptr);
  }
  function _0x3b1f69(_0x30a54a) {
    if (_0x30a54a.release_ref() && !_0x30a54a.get_rethrown()) {
      var _0x4b76ba = _0x30a54a.get_destructor();
      if (_0x4b76ba) {
        (function (_0xf0da3b) {
          return _0x1746fb.apply(null, [_0x4b76ba, _0xf0da3b]);
        })(_0x30a54a.excPtr);
      }
      _0x583e22(_0x30a54a.excPtr);
    }
  }
  function _0x546d7f() {
    _0x202f4a(0);
    var _0x1a33b0 = _0x1b66d2.pop();
    _0x3b1f69(_0x1a33b0.get_exception_info());
    _0x1a33b0.free();
    _0x5c4b32 = 0;
  }
  function _0x4b95d4(_0xdeffeb) {
    var _0x2cf683 = new _0x7fcb86(_0xdeffeb);
    var _0x459e06 = _0x2cf683.get_base_ptr();
    if (!_0x5c4b32) {
      _0x5c4b32 = _0x459e06;
    }
    _0x2cf683.free();
    throw _0x459e06;
  }
  function _0x15a93b() {
    var _0x20fe0a = _0x5c4b32;
    if (!_0x20fe0a) {
      _0x41dc07(0);
      return 0;
    }
    var _0x24a500 = new _0xe78a0a(_0x20fe0a);
    var _0x3a4a93 = _0x24a500.get_type();
    var _0xc641f3 = new _0x7fcb86();
    _0xc641f3.set_base_ptr(_0x20fe0a);
    if (!_0x3a4a93) {
      _0x41dc07(0);
      return _0xc641f3.ptr | 0;
    }
    var _0x4e4a56 = Array.prototype.slice.call(arguments);
    var _0x2465fd = _0x5ebf8c();
    var _0x1db90b = _0x42f156(4);
    _0x5cc2c4[_0x1db90b >> 2] = _0x20fe0a;
    for (var _0x3a8783 = 0; _0x3a8783 < _0x4e4a56.length; _0x3a8783++) {
      var _0x32203c = _0x4e4a56[_0x3a8783];
      if (_0x32203c === 0 || _0x32203c === _0x3a4a93) {
        break;
      }
      if (_0x2e743a(_0x32203c, _0x3a4a93, _0x1db90b)) {
        var _0x502152 = _0x5cc2c4[_0x1db90b >> 2];
        if (_0x20fe0a !== _0x502152) {
          _0xc641f3.set_adjusted_ptr(_0x502152);
        }
        _0x41dc07(_0x32203c);
        return _0xc641f3.ptr | 0;
      }
    }
    _0x4c4e79(_0x2465fd);
    _0x41dc07(_0x3a4a93);
    return _0xc641f3.ptr | 0;
  }
  function _0xd4105() {
    var _0x15be90 = _0x5c4b32;
    if (!_0x15be90) {
      _0x41dc07(0);
      return 0;
    }
    var _0x313e65 = new _0xe78a0a(_0x15be90);
    var _0x20fcea = _0x313e65.get_type();
    var _0x356d2a = new _0x7fcb86();
    _0x356d2a.set_base_ptr(_0x15be90);
    if (!_0x20fcea) {
      _0x41dc07(0);
      return _0x356d2a.ptr | 0;
    }
    var _0x3d4f14 = Array.prototype.slice.call(arguments);
    var _0x38dc1c = _0x5ebf8c();
    var _0x5c72c6 = _0x42f156(4);
    _0x5cc2c4[_0x5c72c6 >> 2] = _0x15be90;
    for (var _0x90c9e0 = 0; _0x90c9e0 < _0x3d4f14.length; _0x90c9e0++) {
      var _0x1b0421 = _0x3d4f14[_0x90c9e0];
      if (_0x1b0421 === 0 || _0x1b0421 === _0x20fcea) {
        break;
      }
      if (_0x2e743a(_0x1b0421, _0x20fcea, _0x5c72c6)) {
        var _0x2b5db8 = _0x5cc2c4[_0x5c72c6 >> 2];
        if (_0x15be90 !== _0x2b5db8) {
          _0x356d2a.set_adjusted_ptr(_0x2b5db8);
        }
        _0x41dc07(_0x1b0421);
        return _0x356d2a.ptr | 0;
      }
    }
    _0x4c4e79(_0x38dc1c);
    _0x41dc07(_0x20fcea);
    return _0x356d2a.ptr | 0;
  }
  function _0x2e167e() {
    var _0x3f0b02 = _0x5c4b32;
    if (!_0x3f0b02) {
      _0x41dc07(0);
      return 0;
    }
    var _0x3afdf3 = new _0xe78a0a(_0x3f0b02);
    var _0x4a2210 = _0x3afdf3.get_type();
    var _0x1a7c14 = new _0x7fcb86();
    _0x1a7c14.set_base_ptr(_0x3f0b02);
    if (!_0x4a2210) {
      _0x41dc07(0);
      return _0x1a7c14.ptr | 0;
    }
    var _0x417ecf = Array.prototype.slice.call(arguments);
    var _0xdcc0c6 = _0x5ebf8c();
    var _0x43fc7d = _0x42f156(4);
    _0x5cc2c4[_0x43fc7d >> 2] = _0x3f0b02;
    for (var _0x33b5af = 0; _0x33b5af < _0x417ecf.length; _0x33b5af++) {
      var _0xfbe8e0 = _0x417ecf[_0x33b5af];
      if (_0xfbe8e0 === 0 || _0xfbe8e0 === _0x4a2210) {
        break;
      }
      if (_0x2e743a(_0xfbe8e0, _0x4a2210, _0x43fc7d)) {
        var _0x436615 = _0x5cc2c4[_0x43fc7d >> 2];
        if (_0x3f0b02 !== _0x436615) {
          _0x1a7c14.set_adjusted_ptr(_0x436615);
        }
        _0x41dc07(_0xfbe8e0);
        return _0x1a7c14.ptr | 0;
      }
    }
    _0x4c4e79(_0xdcc0c6);
    _0x41dc07(_0x4a2210);
    return _0x1a7c14.ptr | 0;
  }
  function _0x5e4db3() {
    var _0x2c0c8f = _0x1b66d2.pop();
    if (!_0x2c0c8f) {
      _0xb4b2ae("no exception to throw");
    }
    var _0x54b971 = _0x2c0c8f.get_exception_info();
    var _0x41721a = _0x2c0c8f.get_base_ptr();
    if (!_0x54b971.get_rethrown()) {
      _0x1b66d2.push(_0x2c0c8f);
      _0x54b971.set_rethrown(true);
      _0x54b971.set_caught(false);
      _0xf4f26++;
    } else {
      _0x2c0c8f.free();
    }
    _0x5c4b32 = _0x41721a;
    throw _0x41721a;
  }
  function _0x56d87c(_0x1bf0ec, _0x1014f0, _0xe6c844) {
    var _0x526465 = new _0xe78a0a(_0x1bf0ec);
    _0x526465.init(_0x1014f0, _0xe6c844);
    _0x5c4b32 = _0x1bf0ec;
    _0xf4f26++;
    throw _0x1bf0ec;
  }
  function _0x5234c1(_0x1ca6e0, _0x18ed8c) {
    var _0x14d800 = new Date(_0x5cc2c4[_0x1ca6e0 >> 2] * 1000);
    _0x5cc2c4[_0x18ed8c >> 2] = _0x14d800.getUTCSeconds();
    _0x5cc2c4[_0x18ed8c + 4 >> 2] = _0x14d800.getUTCMinutes();
    _0x5cc2c4[_0x18ed8c + 8 >> 2] = _0x14d800.getUTCHours();
    _0x5cc2c4[_0x18ed8c + 12 >> 2] = _0x14d800.getUTCDate();
    _0x5cc2c4[_0x18ed8c + 16 >> 2] = _0x14d800.getUTCMonth();
    _0x5cc2c4[_0x18ed8c + 20 >> 2] = _0x14d800.getUTCFullYear() - 1900;
    _0x5cc2c4[_0x18ed8c + 24 >> 2] = _0x14d800.getUTCDay();
    _0x5cc2c4[_0x18ed8c + 36 >> 2] = 0;
    _0x5cc2c4[_0x18ed8c + 32 >> 2] = 0;
    var _0x4ea49f = Date.UTC(_0x14d800.getUTCFullYear(), 0, 1, 0, 0, 0, 0);
    var _0x272b54 = (_0x14d800.getTime() - _0x4ea49f) / 86400000 | 0;
    _0x5cc2c4[_0x18ed8c + 28 >> 2] = _0x272b54;
    if (!_0x5234c1.GMTString) {
      _0x5234c1.GMTString = _0x1efc62("GMT");
    }
    _0x5cc2c4[_0x18ed8c + 40 >> 2] = _0x5234c1.GMTString;
    return _0x18ed8c;
  }
  function _0x2f1d9e(_0x54768d, _0x778558) {
    return _0x5234c1(_0x54768d, _0x778558);
  }
  function _0x57b57c() {
    if (_0x57b57c.called) {
      return;
    }
    _0x57b57c.called = true;
    var _0x5ebb02 = new Date().getFullYear();
    var _0x4c2f60 = new Date(_0x5ebb02, 0, 1);
    var _0x32139a = new Date(_0x5ebb02, 6, 1);
    var _0x491300 = _0x4c2f60.getTimezoneOffset();
    var _0x51cd45 = _0x32139a.getTimezoneOffset();
    var _0x5d59da = Math.max(_0x491300, _0x51cd45);
    _0x5cc2c4[_0xfcd343() >> 2] = _0x5d59da * 60;
    _0x5cc2c4[_0x561ec2() >> 2] = Number(_0x491300 != _0x51cd45);
    function _0xe46072(_0x67c9db) {
      var _0x533f1f = _0x67c9db.toTimeString().match(/\(([A-Za-z ]+)\)$/);
      if (_0x533f1f) {
        return _0x533f1f[1];
      } else {
        return "GMT";
      }
    }
    var _0x2e3e0e = _0xe46072(_0x4c2f60);
    var _0x4a45d9 = _0xe46072(_0x32139a);
    var _0x5c4d83 = _0x1efc62(_0x2e3e0e);
    var _0x2a0dc9 = _0x1efc62(_0x4a45d9);
    if (_0x51cd45 < _0x491300) {
      _0x5cc2c4[_0x496272() >> 2] = _0x5c4d83;
      _0x5cc2c4[_0x496272() + 4 >> 2] = _0x2a0dc9;
    } else {
      _0x5cc2c4[_0x496272() >> 2] = _0x2a0dc9;
      _0x5cc2c4[_0x496272() + 4 >> 2] = _0x5c4d83;
    }
  }
  function _0x11da37(_0x1c430d, _0x403b34) {
    _0x57b57c();
    var _0x163356 = new Date(_0x5cc2c4[_0x1c430d >> 2] * 1000);
    _0x5cc2c4[_0x403b34 >> 2] = _0x163356.getSeconds();
    _0x5cc2c4[_0x403b34 + 4 >> 2] = _0x163356.getMinutes();
    _0x5cc2c4[_0x403b34 + 8 >> 2] = _0x163356.getHours();
    _0x5cc2c4[_0x403b34 + 12 >> 2] = _0x163356.getDate();
    _0x5cc2c4[_0x403b34 + 16 >> 2] = _0x163356.getMonth();
    _0x5cc2c4[_0x403b34 + 20 >> 2] = _0x163356.getFullYear() - 1900;
    _0x5cc2c4[_0x403b34 + 24 >> 2] = _0x163356.getDay();
    var _0x1a0e08 = new Date(_0x163356.getFullYear(), 0, 1);
    var _0x1f2dd4 = (_0x163356.getTime() - _0x1a0e08.getTime()) / 86400000 | 0;
    _0x5cc2c4[_0x403b34 + 28 >> 2] = _0x1f2dd4;
    _0x5cc2c4[_0x403b34 + 36 >> 2] = -(_0x163356.getTimezoneOffset() * 60);
    var _0x3fee94 = new Date(_0x163356.getFullYear(), 6, 1).getTimezoneOffset();
    var _0x49f27e = _0x1a0e08.getTimezoneOffset();
    var _0x4bc486 = (_0x3fee94 != _0x49f27e && _0x163356.getTimezoneOffset() == Math.min(_0x49f27e, _0x3fee94)) | 0;
    _0x5cc2c4[_0x403b34 + 32 >> 2] = _0x4bc486;
    var _0x457211 = _0x5cc2c4[_0x496272() + (_0x4bc486 ? 4 : 0) >> 2];
    _0x5cc2c4[_0x403b34 + 40 >> 2] = _0x457211;
    return _0x403b34;
  }
  function _0x2b7b65(_0x4642d3, _0x1f71fc) {
    return _0x11da37(_0x4642d3, _0x1f71fc);
  }
  var _0x4bc719 = {
    splitPath: function (_0x12dec3) {
      var _0x3323d0 = /^(\/?|)([\s\S]*?)((?:\.{1,2}|[^\/]+?|)(\.[^.\/]*|))(?:[\/]*)$/;
      return _0x3323d0.exec(_0x12dec3).slice(1);
    },
    normalizeArray: function (_0x92096a, _0x5e52a4) {
      var _0x33cccb = 0;
      for (var _0x11de3e = _0x92096a.length - 1; _0x11de3e >= 0; _0x11de3e--) {
        var _0x7681f8 = _0x92096a[_0x11de3e];
        if (_0x7681f8 === ".") {
          _0x92096a.splice(_0x11de3e, 1);
        } else if (_0x7681f8 === "..") {
          _0x92096a.splice(_0x11de3e, 1);
          _0x33cccb++;
        } else if (_0x33cccb) {
          _0x92096a.splice(_0x11de3e, 1);
          _0x33cccb--;
        }
      }
      if (_0x5e52a4) {
        for (; _0x33cccb; _0x33cccb--) {
          _0x92096a.unshift("..");
        }
      }
      return _0x92096a;
    },
    normalize: function (_0x88a625) {
      var _0x38bd22 = _0x88a625.charAt(0) === "/";
      var _0x58f8a1 = _0x88a625.substr(-1) === "/";
      _0x88a625 = _0x4bc719.normalizeArray(_0x88a625.split("/").filter(function (_0xc75fb2) {
        return !!_0xc75fb2;
      }), !_0x38bd22).join("/");
      if (!_0x88a625 && !_0x38bd22) {
        _0x88a625 = ".";
      }
      if (_0x88a625 && _0x58f8a1) {
        _0x88a625 += "/";
      }
      return (_0x38bd22 ? "/" : "") + _0x88a625;
    },
    dirname: function (_0x59bc4f) {
      var _0x5e351a = _0x4bc719.splitPath(_0x59bc4f);
      var _0x36fe96 = _0x5e351a[0];
      var _0x1d6593 = _0x5e351a[1];
      if (!_0x36fe96 && !_0x1d6593) {
        return ".";
      }
      _0x1d6593 &&= _0x1d6593.substr(0, _0x1d6593.length - 1);
      return _0x36fe96 + _0x1d6593;
    },
    basename: function (_0x550ae9) {
      if (_0x550ae9 === "/") {
        return "/";
      }
      _0x550ae9 = _0x4bc719.normalize(_0x550ae9);
      _0x550ae9 = _0x550ae9.replace(/\/$/, "");
      var _0x4af585 = _0x550ae9.lastIndexOf("/");
      if (_0x4af585 === -1) {
        return _0x550ae9;
      }
      return _0x550ae9.substr(_0x4af585 + 1);
    },
    extname: function (_0x2ac171) {
      return _0x4bc719.splitPath(_0x2ac171)[3];
    },
    join: function () {
      var _0x4e47b0 = Array.prototype.slice.call(arguments, 0);
      return _0x4bc719.normalize(_0x4e47b0.join("/"));
    },
    join2: function (_0xf31cb1, _0x2e4a5d) {
      return _0x4bc719.normalize(_0xf31cb1 + "/" + _0x2e4a5d);
    }
  };
  function _0x753d66() {
    if (typeof crypto === "object" && typeof crypto.getRandomValues === "function") {
      var _0x414408 = new Uint8Array(1);
      return function () {
        crypto.getRandomValues(_0x414408);
        return _0x414408[0];
      };
    } else if (_0x23eb2f) {
      try {
        var _0x141085 = require("crypto");
        return function () {
          return _0x141085.randomBytes(1)[0];
        };
      } catch (_0x4197a6) {}
    }
    return function () {
      _0xb4b2ae("randomDevice");
    };
  }
  var _0x4bcf2a = {
    resolve: function () {
      var _0x51ef85 = "";
      var _0x461eb0 = false;
      for (var _0x5bc35c = arguments.length - 1; _0x5bc35c >= -1 && !_0x461eb0; _0x5bc35c--) {
        var _0x4cb87f = _0x5bc35c >= 0 ? arguments[_0x5bc35c] : _0x221e83.cwd();
        if (typeof _0x4cb87f !== "string") {
          throw new TypeError("Arguments to path.resolve must be strings");
        } else if (!_0x4cb87f) {
          return "";
        }
        _0x51ef85 = _0x4cb87f + "/" + _0x51ef85;
        _0x461eb0 = _0x4cb87f.charAt(0) === "/";
      }
      _0x51ef85 = _0x4bc719.normalizeArray(_0x51ef85.split("/").filter(function (_0x3e9407) {
        return !!_0x3e9407;
      }), !_0x461eb0).join("/");
      return (_0x461eb0 ? "/" : "") + _0x51ef85 || ".";
    },
    relative: function (_0x5a77bd, _0x22c5dc) {
      _0x5a77bd = _0x4bcf2a.resolve(_0x5a77bd).substr(1);
      _0x22c5dc = _0x4bcf2a.resolve(_0x22c5dc).substr(1);
      function _0xb4b191(_0x3b18c9) {
        var _0x4f9da8 = 0;
        for (; _0x4f9da8 < _0x3b18c9.length; _0x4f9da8++) {
          if (_0x3b18c9[_0x4f9da8] !== "") {
            break;
          }
        }
        var _0x149faf = _0x3b18c9.length - 1;
        for (; _0x149faf >= 0; _0x149faf--) {
          if (_0x3b18c9[_0x149faf] !== "") {
            break;
          }
        }
        if (_0x4f9da8 > _0x149faf) {
          return [];
        }
        return _0x3b18c9.slice(_0x4f9da8, _0x149faf - _0x4f9da8 + 1);
      }
      var _0xf1ed7a = _0xb4b191(_0x5a77bd.split("/"));
      var _0x4d9b70 = _0xb4b191(_0x22c5dc.split("/"));
      var _0x2b9453 = Math.min(_0xf1ed7a.length, _0x4d9b70.length);
      var _0x517f87 = _0x2b9453;
      for (var _0x1feafa = 0; _0x1feafa < _0x2b9453; _0x1feafa++) {
        if (_0xf1ed7a[_0x1feafa] !== _0x4d9b70[_0x1feafa]) {
          _0x517f87 = _0x1feafa;
          break;
        }
      }
      var _0x57eeed = [];
      for (var _0x1feafa = _0x517f87; _0x1feafa < _0xf1ed7a.length; _0x1feafa++) {
        _0x57eeed.push("..");
      }
      _0x57eeed = _0x57eeed.concat(_0x4d9b70.slice(_0x517f87));
      return _0x57eeed.join("/");
    }
  };
  var _0x12c425 = {
    ttys: [],
    init: function () {},
    shutdown: function () {},
    register: function (_0x2c42f1, _0x704ba0) {
      _0x12c425.ttys[_0x2c42f1] = {
        input: [],
        output: [],
        ops: _0x704ba0
      };
      _0x221e83.registerDevice(_0x2c42f1, _0x12c425.stream_ops);
    },
    stream_ops: {
      open: function (_0x1a077b) {
        var _0xfa604f = _0x12c425.ttys[_0x1a077b.node.rdev];
        if (!_0xfa604f) {
          throw new _0x221e83.ErrnoError(43);
        }
        _0x1a077b.tty = _0xfa604f;
        _0x1a077b.seekable = false;
      },
      close: function (_0x16496b) {
        _0x16496b.tty.ops.flush(_0x16496b.tty);
      },
      flush: function (_0x5acfbd) {
        _0x5acfbd.tty.ops.flush(_0x5acfbd.tty);
      },
      read: function (_0x5e54b8, _0x4c3fb1, _0x47329f, _0x40a096, _0x1b552c) {
        if (!_0x5e54b8.tty || !_0x5e54b8.tty.ops.get_char) {
          throw new _0x221e83.ErrnoError(60);
        }
        var _0x250f06 = 0;
        for (var _0x16b7e = 0; _0x16b7e < _0x40a096; _0x16b7e++) {
          var _0x2eb238;
          try {
            _0x2eb238 = _0x5e54b8.tty.ops.get_char(_0x5e54b8.tty);
          } catch (_0x2c6b26) {
            throw new _0x221e83.ErrnoError(29);
          }
          if (_0x2eb238 === undefined && _0x250f06 === 0) {
            throw new _0x221e83.ErrnoError(6);
          }
          if (_0x2eb238 === null || _0x2eb238 === undefined) {
            break;
          }
          _0x250f06++;
          _0x4c3fb1[_0x47329f + _0x16b7e] = _0x2eb238;
        }
        if (_0x250f06) {
          _0x5e54b8.node.timestamp = Date.now();
        }
        return _0x250f06;
      },
      write: function (_0x30ae9c, _0x4fb9c2, _0x5c9f33, _0x183c6f, _0x1586fb) {
        if (!_0x30ae9c.tty || !_0x30ae9c.tty.ops.put_char) {
          throw new _0x221e83.ErrnoError(60);
        }
        try {
          for (var _0x4bdb6c = 0; _0x4bdb6c < _0x183c6f; _0x4bdb6c++) {
            _0x30ae9c.tty.ops.put_char(_0x30ae9c.tty, _0x4fb9c2[_0x5c9f33 + _0x4bdb6c]);
          }
        } catch (_0x3b22b7) {
          throw new _0x221e83.ErrnoError(29);
        }
        if (_0x183c6f) {
          _0x30ae9c.node.timestamp = Date.now();
        }
        return _0x4bdb6c;
      }
    },
    default_tty_ops: {
      get_char: function (_0x11e0cd) {
        if (!_0x11e0cd.input.length) {
          var _0x3bf8ef = null;
          if (_0x23eb2f) {
            var _0x7418f9 = 256;
            var _0x391ad2 = Buffer.alloc ? Buffer.alloc(_0x7418f9) : new Buffer(_0x7418f9);
            var _0x3e2c6b = 0;
            try {
              _0x3e2c6b = _0x9df614.readSync(process.stdin.fd, _0x391ad2, 0, _0x7418f9, null);
            } catch (_0x2adec2) {
              if (_0x2adec2.toString().includes("EOF")) {
                _0x3e2c6b = 0;
              } else {
                throw _0x2adec2;
              }
            }
            if (_0x3e2c6b > 0) {
              _0x3bf8ef = _0x391ad2.slice(0, _0x3e2c6b).toString("utf-8");
            } else {
              _0x3bf8ef = null;
            }
          } else if (typeof window != "undefined" && typeof window.prompt == "function") {
            _0x3bf8ef = window.prompt("Input: ");
            if (_0x3bf8ef !== null) {
              _0x3bf8ef += "\n";
            }
          } else if (typeof readline == "function") {
            _0x3bf8ef = readline();
            if (_0x3bf8ef !== null) {
              _0x3bf8ef += "\n";
            }
          }
          if (!_0x3bf8ef) {
            return null;
          }
          _0x11e0cd.input = _0x216a0f(_0x3bf8ef, true);
        }
        return _0x11e0cd.input.shift();
      },
      put_char: function (_0x513df6, _0x488c0d) {
        if (_0x488c0d === null || _0x488c0d === 10) {
          _0x56a098(_0x1f45b0(_0x513df6.output, 0));
          _0x513df6.output = [];
        } else if (_0x488c0d != 0) {
          _0x513df6.output.push(_0x488c0d);
        }
      },
      flush: function (_0x158133) {
        if (_0x158133.output && _0x158133.output.length > 0) {
          _0x56a098(_0x1f45b0(_0x158133.output, 0));
          _0x158133.output = [];
        }
      }
    },
    default_tty1_ops: {
      put_char: function (_0x3156b8, _0x37a220) {
        if (_0x37a220 === null || _0x37a220 === 10) {
          _0x516167(_0x1f45b0(_0x3156b8.output, 0));
          _0x3156b8.output = [];
        } else if (_0x37a220 != 0) {
          _0x3156b8.output.push(_0x37a220);
        }
      },
      flush: function (_0x1d8988) {
        if (_0x1d8988.output && _0x1d8988.output.length > 0) {
          _0x516167(_0x1f45b0(_0x1d8988.output, 0));
          _0x1d8988.output = [];
        }
      }
    }
  };
  function _0x16ee72(_0x23a05b) {
    var _0x20b63f = _0x508820(_0x23a05b, 65536);
    var _0x3db9e5 = _0x253dd7(_0x20b63f);
    while (_0x23a05b < _0x20b63f) {
      _0xb3d98[_0x3db9e5 + _0x23a05b++] = 0;
    }
    return _0x3db9e5;
  }
  var _0x2e8536 = {
    ops_table: null,
    mount: function (_0x3931f1) {
      return _0x2e8536.createNode(null, "/", 16895, 0);
    },
    createNode: function (_0x2a4424, _0x51e62b, _0x49bb93, _0x25fad8) {
      if (_0x221e83.isBlkdev(_0x49bb93) || _0x221e83.isFIFO(_0x49bb93)) {
        throw new _0x221e83.ErrnoError(63);
      }
      if (!_0x2e8536.ops_table) {
        _0x2e8536.ops_table = {
          dir: {
            node: {
              getattr: _0x2e8536.node_ops.getattr,
              setattr: _0x2e8536.node_ops.setattr,
              lookup: _0x2e8536.node_ops.lookup,
              mknod: _0x2e8536.node_ops.mknod,
              rename: _0x2e8536.node_ops.rename,
              unlink: _0x2e8536.node_ops.unlink,
              rmdir: _0x2e8536.node_ops.rmdir,
              readdir: _0x2e8536.node_ops.readdir,
              symlink: _0x2e8536.node_ops.symlink
            },
            stream: {
              llseek: _0x2e8536.stream_ops.llseek
            }
          },
          file: {
            node: {
              getattr: _0x2e8536.node_ops.getattr,
              setattr: _0x2e8536.node_ops.setattr
            },
            stream: {
              llseek: _0x2e8536.stream_ops.llseek,
              read: _0x2e8536.stream_ops.read,
              write: _0x2e8536.stream_ops.write,
              allocate: _0x2e8536.stream_ops.allocate,
              mmap: _0x2e8536.stream_ops.mmap,
              msync: _0x2e8536.stream_ops.msync
            }
          },
          link: {
            node: {
              getattr: _0x2e8536.node_ops.getattr,
              setattr: _0x2e8536.node_ops.setattr,
              readlink: _0x2e8536.node_ops.readlink
            },
            stream: {}
          },
          chrdev: {
            node: {
              getattr: _0x2e8536.node_ops.getattr,
              setattr: _0x2e8536.node_ops.setattr
            },
            stream: _0x221e83.chrdev_stream_ops
          }
        };
      }
      var _0x37001e = _0x221e83.createNode(_0x2a4424, _0x51e62b, _0x49bb93, _0x25fad8);
      if (_0x221e83.isDir(_0x37001e.mode)) {
        _0x37001e.node_ops = _0x2e8536.ops_table.dir.node;
        _0x37001e.stream_ops = _0x2e8536.ops_table.dir.stream;
        _0x37001e.contents = {};
      } else if (_0x221e83.isFile(_0x37001e.mode)) {
        _0x37001e.node_ops = _0x2e8536.ops_table.file.node;
        _0x37001e.stream_ops = _0x2e8536.ops_table.file.stream;
        _0x37001e.usedBytes = 0;
        _0x37001e.contents = null;
      } else if (_0x221e83.isLink(_0x37001e.mode)) {
        _0x37001e.node_ops = _0x2e8536.ops_table.link.node;
        _0x37001e.stream_ops = _0x2e8536.ops_table.link.stream;
      } else if (_0x221e83.isChrdev(_0x37001e.mode)) {
        _0x37001e.node_ops = _0x2e8536.ops_table.chrdev.node;
        _0x37001e.stream_ops = _0x2e8536.ops_table.chrdev.stream;
      }
      _0x37001e.timestamp = Date.now();
      if (_0x2a4424) {
        _0x2a4424.contents[_0x51e62b] = _0x37001e;
        _0x2a4424.timestamp = _0x37001e.timestamp;
      }
      return _0x37001e;
    },
    getFileDataAsTypedArray: function (_0x4d6828) {
      if (!_0x4d6828.contents) {
        return new Uint8Array(0);
      }
      if (_0x4d6828.contents.subarray) {
        return _0x4d6828.contents.subarray(0, _0x4d6828.usedBytes);
      }
      return new Uint8Array(_0x4d6828.contents);
    },
    expandFileStorage: function (_0x5760fd, _0x559ae1) {
      var _0x6ea63d = _0x5760fd.contents ? _0x5760fd.contents.length : 0;
      if (_0x6ea63d >= _0x559ae1) {
        return;
      }
      var _0x26a145 = 1048576;
      _0x559ae1 = Math.max(_0x559ae1, _0x6ea63d * (_0x6ea63d < _0x26a145 ? 2 : 1.125) >>> 0);
      if (_0x6ea63d != 0) {
        _0x559ae1 = Math.max(_0x559ae1, 256);
      }
      var _0x2d93b0 = _0x5760fd.contents;
      _0x5760fd.contents = new Uint8Array(_0x559ae1);
      if (_0x5760fd.usedBytes > 0) {
        _0x5760fd.contents.set(_0x2d93b0.subarray(0, _0x5760fd.usedBytes), 0);
      }
    },
    resizeFileStorage: function (_0x44d3f8, _0x133350) {
      if (_0x44d3f8.usedBytes == _0x133350) {
        return;
      }
      if (_0x133350 == 0) {
        _0x44d3f8.contents = null;
        _0x44d3f8.usedBytes = 0;
      } else {
        var _0x158e44 = _0x44d3f8.contents;
        _0x44d3f8.contents = new Uint8Array(_0x133350);
        if (_0x158e44) {
          _0x44d3f8.contents.set(_0x158e44.subarray(0, Math.min(_0x133350, _0x44d3f8.usedBytes)));
        }
        _0x44d3f8.usedBytes = _0x133350;
      }
    },
    node_ops: {
      getattr: function (_0x34324b) {
        var _0x2f65a9 = {};
        _0x2f65a9.dev = _0x221e83.isChrdev(_0x34324b.mode) ? _0x34324b.id : 1;
        _0x2f65a9.ino = _0x34324b.id;
        _0x2f65a9.mode = _0x34324b.mode;
        _0x2f65a9.nlink = 1;
        _0x2f65a9.uid = 0;
        _0x2f65a9.gid = 0;
        _0x2f65a9.rdev = _0x34324b.rdev;
        if (_0x221e83.isDir(_0x34324b.mode)) {
          _0x2f65a9.size = 4096;
        } else if (_0x221e83.isFile(_0x34324b.mode)) {
          _0x2f65a9.size = _0x34324b.usedBytes;
        } else if (_0x221e83.isLink(_0x34324b.mode)) {
          _0x2f65a9.size = _0x34324b.link.length;
        } else {
          _0x2f65a9.size = 0;
        }
        _0x2f65a9.atime = new Date(_0x34324b.timestamp);
        _0x2f65a9.mtime = new Date(_0x34324b.timestamp);
        _0x2f65a9.ctime = new Date(_0x34324b.timestamp);
        _0x2f65a9.blksize = 4096;
        _0x2f65a9.blocks = Math.ceil(_0x2f65a9.size / _0x2f65a9.blksize);
        return _0x2f65a9;
      },
      setattr: function (_0x404316, _0x2e0d4a) {
        if (_0x2e0d4a.mode !== undefined) {
          _0x404316.mode = _0x2e0d4a.mode;
        }
        if (_0x2e0d4a.timestamp !== undefined) {
          _0x404316.timestamp = _0x2e0d4a.timestamp;
        }
        if (_0x2e0d4a.size !== undefined) {
          _0x2e8536.resizeFileStorage(_0x404316, _0x2e0d4a.size);
        }
      },
      lookup: function (_0x4bc8b9, _0x4ff27c) {
        throw _0x221e83.genericErrors[44];
      },
      mknod: function (_0x5d6f1c, _0x536635, _0x505a7a, _0x5f229c) {
        return _0x2e8536.createNode(_0x5d6f1c, _0x536635, _0x505a7a, _0x5f229c);
      },
      rename: function (_0x1b94bf, _0x5c1ff9, _0x154810) {
        if (_0x221e83.isDir(_0x1b94bf.mode)) {
          var _0x2109b4;
          try {
            _0x2109b4 = _0x221e83.lookupNode(_0x5c1ff9, _0x154810);
          } catch (_0x588fcd) {}
          if (_0x2109b4) {
            for (var _0x3c23d9 in _0x2109b4.contents) {
              throw new _0x221e83.ErrnoError(55);
            }
          }
        }
        delete _0x1b94bf.parent.contents[_0x1b94bf.name];
        _0x1b94bf.parent.timestamp = Date.now();
        _0x1b94bf.name = _0x154810;
        _0x5c1ff9.contents[_0x154810] = _0x1b94bf;
        _0x5c1ff9.timestamp = _0x1b94bf.parent.timestamp;
        _0x1b94bf.parent = _0x5c1ff9;
      },
      unlink: function (_0x4de8f3, _0x508a1e) {
        delete _0x4de8f3.contents[_0x508a1e];
        _0x4de8f3.timestamp = Date.now();
      },
      rmdir: function (_0x1f8823, _0x5d1c8f) {
        var _0x4489ca = _0x221e83.lookupNode(_0x1f8823, _0x5d1c8f);
        for (var _0x29ebda in _0x4489ca.contents) {
          throw new _0x221e83.ErrnoError(55);
        }
        delete _0x1f8823.contents[_0x5d1c8f];
        _0x1f8823.timestamp = Date.now();
      },
      readdir: function (_0x5c66e8) {
        var _0x28a14e = [".", ".."];
        for (var _0x5913d5 in _0x5c66e8.contents) {
          if (!_0x5c66e8.contents.hasOwnProperty(_0x5913d5)) {
            continue;
          }
          _0x28a14e.push(_0x5913d5);
        }
        return _0x28a14e;
      },
      symlink: function (_0xb514a1, _0x178225, _0x18a657) {
        var _0x569c3f = _0x2e8536.createNode(_0xb514a1, _0x178225, 41471, 0);
        _0x569c3f.link = _0x18a657;
        return _0x569c3f;
      },
      readlink: function (_0x3e790e) {
        if (!_0x221e83.isLink(_0x3e790e.mode)) {
          throw new _0x221e83.ErrnoError(28);
        }
        return _0x3e790e.link;
      }
    },
    stream_ops: {
      read: function (_0x276a3d, _0x4d1015, _0x5f1730, _0x212aaf, _0x30e2f7) {
        var _0x573fa4 = _0x276a3d.node.contents;
        if (_0x30e2f7 >= _0x276a3d.node.usedBytes) {
          return 0;
        }
        var _0x4e8060 = Math.min(_0x276a3d.node.usedBytes - _0x30e2f7, _0x212aaf);
        if (_0x4e8060 > 8 && _0x573fa4.subarray) {
          _0x4d1015.set(_0x573fa4.subarray(_0x30e2f7, _0x30e2f7 + _0x4e8060), _0x5f1730);
        } else {
          for (var _0x5c44e9 = 0; _0x5c44e9 < _0x4e8060; _0x5c44e9++) {
            _0x4d1015[_0x5f1730 + _0x5c44e9] = _0x573fa4[_0x30e2f7 + _0x5c44e9];
          }
        }
        return _0x4e8060;
      },
      write: function (_0x15c1f1, _0x27ef9c, _0x1101bb, _0x88db86, _0x4cdc2a, _0x44b7b9) {
        if (_0x27ef9c.buffer === _0xb3d98.buffer) {
          _0x44b7b9 = false;
        }
        if (!_0x88db86) {
          return 0;
        }
        var _0x35b1ac = _0x15c1f1.node;
        _0x35b1ac.timestamp = Date.now();
        if (_0x27ef9c.subarray && (!_0x35b1ac.contents || _0x35b1ac.contents.subarray)) {
          if (_0x44b7b9) {
            _0x35b1ac.contents = _0x27ef9c.subarray(_0x1101bb, _0x1101bb + _0x88db86);
            _0x35b1ac.usedBytes = _0x88db86;
            return _0x88db86;
          } else if (_0x35b1ac.usedBytes === 0 && _0x4cdc2a === 0) {
            _0x35b1ac.contents = _0x27ef9c.slice(_0x1101bb, _0x1101bb + _0x88db86);
            _0x35b1ac.usedBytes = _0x88db86;
            return _0x88db86;
          } else if (_0x4cdc2a + _0x88db86 <= _0x35b1ac.usedBytes) {
            _0x35b1ac.contents.set(_0x27ef9c.subarray(_0x1101bb, _0x1101bb + _0x88db86), _0x4cdc2a);
            return _0x88db86;
          }
        }
        _0x2e8536.expandFileStorage(_0x35b1ac, _0x4cdc2a + _0x88db86);
        if (_0x35b1ac.contents.subarray && _0x27ef9c.subarray) {
          _0x35b1ac.contents.set(_0x27ef9c.subarray(_0x1101bb, _0x1101bb + _0x88db86), _0x4cdc2a);
        } else {
          for (var _0x489fb6 = 0; _0x489fb6 < _0x88db86; _0x489fb6++) {
            _0x35b1ac.contents[_0x4cdc2a + _0x489fb6] = _0x27ef9c[_0x1101bb + _0x489fb6];
          }
        }
        _0x35b1ac.usedBytes = Math.max(_0x35b1ac.usedBytes, _0x4cdc2a + _0x88db86);
        return _0x88db86;
      },
      llseek: function (_0x5d2494, _0x6d9a75, _0x782522) {
        var _0x4e1b94 = _0x6d9a75;
        if (_0x782522 === 1) {
          _0x4e1b94 += _0x5d2494.position;
        } else if (_0x782522 === 2) {
          if (_0x221e83.isFile(_0x5d2494.node.mode)) {
            _0x4e1b94 += _0x5d2494.node.usedBytes;
          }
        }
        if (_0x4e1b94 < 0) {
          throw new _0x221e83.ErrnoError(28);
        }
        return _0x4e1b94;
      },
      allocate: function (_0x321739, _0x2b72e3, _0x5890f1) {
        _0x2e8536.expandFileStorage(_0x321739.node, _0x2b72e3 + _0x5890f1);
        _0x321739.node.usedBytes = Math.max(_0x321739.node.usedBytes, _0x2b72e3 + _0x5890f1);
      },
      mmap: function (_0x389ba7, _0xbd403c, _0x545174, _0x2fc58c, _0x45cee3, _0x49b8da) {
        if (_0xbd403c !== 0) {
          throw new _0x221e83.ErrnoError(28);
        }
        if (!_0x221e83.isFile(_0x389ba7.node.mode)) {
          throw new _0x221e83.ErrnoError(43);
        }
        var _0x4a7689;
        var _0x2f42d5;
        var _0x4a39e2 = _0x389ba7.node.contents;
        if (!(_0x49b8da & 2) && _0x4a39e2.buffer === _0x47e5e9) {
          _0x2f42d5 = false;
          _0x4a7689 = _0x4a39e2.byteOffset;
        } else {
          if (_0x2fc58c > 0 || _0x2fc58c + _0x545174 < _0x4a39e2.length) {
            if (_0x4a39e2.subarray) {
              _0x4a39e2 = _0x4a39e2.subarray(_0x2fc58c, _0x2fc58c + _0x545174);
            } else {
              _0x4a39e2 = Array.prototype.slice.call(_0x4a39e2, _0x2fc58c, _0x2fc58c + _0x545174);
            }
          }
          _0x2f42d5 = true;
          _0x4a7689 = _0x16ee72(_0x545174);
          if (!_0x4a7689) {
            throw new _0x221e83.ErrnoError(48);
          }
          _0xb3d98.set(_0x4a39e2, _0x4a7689);
        }
        return {
          ptr: _0x4a7689,
          allocated: _0x2f42d5
        };
      },
      msync: function (_0x46a44c, _0x596eee, _0x378c7d, _0x3b3e41, _0x27ac7b) {
        if (!_0x221e83.isFile(_0x46a44c.node.mode)) {
          throw new _0x221e83.ErrnoError(43);
        }
        if (_0x27ac7b & 2) {
          return 0;
        }
        var _0xa58e9a = _0x2e8536.stream_ops.write(_0x46a44c, _0x596eee, 0, _0x3b3e41, _0x378c7d, false);
        return 0;
      }
    }
  };
  var _0x21775c = {
    dbs: {},
    indexedDB: function () {
      if (typeof indexedDB !== "undefined") {
        return indexedDB;
      }
      var _0x55d720 = null;
      if (typeof window === "object") {
        _0x55d720 = window.indexedDB || window.mozIndexedDB || window.webkitIndexedDB || window.msIndexedDB;
      }
      _0x5181b0(_0x55d720, "IDBFS used, but indexedDB not supported");
      return _0x55d720;
    },
    DB_VERSION: 21,
    DB_STORE_NAME: "FILE_DATA",
    mount: function (_0x4607d6) {
      return _0x2e8536.mount.apply(null, arguments);
    },
    syncfs: function (_0x546a59, _0x30fd13, _0x5a6f15) {
      _0x21775c.getLocalSet(_0x546a59, function (_0x517762, _0x26e7af) {
        if (_0x517762) {
          return _0x5a6f15(_0x517762);
        }
        _0x21775c.getRemoteSet(_0x546a59, function (_0x2bb9e4, _0x195d86) {
          if (_0x2bb9e4) {
            return _0x5a6f15(_0x2bb9e4);
          }
          var _0x542916 = _0x30fd13 ? _0x195d86 : _0x26e7af;
          var _0x4cfd22 = _0x30fd13 ? _0x26e7af : _0x195d86;
          _0x21775c.reconcile(_0x542916, _0x4cfd22, _0x5a6f15);
        });
      });
    },
    getDB: function (_0x402fc7, _0x420605) {
      var _0x163c42 = _0x21775c.dbs[_0x402fc7];
      if (_0x163c42) {
        return _0x420605(null, _0x163c42);
      }
      var _0x474cbd;
      try {
        _0x474cbd = _0x21775c.indexedDB().open(_0x402fc7, _0x21775c.DB_VERSION);
      } catch (_0x58fdf3) {
        return _0x420605(_0x58fdf3);
      }
      if (!_0x474cbd) {
        return _0x420605("Unable to connect to IndexedDB");
      }
      _0x474cbd.onupgradeneeded = function (_0x183948) {
        var _0x54b0a5 = _0x183948.target.result;
        var _0x488de5 = _0x183948.target.transaction;
        var _0x18eb4f;
        if (_0x54b0a5.objectStoreNames.contains(_0x21775c.DB_STORE_NAME)) {
          _0x18eb4f = _0x488de5.objectStore(_0x21775c.DB_STORE_NAME);
        } else {
          _0x18eb4f = _0x54b0a5.createObjectStore(_0x21775c.DB_STORE_NAME);
        }
        if (!_0x18eb4f.indexNames.contains("timestamp")) {
          _0x18eb4f.createIndex("timestamp", "timestamp", {
            unique: false
          });
        }
      };
      _0x474cbd.onsuccess = function () {
        _0x163c42 = _0x474cbd.result;
        _0x21775c.dbs[_0x402fc7] = _0x163c42;
        _0x420605(null, _0x163c42);
      };
      _0x474cbd.onerror = function (_0x239559) {
        _0x420605(this.error);
        _0x239559.preventDefault();
      };
    },
    getLocalSet: function (_0x13436a, _0x5c3c33) {
      var _0x3c72d8 = {};
      function _0x33ea86(_0x5e5b4d) {
        return _0x5e5b4d !== "." && _0x5e5b4d !== "..";
      }
      function _0x35030d(_0x4fc339) {
        return function (_0x5e29cf) {
          return _0x4bc719.join2(_0x4fc339, _0x5e29cf);
        };
      }
      var _0x773e1c = _0x221e83.readdir(_0x13436a.mountpoint).filter(_0x33ea86).map(_0x35030d(_0x13436a.mountpoint));
      while (_0x773e1c.length) {
        var _0x12ca2e = _0x773e1c.pop();
        var _0x59d0fe;
        try {
          _0x59d0fe = _0x221e83.stat(_0x12ca2e);
        } catch (_0x290008) {
          return _0x5c3c33(_0x290008);
        }
        if (_0x221e83.isDir(_0x59d0fe.mode)) {
          _0x773e1c.push.apply(_0x773e1c, _0x221e83.readdir(_0x12ca2e).filter(_0x33ea86).map(_0x35030d(_0x12ca2e)));
        }
        _0x3c72d8[_0x12ca2e] = {
          timestamp: _0x59d0fe.mtime
        };
      }
      return _0x5c3c33(null, {
        type: "local",
        entries: _0x3c72d8
      });
    },
    getRemoteSet: function (_0x2f5351, _0x17f2dc) {
      var _0x5060d2 = {};
      _0x21775c.getDB(_0x2f5351.mountpoint, function (_0x5a3d87, _0x574cc7) {
        if (_0x5a3d87) {
          return _0x17f2dc(_0x5a3d87);
        }
        try {
          var _0x20a3ca = _0x574cc7.transaction([_0x21775c.DB_STORE_NAME], "readonly");
          _0x20a3ca.onerror = function (_0x245a13) {
            _0x17f2dc(this.error);
            _0x245a13.preventDefault();
          };
          var _0x517df0 = _0x20a3ca.objectStore(_0x21775c.DB_STORE_NAME);
          var _0x453102 = _0x517df0.index("timestamp");
          _0x453102.openKeyCursor().onsuccess = function (_0x45ec8e) {
            var _0x229322 = _0x45ec8e.target.result;
            if (!_0x229322) {
              return _0x17f2dc(null, {
                type: "remote",
                db: _0x574cc7,
                entries: _0x5060d2
              });
            }
            _0x5060d2[_0x229322.primaryKey] = {
              timestamp: _0x229322.key
            };
            _0x229322.continue();
          };
        } catch (_0x28b59e) {
          return _0x17f2dc(_0x28b59e);
        }
      });
    },
    loadLocalEntry: function (_0x30bf67, _0x1bfa6d) {
      var _0x21c688;
      var _0x3604a8;
      try {
        var _0x500349 = _0x221e83.lookupPath(_0x30bf67);
        _0x3604a8 = _0x500349.node;
        _0x21c688 = _0x221e83.stat(_0x30bf67);
      } catch (_0x2bd588) {
        return _0x1bfa6d(_0x2bd588);
      }
      if (_0x221e83.isDir(_0x21c688.mode)) {
        return _0x1bfa6d(null, {
          timestamp: _0x21c688.mtime,
          mode: _0x21c688.mode
        });
      } else if (_0x221e83.isFile(_0x21c688.mode)) {
        _0x3604a8.contents = _0x2e8536.getFileDataAsTypedArray(_0x3604a8);
        return _0x1bfa6d(null, {
          timestamp: _0x21c688.mtime,
          mode: _0x21c688.mode,
          contents: _0x3604a8.contents
        });
      } else {
        return _0x1bfa6d(new Error("node type not supported"));
      }
    },
    storeLocalEntry: function (_0x2614ca, _0x5ef911, _0x15bedb) {
      try {
        if (_0x221e83.isDir(_0x5ef911.mode)) {
          _0x221e83.mkdirTree(_0x2614ca, _0x5ef911.mode);
        } else if (_0x221e83.isFile(_0x5ef911.mode)) {
          _0x221e83.writeFile(_0x2614ca, _0x5ef911.contents, {
            canOwn: true
          });
        } else {
          return _0x15bedb(new Error("node type not supported"));
        }
        _0x221e83.chmod(_0x2614ca, _0x5ef911.mode);
        _0x221e83.utime(_0x2614ca, _0x5ef911.timestamp, _0x5ef911.timestamp);
      } catch (_0x390f91) {
        return _0x15bedb(_0x390f91);
      }
      _0x15bedb(null);
    },
    removeLocalEntry: function (_0x2139a0, _0x3f0867) {
      try {
        var _0x3c2d3d = _0x221e83.lookupPath(_0x2139a0);
        var _0xa4bf08 = _0x221e83.stat(_0x2139a0);
        if (_0x221e83.isDir(_0xa4bf08.mode)) {
          _0x221e83.rmdir(_0x2139a0);
        } else if (_0x221e83.isFile(_0xa4bf08.mode)) {
          _0x221e83.unlink(_0x2139a0);
        }
      } catch (_0x146c24) {
        return _0x3f0867(_0x146c24);
      }
      _0x3f0867(null);
    },
    loadRemoteEntry: function (_0x4d804f, _0x4a53c4, _0x3e7a79) {
      var _0x56bc34 = _0x4d804f.get(_0x4a53c4);
      _0x56bc34.onsuccess = function (_0x3a386) {
        _0x3e7a79(null, _0x3a386.target.result);
      };
      _0x56bc34.onerror = function (_0x254c66) {
        _0x3e7a79(this.error);
        _0x254c66.preventDefault();
      };
    },
    storeRemoteEntry: function (_0x58da0b, _0x3d73c5, _0x322d56, _0x2d58b0) {
      var _0x2b3603 = _0x58da0b.put(_0x322d56, _0x3d73c5);
      _0x2b3603.onsuccess = function () {
        _0x2d58b0(null);
      };
      _0x2b3603.onerror = function (_0x18cc24) {
        _0x2d58b0(this.error);
        _0x18cc24.preventDefault();
      };
    },
    removeRemoteEntry: function (_0x482b67, _0x18d564, _0x7f9502) {
      var _0x554000 = _0x482b67.delete(_0x18d564);
      _0x554000.onsuccess = function () {
        _0x7f9502(null);
      };
      _0x554000.onerror = function (_0x3337b1) {
        _0x7f9502(this.error);
        _0x3337b1.preventDefault();
      };
    },
    reconcile: function (_0x3add9b, _0x5af4ff, _0x19e872) {
      var _0x368e9c = 0;
      var _0x5f1dff = [];
      Object.keys(_0x3add9b.entries).forEach(function (_0x2ddff6) {
        var _0x26fee6 = _0x3add9b.entries[_0x2ddff6];
        var _0x5c13d0 = _0x5af4ff.entries[_0x2ddff6];
        if (!_0x5c13d0 || _0x26fee6.timestamp.getTime() != _0x5c13d0.timestamp.getTime()) {
          _0x5f1dff.push(_0x2ddff6);
          _0x368e9c++;
        }
      });
      var _0x266606 = [];
      Object.keys(_0x5af4ff.entries).forEach(function (_0x2a341f) {
        if (!_0x3add9b.entries[_0x2a341f]) {
          _0x266606.push(_0x2a341f);
          _0x368e9c++;
        }
      });
      if (!_0x368e9c) {
        return _0x19e872(null);
      }
      var _0x253557 = false;
      var _0x25768b = _0x3add9b.type === "remote" ? _0x3add9b.db : _0x5af4ff.db;
      var _0x3cc047 = _0x25768b.transaction([_0x21775c.DB_STORE_NAME], "readwrite");
      var _0x2ac903 = _0x3cc047.objectStore(_0x21775c.DB_STORE_NAME);
      function _0x3230b4(_0x4301d3) {
        if (_0x4301d3 && !_0x253557) {
          _0x253557 = true;
          return _0x19e872(_0x4301d3);
        }
      }
      _0x3cc047.onerror = function (_0x427361) {
        _0x3230b4(this.error);
        _0x427361.preventDefault();
      };
      _0x3cc047.oncomplete = function (_0x5cc1d0) {
        if (!_0x253557) {
          _0x19e872(null);
        }
      };
      _0x5f1dff.sort().forEach(function (_0x8eafe7) {
        if (_0x5af4ff.type === "local") {
          _0x21775c.loadRemoteEntry(_0x2ac903, _0x8eafe7, function (_0x5eece9, _0x330dba) {
            if (_0x5eece9) {
              return _0x3230b4(_0x5eece9);
            }
            _0x21775c.storeLocalEntry(_0x8eafe7, _0x330dba, _0x3230b4);
          });
        } else {
          _0x21775c.loadLocalEntry(_0x8eafe7, function (_0x58a698, _0x561289) {
            if (_0x58a698) {
              return _0x3230b4(_0x58a698);
            }
            _0x21775c.storeRemoteEntry(_0x2ac903, _0x8eafe7, _0x561289, _0x3230b4);
          });
        }
      });
      _0x266606.sort().reverse().forEach(function (_0x3de7ec) {
        if (_0x5af4ff.type === "local") {
          _0x21775c.removeLocalEntry(_0x3de7ec, _0x3230b4);
        } else {
          _0x21775c.removeRemoteEntry(_0x2ac903, _0x3de7ec, _0x3230b4);
        }
      });
    }
  };
  var _0x221e83 = {
    root: null,
    mounts: [],
    devices: {},
    streams: [],
    nextInode: 1,
    nameTable: null,
    currentPath: "/",
    initialized: false,
    ignorePermissions: true,
    trackingDelegate: {},
    tracking: {
      openFlags: {
        READ: 1,
        WRITE: 2
      }
    },
    ErrnoError: null,
    genericErrors: {},
    filesystems: null,
    syncFSRequests: 0,
    lookupPath: function (_0x3230cc, _0xaf63b1) {
      _0x3230cc = _0x4bcf2a.resolve(_0x221e83.cwd(), _0x3230cc);
      _0xaf63b1 = _0xaf63b1 || {};
      if (!_0x3230cc) {
        return {
          path: "",
          node: null
        };
      }
      var _0xed973f = {
        follow_mount: true,
        recurse_count: 0
      };
      for (var _0x3a171a in _0xed973f) {
        if (_0xaf63b1[_0x3a171a] === undefined) {
          _0xaf63b1[_0x3a171a] = _0xed973f[_0x3a171a];
        }
      }
      if (_0xaf63b1.recurse_count > 8) {
        throw new _0x221e83.ErrnoError(32);
      }
      var _0x45fbfe = _0x4bc719.normalizeArray(_0x3230cc.split("/").filter(function (_0x4b3c00) {
        return !!_0x4b3c00;
      }), false);
      var _0x4ee89c = _0x221e83.root;
      var _0x2872c7 = "/";
      for (var _0xc2f55c = 0; _0xc2f55c < _0x45fbfe.length; _0xc2f55c++) {
        var _0x679820 = _0xc2f55c === _0x45fbfe.length - 1;
        if (_0x679820 && _0xaf63b1.parent) {
          break;
        }
        _0x4ee89c = _0x221e83.lookupNode(_0x4ee89c, _0x45fbfe[_0xc2f55c]);
        _0x2872c7 = _0x4bc719.join2(_0x2872c7, _0x45fbfe[_0xc2f55c]);
        if (_0x221e83.isMountpoint(_0x4ee89c)) {
          if (!_0x679820 || _0x679820 && _0xaf63b1.follow_mount) {
            _0x4ee89c = _0x4ee89c.mounted.root;
          }
        }
        if (!_0x679820 || _0xaf63b1.follow) {
          var _0x4d6110 = 0;
          while (_0x221e83.isLink(_0x4ee89c.mode)) {
            var _0x53f7e3 = _0x221e83.readlink(_0x2872c7);
            _0x2872c7 = _0x4bcf2a.resolve(_0x4bc719.dirname(_0x2872c7), _0x53f7e3);
            var _0x2df4a6 = _0x221e83.lookupPath(_0x2872c7, {
              recurse_count: _0xaf63b1.recurse_count
            });
            _0x4ee89c = _0x2df4a6.node;
            if (_0x4d6110++ > 40) {
              throw new _0x221e83.ErrnoError(32);
            }
          }
        }
      }
      return {
        path: _0x2872c7,
        node: _0x4ee89c
      };
    },
    getPath: function (_0x5ce876) {
      var _0xe9067f;
      while (true) {
        if (_0x221e83.isRoot(_0x5ce876)) {
          var _0x3c2963 = _0x5ce876.mount.mountpoint;
          if (!_0xe9067f) {
            return _0x3c2963;
          }
          if (_0x3c2963[_0x3c2963.length - 1] !== "/") {
            return _0x3c2963 + "/" + _0xe9067f;
          } else {
            return _0x3c2963 + _0xe9067f;
          }
        }
        _0xe9067f = _0xe9067f ? _0x5ce876.name + "/" + _0xe9067f : _0x5ce876.name;
        _0x5ce876 = _0x5ce876.parent;
      }
    },
    hashName: function (_0x45c667, _0x19f3cc) {
      var _0x4c8853 = 0;
      for (var _0x3afd14 = 0; _0x3afd14 < _0x19f3cc.length; _0x3afd14++) {
        _0x4c8853 = (_0x4c8853 << 5) - _0x4c8853 + _0x19f3cc.charCodeAt(_0x3afd14) | 0;
      }
      return (_0x45c667 + _0x4c8853 >>> 0) % _0x221e83.nameTable.length;
    },
    hashAddNode: function (_0x58a7) {
      var _0x28c8a4 = _0x221e83.hashName(_0x58a7.parent.id, _0x58a7.name);
      _0x58a7.name_next = _0x221e83.nameTable[_0x28c8a4];
      _0x221e83.nameTable[_0x28c8a4] = _0x58a7;
    },
    hashRemoveNode: function (_0x409a06) {
      var _0x5b4d1e = _0x221e83.hashName(_0x409a06.parent.id, _0x409a06.name);
      if (_0x221e83.nameTable[_0x5b4d1e] === _0x409a06) {
        _0x221e83.nameTable[_0x5b4d1e] = _0x409a06.name_next;
      } else {
        var _0x10f273 = _0x221e83.nameTable[_0x5b4d1e];
        while (_0x10f273) {
          if (_0x10f273.name_next === _0x409a06) {
            _0x10f273.name_next = _0x409a06.name_next;
            break;
          }
          _0x10f273 = _0x10f273.name_next;
        }
      }
    },
    lookupNode: function (_0x25ba79, _0x3eb671) {
      var _0x3696e9 = _0x221e83.mayLookup(_0x25ba79);
      if (_0x3696e9) {
        throw new _0x221e83.ErrnoError(_0x3696e9, _0x25ba79);
      }
      var _0x397060 = _0x221e83.hashName(_0x25ba79.id, _0x3eb671);
      for (var _0x44ad2f = _0x221e83.nameTable[_0x397060]; _0x44ad2f; _0x44ad2f = _0x44ad2f.name_next) {
        var _0x576f87 = _0x44ad2f.name;
        if (_0x44ad2f.parent.id === _0x25ba79.id && _0x576f87 === _0x3eb671) {
          return _0x44ad2f;
        }
      }
      return _0x221e83.lookup(_0x25ba79, _0x3eb671);
    },
    createNode: function (_0x3e5272, _0x297b1f, _0x54c140, _0x4b6adc) {
      var _0x39e916 = new _0x221e83.FSNode(_0x3e5272, _0x297b1f, _0x54c140, _0x4b6adc);
      _0x221e83.hashAddNode(_0x39e916);
      return _0x39e916;
    },
    destroyNode: function (_0x16d8e7) {
      _0x221e83.hashRemoveNode(_0x16d8e7);
    },
    isRoot: function (_0x278d36) {
      return _0x278d36 === _0x278d36.parent;
    },
    isMountpoint: function (_0x52b606) {
      return !!_0x52b606.mounted;
    },
    isFile: function (_0x25e59c) {
      return (_0x25e59c & 61440) === 32768;
    },
    isDir: function (_0x364790) {
      return (_0x364790 & 61440) === 16384;
    },
    isLink: function (_0x11b13e) {
      return (_0x11b13e & 61440) === 40960;
    },
    isChrdev: function (_0x203fd6) {
      return (_0x203fd6 & 61440) === 8192;
    },
    isBlkdev: function (_0x19dcc2) {
      return (_0x19dcc2 & 61440) === 24576;
    },
    isFIFO: function (_0x422cfa) {
      return (_0x422cfa & 61440) === 4096;
    },
    isSocket: function (_0x126741) {
      return (_0x126741 & 49152) === 49152;
    },
    flagModes: {
      r: 0,
      "r+": 2,
      w: 577,
      "w+": 578,
      a: 1089,
      "a+": 1090
    },
    modeStringToFlags: function (_0x171ea0) {
      var _0x5e8b77 = _0x221e83.flagModes[_0x171ea0];
      if (typeof _0x5e8b77 === "undefined") {
        throw new Error("Unknown file open mode: " + _0x171ea0);
      }
      return _0x5e8b77;
    },
    flagsToPermissionString: function (_0x2c1ffe) {
      var _0x101f27 = ["r", "w", "rw"][_0x2c1ffe & 3];
      if (_0x2c1ffe & 512) {
        _0x101f27 += "w";
      }
      return _0x101f27;
    },
    nodePermissions: function (_0x2c9b9f, _0x3ddfb2) {
      if (_0x221e83.ignorePermissions) {
        return 0;
      }
      if (_0x3ddfb2.includes("r") && !(_0x2c9b9f.mode & 292)) {
        return 2;
      } else if (_0x3ddfb2.includes("w") && !(_0x2c9b9f.mode & 146)) {
        return 2;
      } else if (_0x3ddfb2.includes("x") && !(_0x2c9b9f.mode & 73)) {
        return 2;
      }
      return 0;
    },
    mayLookup: function (_0x11b2e6) {
      var _0x4d3423 = _0x221e83.nodePermissions(_0x11b2e6, "x");
      if (_0x4d3423) {
        return _0x4d3423;
      }
      if (!_0x11b2e6.node_ops.lookup) {
        return 2;
      }
      return 0;
    },
    mayCreate: function (_0x5f08a5, _0x181770) {
      try {
        var _0x3f6d16 = _0x221e83.lookupNode(_0x5f08a5, _0x181770);
        return 20;
      } catch (_0x46e058) {}
      return _0x221e83.nodePermissions(_0x5f08a5, "wx");
    },
    mayDelete: function (_0x422751, _0x1342b5, _0x1ee4fe) {
      var _0x556d29;
      try {
        _0x556d29 = _0x221e83.lookupNode(_0x422751, _0x1342b5);
      } catch (_0x3b6632) {
        return _0x3b6632.errno;
      }
      var _0x3bfdfd = _0x221e83.nodePermissions(_0x422751, "wx");
      if (_0x3bfdfd) {
        return _0x3bfdfd;
      }
      if (_0x1ee4fe) {
        if (!_0x221e83.isDir(_0x556d29.mode)) {
          return 54;
        }
        if (_0x221e83.isRoot(_0x556d29) || _0x221e83.getPath(_0x556d29) === _0x221e83.cwd()) {
          return 10;
        }
      } else if (_0x221e83.isDir(_0x556d29.mode)) {
        return 31;
      }
      return 0;
    },
    mayOpen: function (_0x1d8cf2, _0x4e49d1) {
      if (!_0x1d8cf2) {
        return 44;
      }
      if (_0x221e83.isLink(_0x1d8cf2.mode)) {
        return 32;
      } else if (_0x221e83.isDir(_0x1d8cf2.mode)) {
        if (_0x221e83.flagsToPermissionString(_0x4e49d1) !== "r" || _0x4e49d1 & 512) {
          return 31;
        }
      }
      return _0x221e83.nodePermissions(_0x1d8cf2, _0x221e83.flagsToPermissionString(_0x4e49d1));
    },
    MAX_OPEN_FDS: 4096,
    nextfd: function (_0x40ad5f, _0x1e4945) {
      _0x40ad5f = _0x40ad5f || 0;
      _0x1e4945 = _0x1e4945 || _0x221e83.MAX_OPEN_FDS;
      for (var _0x325d33 = _0x40ad5f; _0x325d33 <= _0x1e4945; _0x325d33++) {
        if (!_0x221e83.streams[_0x325d33]) {
          return _0x325d33;
        }
      }
      throw new _0x221e83.ErrnoError(33);
    },
    getStream: function (_0x4e6f67) {
      return _0x221e83.streams[_0x4e6f67];
    },
    createStream: function (_0x2642cd, _0x5c397e, _0x2fbd2b) {
      if (!_0x221e83.FSStream) {
        _0x221e83.FSStream = function () {};
        _0x221e83.FSStream.prototype = {
          object: {
            get: function () {
              return this.node;
            },
            set: function (_0x367de3) {
              this.node = _0x367de3;
            }
          },
          isRead: {
            get: function () {
              return (this.flags & 2097155) !== 1;
            }
          },
          isWrite: {
            get: function () {
              return (this.flags & 2097155) !== 0;
            }
          },
          isAppend: {
            get: function () {
              return this.flags & 1024;
            }
          }
        };
      }
      var _0x4d963e = new _0x221e83.FSStream();
      for (var _0x5d1709 in _0x2642cd) {
        _0x4d963e[_0x5d1709] = _0x2642cd[_0x5d1709];
      }
      _0x2642cd = _0x4d963e;
      var _0x22523f = _0x221e83.nextfd(_0x5c397e, _0x2fbd2b);
      _0x2642cd.fd = _0x22523f;
      _0x221e83.streams[_0x22523f] = _0x2642cd;
      return _0x2642cd;
    },
    closeStream: function (_0x288089) {
      _0x221e83.streams[_0x288089] = null;
    },
    chrdev_stream_ops: {
      open: function (_0x1dbe15) {
        var _0x292706 = _0x221e83.getDevice(_0x1dbe15.node.rdev);
        _0x1dbe15.stream_ops = _0x292706.stream_ops;
        if (_0x1dbe15.stream_ops.open) {
          _0x1dbe15.stream_ops.open(_0x1dbe15);
        }
      },
      llseek: function () {
        throw new _0x221e83.ErrnoError(70);
      }
    },
    major: function (_0x5d48e6) {
      return _0x5d48e6 >> 8;
    },
    minor: function (_0x282983) {
      return _0x282983 & 255;
    },
    makedev: function (_0x3f22b5, _0x5b8a09) {
      return _0x3f22b5 << 8 | _0x5b8a09;
    },
    registerDevice: function (_0x17fe85, _0x5cc7cb) {
      _0x221e83.devices[_0x17fe85] = {
        stream_ops: _0x5cc7cb
      };
    },
    getDevice: function (_0x396434) {
      return _0x221e83.devices[_0x396434];
    },
    getMounts: function (_0xc8718f) {
      var _0x2d5c6c = [];
      var _0x497257 = [_0xc8718f];
      while (_0x497257.length) {
        var _0x105ce5 = _0x497257.pop();
        _0x2d5c6c.push(_0x105ce5);
        _0x497257.push.apply(_0x497257, _0x105ce5.mounts);
      }
      return _0x2d5c6c;
    },
    syncfs: function (_0x2ea390, _0x1ef20a) {
      if (typeof _0x2ea390 === "function") {
        _0x1ef20a = _0x2ea390;
        _0x2ea390 = false;
      }
      _0x221e83.syncFSRequests++;
      if (_0x221e83.syncFSRequests > 1) {
        _0x516167("warning: " + _0x221e83.syncFSRequests + " FS.syncfs operations in flight at once, probably just doing extra work");
      }
      var _0x291714 = _0x221e83.getMounts(_0x221e83.root.mount);
      var _0x4f3277 = 0;
      function _0x5d184d(_0x243545) {
        _0x221e83.syncFSRequests--;
        return _0x1ef20a(_0x243545);
      }
      function _0x10390e(_0x575a74) {
        if (_0x575a74) {
          if (!_0x10390e.errored) {
            _0x10390e.errored = true;
            return _0x5d184d(_0x575a74);
          }
          return;
        }
        if (++_0x4f3277 >= _0x291714.length) {
          _0x5d184d(null);
        }
      }
      _0x291714.forEach(function (_0x544923) {
        if (!_0x544923.type.syncfs) {
          return _0x10390e(null);
        }
        _0x544923.type.syncfs(_0x544923, _0x2ea390, _0x10390e);
      });
    },
    mount: function (_0x540eb9, _0x3a6bd1, _0x4d367c) {
      var _0x48752c = _0x4d367c === "/";
      var _0x3f6b7e = !_0x4d367c;
      var _0x10f53e;
      if (_0x48752c && _0x221e83.root) {
        throw new _0x221e83.ErrnoError(10);
      } else if (!_0x48752c && !_0x3f6b7e) {
        var _0xcebf90 = _0x221e83.lookupPath(_0x4d367c, {
          follow_mount: false
        });
        _0x4d367c = _0xcebf90.path;
        _0x10f53e = _0xcebf90.node;
        if (_0x221e83.isMountpoint(_0x10f53e)) {
          throw new _0x221e83.ErrnoError(10);
        }
        if (!_0x221e83.isDir(_0x10f53e.mode)) {
          throw new _0x221e83.ErrnoError(54);
        }
      }
      var _0x1529ec = {
        type: _0x540eb9,
        opts: _0x3a6bd1,
        mountpoint: _0x4d367c,
        mounts: []
      };
      var _0x4bc92f = _0x540eb9.mount(_0x1529ec);
      _0x4bc92f.mount = _0x1529ec;
      _0x1529ec.root = _0x4bc92f;
      if (_0x48752c) {
        _0x221e83.root = _0x4bc92f;
      } else if (_0x10f53e) {
        _0x10f53e.mounted = _0x1529ec;
        if (_0x10f53e.mount) {
          _0x10f53e.mount.mounts.push(_0x1529ec);
        }
      }
      return _0x4bc92f;
    },
    unmount: function (_0x3a602e) {
      var _0x883a5 = _0x221e83.lookupPath(_0x3a602e, {
        follow_mount: false
      });
      if (!_0x221e83.isMountpoint(_0x883a5.node)) {
        throw new _0x221e83.ErrnoError(28);
      }
      var _0x3062ce = _0x883a5.node;
      var _0x442934 = _0x3062ce.mounted;
      var _0x3a087f = _0x221e83.getMounts(_0x442934);
      Object.keys(_0x221e83.nameTable).forEach(function (_0x295c75) {
        var _0x7e0552 = _0x221e83.nameTable[_0x295c75];
        while (_0x7e0552) {
          var _0x42a1bd = _0x7e0552.name_next;
          if (_0x3a087f.includes(_0x7e0552.mount)) {
            _0x221e83.destroyNode(_0x7e0552);
          }
          _0x7e0552 = _0x42a1bd;
        }
      });
      _0x3062ce.mounted = null;
      var _0x5de335 = _0x3062ce.mount.mounts.indexOf(_0x442934);
      _0x3062ce.mount.mounts.splice(_0x5de335, 1);
    },
    lookup: function (_0x3c3ab8, _0x305343) {
      return _0x3c3ab8.node_ops.lookup(_0x3c3ab8, _0x305343);
    },
    mknod: function (_0x3d8d78, _0x53b19d, _0x178840) {
      var _0x56cc7c = _0x221e83.lookupPath(_0x3d8d78, {
        parent: true
      });
      var _0x396afd = _0x56cc7c.node;
      var _0x1115d5 = _0x4bc719.basename(_0x3d8d78);
      if (!_0x1115d5 || _0x1115d5 === "." || _0x1115d5 === "..") {
        throw new _0x221e83.ErrnoError(28);
      }
      var _0x28fbb0 = _0x221e83.mayCreate(_0x396afd, _0x1115d5);
      if (_0x28fbb0) {
        throw new _0x221e83.ErrnoError(_0x28fbb0);
      }
      if (!_0x396afd.node_ops.mknod) {
        throw new _0x221e83.ErrnoError(63);
      }
      return _0x396afd.node_ops.mknod(_0x396afd, _0x1115d5, _0x53b19d, _0x178840);
    },
    create: function (_0x3a7341, _0x21f827) {
      _0x21f827 = _0x21f827 !== undefined ? _0x21f827 : 438;
      _0x21f827 &= 4095;
      _0x21f827 |= 32768;
      return _0x221e83.mknod(_0x3a7341, _0x21f827, 0);
    },
    mkdir: function (_0x776cdc, _0x300840) {
      _0x300840 = _0x300840 !== undefined ? _0x300840 : 511;
      _0x300840 &= 1023;
      _0x300840 |= 16384;
      return _0x221e83.mknod(_0x776cdc, _0x300840, 0);
    },
    mkdirTree: function (_0x5b0e07, _0x28141f) {
      var _0x3307fa = _0x5b0e07.split("/");
      var _0x3063e5 = "";
      for (var _0xff9529 = 0; _0xff9529 < _0x3307fa.length; ++_0xff9529) {
        if (!_0x3307fa[_0xff9529]) {
          continue;
        }
        _0x3063e5 += "/" + _0x3307fa[_0xff9529];
        try {
          _0x221e83.mkdir(_0x3063e5, _0x28141f);
        } catch (_0x252eed) {
          if (_0x252eed.errno != 20) {
            throw _0x252eed;
          }
        }
      }
    },
    mkdev: function (_0x2d8237, _0x18068d, _0x36ae23) {
      if (typeof _0x36ae23 === "undefined") {
        _0x36ae23 = _0x18068d;
        _0x18068d = 438;
      }
      _0x18068d |= 8192;
      return _0x221e83.mknod(_0x2d8237, _0x18068d, _0x36ae23);
    },
    symlink: function (_0x2b6a67, _0xdc730e) {
      if (!_0x4bcf2a.resolve(_0x2b6a67)) {
        throw new _0x221e83.ErrnoError(44);
      }
      var _0x28b061 = _0x221e83.lookupPath(_0xdc730e, {
        parent: true
      });
      var _0x366100 = _0x28b061.node;
      if (!_0x366100) {
        throw new _0x221e83.ErrnoError(44);
      }
      var _0xac308 = _0x4bc719.basename(_0xdc730e);
      var _0x1dc67c = _0x221e83.mayCreate(_0x366100, _0xac308);
      if (_0x1dc67c) {
        throw new _0x221e83.ErrnoError(_0x1dc67c);
      }
      if (!_0x366100.node_ops.symlink) {
        throw new _0x221e83.ErrnoError(63);
      }
      return _0x366100.node_ops.symlink(_0x366100, _0xac308, _0x2b6a67);
    },
    rename: function (_0xc603a5, _0x21ccc5) {
      var _0x5a71ec = _0x4bc719.dirname(_0xc603a5);
      var _0x56101b = _0x4bc719.dirname(_0x21ccc5);
      var _0x2dd171 = _0x4bc719.basename(_0xc603a5);
      var _0x55641b = _0x4bc719.basename(_0x21ccc5);
      var _0x10fed8;
      var _0x212126;
      var _0x5b87d5;
      _0x10fed8 = _0x221e83.lookupPath(_0xc603a5, {
        parent: true
      });
      _0x212126 = _0x10fed8.node;
      _0x10fed8 = _0x221e83.lookupPath(_0x21ccc5, {
        parent: true
      });
      _0x5b87d5 = _0x10fed8.node;
      if (!_0x212126 || !_0x5b87d5) {
        throw new _0x221e83.ErrnoError(44);
      }
      if (_0x212126.mount !== _0x5b87d5.mount) {
        throw new _0x221e83.ErrnoError(75);
      }
      var _0xb3aac4 = _0x221e83.lookupNode(_0x212126, _0x2dd171);
      var _0x190c5f = _0x4bcf2a.relative(_0xc603a5, _0x56101b);
      if (_0x190c5f.charAt(0) !== ".") {
        throw new _0x221e83.ErrnoError(28);
      }
      _0x190c5f = _0x4bcf2a.relative(_0x21ccc5, _0x5a71ec);
      if (_0x190c5f.charAt(0) !== ".") {
        throw new _0x221e83.ErrnoError(55);
      }
      var _0x49a5bf;
      try {
        _0x49a5bf = _0x221e83.lookupNode(_0x5b87d5, _0x55641b);
      } catch (_0x59265e) {}
      if (_0xb3aac4 === _0x49a5bf) {
        return;
      }
      var _0x5bd8fe = _0x221e83.isDir(_0xb3aac4.mode);
      var _0x5cb0c5 = _0x221e83.mayDelete(_0x212126, _0x2dd171, _0x5bd8fe);
      if (_0x5cb0c5) {
        throw new _0x221e83.ErrnoError(_0x5cb0c5);
      }
      _0x5cb0c5 = _0x49a5bf ? _0x221e83.mayDelete(_0x5b87d5, _0x55641b, _0x5bd8fe) : _0x221e83.mayCreate(_0x5b87d5, _0x55641b);
      if (_0x5cb0c5) {
        throw new _0x221e83.ErrnoError(_0x5cb0c5);
      }
      if (!_0x212126.node_ops.rename) {
        throw new _0x221e83.ErrnoError(63);
      }
      if (_0x221e83.isMountpoint(_0xb3aac4) || _0x49a5bf && _0x221e83.isMountpoint(_0x49a5bf)) {
        throw new _0x221e83.ErrnoError(10);
      }
      if (_0x5b87d5 !== _0x212126) {
        _0x5cb0c5 = _0x221e83.nodePermissions(_0x212126, "w");
        if (_0x5cb0c5) {
          throw new _0x221e83.ErrnoError(_0x5cb0c5);
        }
      }
      try {
        if (_0x221e83.trackingDelegate.willMovePath) {
          _0x221e83.trackingDelegate.willMovePath(_0xc603a5, _0x21ccc5);
        }
      } catch (_0x5091d1) {
        _0x516167("FS.trackingDelegate['willMovePath']('" + _0xc603a5 + "', '" + _0x21ccc5 + "') threw an exception: " + _0x5091d1.message);
      }
      _0x221e83.hashRemoveNode(_0xb3aac4);
      try {
        _0x212126.node_ops.rename(_0xb3aac4, _0x5b87d5, _0x55641b);
      } catch (_0x45d34b) {
        throw _0x45d34b;
      } finally {
        _0x221e83.hashAddNode(_0xb3aac4);
      }
      try {
        if (_0x221e83.trackingDelegate.onMovePath) {
          _0x221e83.trackingDelegate.onMovePath(_0xc603a5, _0x21ccc5);
        }
      } catch (_0x5ae483) {
        _0x516167("FS.trackingDelegate['onMovePath']('" + _0xc603a5 + "', '" + _0x21ccc5 + "') threw an exception: " + _0x5ae483.message);
      }
    },
    rmdir: function (_0x151eb4) {
      var _0x28d50c = _0x221e83.lookupPath(_0x151eb4, {
        parent: true
      });
      var _0x51db3b = _0x28d50c.node;
      var _0x392b6e = _0x4bc719.basename(_0x151eb4);
      var _0x2bb99c = _0x221e83.lookupNode(_0x51db3b, _0x392b6e);
      var _0x344cb3 = _0x221e83.mayDelete(_0x51db3b, _0x392b6e, true);
      if (_0x344cb3) {
        throw new _0x221e83.ErrnoError(_0x344cb3);
      }
      if (!_0x51db3b.node_ops.rmdir) {
        throw new _0x221e83.ErrnoError(63);
      }
      if (_0x221e83.isMountpoint(_0x2bb99c)) {
        throw new _0x221e83.ErrnoError(10);
      }
      try {
        if (_0x221e83.trackingDelegate.willDeletePath) {
          _0x221e83.trackingDelegate.willDeletePath(_0x151eb4);
        }
      } catch (_0xd97009) {
        _0x516167("FS.trackingDelegate['willDeletePath']('" + _0x151eb4 + "') threw an exception: " + _0xd97009.message);
      }
      _0x51db3b.node_ops.rmdir(_0x51db3b, _0x392b6e);
      _0x221e83.destroyNode(_0x2bb99c);
      try {
        if (_0x221e83.trackingDelegate.onDeletePath) {
          _0x221e83.trackingDelegate.onDeletePath(_0x151eb4);
        }
      } catch (_0x3cc68d) {
        _0x516167("FS.trackingDelegate['onDeletePath']('" + _0x151eb4 + "') threw an exception: " + _0x3cc68d.message);
      }
    },
    readdir: function (_0x39d92c) {
      var _0x1174f1 = _0x221e83.lookupPath(_0x39d92c, {
        follow: true
      });
      var _0x957041 = _0x1174f1.node;
      if (!_0x957041.node_ops.readdir) {
        throw new _0x221e83.ErrnoError(54);
      }
      return _0x957041.node_ops.readdir(_0x957041);
    },
    unlink: function (_0x28943c) {
      var _0x42b3b0 = _0x221e83.lookupPath(_0x28943c, {
        parent: true
      });
      var _0x1a2dec = _0x42b3b0.node;
      var _0x4b4eff = _0x4bc719.basename(_0x28943c);
      var _0x2357ad = _0x221e83.lookupNode(_0x1a2dec, _0x4b4eff);
      var _0x24a05c = _0x221e83.mayDelete(_0x1a2dec, _0x4b4eff, false);
      if (_0x24a05c) {
        throw new _0x221e83.ErrnoError(_0x24a05c);
      }
      if (!_0x1a2dec.node_ops.unlink) {
        throw new _0x221e83.ErrnoError(63);
      }
      if (_0x221e83.isMountpoint(_0x2357ad)) {
        throw new _0x221e83.ErrnoError(10);
      }
      try {
        if (_0x221e83.trackingDelegate.willDeletePath) {
          _0x221e83.trackingDelegate.willDeletePath(_0x28943c);
        }
      } catch (_0x5d0efa) {
        _0x516167("FS.trackingDelegate['willDeletePath']('" + _0x28943c + "') threw an exception: " + _0x5d0efa.message);
      }
      _0x1a2dec.node_ops.unlink(_0x1a2dec, _0x4b4eff);
      _0x221e83.destroyNode(_0x2357ad);
      try {
        if (_0x221e83.trackingDelegate.onDeletePath) {
          _0x221e83.trackingDelegate.onDeletePath(_0x28943c);
        }
      } catch (_0x137107) {
        _0x516167("FS.trackingDelegate['onDeletePath']('" + _0x28943c + "') threw an exception: " + _0x137107.message);
      }
    },
    readlink: function (_0x2a054b) {
      var _0x34246a = _0x221e83.lookupPath(_0x2a054b);
      var _0x380712 = _0x34246a.node;
      if (!_0x380712) {
        throw new _0x221e83.ErrnoError(44);
      }
      if (!_0x380712.node_ops.readlink) {
        throw new _0x221e83.ErrnoError(28);
      }
      return _0x4bcf2a.resolve(_0x221e83.getPath(_0x380712.parent), _0x380712.node_ops.readlink(_0x380712));
    },
    stat: function (_0x3c51a1, _0x5e2979) {
      var _0x17ee7d = _0x221e83.lookupPath(_0x3c51a1, {
        follow: !_0x5e2979
      });
      var _0x4e2ab8 = _0x17ee7d.node;
      if (!_0x4e2ab8) {
        throw new _0x221e83.ErrnoError(44);
      }
      if (!_0x4e2ab8.node_ops.getattr) {
        throw new _0x221e83.ErrnoError(63);
      }
      return _0x4e2ab8.node_ops.getattr(_0x4e2ab8);
    },
    lstat: function (_0x4f4737) {
      return _0x221e83.stat(_0x4f4737, true);
    },
    chmod: function (_0x1f0aa7, _0x275fe1, _0x20be8e) {
      var _0x1f3833;
      if (typeof _0x1f0aa7 === "string") {
        var _0x369cd1 = _0x221e83.lookupPath(_0x1f0aa7, {
          follow: !_0x20be8e
        });
        _0x1f3833 = _0x369cd1.node;
      } else {
        _0x1f3833 = _0x1f0aa7;
      }
      if (!_0x1f3833.node_ops.setattr) {
        throw new _0x221e83.ErrnoError(63);
      }
      _0x1f3833.node_ops.setattr(_0x1f3833, {
        mode: _0x275fe1 & 4095 | _0x1f3833.mode & ~4095,
        timestamp: Date.now()
      });
    },
    lchmod: function (_0x534a52, _0x44f26e) {
      _0x221e83.chmod(_0x534a52, _0x44f26e, true);
    },
    fchmod: function (_0x198f51, _0x42dc28) {
      var _0x4f2ece = _0x221e83.getStream(_0x198f51);
      if (!_0x4f2ece) {
        throw new _0x221e83.ErrnoError(8);
      }
      _0x221e83.chmod(_0x4f2ece.node, _0x42dc28);
    },
    chown: function (_0x7a6da2, _0x1ffb87, _0x1b534f, _0x1e00a5) {
      var _0x21eb56;
      if (typeof _0x7a6da2 === "string") {
        var _0x20ca60 = _0x221e83.lookupPath(_0x7a6da2, {
          follow: !_0x1e00a5
        });
        _0x21eb56 = _0x20ca60.node;
      } else {
        _0x21eb56 = _0x7a6da2;
      }
      if (!_0x21eb56.node_ops.setattr) {
        throw new _0x221e83.ErrnoError(63);
      }
      _0x21eb56.node_ops.setattr(_0x21eb56, {
        timestamp: Date.now()
      });
    },
    lchown: function (_0x2f513a, _0x3968de, _0x49b725) {
      _0x221e83.chown(_0x2f513a, _0x3968de, _0x49b725, true);
    },
    fchown: function (_0x4aa180, _0x221d40, _0x4a75ea) {
      var _0x498065 = _0x221e83.getStream(_0x4aa180);
      if (!_0x498065) {
        throw new _0x221e83.ErrnoError(8);
      }
      _0x221e83.chown(_0x498065.node, _0x221d40, _0x4a75ea);
    },
    truncate: function (_0x1c248f, _0x55c121) {
      if (_0x55c121 < 0) {
        throw new _0x221e83.ErrnoError(28);
      }
      var _0x26d45e;
      if (typeof _0x1c248f === "string") {
        var _0x8b75d6 = _0x221e83.lookupPath(_0x1c248f, {
          follow: true
        });
        _0x26d45e = _0x8b75d6.node;
      } else {
        _0x26d45e = _0x1c248f;
      }
      if (!_0x26d45e.node_ops.setattr) {
        throw new _0x221e83.ErrnoError(63);
      }
      if (_0x221e83.isDir(_0x26d45e.mode)) {
        throw new _0x221e83.ErrnoError(31);
      }
      if (!_0x221e83.isFile(_0x26d45e.mode)) {
        throw new _0x221e83.ErrnoError(28);
      }
      var _0x54591f = _0x221e83.nodePermissions(_0x26d45e, "w");
      if (_0x54591f) {
        throw new _0x221e83.ErrnoError(_0x54591f);
      }
      _0x26d45e.node_ops.setattr(_0x26d45e, {
        size: _0x55c121,
        timestamp: Date.now()
      });
    },
    ftruncate: function (_0x9d1467, _0x13266c) {
      var _0x444443 = _0x221e83.getStream(_0x9d1467);
      if (!_0x444443) {
        throw new _0x221e83.ErrnoError(8);
      }
      if ((_0x444443.flags & 2097155) === 0) {
        throw new _0x221e83.ErrnoError(28);
      }
      _0x221e83.truncate(_0x444443.node, _0x13266c);
    },
    utime: function (_0x103c7b, _0x181149, _0x5ce556) {
      var _0x439b20 = _0x221e83.lookupPath(_0x103c7b, {
        follow: true
      });
      var _0x5ee6ee = _0x439b20.node;
      _0x5ee6ee.node_ops.setattr(_0x5ee6ee, {
        timestamp: Math.max(_0x181149, _0x5ce556)
      });
    },
    open: function (_0x28e6b0, _0x35398f, _0x2c1f22, _0x4721b7, _0x4f9f69) {
      if (_0x28e6b0 === "") {
        throw new _0x221e83.ErrnoError(44);
      }
      _0x35398f = typeof _0x35398f === "string" ? _0x221e83.modeStringToFlags(_0x35398f) : _0x35398f;
      _0x2c1f22 = typeof _0x2c1f22 === "undefined" ? 438 : _0x2c1f22;
      if (_0x35398f & 64) {
        _0x2c1f22 = _0x2c1f22 & 4095 | 32768;
      } else {
        _0x2c1f22 = 0;
      }
      var _0x18424b;
      if (typeof _0x28e6b0 === "object") {
        _0x18424b = _0x28e6b0;
      } else {
        _0x28e6b0 = _0x4bc719.normalize(_0x28e6b0);
        try {
          var _0x1ea509 = _0x221e83.lookupPath(_0x28e6b0, {
            follow: !(_0x35398f & 131072)
          });
          _0x18424b = _0x1ea509.node;
        } catch (_0x4c304c) {}
      }
      var _0x2b26bb = false;
      if (_0x35398f & 64) {
        if (_0x18424b) {
          if (_0x35398f & 128) {
            throw new _0x221e83.ErrnoError(20);
          }
        } else {
          _0x18424b = _0x221e83.mknod(_0x28e6b0, _0x2c1f22, 0);
          _0x2b26bb = true;
        }
      }
      if (!_0x18424b) {
        throw new _0x221e83.ErrnoError(44);
      }
      if (_0x221e83.isChrdev(_0x18424b.mode)) {
        _0x35398f &= ~512;
      }
      if (_0x35398f & 65536 && !_0x221e83.isDir(_0x18424b.mode)) {
        throw new _0x221e83.ErrnoError(54);
      }
      if (!_0x2b26bb) {
        var _0x12be74 = _0x221e83.mayOpen(_0x18424b, _0x35398f);
        if (_0x12be74) {
          throw new _0x221e83.ErrnoError(_0x12be74);
        }
      }
      if (_0x35398f & 512) {
        _0x221e83.truncate(_0x18424b, 0);
      }
      _0x35398f &= ~131712;
      var _0x5f5557 = _0x221e83.createStream({
        node: _0x18424b,
        path: _0x221e83.getPath(_0x18424b),
        flags: _0x35398f,
        seekable: true,
        position: 0,
        stream_ops: _0x18424b.stream_ops,
        ungotten: [],
        error: false
      }, _0x4721b7, _0x4f9f69);
      if (_0x5f5557.stream_ops.open) {
        _0x5f5557.stream_ops.open(_0x5f5557);
      }
      if (_0x3e078a.logReadFiles && !(_0x35398f & 1)) {
        if (!_0x221e83.readFiles) {
          _0x221e83.readFiles = {};
        }
        if (!(_0x28e6b0 in _0x221e83.readFiles)) {
          _0x221e83.readFiles[_0x28e6b0] = 1;
          _0x516167("FS.trackingDelegate error on read file: " + _0x28e6b0);
        }
      }
      try {
        if (_0x221e83.trackingDelegate.onOpenFile) {
          var _0xb3d641 = 0;
          if ((_0x35398f & 2097155) !== 1) {
            _0xb3d641 |= _0x221e83.tracking.openFlags.READ;
          }
          if ((_0x35398f & 2097155) !== 0) {
            _0xb3d641 |= _0x221e83.tracking.openFlags.WRITE;
          }
          _0x221e83.trackingDelegate.onOpenFile(_0x28e6b0, _0xb3d641);
        }
      } catch (_0x4eaeb4) {
        _0x516167("FS.trackingDelegate['onOpenFile']('" + _0x28e6b0 + "', flags) threw an exception: " + _0x4eaeb4.message);
      }
      return _0x5f5557;
    },
    close: function (_0x532b82) {
      if (_0x221e83.isClosed(_0x532b82)) {
        throw new _0x221e83.ErrnoError(8);
      }
      if (_0x532b82.getdents) {
        _0x532b82.getdents = null;
      }
      try {
        if (_0x532b82.stream_ops.close) {
          _0x532b82.stream_ops.close(_0x532b82);
        }
      } catch (_0x33dc30) {
        throw _0x33dc30;
      } finally {
        _0x221e83.closeStream(_0x532b82.fd);
      }
      _0x532b82.fd = null;
    },
    isClosed: function (_0x45f180) {
      return _0x45f180.fd === null;
    },
    llseek: function (_0x52b5dc, _0x2ff811, _0x527615) {
      if (_0x221e83.isClosed(_0x52b5dc)) {
        throw new _0x221e83.ErrnoError(8);
      }
      if (!_0x52b5dc.seekable || !_0x52b5dc.stream_ops.llseek) {
        throw new _0x221e83.ErrnoError(70);
      }
      if (_0x527615 != 0 && _0x527615 != 1 && _0x527615 != 2) {
        throw new _0x221e83.ErrnoError(28);
      }
      _0x52b5dc.position = _0x52b5dc.stream_ops.llseek(_0x52b5dc, _0x2ff811, _0x527615);
      _0x52b5dc.ungotten = [];
      return _0x52b5dc.position;
    },
    read: function (_0x519350, _0x3f19f1, _0x4f905f, _0x3b2d03, _0x535060) {
      if (_0x3b2d03 < 0 || _0x535060 < 0) {
        throw new _0x221e83.ErrnoError(28);
      }
      if (_0x221e83.isClosed(_0x519350)) {
        throw new _0x221e83.ErrnoError(8);
      }
      if ((_0x519350.flags & 2097155) === 1) {
        throw new _0x221e83.ErrnoError(8);
      }
      if (_0x221e83.isDir(_0x519350.node.mode)) {
        throw new _0x221e83.ErrnoError(31);
      }
      if (!_0x519350.stream_ops.read) {
        throw new _0x221e83.ErrnoError(28);
      }
      var _0x5d37bc = typeof _0x535060 !== "undefined";
      if (!_0x5d37bc) {
        _0x535060 = _0x519350.position;
      } else if (!_0x519350.seekable) {
        throw new _0x221e83.ErrnoError(70);
      }
      var _0x288859 = _0x519350.stream_ops.read(_0x519350, _0x3f19f1, _0x4f905f, _0x3b2d03, _0x535060);
      if (!_0x5d37bc) {
        _0x519350.position += _0x288859;
      }
      return _0x288859;
    },
    write: function (_0x31488c, _0x16f5e8, _0xef9180, _0x590571, _0x101179, _0x3b9ece) {
      if (_0x590571 < 0 || _0x101179 < 0) {
        throw new _0x221e83.ErrnoError(28);
      }
      if (_0x221e83.isClosed(_0x31488c)) {
        throw new _0x221e83.ErrnoError(8);
      }
      if ((_0x31488c.flags & 2097155) === 0) {
        throw new _0x221e83.ErrnoError(8);
      }
      if (_0x221e83.isDir(_0x31488c.node.mode)) {
        throw new _0x221e83.ErrnoError(31);
      }
      if (!_0x31488c.stream_ops.write) {
        throw new _0x221e83.ErrnoError(28);
      }
      if (_0x31488c.seekable && _0x31488c.flags & 1024) {
        _0x221e83.llseek(_0x31488c, 0, 2);
      }
      var _0x4a8ac6 = typeof _0x101179 !== "undefined";
      if (!_0x4a8ac6) {
        _0x101179 = _0x31488c.position;
      } else if (!_0x31488c.seekable) {
        throw new _0x221e83.ErrnoError(70);
      }
      var _0x30383b = _0x31488c.stream_ops.write(_0x31488c, _0x16f5e8, _0xef9180, _0x590571, _0x101179, _0x3b9ece);
      if (!_0x4a8ac6) {
        _0x31488c.position += _0x30383b;
      }
      try {
        if (_0x31488c.path && _0x221e83.trackingDelegate.onWriteToFile) {
          _0x221e83.trackingDelegate.onWriteToFile(_0x31488c.path);
        }
      } catch (_0x23adb7) {
        _0x516167("FS.trackingDelegate['onWriteToFile']('" + _0x31488c.path + "') threw an exception: " + _0x23adb7.message);
      }
      return _0x30383b;
    },
    allocate: function (_0x5e1698, _0x245f0c, _0x56133b) {
      if (_0x221e83.isClosed(_0x5e1698)) {
        throw new _0x221e83.ErrnoError(8);
      }
      if (_0x245f0c < 0 || _0x56133b <= 0) {
        throw new _0x221e83.ErrnoError(28);
      }
      if ((_0x5e1698.flags & 2097155) === 0) {
        throw new _0x221e83.ErrnoError(8);
      }
      if (!_0x221e83.isFile(_0x5e1698.node.mode) && !_0x221e83.isDir(_0x5e1698.node.mode)) {
        throw new _0x221e83.ErrnoError(43);
      }
      if (!_0x5e1698.stream_ops.allocate) {
        throw new _0x221e83.ErrnoError(138);
      }
      _0x5e1698.stream_ops.allocate(_0x5e1698, _0x245f0c, _0x56133b);
    },
    mmap: function (_0x5e304c, _0xd363b6, _0x2d5590, _0x12ce8f, _0x463c8a, _0x20cc3a) {
      if ((_0x463c8a & 2) !== 0 && (_0x20cc3a & 2) === 0 && (_0x5e304c.flags & 2097155) !== 2) {
        throw new _0x221e83.ErrnoError(2);
      }
      if ((_0x5e304c.flags & 2097155) === 1) {
        throw new _0x221e83.ErrnoError(2);
      }
      if (!_0x5e304c.stream_ops.mmap) {
        throw new _0x221e83.ErrnoError(43);
      }
      return _0x5e304c.stream_ops.mmap(_0x5e304c, _0xd363b6, _0x2d5590, _0x12ce8f, _0x463c8a, _0x20cc3a);
    },
    msync: function (_0x153f04, _0x211cc6, _0x2d866e, _0x559011, _0x4c4e0d) {
      if (!_0x153f04 || !_0x153f04.stream_ops.msync) {
        return 0;
      }
      return _0x153f04.stream_ops.msync(_0x153f04, _0x211cc6, _0x2d866e, _0x559011, _0x4c4e0d);
    },
    munmap: function (_0x751b1d) {
      return 0;
    },
    ioctl: function (_0x44efaf, _0x1925e8, _0x14ad41) {
      if (!_0x44efaf.stream_ops.ioctl) {
        throw new _0x221e83.ErrnoError(59);
      }
      return _0x44efaf.stream_ops.ioctl(_0x44efaf, _0x1925e8, _0x14ad41);
    },
    readFile: function (_0x439ddd, _0x23d54b) {
      _0x23d54b = _0x23d54b || {};
      _0x23d54b.flags = _0x23d54b.flags || 0;
      _0x23d54b.encoding = _0x23d54b.encoding || "binary";
      if (_0x23d54b.encoding !== "utf8" && _0x23d54b.encoding !== "binary") {
        throw new Error("Invalid encoding type \"" + _0x23d54b.encoding + "\"");
      }
      var _0x1ec875;
      var _0x3e904b = _0x221e83.open(_0x439ddd, _0x23d54b.flags);
      var _0x143a64 = _0x221e83.stat(_0x439ddd);
      var _0x26ad96 = _0x143a64.size;
      var _0x5ade47 = new Uint8Array(_0x26ad96);
      _0x221e83.read(_0x3e904b, _0x5ade47, 0, _0x26ad96, 0);
      if (_0x23d54b.encoding === "utf8") {
        _0x1ec875 = _0x1f45b0(_0x5ade47, 0);
      } else if (_0x23d54b.encoding === "binary") {
        _0x1ec875 = _0x5ade47;
      }
      _0x221e83.close(_0x3e904b);
      return _0x1ec875;
    },
    writeFile: function (_0x4378fa, _0x441cf8, _0x433fee) {
      _0x433fee = _0x433fee || {};
      _0x433fee.flags = _0x433fee.flags || 577;
      var _0x38b604 = _0x221e83.open(_0x4378fa, _0x433fee.flags, _0x433fee.mode);
      if (typeof _0x441cf8 === "string") {
        var _0x300ddc = new Uint8Array(_0x3e3578(_0x441cf8) + 1);
        var _0x234422 = _0x3e4fca(_0x441cf8, _0x300ddc, 0, _0x300ddc.length);
        _0x221e83.write(_0x38b604, _0x300ddc, 0, _0x234422, undefined, _0x433fee.canOwn);
      } else if (ArrayBuffer.isView(_0x441cf8)) {
        _0x221e83.write(_0x38b604, _0x441cf8, 0, _0x441cf8.byteLength, undefined, _0x433fee.canOwn);
      } else {
        throw new Error("Unsupported data type");
      }
      _0x221e83.close(_0x38b604);
    },
    cwd: function () {
      return _0x221e83.currentPath;
    },
    chdir: function (_0x3926a3) {
      var _0x965441 = _0x221e83.lookupPath(_0x3926a3, {
        follow: true
      });
      if (_0x965441.node === null) {
        throw new _0x221e83.ErrnoError(44);
      }
      if (!_0x221e83.isDir(_0x965441.node.mode)) {
        throw new _0x221e83.ErrnoError(54);
      }
      var _0x44b4a9 = _0x221e83.nodePermissions(_0x965441.node, "x");
      if (_0x44b4a9) {
        throw new _0x221e83.ErrnoError(_0x44b4a9);
      }
      _0x221e83.currentPath = _0x965441.path;
    },
    createDefaultDirectories: function () {
      _0x221e83.mkdir("/tmp");
      _0x221e83.mkdir("/home");
      _0x221e83.mkdir("/home/web_user");
    },
    createDefaultDevices: function () {
      _0x221e83.mkdir("/dev");
      _0x221e83.registerDevice(_0x221e83.makedev(1, 3), {
        read: function () {
          return 0;
        },
        write: function (_0x27de97, _0x44cc3a, _0x227fdd, _0x100d8b, _0x62ecc5) {
          return _0x100d8b;
        }
      });
      _0x221e83.mkdev("/dev/null", _0x221e83.makedev(1, 3));
      _0x12c425.register(_0x221e83.makedev(5, 0), _0x12c425.default_tty_ops);
      _0x12c425.register(_0x221e83.makedev(6, 0), _0x12c425.default_tty1_ops);
      _0x221e83.mkdev("/dev/tty", _0x221e83.makedev(5, 0));
      _0x221e83.mkdev("/dev/tty1", _0x221e83.makedev(6, 0));
      var _0x404045 = _0x753d66();
      _0x221e83.createDevice("/dev", "random", _0x404045);
      _0x221e83.createDevice("/dev", "urandom", _0x404045);
      _0x221e83.mkdir("/dev/shm");
      _0x221e83.mkdir("/dev/shm/tmp");
    },
    createSpecialDirectories: function () {
      _0x221e83.mkdir("/proc");
      var _0x41f08f = _0x221e83.mkdir("/proc/self");
      _0x221e83.mkdir("/proc/self/fd");
      _0x221e83.mount({
        mount: function () {
          var _0x3297ae = _0x221e83.createNode(_0x41f08f, "fd", 16895, 73);
          _0x3297ae.node_ops = {
            lookup: function (_0x2a4cae, _0x314405) {
              var _0x3ab8aa = +_0x314405;
              var _0x5dfb08 = _0x221e83.getStream(_0x3ab8aa);
              if (!_0x5dfb08) {
                throw new _0x221e83.ErrnoError(8);
              }
              var _0x58dcdf = {
                parent: null,
                mount: {
                  mountpoint: "fake"
                },
                node_ops: {
                  readlink: function () {
                    return _0x5dfb08.path;
                  }
                }
              };
              _0x58dcdf.parent = _0x58dcdf;
              return _0x58dcdf;
            }
          };
          return _0x3297ae;
        }
      }, {}, "/proc/self/fd");
    },
    createStandardStreams: function () {
      if (_0x3e078a.stdin) {
        _0x221e83.createDevice("/dev", "stdin", _0x3e078a.stdin);
      } else {
        _0x221e83.symlink("/dev/tty", "/dev/stdin");
      }
      if (_0x3e078a.stdout) {
        _0x221e83.createDevice("/dev", "stdout", null, _0x3e078a.stdout);
      } else {
        _0x221e83.symlink("/dev/tty", "/dev/stdout");
      }
      if (_0x3e078a.stderr) {
        _0x221e83.createDevice("/dev", "stderr", null, _0x3e078a.stderr);
      } else {
        _0x221e83.symlink("/dev/tty1", "/dev/stderr");
      }
      var _0x34895a = _0x221e83.open("/dev/stdin", 0);
      var _0x1ad949 = _0x221e83.open("/dev/stdout", 1);
      var _0xedceb4 = _0x221e83.open("/dev/stderr", 1);
    },
    ensureErrnoError: function () {
      if (_0x221e83.ErrnoError) {
        return;
      }
      _0x221e83.ErrnoError = function _0x45e7ef(_0x5309dc, _0x37ef6e) {
        this.node = _0x37ef6e;
        this.setErrno = function (_0x596774) {
          this.errno = _0x596774;
        };
        this.setErrno(_0x5309dc);
        this.message = "FS error";
      };
      _0x221e83.ErrnoError.prototype = new Error();
      _0x221e83.ErrnoError.prototype.constructor = _0x221e83.ErrnoError;
      [44].forEach(function (_0x4ec702) {
        _0x221e83.genericErrors[_0x4ec702] = new _0x221e83.ErrnoError(_0x4ec702);
        _0x221e83.genericErrors[_0x4ec702].stack = "<generic error, no stack>";
      });
    },
    staticInit: function () {
      _0x221e83.ensureErrnoError();
      _0x221e83.nameTable = new Array(4096);
      _0x221e83.mount(_0x2e8536, {}, "/");
      _0x221e83.createDefaultDirectories();
      _0x221e83.createDefaultDevices();
      _0x221e83.createSpecialDirectories();
      _0x221e83.filesystems = {
        MEMFS: _0x2e8536,
        IDBFS: _0x21775c
      };
    },
    init: function (_0xceef0, _0x354940, _0x1993ab) {
      _0x221e83.init.initialized = true;
      _0x221e83.ensureErrnoError();
      _0x3e078a.stdin = _0xceef0 || _0x3e078a.stdin;
      _0x3e078a.stdout = _0x354940 || _0x3e078a.stdout;
      _0x3e078a.stderr = _0x1993ab || _0x3e078a.stderr;
      _0x221e83.createStandardStreams();
    },
    quit: function () {
      _0x221e83.init.initialized = false;
      var _0x476767 = _0x3e078a._fflush;
      if (_0x476767) {
        _0x476767(0);
      }
      for (var _0x6b7984 = 0; _0x6b7984 < _0x221e83.streams.length; _0x6b7984++) {
        var _0x42b39d = _0x221e83.streams[_0x6b7984];
        if (!_0x42b39d) {
          continue;
        }
        _0x221e83.close(_0x42b39d);
      }
    },
    getMode: function (_0x4c4f94, _0x572879) {
      var _0x3a8a89 = 0;
      if (_0x4c4f94) {
        _0x3a8a89 |= 365;
      }
      if (_0x572879) {
        _0x3a8a89 |= 146;
      }
      return _0x3a8a89;
    },
    findObject: function (_0x5a7790, _0x2ac1ac) {
      var _0x3c22ba = _0x221e83.analyzePath(_0x5a7790, _0x2ac1ac);
      if (_0x3c22ba.exists) {
        return _0x3c22ba.object;
      } else {
        return null;
      }
    },
    analyzePath: function (_0x2e3025, _0x59a92e) {
      try {
        var _0x3f0019 = _0x221e83.lookupPath(_0x2e3025, {
          follow: !_0x59a92e
        });
        _0x2e3025 = _0x3f0019.path;
      } catch (_0x455250) {}
      var _0x3b7c11 = {
        isRoot: false,
        exists: false,
        error: 0,
        name: null,
        path: null,
        object: null,
        parentExists: false,
        parentPath: null,
        parentObject: null
      };
      try {
        var _0x3f0019 = _0x221e83.lookupPath(_0x2e3025, {
          parent: true
        });
        _0x3b7c11.parentExists = true;
        _0x3b7c11.parentPath = _0x3f0019.path;
        _0x3b7c11.parentObject = _0x3f0019.node;
        _0x3b7c11.name = _0x4bc719.basename(_0x2e3025);
        _0x3f0019 = _0x221e83.lookupPath(_0x2e3025, {
          follow: !_0x59a92e
        });
        _0x3b7c11.exists = true;
        _0x3b7c11.path = _0x3f0019.path;
        _0x3b7c11.object = _0x3f0019.node;
        _0x3b7c11.name = _0x3f0019.node.name;
        _0x3b7c11.isRoot = _0x3f0019.path === "/";
      } catch (_0x246ae7) {
        _0x3b7c11.error = _0x246ae7.errno;
      }
      return _0x3b7c11;
    },
    createPath: function (_0x53eca7, _0x4aefa6, _0x3775e7, _0x5c8cc5) {
      _0x53eca7 = typeof _0x53eca7 === "string" ? _0x53eca7 : _0x221e83.getPath(_0x53eca7);
      var _0x2f4755 = _0x4aefa6.split("/").reverse();
      while (_0x2f4755.length) {
        var _0x5db8f4 = _0x2f4755.pop();
        if (!_0x5db8f4) {
          continue;
        }
        var _0x287e3a = _0x4bc719.join2(_0x53eca7, _0x5db8f4);
        try {
          _0x221e83.mkdir(_0x287e3a);
        } catch (_0x2f750b) {}
        _0x53eca7 = _0x287e3a;
      }
      return _0x287e3a;
    },
    createFile: function (_0x1f56d5, _0x4cbc32, _0x30a373, _0x13e631, _0x260881) {
      var _0x2b3c9 = _0x4bc719.join2(typeof _0x1f56d5 === "string" ? _0x1f56d5 : _0x221e83.getPath(_0x1f56d5), _0x4cbc32);
      var _0x2cf79c = _0x221e83.getMode(_0x13e631, _0x260881);
      return _0x221e83.create(_0x2b3c9, _0x2cf79c);
    },
    createDataFile: function (_0x8eede5, _0x116842, _0x27f860, _0x54991b, _0x36be78, _0x3faa53) {
      var _0x1b615e = _0x116842 ? _0x4bc719.join2(typeof _0x8eede5 === "string" ? _0x8eede5 : _0x221e83.getPath(_0x8eede5), _0x116842) : _0x8eede5;
      var _0x10eac5 = _0x221e83.getMode(_0x54991b, _0x36be78);
      var _0x18116e = _0x221e83.create(_0x1b615e, _0x10eac5);
      if (_0x27f860) {
        if (typeof _0x27f860 === "string") {
          var _0x2c369e = new Array(_0x27f860.length);
          for (var _0x2afb84 = 0, _0x26e31f = _0x27f860.length; _0x2afb84 < _0x26e31f; ++_0x2afb84) {
            _0x2c369e[_0x2afb84] = _0x27f860.charCodeAt(_0x2afb84);
          }
          _0x27f860 = _0x2c369e;
        }
        _0x221e83.chmod(_0x18116e, _0x10eac5 | 146);
        var _0x1d2f99 = _0x221e83.open(_0x18116e, 577);
        _0x221e83.write(_0x1d2f99, _0x27f860, 0, _0x27f860.length, 0, _0x3faa53);
        _0x221e83.close(_0x1d2f99);
        _0x221e83.chmod(_0x18116e, _0x10eac5);
      }
      return _0x18116e;
    },
    createDevice: function (_0x10ee8d, _0x41d00c, _0x423f62, _0x130bf0) {
      var _0x6c3467 = _0x4bc719.join2(typeof _0x10ee8d === "string" ? _0x10ee8d : _0x221e83.getPath(_0x10ee8d), _0x41d00c);
      var _0x129ecc = _0x221e83.getMode(!!_0x423f62, !!_0x130bf0);
      if (!_0x221e83.createDevice.major) {
        _0x221e83.createDevice.major = 64;
      }
      var _0x1e44a6 = _0x221e83.makedev(_0x221e83.createDevice.major++, 0);
      _0x221e83.registerDevice(_0x1e44a6, {
        open: function (_0x54894b) {
          _0x54894b.seekable = false;
        },
        close: function (_0x36accd) {
          if (_0x130bf0 && _0x130bf0.buffer && _0x130bf0.buffer.length) {
            _0x130bf0(10);
          }
        },
        read: function (_0x477338, _0x2a223f, _0x107238, _0x45999e, _0x109795) {
          var _0x20c192 = 0;
          for (var _0x45ca50 = 0; _0x45ca50 < _0x45999e; _0x45ca50++) {
            var _0x300ecd;
            try {
              _0x300ecd = _0x423f62();
            } catch (_0x31f17b) {
              throw new _0x221e83.ErrnoError(29);
            }
            if (_0x300ecd === undefined && _0x20c192 === 0) {
              throw new _0x221e83.ErrnoError(6);
            }
            if (_0x300ecd === null || _0x300ecd === undefined) {
              break;
            }
            _0x20c192++;
            _0x2a223f[_0x107238 + _0x45ca50] = _0x300ecd;
          }
          if (_0x20c192) {
            _0x477338.node.timestamp = Date.now();
          }
          return _0x20c192;
        },
        write: function (_0x21873e, _0x1a4038, _0x1747e9, _0x1510a8, _0x27edbe) {
          for (var _0x3925b3 = 0; _0x3925b3 < _0x1510a8; _0x3925b3++) {
            try {
              _0x130bf0(_0x1a4038[_0x1747e9 + _0x3925b3]);
            } catch (_0x6e2de7) {
              throw new _0x221e83.ErrnoError(29);
            }
          }
          if (_0x1510a8) {
            _0x21873e.node.timestamp = Date.now();
          }
          return _0x3925b3;
        }
      });
      return _0x221e83.mkdev(_0x6c3467, _0x129ecc, _0x1e44a6);
    },
    forceLoadFile: function (_0x102325) {
      if (_0x102325.isDevice || _0x102325.isFolder || _0x102325.link || _0x102325.contents) {
        return true;
      }
      if (typeof XMLHttpRequest !== "undefined") {
        throw new Error("Lazy loading should have been performed (contents set) in createLazyFile, but it was not. Lazy loading only works in web workers. Use --embed-file or --preload-file in emcc on the main thread.");
      } else if (_0x37393c) {
        try {
          _0x102325.contents = _0x216a0f(_0x37393c(_0x102325.url), true);
          _0x102325.usedBytes = _0x102325.contents.length;
        } catch (_0x58ab18) {
          throw new _0x221e83.ErrnoError(29);
        }
      } else {
        throw new Error("Cannot load without read() or XMLHttpRequest.");
      }
    },
    createLazyFile: function (_0x4c0fa1, _0x1d975b, _0x91ddcf, _0x3ac6fa, _0x2bd4ce) {
      function _0x5dd734() {
        this.lengthKnown = false;
        this.chunks = [];
      }
      _0x5dd734.prototype.get = function _0x519738(_0x110b0d) {
        if (_0x110b0d > this.length - 1 || _0x110b0d < 0) {
          return undefined;
        }
        var _0x47da7c = _0x110b0d % this.chunkSize;
        var _0x2492ff = _0x110b0d / this.chunkSize | 0;
        return this.getter(_0x2492ff)[_0x47da7c];
      };
      _0x5dd734.prototype.setDataGetter = function _0x51f933(_0x45e5c) {
        this.getter = _0x45e5c;
      };
      _0x5dd734.prototype.cacheLength = function _0x50ad0b() {
        var _0x436269 = new XMLHttpRequest();
        _0x436269.open("HEAD", _0x91ddcf, false);
        _0x436269.send(null);
        if ((!(_0x436269.status >= 200) || !(_0x436269.status < 300)) && _0x436269.status !== 304) {
          throw new Error("Couldn't load " + _0x91ddcf + ". Status: " + _0x436269.status);
        }
        var _0x1542e6 = Number(_0x436269.getResponseHeader("Content-length"));
        var _0x2a4a21;
        var _0x425512 = (_0x2a4a21 = _0x436269.getResponseHeader("Accept-Ranges")) && _0x2a4a21 === "bytes";
        var _0x47e68d = (_0x2a4a21 = _0x436269.getResponseHeader("Content-Encoding")) && _0x2a4a21 === "gzip";
        var _0x45f321 = 1048576;
        if (!_0x425512) {
          _0x45f321 = _0x1542e6;
        }
        function _0x5044a8(_0x275611, _0x2af6e7) {
          if (_0x275611 > _0x2af6e7) {
            throw new Error("invalid range (" + _0x275611 + ", " + _0x2af6e7 + ") or no bytes requested!");
          }
          if (_0x2af6e7 > _0x1542e6 - 1) {
            throw new Error("only " + _0x1542e6 + " bytes available! programmer error!");
          }
          var _0x51d7c6 = new XMLHttpRequest();
          _0x51d7c6.open("GET", _0x91ddcf, false);
          if (_0x1542e6 !== _0x45f321) {
            _0x51d7c6.setRequestHeader("Range", "bytes=" + _0x275611 + "-" + _0x2af6e7);
          }
          if (typeof Uint8Array != "undefined") {
            _0x51d7c6.responseType = "arraybuffer";
          }
          if (_0x51d7c6.overrideMimeType) {
            _0x51d7c6.overrideMimeType("text/plain; charset=x-user-defined");
          }
          _0x51d7c6.send(null);
          if ((!(_0x51d7c6.status >= 200) || !(_0x51d7c6.status < 300)) && _0x51d7c6.status !== 304) {
            throw new Error("Couldn't load " + _0x91ddcf + ". Status: " + _0x51d7c6.status);
          }
          if (_0x51d7c6.response !== undefined) {
            return new Uint8Array(_0x51d7c6.response || []);
          } else {
            return _0x216a0f(_0x51d7c6.responseText || "", true);
          }
        }
        var _0x40b7a7 = this;
        _0x40b7a7.setDataGetter(function (_0x534f6a) {
          var _0x2bf81a = _0x534f6a * _0x45f321;
          var _0x402407 = (_0x534f6a + 1) * _0x45f321 - 1;
          _0x402407 = Math.min(_0x402407, _0x1542e6 - 1);
          if (typeof _0x40b7a7.chunks[_0x534f6a] === "undefined") {
            _0x40b7a7.chunks[_0x534f6a] = _0x5044a8(_0x2bf81a, _0x402407);
          }
          if (typeof _0x40b7a7.chunks[_0x534f6a] === "undefined") {
            throw new Error("doXHR failed!");
          }
          return _0x40b7a7.chunks[_0x534f6a];
        });
        if (_0x47e68d || !_0x1542e6) {
          _0x45f321 = _0x1542e6 = 1;
          _0x1542e6 = this.getter(0).length;
          _0x45f321 = _0x1542e6;
          _0x56a098("LazyFiles on gzip forces download of the whole file when length is accessed");
        }
        this._length = _0x1542e6;
        this._chunkSize = _0x45f321;
        this.lengthKnown = true;
      };
      if (typeof XMLHttpRequest !== "undefined") {
        if (!_0x433b11) {
          throw "Cannot do synchronous binary XHRs outside webworkers in modern browsers. Use --embed-file or --preload-file in emcc";
        }
        var _0x2b937e = new _0x5dd734();
        Object.defineProperties(_0x2b937e, {
          length: {
            get: function () {
              if (!this.lengthKnown) {
                this.cacheLength();
              }
              return this._length;
            }
          },
          chunkSize: {
            get: function () {
              if (!this.lengthKnown) {
                this.cacheLength();
              }
              return this._chunkSize;
            }
          }
        });
        var _0x19a615 = {
          isDevice: false,
          contents: _0x2b937e
        };
      } else {
        var _0x19a615 = {
          isDevice: false,
          url: _0x91ddcf
        };
      }
      var _0x3d1288 = _0x221e83.createFile(_0x4c0fa1, _0x1d975b, _0x19a615, _0x3ac6fa, _0x2bd4ce);
      if (_0x19a615.contents) {
        _0x3d1288.contents = _0x19a615.contents;
      } else if (_0x19a615.url) {
        _0x3d1288.contents = null;
        _0x3d1288.url = _0x19a615.url;
      }
      Object.defineProperties(_0x3d1288, {
        usedBytes: {
          get: function () {
            return this.contents.length;
          }
        }
      });
      var _0x365257 = {};
      var _0x302cb9 = Object.keys(_0x3d1288.stream_ops);
      _0x302cb9.forEach(function (_0x2d756c) {
        var _0x315e11 = _0x3d1288.stream_ops[_0x2d756c];
        _0x365257[_0x2d756c] = function _0x3fdc16() {
          _0x221e83.forceLoadFile(_0x3d1288);
          return _0x315e11.apply(null, arguments);
        };
      });
      _0x365257.read = function _0x62b5f8(_0x3cdb1d, _0x564198, _0x215ba7, _0x2ae230, _0x381ddc) {
        _0x221e83.forceLoadFile(_0x3d1288);
        var _0xa90da1 = _0x3cdb1d.node.contents;
        if (_0x381ddc >= _0xa90da1.length) {
          return 0;
        }
        var _0x153b34 = Math.min(_0xa90da1.length - _0x381ddc, _0x2ae230);
        if (_0xa90da1.slice) {
          for (var _0x33d1a6 = 0; _0x33d1a6 < _0x153b34; _0x33d1a6++) {
            _0x564198[_0x215ba7 + _0x33d1a6] = _0xa90da1[_0x381ddc + _0x33d1a6];
          }
        } else {
          for (var _0x33d1a6 = 0; _0x33d1a6 < _0x153b34; _0x33d1a6++) {
            _0x564198[_0x215ba7 + _0x33d1a6] = _0xa90da1.get(_0x381ddc + _0x33d1a6);
          }
        }
        return _0x153b34;
      };
      _0x3d1288.stream_ops = _0x365257;
      return _0x3d1288;
    },
    createPreloadedFile: function (_0x593df2, _0x31c557, _0x3d420d, _0x44394e, _0x2116b1, _0x48d9b1, _0x4c8576, _0x45fae8, _0x4794f9, _0x167b45) {
      _0x4954dc.init();
      var _0x48943a = _0x31c557 ? _0x4bcf2a.resolve(_0x4bc719.join2(_0x593df2, _0x31c557)) : _0x593df2;
      var _0x2184d8 = _0x1f40d2("cp " + _0x48943a);
      function _0x163519(_0x1ef3e3) {
        function _0x5ad0ce(_0x1d9170) {
          if (_0x167b45) {
            _0x167b45();
          }
          if (!_0x45fae8) {
            _0x221e83.createDataFile(_0x593df2, _0x31c557, _0x1d9170, _0x44394e, _0x2116b1, _0x4794f9);
          }
          if (_0x48d9b1) {
            _0x48d9b1();
          }
          _0x1a1081(_0x2184d8);
        }
        var _0x46c4d0 = false;
        _0x3e078a.preloadPlugins.forEach(function (_0xf74fce) {
          if (_0x46c4d0) {
            return;
          }
          if (_0xf74fce.canHandle(_0x48943a)) {
            _0xf74fce.handle(_0x1ef3e3, _0x48943a, _0x5ad0ce, function () {
              if (_0x4c8576) {
                _0x4c8576();
              }
              _0x1a1081(_0x2184d8);
            });
            _0x46c4d0 = true;
          }
        });
        if (!_0x46c4d0) {
          _0x5ad0ce(_0x1ef3e3);
        }
      }
      _0x1c2630(_0x2184d8);
      if (typeof _0x3d420d == "string") {
        _0x4954dc.asyncLoad(_0x3d420d, function (_0x28ffcc) {
          _0x163519(_0x28ffcc);
        }, _0x4c8576);
      } else {
        _0x163519(_0x3d420d);
      }
    },
    indexedDB: function () {
      return window.indexedDB || window.mozIndexedDB || window.webkitIndexedDB || window.msIndexedDB;
    },
    DB_NAME: function () {
      return "EM_FS_" + window.location.pathname;
    },
    DB_VERSION: 20,
    DB_STORE_NAME: "FILE_DATA",
    saveFilesToDB: function (_0x5e43d9, _0x2f8791, _0x100cb0) {
      _0x2f8791 = _0x2f8791 || function () {};
      _0x100cb0 = _0x100cb0 || function () {};
      var _0x3f4633 = _0x221e83.indexedDB();
      try {
        var _0x318665 = _0x3f4633.open(_0x221e83.DB_NAME(), _0x221e83.DB_VERSION);
      } catch (_0x23df25) {
        return _0x100cb0(_0x23df25);
      }
      _0x318665.onupgradeneeded = function _0x360a50() {
        _0x56a098("creating db");
        var _0x16ccf5 = _0x318665.result;
        _0x16ccf5.createObjectStore(_0x221e83.DB_STORE_NAME);
      };
      _0x318665.onsuccess = function _0x1460e9() {
        var _0x177745 = _0x318665.result;
        var _0x5af4aa = _0x177745.transaction([_0x221e83.DB_STORE_NAME], "readwrite");
        var _0x4c7e2f = _0x5af4aa.objectStore(_0x221e83.DB_STORE_NAME);
        var _0x273284 = 0;
        var _0x597fbe = 0;
        var _0x5995dd = _0x5e43d9.length;
        function _0x178a1d() {
          if (_0x597fbe == 0) {
            _0x2f8791();
          } else {
            _0x100cb0();
          }
        }
        _0x5e43d9.forEach(function (_0x33e05f) {
          var _0x1418aa = _0x4c7e2f.put(_0x221e83.analyzePath(_0x33e05f).object.contents, _0x33e05f);
          _0x1418aa.onsuccess = function _0x22ee47() {
            _0x273284++;
            if (_0x273284 + _0x597fbe == _0x5995dd) {
              _0x178a1d();
            }
          };
          _0x1418aa.onerror = function _0x304416() {
            _0x597fbe++;
            if (_0x273284 + _0x597fbe == _0x5995dd) {
              _0x178a1d();
            }
          };
        });
        _0x5af4aa.onerror = _0x100cb0;
      };
      _0x318665.onerror = _0x100cb0;
    },
    loadFilesFromDB: function (_0x554d8a, _0x3fd4e0, _0x203cf8) {
      _0x3fd4e0 = _0x3fd4e0 || function () {};
      _0x203cf8 = _0x203cf8 || function () {};
      var _0x404b20 = _0x221e83.indexedDB();
      try {
        var _0x49d045 = _0x404b20.open(_0x221e83.DB_NAME(), _0x221e83.DB_VERSION);
      } catch (_0x4cb66d) {
        return _0x203cf8(_0x4cb66d);
      }
      _0x49d045.onupgradeneeded = _0x203cf8;
      _0x49d045.onsuccess = function _0x15e1e9() {
        var _0x5b3025 = _0x49d045.result;
        try {
          var _0x4b4c18 = _0x5b3025.transaction([_0x221e83.DB_STORE_NAME], "readonly");
        } catch (_0x23e3a5) {
          _0x203cf8(_0x23e3a5);
          return;
        }
        var _0x2fadfb = _0x4b4c18.objectStore(_0x221e83.DB_STORE_NAME);
        var _0x183767 = 0;
        var _0x55aa60 = 0;
        var _0x4cf6ac = _0x554d8a.length;
        function _0x6366ac() {
          if (_0x55aa60 == 0) {
            _0x3fd4e0();
          } else {
            _0x203cf8();
          }
        }
        _0x554d8a.forEach(function (_0x32e343) {
          var _0xcc8e95 = _0x2fadfb.get(_0x32e343);
          _0xcc8e95.onsuccess = function _0x12901f() {
            if (_0x221e83.analyzePath(_0x32e343).exists) {
              _0x221e83.unlink(_0x32e343);
            }
            _0x221e83.createDataFile(_0x4bc719.dirname(_0x32e343), _0x4bc719.basename(_0x32e343), _0xcc8e95.result, true, true, true);
            _0x183767++;
            if (_0x183767 + _0x55aa60 == _0x4cf6ac) {
              _0x6366ac();
            }
          };
          _0xcc8e95.onerror = function _0x441c92() {
            _0x55aa60++;
            if (_0x183767 + _0x55aa60 == _0x4cf6ac) {
              _0x6366ac();
            }
          };
        });
        _0x4b4c18.onerror = _0x203cf8;
      };
      _0x49d045.onerror = _0x203cf8;
    }
  };
  var _0x3eb2e6 = {
    mappings: {},
    DEFAULT_POLLMASK: 5,
    umask: 511,
    calculateAt: function (_0x4ef2f7, _0x4e16bd, _0xdc0c) {
      if (_0x4e16bd[0] === "/") {
        return _0x4e16bd;
      }
      var _0x18f67c;
      if (_0x4ef2f7 === -100) {
        _0x18f67c = _0x221e83.cwd();
      } else {
        var _0x1ac00c = _0x221e83.getStream(_0x4ef2f7);
        if (!_0x1ac00c) {
          throw new _0x221e83.ErrnoError(8);
        }
        _0x18f67c = _0x1ac00c.path;
      }
      if (_0x4e16bd.length == 0) {
        if (!_0xdc0c) {
          throw new _0x221e83.ErrnoError(44);
        }
        return _0x18f67c;
      }
      return _0x4bc719.join2(_0x18f67c, _0x4e16bd);
    },
    doStat: function (_0x5a2e22, _0x5cbe57, _0x1cd670) {
      try {
        var _0x3f33be = _0x5a2e22(_0x5cbe57);
      } catch (_0x476cc6) {
        if (_0x476cc6 && _0x476cc6.node && _0x4bc719.normalize(_0x5cbe57) !== _0x4bc719.normalize(_0x221e83.getPath(_0x476cc6.node))) {
          return -54;
        }
        throw _0x476cc6;
      }
      _0x5cc2c4[_0x1cd670 >> 2] = _0x3f33be.dev;
      _0x5cc2c4[_0x1cd670 + 4 >> 2] = 0;
      _0x5cc2c4[_0x1cd670 + 8 >> 2] = _0x3f33be.ino;
      _0x5cc2c4[_0x1cd670 + 12 >> 2] = _0x3f33be.mode;
      _0x5cc2c4[_0x1cd670 + 16 >> 2] = _0x3f33be.nlink;
      _0x5cc2c4[_0x1cd670 + 20 >> 2] = _0x3f33be.uid;
      _0x5cc2c4[_0x1cd670 + 24 >> 2] = _0x3f33be.gid;
      _0x5cc2c4[_0x1cd670 + 28 >> 2] = _0x3f33be.rdev;
      _0x5cc2c4[_0x1cd670 + 32 >> 2] = 0;
      _0x300ee3 = [_0x3f33be.size >>> 0, (_0x2453c8 = _0x3f33be.size, +Math.abs(_0x2453c8) >= 1 ? _0x2453c8 > 0 ? (Math.min(+Math.floor(_0x2453c8 / 4294967296), 4294967295) | 0) >>> 0 : ~~+Math.ceil((_0x2453c8 - +(~~_0x2453c8 >>> 0)) / 4294967296) >>> 0 : 0)];
      _0x5cc2c4[_0x1cd670 + 40 >> 2] = _0x300ee3[0];
      _0x5cc2c4[_0x1cd670 + 44 >> 2] = _0x300ee3[1];
      _0x5cc2c4[_0x1cd670 + 48 >> 2] = 4096;
      _0x5cc2c4[_0x1cd670 + 52 >> 2] = _0x3f33be.blocks;
      _0x5cc2c4[_0x1cd670 + 56 >> 2] = _0x3f33be.atime.getTime() / 1000 | 0;
      _0x5cc2c4[_0x1cd670 + 60 >> 2] = 0;
      _0x5cc2c4[_0x1cd670 + 64 >> 2] = _0x3f33be.mtime.getTime() / 1000 | 0;
      _0x5cc2c4[_0x1cd670 + 68 >> 2] = 0;
      _0x5cc2c4[_0x1cd670 + 72 >> 2] = _0x3f33be.ctime.getTime() / 1000 | 0;
      _0x5cc2c4[_0x1cd670 + 76 >> 2] = 0;
      _0x300ee3 = [_0x3f33be.ino >>> 0, (_0x2453c8 = _0x3f33be.ino, +Math.abs(_0x2453c8) >= 1 ? _0x2453c8 > 0 ? (Math.min(+Math.floor(_0x2453c8 / 4294967296), 4294967295) | 0) >>> 0 : ~~+Math.ceil((_0x2453c8 - +(~~_0x2453c8 >>> 0)) / 4294967296) >>> 0 : 0)];
      _0x5cc2c4[_0x1cd670 + 80 >> 2] = _0x300ee3[0];
      _0x5cc2c4[_0x1cd670 + 84 >> 2] = _0x300ee3[1];
      return 0;
    },
    doMsync: function (_0x4f2be0, _0x37bd8a, _0x59eb5e, _0x26e839, _0x37935f) {
      var _0xaa0021 = _0x4f26b1.slice(_0x4f2be0, _0x4f2be0 + _0x59eb5e);
      _0x221e83.msync(_0x37bd8a, _0xaa0021, _0x37935f, _0x59eb5e, _0x26e839);
    },
    doMkdir: function (_0x4f880a, _0x4564ea) {
      _0x4f880a = _0x4bc719.normalize(_0x4f880a);
      if (_0x4f880a[_0x4f880a.length - 1] === "/") {
        _0x4f880a = _0x4f880a.substr(0, _0x4f880a.length - 1);
      }
      _0x221e83.mkdir(_0x4f880a, _0x4564ea, 0);
      return 0;
    },
    doMknod: function (_0x4c4030, _0x393077, _0x4f9849) {
      switch (_0x393077 & 61440) {
        case 32768:
        case 8192:
        case 24576:
        case 4096:
        case 49152:
          break;
        default:
          return -28;
      }
      _0x221e83.mknod(_0x4c4030, _0x393077, _0x4f9849);
      return 0;
    },
    doReadlink: function (_0x4771a1, _0x2502b3, _0x109e3a) {
      if (_0x109e3a <= 0) {
        return -28;
      }
      var _0x255853 = _0x221e83.readlink(_0x4771a1);
      var _0x34098e = Math.min(_0x109e3a, _0x3e3578(_0x255853));
      var _0x4e26e1 = _0xb3d98[_0x2502b3 + _0x34098e];
      _0x53c85c(_0x255853, _0x2502b3, _0x109e3a + 1);
      _0xb3d98[_0x2502b3 + _0x34098e] = _0x4e26e1;
      return _0x34098e;
    },
    doAccess: function (_0x2571f9, _0x4f8317) {
      if (_0x4f8317 & ~7) {
        return -28;
      }
      var _0x77d852;
      var _0x29e2c8 = _0x221e83.lookupPath(_0x2571f9, {
        follow: true
      });
      _0x77d852 = _0x29e2c8.node;
      if (!_0x77d852) {
        return -44;
      }
      var _0x5a3746 = "";
      if (_0x4f8317 & 4) {
        _0x5a3746 += "r";
      }
      if (_0x4f8317 & 2) {
        _0x5a3746 += "w";
      }
      if (_0x4f8317 & 1) {
        _0x5a3746 += "x";
      }
      if (_0x5a3746 && _0x221e83.nodePermissions(_0x77d852, _0x5a3746)) {
        return -2;
      }
      return 0;
    },
    doDup: function (_0x427b14, _0xd9deeb, _0x1c34c3) {
      var _0x174b2b = _0x221e83.getStream(_0x1c34c3);
      if (_0x174b2b) {
        _0x221e83.close(_0x174b2b);
      }
      return _0x221e83.open(_0x427b14, _0xd9deeb, 0, _0x1c34c3, _0x1c34c3).fd;
    },
    doReadv: function (_0x38c3a7, _0x150c6d, _0x86b2a1, _0x5d30bc) {
      var _0x3ecec7 = 0;
      for (var _0x5a2225 = 0; _0x5a2225 < _0x86b2a1; _0x5a2225++) {
        var _0xcb8ef5 = _0x5cc2c4[_0x150c6d + _0x5a2225 * 8 >> 2];
        var _0x239a6f = _0x5cc2c4[_0x150c6d + (_0x5a2225 * 8 + 4) >> 2];
        var _0x44eded = _0x221e83.read(_0x38c3a7, _0xb3d98, _0xcb8ef5, _0x239a6f, _0x5d30bc);
        if (_0x44eded < 0) {
          return -1;
        }
        _0x3ecec7 += _0x44eded;
        if (_0x44eded < _0x239a6f) {
          break;
        }
      }
      return _0x3ecec7;
    },
    doWritev: function (_0x27a58a, _0x6e2069, _0x35c221, _0x2bda56) {
      var _0x2898d1 = 0;
      for (var _0x2317f1 = 0; _0x2317f1 < _0x35c221; _0x2317f1++) {
        var _0x180b10 = _0x5cc2c4[_0x6e2069 + _0x2317f1 * 8 >> 2];
        var _0xe01089 = _0x5cc2c4[_0x6e2069 + (_0x2317f1 * 8 + 4) >> 2];
        var _0x1e3c93 = _0x221e83.write(_0x27a58a, _0xb3d98, _0x180b10, _0xe01089, _0x2bda56);
        if (_0x1e3c93 < 0) {
          return -1;
        }
        _0x2898d1 += _0x1e3c93;
      }
      return _0x2898d1;
    },
    varargs: undefined,
    get: function () {
      _0x3eb2e6.varargs += 4;
      var _0x2e245f = _0x5cc2c4[_0x3eb2e6.varargs - 4 >> 2];
      return _0x2e245f;
    },
    getStr: function (_0x52ed02) {
      var _0x4184fa = _0x3f3179(_0x52ed02);
      return _0x4184fa;
    },
    getStreamFromFD: function (_0x3824d5) {
      var _0x985fd = _0x221e83.getStream(_0x3824d5);
      if (!_0x985fd) {
        throw new _0x221e83.ErrnoError(8);
      }
      return _0x985fd;
    },
    get64: function (_0x36bd62, _0x34dee0) {
      return _0x36bd62;
    }
  };
  function _0x35c239(_0x3f5666, _0xa508c3, _0x167dfb, _0x386a9f, _0x99c327) {
    try {
      var _0x528786 = 0;
      var _0x4ae386 = _0xa508c3 ? _0x5cc2c4[_0xa508c3 >> 2] : 0;
      var _0x4b938e = _0xa508c3 ? _0x5cc2c4[_0xa508c3 + 4 >> 2] : 0;
      var _0x565bea = _0x167dfb ? _0x5cc2c4[_0x167dfb >> 2] : 0;
      var _0x1faf92 = _0x167dfb ? _0x5cc2c4[_0x167dfb + 4 >> 2] : 0;
      var _0x1e18f8 = _0x386a9f ? _0x5cc2c4[_0x386a9f >> 2] : 0;
      var _0x1b4ae7 = _0x386a9f ? _0x5cc2c4[_0x386a9f + 4 >> 2] : 0;
      var _0x439727 = 0;
      var _0x20f53a = 0;
      var _0x20c5fb = 0;
      var _0x5cdeaa = 0;
      var _0x107bc0 = 0;
      var _0x91ba34 = 0;
      var _0x335fc2 = (_0xa508c3 ? _0x5cc2c4[_0xa508c3 >> 2] : 0) | (_0x167dfb ? _0x5cc2c4[_0x167dfb >> 2] : 0) | (_0x386a9f ? _0x5cc2c4[_0x386a9f >> 2] : 0);
      var _0x1c5ad9 = (_0xa508c3 ? _0x5cc2c4[_0xa508c3 + 4 >> 2] : 0) | (_0x167dfb ? _0x5cc2c4[_0x167dfb + 4 >> 2] : 0) | (_0x386a9f ? _0x5cc2c4[_0x386a9f + 4 >> 2] : 0);
      function _0x473cdb(_0x37403d, _0x2ec175, _0x125f47, _0x3e510b) {
        if (_0x37403d < 32) {
          return _0x2ec175 & _0x3e510b;
        } else {
          return _0x125f47 & _0x3e510b;
        }
      }
      for (var _0x589b1f = 0; _0x589b1f < _0x3f5666; _0x589b1f++) {
        var _0x38150b = 1 << _0x589b1f % 32;
        if (!_0x473cdb(_0x589b1f, _0x335fc2, _0x1c5ad9, _0x38150b)) {
          continue;
        }
        var _0x46e452 = _0x221e83.getStream(_0x589b1f);
        if (!_0x46e452) {
          throw new _0x221e83.ErrnoError(8);
        }
        var _0x2f6ad8 = _0x3eb2e6.DEFAULT_POLLMASK;
        if (_0x46e452.stream_ops.poll) {
          _0x2f6ad8 = _0x46e452.stream_ops.poll(_0x46e452);
        }
        if (_0x2f6ad8 & 1 && _0x473cdb(_0x589b1f, _0x4ae386, _0x4b938e, _0x38150b)) {
          if (_0x589b1f < 32) {
            _0x439727 = _0x439727 | _0x38150b;
          } else {
            _0x20f53a = _0x20f53a | _0x38150b;
          }
          _0x528786++;
        }
        if (_0x2f6ad8 & 4 && _0x473cdb(_0x589b1f, _0x565bea, _0x1faf92, _0x38150b)) {
          if (_0x589b1f < 32) {
            _0x20c5fb = _0x20c5fb | _0x38150b;
          } else {
            _0x5cdeaa = _0x5cdeaa | _0x38150b;
          }
          _0x528786++;
        }
        if (_0x2f6ad8 & 2 && _0x473cdb(_0x589b1f, _0x1e18f8, _0x1b4ae7, _0x38150b)) {
          if (_0x589b1f < 32) {
            _0x107bc0 = _0x107bc0 | _0x38150b;
          } else {
            _0x91ba34 = _0x91ba34 | _0x38150b;
          }
          _0x528786++;
        }
      }
      if (_0xa508c3) {
        _0x5cc2c4[_0xa508c3 >> 2] = _0x439727;
        _0x5cc2c4[_0xa508c3 + 4 >> 2] = _0x20f53a;
      }
      if (_0x167dfb) {
        _0x5cc2c4[_0x167dfb >> 2] = _0x20c5fb;
        _0x5cc2c4[_0x167dfb + 4 >> 2] = _0x5cdeaa;
      }
      if (_0x386a9f) {
        _0x5cc2c4[_0x386a9f >> 2] = _0x107bc0;
        _0x5cc2c4[_0x386a9f + 4 >> 2] = _0x91ba34;
      }
      return _0x528786;
    } catch (_0x483a43) {
      if (typeof _0x221e83 === "undefined" || !(_0x483a43 instanceof _0x221e83.ErrnoError)) {
        _0xb4b2ae(_0x483a43);
      }
      return -_0x483a43.errno;
    }
  }
  var _0x22ae67 = {
    mount: function (_0x5d5232) {
      _0x3e078a.websocket = _0x3e078a.websocket && typeof _0x3e078a.websocket === "object" ? _0x3e078a.websocket : {};
      _0x3e078a.websocket._callbacks = {};
      _0x3e078a.websocket.on = function (_0x4c7843, _0x4dcda0) {
        if (typeof _0x4dcda0 === "function") {
          this._callbacks[_0x4c7843] = _0x4dcda0;
        }
        return this;
      };
      _0x3e078a.websocket.emit = function (_0x25879b, _0x2f80af) {
        if (typeof this._callbacks[_0x25879b] === "function") {
          this._callbacks[_0x25879b].call(this, _0x2f80af);
        }
      };
      return _0x221e83.createNode(null, "/", 16895, 0);
    },
    createSocket: function (_0x328c49, _0x12e740, _0x8af851) {
      _0x12e740 &= ~526336;
      var _0x5973dc = _0x12e740 == 1;
      if (_0x8af851) {
        _0x5181b0(_0x5973dc == (_0x8af851 == 6));
      }
      var _0xdfec1c = {
        family: _0x328c49,
        type: _0x12e740,
        protocol: _0x8af851,
        server: null,
        error: null,
        peers: {},
        pending: [],
        recv_queue: [],
        sock_ops: _0x22ae67.websocket_sock_ops
      };
      var _0x58a3ba = _0x22ae67.nextname();
      var _0x474223 = _0x221e83.createNode(_0x22ae67.root, _0x58a3ba, 49152, 0);
      _0x474223.sock = _0xdfec1c;
      var _0x16efa1 = _0x221e83.createStream({
        path: _0x58a3ba,
        node: _0x474223,
        flags: 2,
        seekable: false,
        stream_ops: _0x22ae67.stream_ops
      });
      _0xdfec1c.stream = _0x16efa1;
      return _0xdfec1c;
    },
    getSocket: function (_0x3d551d) {
      var _0x2dd290 = _0x221e83.getStream(_0x3d551d);
      if (!_0x2dd290 || !_0x221e83.isSocket(_0x2dd290.node.mode)) {
        return null;
      }
      return _0x2dd290.node.sock;
    },
    stream_ops: {
      poll: function (_0x1c1088) {
        var _0x156e3e = _0x1c1088.node.sock;
        return _0x156e3e.sock_ops.poll(_0x156e3e);
      },
      ioctl: function (_0x2e5b3b, _0xbc60ea, _0x5090f5) {
        var _0x10156 = _0x2e5b3b.node.sock;
        return _0x10156.sock_ops.ioctl(_0x10156, _0xbc60ea, _0x5090f5);
      },
      read: function (_0x597dcd, _0x377ce9, _0x510d56, _0x477c84, _0xeaf695) {
        var _0x4d31d5 = _0x597dcd.node.sock;
        var _0x2e3551 = _0x4d31d5.sock_ops.recvmsg(_0x4d31d5, _0x477c84);
        if (!_0x2e3551) {
          return 0;
        }
        _0x377ce9.set(_0x2e3551.buffer, _0x510d56);
        return _0x2e3551.buffer.length;
      },
      write: function (_0x3c0def, _0x363da4, _0x32fc01, _0x4f4aad, _0x27a1bf) {
        var _0x4d70ee = _0x3c0def.node.sock;
        return _0x4d70ee.sock_ops.sendmsg(_0x4d70ee, _0x363da4, _0x32fc01, _0x4f4aad);
      },
      close: function (_0x22f427) {
        var _0x1d7f7a = _0x22f427.node.sock;
        _0x1d7f7a.sock_ops.close(_0x1d7f7a);
      }
    },
    nextname: function () {
      if (!_0x22ae67.nextname.current) {
        _0x22ae67.nextname.current = 0;
      }
      return "socket[" + _0x22ae67.nextname.current++ + "]";
    },
    websocket_sock_ops: {
      createPeer: function (_0x5629ce, _0x123dca, _0x68574f) {
        var _0x376eee;
        if (typeof _0x123dca === "object") {
          _0x376eee = _0x123dca;
          _0x123dca = null;
          _0x68574f = null;
        }
        if (_0x376eee) {
          if (_0x376eee._socket) {
            _0x123dca = _0x376eee._socket.remoteAddress;
            _0x68574f = _0x376eee._socket.remotePort;
          } else {
            var _0x810be8 = /ws[s]?:\/\/([^:]+):(\d+)/.exec(_0x376eee.url);
            if (!_0x810be8) {
              throw new Error("WebSocket URL must be in the format ws(s)://address:port");
            }
            _0x123dca = _0x810be8[1];
            _0x68574f = parseInt(_0x810be8[2], 10);
          }
        } else {
          try {
            var _0x4c0e51 = _0x3e078a.websocket && typeof _0x3e078a.websocket === "object";
            var _0x588edb = "ws:#".replace("#", "//");
            if (_0x4c0e51) {
              if (typeof _0x3e078a.websocket.url === "string") {
                _0x588edb = _0x3e078a.websocket.url;
              }
            }
            if (_0x588edb === "ws://" || _0x588edb === "wss://") {
              var _0x407c30 = _0x123dca.split("/");
              _0x588edb = _0x588edb + _0x407c30[0] + ":" + _0x68574f + "/" + _0x407c30.slice(1).join("/");
            }
            var _0x437012 = "binary";
            if (_0x4c0e51) {
              if (typeof _0x3e078a.websocket.subprotocol === "string") {
                _0x437012 = _0x3e078a.websocket.subprotocol;
              }
            }
            var _0x2a223c = undefined;
            if (_0x437012 !== "null") {
              _0x437012 = _0x437012.replace(/^ +| +$/g, "").split(/ *, */);
              _0x2a223c = _0x23eb2f ? {
                protocol: _0x437012.toString()
              } : _0x437012;
            }
            if (_0x4c0e51 && _0x3e078a.websocket.subprotocol === null) {
              _0x437012 = "null";
              _0x2a223c = undefined;
            }
            var _0x1b3ee3;
            if (_0x23eb2f) {
              _0x1b3ee3 = require("ws");
            } else {
              _0x1b3ee3 = WebSocket;
            }
            _0x376eee = new _0x1b3ee3(_0x588edb, _0x2a223c);
            _0x376eee.binaryType = "arraybuffer";
          } catch (_0x5442e6) {
            throw new _0x221e83.ErrnoError(23);
          }
        }
        var _0x41a061 = {
          addr: _0x123dca,
          port: _0x68574f,
          socket: _0x376eee,
          dgram_send_queue: []
        };
        _0x22ae67.websocket_sock_ops.addPeer(_0x5629ce, _0x41a061);
        _0x22ae67.websocket_sock_ops.handlePeerEvents(_0x5629ce, _0x41a061);
        if (_0x5629ce.type === 2 && typeof _0x5629ce.sport !== "undefined") {
          _0x41a061.dgram_send_queue.push(new Uint8Array([255, 255, 255, 255, "p".charCodeAt(0), "o".charCodeAt(0), "r".charCodeAt(0), "t".charCodeAt(0), (_0x5629ce.sport & 65280) >> 8, _0x5629ce.sport & 255]));
        }
        return _0x41a061;
      },
      getPeer: function (_0x51d4d5, _0x59b3b2, _0x259b4b) {
        return _0x51d4d5.peers[_0x59b3b2 + ":" + _0x259b4b];
      },
      addPeer: function (_0x3fd833, _0x30ebdd) {
        _0x3fd833.peers[_0x30ebdd.addr + ":" + _0x30ebdd.port] = _0x30ebdd;
      },
      removePeer: function (_0x3e2a1f, _0x2be8e7) {
        delete _0x3e2a1f.peers[_0x2be8e7.addr + ":" + _0x2be8e7.port];
      },
      handlePeerEvents: function (_0x3b737d, _0x4ba174) {
        var _0x51ebbd = true;
        function _0xc13a2b() {
          _0x3e078a.websocket.emit("open", _0x3b737d.stream.fd);
          try {
            var _0x3037e8 = _0x4ba174.dgram_send_queue.shift();
            while (_0x3037e8) {
              _0x4ba174.socket.send(_0x3037e8);
              _0x3037e8 = _0x4ba174.dgram_send_queue.shift();
            }
          } catch (_0x46bba3) {
            _0x4ba174.socket.close();
          }
        }
        function _0x1f35d6(_0x723d07) {
          if (typeof _0x723d07 === "string") {
            var _0x2a86b1 = new TextEncoder();
            _0x723d07 = _0x2a86b1.encode(_0x723d07);
          } else {
            _0x5181b0(_0x723d07.byteLength !== undefined);
            if (_0x723d07.byteLength == 0) {
              return;
            } else {
              _0x723d07 = new Uint8Array(_0x723d07);
            }
          }
          var _0x42049f = _0x51ebbd;
          _0x51ebbd = false;
          if (_0x42049f && _0x723d07.length === 10 && _0x723d07[0] === 255 && _0x723d07[1] === 255 && _0x723d07[2] === 255 && _0x723d07[3] === 255 && _0x723d07[4] === "p".charCodeAt(0) && _0x723d07[5] === "o".charCodeAt(0) && _0x723d07[6] === "r".charCodeAt(0) && _0x723d07[7] === "t".charCodeAt(0)) {
            var _0x344479 = _0x723d07[8] << 8 | _0x723d07[9];
            _0x22ae67.websocket_sock_ops.removePeer(_0x3b737d, _0x4ba174);
            _0x4ba174.port = _0x344479;
            _0x22ae67.websocket_sock_ops.addPeer(_0x3b737d, _0x4ba174);
            return;
          }
          _0x3b737d.recv_queue.push({
            addr: _0x4ba174.addr,
            port: _0x4ba174.port,
            data: _0x723d07
          });
          _0x3e078a.websocket.emit("message", _0x3b737d.stream.fd);
        }
        if (_0x23eb2f) {
          _0x4ba174.socket.on("open", _0xc13a2b);
          _0x4ba174.socket.on("message", function (_0x51b9c1, _0x402cdb) {
            if (!_0x402cdb.binary) {
              return;
            }
            _0x1f35d6(new Uint8Array(_0x51b9c1).buffer);
          });
          _0x4ba174.socket.on("close", function () {
            _0x3e078a.websocket.emit("close", _0x3b737d.stream.fd);
          });
          _0x4ba174.socket.on("error", function (_0x449317) {
            _0x3b737d.error = 14;
            _0x3e078a.websocket.emit("error", [_0x3b737d.stream.fd, _0x3b737d.error, "ECONNREFUSED: Connection refused"]);
          });
        } else {
          _0x4ba174.socket.onopen = _0xc13a2b;
          _0x4ba174.socket.onclose = function () {
            _0x3e078a.websocket.emit("close", _0x3b737d.stream.fd);
          };
          _0x4ba174.socket.onmessage = function _0x49dab6(_0x30ceeb) {
            _0x1f35d6(_0x30ceeb.data);
          };
          _0x4ba174.socket.onerror = function (_0x155e3e) {
            _0x3b737d.error = 14;
            _0x3e078a.websocket.emit("error", [_0x3b737d.stream.fd, _0x3b737d.error, "ECONNREFUSED: Connection refused"]);
          };
        }
      },
      poll: function (_0x59525b) {
        if (_0x59525b.type === 1 && _0x59525b.server) {
          if (_0x59525b.pending.length) {
            return 65;
          } else {
            return 0;
          }
        }
        var _0xbb8f48 = 0;
        var _0x873bd1 = _0x59525b.type === 1 ? _0x22ae67.websocket_sock_ops.getPeer(_0x59525b, _0x59525b.daddr, _0x59525b.dport) : null;
        if (_0x59525b.recv_queue.length || !_0x873bd1 || _0x873bd1 && _0x873bd1.socket.readyState === _0x873bd1.socket.CLOSING || _0x873bd1 && _0x873bd1.socket.readyState === _0x873bd1.socket.CLOSED) {
          _0xbb8f48 |= 65;
        }
        if (!_0x873bd1 || _0x873bd1 && _0x873bd1.socket.readyState === _0x873bd1.socket.OPEN) {
          _0xbb8f48 |= 4;
        }
        if (_0x873bd1 && _0x873bd1.socket.readyState === _0x873bd1.socket.CLOSING || _0x873bd1 && _0x873bd1.socket.readyState === _0x873bd1.socket.CLOSED) {
          _0xbb8f48 |= 16;
        }
        return _0xbb8f48;
      },
      ioctl: function (_0x5ec3c3, _0x5b7d36, _0x31010b) {
        switch (_0x5b7d36) {
          case 21531:
            var _0x43e429 = 0;
            if (_0x5ec3c3.recv_queue.length) {
              _0x43e429 = _0x5ec3c3.recv_queue[0].data.length;
            }
            _0x5cc2c4[_0x31010b >> 2] = _0x43e429;
            return 0;
          default:
            return 28;
        }
      },
      close: function (_0x170889) {
        if (_0x170889.server) {
          try {
            _0x170889.server.close();
          } catch (_0xa2ffc1) {}
          _0x170889.server = null;
        }
        var _0x3e1288 = Object.keys(_0x170889.peers);
        for (var _0x5a362e = 0; _0x5a362e < _0x3e1288.length; _0x5a362e++) {
          var _0x2da6e4 = _0x170889.peers[_0x3e1288[_0x5a362e]];
          try {
            _0x2da6e4.socket.close();
          } catch (_0x2c7ab8) {}
          _0x22ae67.websocket_sock_ops.removePeer(_0x170889, _0x2da6e4);
        }
        return 0;
      },
      bind: function (_0x1c8aeb, _0x40df07, _0x106f89) {
        if (typeof _0x1c8aeb.saddr !== "undefined" || typeof _0x1c8aeb.sport !== "undefined") {
          throw new _0x221e83.ErrnoError(28);
        }
        _0x1c8aeb.saddr = _0x40df07;
        _0x1c8aeb.sport = _0x106f89;
        if (_0x1c8aeb.type === 2) {
          if (_0x1c8aeb.server) {
            _0x1c8aeb.server.close();
            _0x1c8aeb.server = null;
          }
          try {
            _0x1c8aeb.sock_ops.listen(_0x1c8aeb, 0);
          } catch (_0xc5d6a5) {
            if (!(_0xc5d6a5 instanceof _0x221e83.ErrnoError)) {
              throw _0xc5d6a5;
            }
            if (_0xc5d6a5.errno !== 138) {
              throw _0xc5d6a5;
            }
          }
        }
      },
      connect: function (_0x32e6cc, _0x31b812, _0x5397f8) {
        if (_0x32e6cc.server) {
          throw new _0x221e83.ErrnoError(138);
        }
        if (typeof _0x32e6cc.daddr !== "undefined" && typeof _0x32e6cc.dport !== "undefined") {
          var _0x477393 = _0x22ae67.websocket_sock_ops.getPeer(_0x32e6cc, _0x32e6cc.daddr, _0x32e6cc.dport);
          if (_0x477393) {
            if (_0x477393.socket.readyState === _0x477393.socket.CONNECTING) {
              throw new _0x221e83.ErrnoError(7);
            } else {
              throw new _0x221e83.ErrnoError(30);
            }
          }
        }
        var _0x229e98 = _0x22ae67.websocket_sock_ops.createPeer(_0x32e6cc, _0x31b812, _0x5397f8);
        _0x32e6cc.daddr = _0x229e98.addr;
        _0x32e6cc.dport = _0x229e98.port;
        throw new _0x221e83.ErrnoError(26);
      },
      listen: function (_0x11627b, _0x59f1f7) {
        if (!_0x23eb2f) {
          throw new _0x221e83.ErrnoError(138);
        }
        if (_0x11627b.server) {
          throw new _0x221e83.ErrnoError(28);
        }
        var _0x9e7f53 = require("ws").Server;
        var _0x6e13fa = _0x11627b.saddr;
        _0x11627b.server = new _0x9e7f53({
          host: _0x6e13fa,
          port: _0x11627b.sport
        });
        _0x3e078a.websocket.emit("listen", _0x11627b.stream.fd);
        _0x11627b.server.on("connection", function (_0x3e18d1) {
          if (_0x11627b.type === 1) {
            var _0x3a9fa9 = _0x22ae67.createSocket(_0x11627b.family, _0x11627b.type, _0x11627b.protocol);
            var _0x286d79 = _0x22ae67.websocket_sock_ops.createPeer(_0x3a9fa9, _0x3e18d1);
            _0x3a9fa9.daddr = _0x286d79.addr;
            _0x3a9fa9.dport = _0x286d79.port;
            _0x11627b.pending.push(_0x3a9fa9);
            _0x3e078a.websocket.emit("connection", _0x3a9fa9.stream.fd);
          } else {
            _0x22ae67.websocket_sock_ops.createPeer(_0x11627b, _0x3e18d1);
            _0x3e078a.websocket.emit("connection", _0x11627b.stream.fd);
          }
        });
        _0x11627b.server.on("closed", function () {
          _0x3e078a.websocket.emit("close", _0x11627b.stream.fd);
          _0x11627b.server = null;
        });
        _0x11627b.server.on("error", function (_0x5d84d4) {
          _0x11627b.error = 23;
          _0x3e078a.websocket.emit("error", [_0x11627b.stream.fd, _0x11627b.error, "EHOSTUNREACH: Host is unreachable"]);
        });
      },
      accept: function (_0x2f9432) {
        if (!_0x2f9432.server) {
          throw new _0x221e83.ErrnoError(28);
        }
        var _0x59018d = _0x2f9432.pending.shift();
        _0x59018d.stream.flags = _0x2f9432.stream.flags;
        return _0x59018d;
      },
      getname: function (_0x89f6c6, _0x43aa73) {
        var _0x14ad08;
        var _0x1e80ae;
        if (_0x43aa73) {
          if (_0x89f6c6.daddr === undefined || _0x89f6c6.dport === undefined) {
            throw new _0x221e83.ErrnoError(53);
          }
          _0x14ad08 = _0x89f6c6.daddr;
          _0x1e80ae = _0x89f6c6.dport;
        } else {
          _0x14ad08 = _0x89f6c6.saddr || 0;
          _0x1e80ae = _0x89f6c6.sport || 0;
        }
        return {
          addr: _0x14ad08,
          port: _0x1e80ae
        };
      },
      sendmsg: function (_0x577b9f, _0x1fc157, _0x361732, _0x38382a, _0x22de78, _0x253bc1) {
        if (_0x577b9f.type === 2) {
          if (_0x22de78 === undefined || _0x253bc1 === undefined) {
            _0x22de78 = _0x577b9f.daddr;
            _0x253bc1 = _0x577b9f.dport;
          }
          if (_0x22de78 === undefined || _0x253bc1 === undefined) {
            throw new _0x221e83.ErrnoError(17);
          }
        } else {
          _0x22de78 = _0x577b9f.daddr;
          _0x253bc1 = _0x577b9f.dport;
        }
        var _0x2f5bde = _0x22ae67.websocket_sock_ops.getPeer(_0x577b9f, _0x22de78, _0x253bc1);
        if (_0x577b9f.type === 1) {
          if (!_0x2f5bde || _0x2f5bde.socket.readyState === _0x2f5bde.socket.CLOSING || _0x2f5bde.socket.readyState === _0x2f5bde.socket.CLOSED) {
            throw new _0x221e83.ErrnoError(53);
          } else if (_0x2f5bde.socket.readyState === _0x2f5bde.socket.CONNECTING) {
            throw new _0x221e83.ErrnoError(6);
          }
        }
        if (ArrayBuffer.isView(_0x1fc157)) {
          _0x361732 += _0x1fc157.byteOffset;
          _0x1fc157 = _0x1fc157.buffer;
        }
        var _0x169b36;
        _0x169b36 = _0x1fc157.slice(_0x361732, _0x361732 + _0x38382a);
        if (_0x577b9f.type === 2) {
          if (!_0x2f5bde || _0x2f5bde.socket.readyState !== _0x2f5bde.socket.OPEN) {
            if (!_0x2f5bde || _0x2f5bde.socket.readyState === _0x2f5bde.socket.CLOSING || _0x2f5bde.socket.readyState === _0x2f5bde.socket.CLOSED) {
              _0x2f5bde = _0x22ae67.websocket_sock_ops.createPeer(_0x577b9f, _0x22de78, _0x253bc1);
            }
            _0x2f5bde.dgram_send_queue.push(_0x169b36);
            return _0x38382a;
          }
        }
        try {
          _0x2f5bde.socket.send(_0x169b36);
          return _0x38382a;
        } catch (_0x180589) {
          throw new _0x221e83.ErrnoError(28);
        }
      },
      recvmsg: function (_0x3bbcc, _0xc7b50c) {
        if (_0x3bbcc.type === 1 && _0x3bbcc.server) {
          throw new _0x221e83.ErrnoError(53);
        }
        var _0x1ed4ce = _0x3bbcc.recv_queue.shift();
        if (!_0x1ed4ce) {
          if (_0x3bbcc.type === 1) {
            var _0x33a789 = _0x22ae67.websocket_sock_ops.getPeer(_0x3bbcc, _0x3bbcc.daddr, _0x3bbcc.dport);
            if (!_0x33a789) {
              throw new _0x221e83.ErrnoError(53);
            } else if (_0x33a789.socket.readyState === _0x33a789.socket.CLOSING || _0x33a789.socket.readyState === _0x33a789.socket.CLOSED) {
              return null;
            } else {
              throw new _0x221e83.ErrnoError(6);
            }
          } else {
            throw new _0x221e83.ErrnoError(6);
          }
        }
        var _0x4c8b1e = _0x1ed4ce.data.byteLength || _0x1ed4ce.data.length;
        var _0x272d2c = _0x1ed4ce.data.byteOffset || 0;
        var _0x2ed9ac = _0x1ed4ce.data.buffer || _0x1ed4ce.data;
        var _0x3855be = Math.min(_0xc7b50c, _0x4c8b1e);
        var _0x4db37b = {
          buffer: new Uint8Array(_0x2ed9ac, _0x272d2c, _0x3855be),
          addr: _0x1ed4ce.addr,
          port: _0x1ed4ce.port
        };
        if (_0x3bbcc.type === 1 && _0x3855be < _0x4c8b1e) {
          var _0x18878c = _0x4c8b1e - _0x3855be;
          _0x1ed4ce.data = new Uint8Array(_0x2ed9ac, _0x272d2c + _0x3855be, _0x18878c);
          _0x3bbcc.recv_queue.unshift(_0x1ed4ce);
        }
        return _0x4db37b;
      }
    }
  };
  function _0x57728b(_0x40eb69) {
    var _0x150672 = _0x22ae67.getSocket(_0x40eb69);
    if (!_0x150672) {
      throw new _0x221e83.ErrnoError(8);
    }
    return _0x150672;
  }
  function _0x3559eb(_0x3155e1) {
    _0x5cc2c4[_0x25a545() >> 2] = _0x3155e1;
    return _0x3155e1;
  }
  function _0x3b4356(_0x23b994) {
    var _0x18e3f8 = _0x23b994.split(".");
    for (var _0x10e606 = 0; _0x10e606 < 4; _0x10e606++) {
      var _0x32f30c = Number(_0x18e3f8[_0x10e606]);
      if (isNaN(_0x32f30c)) {
        return null;
      }
      _0x18e3f8[_0x10e606] = _0x32f30c;
    }
    return (_0x18e3f8[0] | _0x18e3f8[1] << 8 | _0x18e3f8[2] << 16 | _0x18e3f8[3] << 24) >>> 0;
  }
  function _0x3c269d(_0x18d88e) {
    return parseInt(_0x18d88e);
  }
  function _0x282dea(_0x3fd19e) {
    var _0x244d3b;
    var _0x23222;
    var _0x502d20;
    var _0x2d1ac2;
    var _0x15b912 = /^((?=.*::)(?!.*::.+::)(::)?([\dA-F]{1,4}:(:|\b)|){5}|([\dA-F]{1,4}:){6})((([\dA-F]{1,4}((?!\3)::|:\b|$))|(?!\2\3)){2}|(((2[0-4]|1\d|[1-9])?\d|25[0-5])\.?\b){4})$/i;
    var _0x527c15 = [];
    if (!_0x15b912.test(_0x3fd19e)) {
      return null;
    }
    if (_0x3fd19e === "::") {
      return [0, 0, 0, 0, 0, 0, 0, 0];
    }
    if (_0x3fd19e.startsWith("::")) {
      _0x3fd19e = _0x3fd19e.replace("::", "Z:");
    } else {
      _0x3fd19e = _0x3fd19e.replace("::", ":Z:");
    }
    if (_0x3fd19e.indexOf(".") > 0) {
      _0x3fd19e = _0x3fd19e.replace(new RegExp("[.]", "g"), ":");
      _0x244d3b = _0x3fd19e.split(":");
      _0x244d3b[_0x244d3b.length - 4] = _0x3c269d(_0x244d3b[_0x244d3b.length - 4]) + _0x3c269d(_0x244d3b[_0x244d3b.length - 3]) * 256;
      _0x244d3b[_0x244d3b.length - 3] = _0x3c269d(_0x244d3b[_0x244d3b.length - 2]) + _0x3c269d(_0x244d3b[_0x244d3b.length - 1]) * 256;
      _0x244d3b = _0x244d3b.slice(0, _0x244d3b.length - 2);
    } else {
      _0x244d3b = _0x3fd19e.split(":");
    }
    _0x502d20 = 0;
    _0x2d1ac2 = 0;
    for (_0x23222 = 0; _0x23222 < _0x244d3b.length; _0x23222++) {
      if (typeof _0x244d3b[_0x23222] === "string") {
        if (_0x244d3b[_0x23222] === "Z") {
          for (_0x2d1ac2 = 0; _0x2d1ac2 < 8 - _0x244d3b.length + 1; _0x2d1ac2++) {
            _0x527c15[_0x23222 + _0x2d1ac2] = 0;
          }
          _0x502d20 = _0x2d1ac2 - 1;
        } else {
          _0x527c15[_0x23222 + _0x502d20] = _0x31ddf1(parseInt(_0x244d3b[_0x23222], 16));
        }
      } else {
        _0x527c15[_0x23222 + _0x502d20] = _0x244d3b[_0x23222];
      }
    }
    return [_0x527c15[1] << 16 | _0x527c15[0], _0x527c15[3] << 16 | _0x527c15[2], _0x527c15[5] << 16 | _0x527c15[4], _0x527c15[7] << 16 | _0x527c15[6]];
  }
  function _0xd32a86(_0x1988a4, _0x40fe5c, _0x8bf7b6, _0x207602, _0x2572a5) {
    switch (_0x40fe5c) {
      case 2:
        _0x8bf7b6 = _0x3b4356(_0x8bf7b6);
        if (_0x2572a5) {
          _0x5cc2c4[_0x2572a5 >> 2] = 16;
        }
        _0x30f41b[_0x1988a4 >> 1] = _0x40fe5c;
        _0x5cc2c4[_0x1988a4 + 4 >> 2] = _0x8bf7b6;
        _0x30f41b[_0x1988a4 + 2 >> 1] = _0x31ddf1(_0x207602);
        _0x300ee3 = [0, (_0x2453c8 = 0, +Math.abs(_0x2453c8) >= 1 ? _0x2453c8 > 0 ? (Math.min(+Math.floor(_0x2453c8 / 4294967296), 4294967295) | 0) >>> 0 : ~~+Math.ceil((_0x2453c8 - +(~~_0x2453c8 >>> 0)) / 4294967296) >>> 0 : 0)];
        _0x5cc2c4[_0x1988a4 + 8 >> 2] = _0x300ee3[0];
        _0x5cc2c4[_0x1988a4 + 12 >> 2] = _0x300ee3[1];
        break;
      case 10:
        _0x8bf7b6 = _0x282dea(_0x8bf7b6);
        if (_0x2572a5) {
          _0x5cc2c4[_0x2572a5 >> 2] = 28;
        }
        _0x5cc2c4[_0x1988a4 >> 2] = _0x40fe5c;
        _0x5cc2c4[_0x1988a4 + 8 >> 2] = _0x8bf7b6[0];
        _0x5cc2c4[_0x1988a4 + 12 >> 2] = _0x8bf7b6[1];
        _0x5cc2c4[_0x1988a4 + 16 >> 2] = _0x8bf7b6[2];
        _0x5cc2c4[_0x1988a4 + 20 >> 2] = _0x8bf7b6[3];
        _0x30f41b[_0x1988a4 + 2 >> 1] = _0x31ddf1(_0x207602);
        _0x5cc2c4[_0x1988a4 + 4 >> 2] = 0;
        _0x5cc2c4[_0x1988a4 + 24 >> 2] = 0;
        break;
      default:
        return 5;
    }
    return 0;
  }
  var _0x10e357 = {
    address_map: {
      id: 1,
      addrs: {},
      names: {}
    },
    lookup_name: function (_0x28882d) {
      var _0x29581e = _0x3b4356(_0x28882d);
      if (_0x29581e !== null) {
        return _0x28882d;
      }
      _0x29581e = _0x282dea(_0x28882d);
      if (_0x29581e !== null) {
        return _0x28882d;
      }
      var _0xe9b070;
      if (_0x10e357.address_map.addrs[_0x28882d]) {
        _0xe9b070 = _0x10e357.address_map.addrs[_0x28882d];
      } else {
        var _0xac3f74 = _0x10e357.address_map.id++;
        _0x5181b0(_0xac3f74 < 65535, "exceeded max address mappings of 65535");
        _0xe9b070 = "172.29." + (_0xac3f74 & 255) + "." + (_0xac3f74 & 65280);
        _0x10e357.address_map.names[_0xe9b070] = _0x28882d;
        _0x10e357.address_map.addrs[_0x28882d] = _0xe9b070;
      }
      return _0xe9b070;
    },
    lookup_addr: function (_0xed10ed) {
      if (_0x10e357.address_map.names[_0xed10ed]) {
        return _0x10e357.address_map.names[_0xed10ed];
      }
      return null;
    }
  };
  function _0x21544a(_0x207ddb, _0x409355, _0x1d0d80, _0x450056) {
    try {
      var _0x2ab510 = _0x57728b(_0x207ddb);
      var _0xfcff9a = _0x2ab510.sock_ops.accept(_0x2ab510);
      if (_0x409355) {
        var _0x1709ac = _0xd32a86(_0x409355, _0xfcff9a.family, _0x10e357.lookup_name(_0xfcff9a.daddr), _0xfcff9a.dport, _0x1d0d80);
      }
      return _0xfcff9a.stream.fd;
    } catch (_0x4c4754) {
      if (typeof _0x221e83 === "undefined" || !(_0x4c4754 instanceof _0x221e83.ErrnoError)) {
        _0xb4b2ae(_0x4c4754);
      }
      return -_0x4c4754.errno;
    }
  }
  function _0x3579e8(_0x47504a, _0x386456) {
    try {
      _0x47504a = _0x3eb2e6.getStr(_0x47504a);
      return _0x3eb2e6.doAccess(_0x47504a, _0x386456);
    } catch (_0x24fbb5) {
      if (typeof _0x221e83 === "undefined" || !(_0x24fbb5 instanceof _0x221e83.ErrnoError)) {
        _0xb4b2ae(_0x24fbb5);
      }
      return -_0x24fbb5.errno;
    }
  }
  function _0x48211c(_0x32b97f) {
    return (_0x32b97f & 255) + "." + (_0x32b97f >> 8 & 255) + "." + (_0x32b97f >> 16 & 255) + "." + (_0x32b97f >> 24 & 255);
  }
  function _0x154356(_0x2a25fb) {
    var _0x15cdb3 = "";
    var _0x583815 = 0;
    var _0x5e0f4a = 0;
    var _0x3b0412 = 0;
    var _0x3bafac = 0;
    var _0x8a3be4 = 0;
    var _0x549165 = 0;
    var _0x523667 = [_0x2a25fb[0] & 65535, _0x2a25fb[0] >> 16, _0x2a25fb[1] & 65535, _0x2a25fb[1] >> 16, _0x2a25fb[2] & 65535, _0x2a25fb[2] >> 16, _0x2a25fb[3] & 65535, _0x2a25fb[3] >> 16];
    var _0x37a138 = true;
    var _0x82c9d5 = "";
    for (_0x549165 = 0; _0x549165 < 5; _0x549165++) {
      if (_0x523667[_0x549165] !== 0) {
        _0x37a138 = false;
        break;
      }
    }
    if (_0x37a138) {
      _0x82c9d5 = _0x48211c(_0x523667[6] | _0x523667[7] << 16);
      if (_0x523667[5] === -1) {
        _0x15cdb3 = "::ffff:";
        _0x15cdb3 += _0x82c9d5;
        return _0x15cdb3;
      }
      if (_0x523667[5] === 0) {
        _0x15cdb3 = "::";
        if (_0x82c9d5 === "0.0.0.0") {
          _0x82c9d5 = "";
        }
        if (_0x82c9d5 === "0.0.0.1") {
          _0x82c9d5 = "1";
        }
        _0x15cdb3 += _0x82c9d5;
        return _0x15cdb3;
      }
    }
    for (_0x583815 = 0; _0x583815 < 8; _0x583815++) {
      if (_0x523667[_0x583815] === 0) {
        if (_0x583815 - _0x3b0412 > 1) {
          _0x8a3be4 = 0;
        }
        _0x3b0412 = _0x583815;
        _0x8a3be4++;
      }
      if (_0x8a3be4 > _0x5e0f4a) {
        _0x5e0f4a = _0x8a3be4;
        _0x3bafac = _0x583815 - _0x5e0f4a + 1;
      }
    }
    for (_0x583815 = 0; _0x583815 < 8; _0x583815++) {
      if (_0x5e0f4a > 1) {
        if (_0x523667[_0x583815] === 0 && _0x583815 >= _0x3bafac && _0x583815 < _0x3bafac + _0x5e0f4a) {
          if (_0x583815 === _0x3bafac) {
            _0x15cdb3 += ":";
            if (_0x3bafac === 0) {
              _0x15cdb3 += ":";
            }
          }
          continue;
        }
      }
      _0x15cdb3 += Number(_0x5ac15f(_0x523667[_0x583815] & 65535)).toString(16);
      _0x15cdb3 += _0x583815 < 7 ? ":" : "";
    }
    return _0x15cdb3;
  }
  function _0x1d1689(_0x166b7a, _0x5e7aee) {
    var _0x3850e4 = _0x30f41b[_0x166b7a >> 1];
    var _0x25614d = _0x5ac15f(_0x2cfdbc[_0x166b7a + 2 >> 1]);
    var _0x2e1bd6;
    switch (_0x3850e4) {
      case 2:
        if (_0x5e7aee !== 16) {
          return {
            errno: 28
          };
        }
        _0x2e1bd6 = _0x5cc2c4[_0x166b7a + 4 >> 2];
        _0x2e1bd6 = _0x48211c(_0x2e1bd6);
        break;
      case 10:
        if (_0x5e7aee !== 28) {
          return {
            errno: 28
          };
        }
        _0x2e1bd6 = [_0x5cc2c4[_0x166b7a + 8 >> 2], _0x5cc2c4[_0x166b7a + 12 >> 2], _0x5cc2c4[_0x166b7a + 16 >> 2], _0x5cc2c4[_0x166b7a + 20 >> 2]];
        _0x2e1bd6 = _0x154356(_0x2e1bd6);
        break;
      default:
        return {
          errno: 5
        };
    }
    return {
      family: _0x3850e4,
      addr: _0x2e1bd6,
      port: _0x25614d
    };
  }
  function _0x2d447c(_0x531127, _0x5405df, _0x3874b2) {
    if (_0x3874b2 && _0x531127 === 0) {
      return null;
    }
    var _0x1a3c00 = _0x1d1689(_0x531127, _0x5405df);
    if (_0x1a3c00.errno) {
      throw new _0x221e83.ErrnoError(_0x1a3c00.errno);
    }
    _0x1a3c00.addr = _0x10e357.lookup_addr(_0x1a3c00.addr) || _0x1a3c00.addr;
    return _0x1a3c00;
  }
  function _0x3dc533(_0x1b8232, _0x2cc570, _0x465c6b) {
    try {
      var _0x188873 = _0x57728b(_0x1b8232);
      var _0x3fc0f2 = _0x2d447c(_0x2cc570, _0x465c6b);
      _0x188873.sock_ops.bind(_0x188873, _0x3fc0f2.addr, _0x3fc0f2.port);
      return 0;
    } catch (_0x18d63b) {
      if (typeof _0x221e83 === "undefined" || !(_0x18d63b instanceof _0x221e83.ErrnoError)) {
        _0xb4b2ae(_0x18d63b);
      }
      return -_0x18d63b.errno;
    }
  }
  function _0x449be5(_0x3231e5, _0x5ef17d) {
    try {
      _0x3231e5 = _0x3eb2e6.getStr(_0x3231e5);
      _0x221e83.chmod(_0x3231e5, _0x5ef17d);
      return 0;
    } catch (_0x350683) {
      if (typeof _0x221e83 === "undefined" || !(_0x350683 instanceof _0x221e83.ErrnoError)) {
        _0xb4b2ae(_0x350683);
      }
      return -_0x350683.errno;
    }
  }
  function _0x3e1b68(_0x2ce5a5, _0x182f9a, _0x164c97) {
    try {
      var _0x5e707f = _0x57728b(_0x2ce5a5);
      var _0xc710a7 = _0x2d447c(_0x182f9a, _0x164c97);
      _0x5e707f.sock_ops.connect(_0x5e707f, _0xc710a7.addr, _0xc710a7.port);
      return 0;
    } catch (_0x2ae432) {
      if (typeof _0x221e83 === "undefined" || !(_0x2ae432 instanceof _0x221e83.ErrnoError)) {
        _0xb4b2ae(_0x2ae432);
      }
      return -_0x2ae432.errno;
    }
  }
  function _0x595f5f(_0x59940d, _0x429bbe) {
    try {
      var _0x6fd487 = _0x3eb2e6.getStreamFromFD(_0x59940d);
      if (_0x6fd487.fd === _0x429bbe) {
        return _0x429bbe;
      }
      return _0x3eb2e6.doDup(_0x6fd487.path, _0x6fd487.flags, _0x429bbe);
    } catch (_0x5300f) {
      if (typeof _0x221e83 === "undefined" || !(_0x5300f instanceof _0x221e83.ErrnoError)) {
        _0xb4b2ae(_0x5300f);
      }
      return -_0x5300f.errno;
    }
  }
  function _0x41208a(_0x11c78f, _0x3bf547) {
    try {
      _0x221e83.fchmod(_0x11c78f, _0x3bf547);
      return 0;
    } catch (_0x409fba) {
      if (typeof _0x221e83 === "undefined" || !(_0x409fba instanceof _0x221e83.ErrnoError)) {
        _0xb4b2ae(_0x409fba);
      }
      return -_0x409fba.errno;
    }
  }
  function _0x36643a(_0x184e08, _0x3b8b89, _0x2e0d01) {
    _0x3eb2e6.varargs = _0x2e0d01;
    try {
      var _0x42e589 = _0x3eb2e6.getStreamFromFD(_0x184e08);
      switch (_0x3b8b89) {
        case 0:
          {
            var _0x495fbc = _0x3eb2e6.get();
            if (_0x495fbc < 0) {
              return -28;
            }
            var _0x3a148c;
            _0x3a148c = _0x221e83.open(_0x42e589.path, _0x42e589.flags, 0, _0x495fbc);
            return _0x3a148c.fd;
          }
        case 1:
        case 2:
          return 0;
        case 3:
          return _0x42e589.flags;
        case 4:
          {
            var _0x495fbc = _0x3eb2e6.get();
            _0x42e589.flags |= _0x495fbc;
            return 0;
          }
        case 12:
          {
            var _0x495fbc = _0x3eb2e6.get();
            var _0x45744a = 0;
            _0x30f41b[_0x495fbc + _0x45744a >> 1] = 2;
            return 0;
          }
        case 13:
        case 14:
          return 0;
        case 16:
        case 8:
          return -28;
        case 9:
          _0x3559eb(28);
          return -1;
        default:
          {
            return -28;
          }
      }
    } catch (_0x2d0a03) {
      if (typeof _0x221e83 === "undefined" || !(_0x2d0a03 instanceof _0x221e83.ErrnoError)) {
        _0xb4b2ae(_0x2d0a03);
      }
      return -_0x2d0a03.errno;
    }
  }
  function _0x15ae4f(_0x57a25e, _0x409a29) {
    try {
      var _0x21663d = _0x3eb2e6.getStreamFromFD(_0x57a25e);
      return _0x3eb2e6.doStat(_0x221e83.stat, _0x21663d.path, _0x409a29);
    } catch (_0x3c217a) {
      if (typeof _0x221e83 === "undefined" || !(_0x3c217a instanceof _0x221e83.ErrnoError)) {
        _0xb4b2ae(_0x3c217a);
      }
      return -_0x3c217a.errno;
    }
  }
  function _0x693729(_0x411f72, _0x300a6a, _0x18c382, _0x16490f) {
    try {
      var _0x6ddcdc = _0x3eb2e6.get64(_0x18c382, _0x16490f);
      _0x221e83.ftruncate(_0x411f72, _0x6ddcdc);
      return 0;
    } catch (_0x5408a8) {
      if (typeof _0x221e83 === "undefined" || !(_0x5408a8 instanceof _0x221e83.ErrnoError)) {
        _0xb4b2ae(_0x5408a8);
      }
      return -_0x5408a8.errno;
    }
  }
  function _0x348fed(_0x43b50a, _0x24b1bf) {
    try {
      if (_0x24b1bf === 0) {
        return -28;
      }
      var _0x475015 = _0x221e83.cwd();
      var _0x4b5257 = _0x3e3578(_0x475015);
      if (_0x24b1bf < _0x4b5257 + 1) {
        return -68;
      }
      _0x53c85c(_0x475015, _0x43b50a, _0x24b1bf);
      return _0x43b50a;
    } catch (_0xa8e93) {
      if (typeof _0x221e83 === "undefined" || !(_0xa8e93 instanceof _0x221e83.ErrnoError)) {
        _0xb4b2ae(_0xa8e93);
      }
      return -_0xa8e93.errno;
    }
  }
  function _0x51e68b(_0x2e3f5e, _0x2a24f0, _0x55d33c) {
    try {
      var _0x10f0ab = _0x3eb2e6.getStreamFromFD(_0x2e3f5e);
      if (!_0x10f0ab.getdents) {
        _0x10f0ab.getdents = _0x221e83.readdir(_0x10f0ab.path);
      }
      var _0x1ecf4f = 280;
      var _0x4b5341 = 0;
      var _0x575e25 = _0x221e83.llseek(_0x10f0ab, 0, 1);
      var _0x1230b9 = Math.floor(_0x575e25 / _0x1ecf4f);
      while (_0x1230b9 < _0x10f0ab.getdents.length && _0x4b5341 + _0x1ecf4f <= _0x55d33c) {
        var _0x3a7511;
        var _0x12d276;
        var _0x3ae144 = _0x10f0ab.getdents[_0x1230b9];
        if (_0x3ae144[0] === ".") {
          _0x3a7511 = 1;
          _0x12d276 = 4;
        } else {
          var _0xa1a14e = _0x221e83.lookupNode(_0x10f0ab.node, _0x3ae144);
          _0x3a7511 = _0xa1a14e.id;
          _0x12d276 = _0x221e83.isChrdev(_0xa1a14e.mode) ? 2 : _0x221e83.isDir(_0xa1a14e.mode) ? 4 : _0x221e83.isLink(_0xa1a14e.mode) ? 10 : 8;
        }
        _0x300ee3 = [_0x3a7511 >>> 0, (_0x2453c8 = _0x3a7511, +Math.abs(_0x2453c8) >= 1 ? _0x2453c8 > 0 ? (Math.min(+Math.floor(_0x2453c8 / 4294967296), 4294967295) | 0) >>> 0 : ~~+Math.ceil((_0x2453c8 - +(~~_0x2453c8 >>> 0)) / 4294967296) >>> 0 : 0)];
        _0x5cc2c4[_0x2a24f0 + _0x4b5341 >> 2] = _0x300ee3[0];
        _0x5cc2c4[_0x2a24f0 + _0x4b5341 + 4 >> 2] = _0x300ee3[1];
        _0x300ee3 = [(_0x1230b9 + 1) * _0x1ecf4f >>> 0, (_0x2453c8 = (_0x1230b9 + 1) * _0x1ecf4f, +Math.abs(_0x2453c8) >= 1 ? _0x2453c8 > 0 ? (Math.min(+Math.floor(_0x2453c8 / 4294967296), 4294967295) | 0) >>> 0 : ~~+Math.ceil((_0x2453c8 - +(~~_0x2453c8 >>> 0)) / 4294967296) >>> 0 : 0)];
        _0x5cc2c4[_0x2a24f0 + _0x4b5341 + 8 >> 2] = _0x300ee3[0];
        _0x5cc2c4[_0x2a24f0 + _0x4b5341 + 12 >> 2] = _0x300ee3[1];
        _0x30f41b[_0x2a24f0 + _0x4b5341 + 16 >> 1] = 280;
        _0xb3d98[_0x2a24f0 + _0x4b5341 + 18 >> 0] = _0x12d276;
        _0x53c85c(_0x3ae144, _0x2a24f0 + _0x4b5341 + 19, 256);
        _0x4b5341 += _0x1ecf4f;
        _0x1230b9 += 1;
      }
      _0x221e83.llseek(_0x10f0ab, _0x1230b9 * _0x1ecf4f, 0);
      return _0x4b5341;
    } catch (_0x25a197) {
      if (typeof _0x221e83 === "undefined" || !(_0x25a197 instanceof _0x221e83.ErrnoError)) {
        _0xb4b2ae(_0x25a197);
      }
      return -_0x25a197.errno;
    }
  }
  function _0x43b77f() {
    return 0;
  }
  function _0x7fb12() {
    return _0x43b77f();
  }
  function _0x1e47d3(_0x2137c8, _0x16c513, _0x2b1c95) {
    try {
      var _0x54abc0 = _0x57728b(_0x2137c8);
      if (!_0x54abc0.daddr) {
        return -53;
      }
      var _0xfc82f8 = _0xd32a86(_0x16c513, _0x54abc0.family, _0x10e357.lookup_name(_0x54abc0.daddr), _0x54abc0.dport, _0x2b1c95);
      return 0;
    } catch (_0x4a24f0) {
      if (typeof _0x221e83 === "undefined" || !(_0x4a24f0 instanceof _0x221e83.ErrnoError)) {
        _0xb4b2ae(_0x4a24f0);
      }
      return -_0x4a24f0.errno;
    }
  }
  function _0x140175(_0x44efbf, _0x37df8c) {
    try {
      _0xe1599f(_0x37df8c, 0, 136);
      _0x5cc2c4[_0x37df8c >> 2] = 1;
      _0x5cc2c4[_0x37df8c + 4 >> 2] = 2;
      _0x5cc2c4[_0x37df8c + 8 >> 2] = 3;
      _0x5cc2c4[_0x37df8c + 12 >> 2] = 4;
      return 0;
    } catch (_0x17cd16) {
      if (typeof _0x221e83 === "undefined" || !(_0x17cd16 instanceof _0x221e83.ErrnoError)) {
        _0xb4b2ae(_0x17cd16);
      }
      return -_0x17cd16.errno;
    }
  }
  function _0x181d46(_0x4fd33e, _0x2d8ed1, _0x218ecd) {
    try {
      _0x516167("__sys_getsockname " + _0x4fd33e);
      var _0x27716f = _0x57728b(_0x4fd33e);
      var _0x391c6 = _0xd32a86(_0x2d8ed1, _0x27716f.family, _0x10e357.lookup_name(_0x27716f.saddr || "0.0.0.0"), _0x27716f.sport, _0x218ecd);
      return 0;
    } catch (_0x1ca701) {
      if (typeof _0x221e83 === "undefined" || !(_0x1ca701 instanceof _0x221e83.ErrnoError)) {
        _0xb4b2ae(_0x1ca701);
      }
      return -_0x1ca701.errno;
    }
  }
  function _0x5ef534(_0x55158f, _0x4970f7, _0x1fe62e, _0x143842, _0xc0182d) {
    try {
      var _0x1a1359 = _0x57728b(_0x55158f);
      if (_0x4970f7 === 1) {
        if (_0x1fe62e === 4) {
          _0x5cc2c4[_0x143842 >> 2] = _0x1a1359.error;
          _0x5cc2c4[_0xc0182d >> 2] = 4;
          _0x1a1359.error = null;
          return 0;
        }
      }
      return -50;
    } catch (_0x397f27) {
      if (typeof _0x221e83 === "undefined" || !(_0x397f27 instanceof _0x221e83.ErrnoError)) {
        _0xb4b2ae(_0x397f27);
      }
      return -_0x397f27.errno;
    }
  }
  function _0x242ec3() {
    return _0x43b77f();
  }
  function _0x2a6985(_0x58d3c2, _0xbe7b21, _0x4917d0) {
    _0x3eb2e6.varargs = _0x4917d0;
    try {
      var _0x3bda5f = _0x3eb2e6.getStreamFromFD(_0x58d3c2);
      switch (_0xbe7b21) {
        case 21509:
        case 21505:
          {
            if (!_0x3bda5f.tty) {
              return -59;
            }
            return 0;
          }
        case 21510:
        case 21511:
        case 21512:
        case 21506:
        case 21507:
        case 21508:
          {
            if (!_0x3bda5f.tty) {
              return -59;
            }
            return 0;
          }
        case 21519:
          {
            if (!_0x3bda5f.tty) {
              return -59;
            }
            var _0x43329d = _0x3eb2e6.get();
            _0x5cc2c4[_0x43329d >> 2] = 0;
            return 0;
          }
        case 21520:
          {
            if (!_0x3bda5f.tty) {
              return -59;
            }
            return -28;
          }
        case 21531:
          {
            var _0x43329d = _0x3eb2e6.get();
            return _0x221e83.ioctl(_0x3bda5f, _0xbe7b21, _0x43329d);
          }
        case 21523:
          {
            if (!_0x3bda5f.tty) {
              return -59;
            }
            return 0;
          }
        case 21524:
          {
            if (!_0x3bda5f.tty) {
              return -59;
            }
            return 0;
          }
        default:
          _0xb4b2ae("bad ioctl syscall " + _0xbe7b21);
      }
    } catch (_0x1986c7) {
      if (typeof _0x221e83 === "undefined" || !(_0x1986c7 instanceof _0x221e83.ErrnoError)) {
        _0xb4b2ae(_0x1986c7);
      }
      return -_0x1986c7.errno;
    }
  }
  function _0x43aa3d(_0x4f7541, _0x13adf5) {
    return -34;
  }
  function _0x437fd8(_0x2561e9, _0x4e27d6) {
    try {
      var _0x8e1c9e = _0x57728b(_0x2561e9);
      _0x8e1c9e.sock_ops.listen(_0x8e1c9e, _0x4e27d6);
      return 0;
    } catch (_0x274cba) {
      if (typeof _0x221e83 === "undefined" || !(_0x274cba instanceof _0x221e83.ErrnoError)) {
        _0xb4b2ae(_0x274cba);
      }
      return -_0x274cba.errno;
    }
  }
  function _0x19d230(_0x4540b4, _0x25b68f) {
    try {
      _0x4540b4 = _0x3eb2e6.getStr(_0x4540b4);
      return _0x3eb2e6.doStat(_0x221e83.lstat, _0x4540b4, _0x25b68f);
    } catch (_0x5d0d33) {
      if (typeof _0x221e83 === "undefined" || !(_0x5d0d33 instanceof _0x221e83.ErrnoError)) {
        _0xb4b2ae(_0x5d0d33);
      }
      return -_0x5d0d33.errno;
    }
  }
  function _0x629cc(_0x5d843f, _0x44f72d) {
    try {
      _0x5d843f = _0x3eb2e6.getStr(_0x5d843f);
      return _0x3eb2e6.doMkdir(_0x5d843f, _0x44f72d);
    } catch (_0x1b094b) {
      if (typeof _0x221e83 === "undefined" || !(_0x1b094b instanceof _0x221e83.ErrnoError)) {
        _0xb4b2ae(_0x1b094b);
      }
      return -_0x1b094b.errno;
    }
  }
  function _0x27a009(_0x352b3c, _0x208b76, _0x4ec56b, _0x1d9cf5, _0x4e3cc3, _0x1034f6) {
    _0x1034f6 <<= 12;
    var _0xa6491a;
    var _0x520ede = false;
    if ((_0x1d9cf5 & 16) !== 0 && _0x352b3c % 65536 !== 0) {
      return -28;
    }
    if ((_0x1d9cf5 & 32) !== 0) {
      _0xa6491a = _0x5ab15b(65536, _0x208b76);
      if (!_0xa6491a) {
        return -48;
      }
      _0xe1599f(_0xa6491a, 0, _0x208b76);
      _0x520ede = true;
    } else {
      var _0x2e7dc7 = _0x221e83.getStream(_0x4e3cc3);
      if (!_0x2e7dc7) {
        return -8;
      }
      var _0x4d1fb9 = _0x221e83.mmap(_0x2e7dc7, _0x352b3c, _0x208b76, _0x1034f6, _0x4ec56b, _0x1d9cf5);
      _0xa6491a = _0x4d1fb9.ptr;
      _0x520ede = _0x4d1fb9.allocated;
    }
    _0x3eb2e6.mappings[_0xa6491a] = {
      malloc: _0xa6491a,
      len: _0x208b76,
      allocated: _0x520ede,
      fd: _0x4e3cc3,
      prot: _0x4ec56b,
      flags: _0x1d9cf5,
      offset: _0x1034f6
    };
    return _0xa6491a;
  }
  function _0x43ef03(_0x141452, _0x58862d, _0x52b260, _0x24fdf2, _0x202ddb, _0x51bbb3) {
    try {
      return _0x27a009(_0x141452, _0x58862d, _0x52b260, _0x24fdf2, _0x202ddb, _0x51bbb3);
    } catch (_0x477031) {
      if (typeof _0x221e83 === "undefined" || !(_0x477031 instanceof _0x221e83.ErrnoError)) {
        _0xb4b2ae(_0x477031);
      }
      return -_0x477031.errno;
    }
  }
  function _0x502c55(_0x3450e5, _0x16fc89) {
    if ((_0x3450e5 | 0) === -1 || _0x16fc89 === 0) {
      return -28;
    }
    var _0x410fcd = _0x3eb2e6.mappings[_0x3450e5];
    if (!_0x410fcd) {
      return 0;
    }
    if (_0x16fc89 === _0x410fcd.len) {
      var _0x339ec4 = _0x221e83.getStream(_0x410fcd.fd);
      if (_0x339ec4) {
        if (_0x410fcd.prot & 2) {
          _0x3eb2e6.doMsync(_0x3450e5, _0x339ec4, _0x16fc89, _0x410fcd.flags, _0x410fcd.offset);
        }
        _0x221e83.munmap(_0x339ec4);
      }
      _0x3eb2e6.mappings[_0x3450e5] = null;
      if (_0x410fcd.allocated) {
        _0x2b8491(_0x410fcd.malloc);
      }
    }
    return 0;
  }
  function _0x50ea97(_0x3a3b3e, _0x3809cf) {
    try {
      return _0x502c55(_0x3a3b3e, _0x3809cf);
    } catch (_0x3b4af3) {
      if (typeof _0x221e83 === "undefined" || !(_0x3b4af3 instanceof _0x221e83.ErrnoError)) {
        _0xb4b2ae(_0x3b4af3);
      }
      return -_0x3b4af3.errno;
    }
  }
  function _0x40c5d4(_0x4429bc, _0x870990, _0x56f7cb) {
    _0x3eb2e6.varargs = _0x56f7cb;
    try {
      var _0x4319d2 = _0x3eb2e6.getStr(_0x4429bc);
      var _0x191cad = _0x56f7cb ? _0x3eb2e6.get() : 0;
      var _0x23b9d4 = _0x221e83.open(_0x4319d2, _0x870990, _0x191cad);
      return _0x23b9d4.fd;
    } catch (_0x62a65) {
      if (typeof _0x221e83 === "undefined" || !(_0x62a65 instanceof _0x221e83.ErrnoError)) {
        _0xb4b2ae(_0x62a65);
      }
      return -_0x62a65.errno;
    }
  }
  var _0x3c97bd = {
    BUCKET_BUFFER_SIZE: 8192,
    mount: function (_0x3b53d2) {
      return _0x221e83.createNode(null, "/", 16895, 0);
    },
    createPipe: function () {
      var _0x1883f3 = {
        buckets: []
      };
      _0x1883f3.buckets.push({
        buffer: new Uint8Array(_0x3c97bd.BUCKET_BUFFER_SIZE),
        offset: 0,
        roffset: 0
      });
      var _0x4a6725 = _0x3c97bd.nextname();
      var _0x12239b = _0x3c97bd.nextname();
      var _0xa9da4c = _0x221e83.createNode(_0x3c97bd.root, _0x4a6725, 4096, 0);
      var _0xb67ef = _0x221e83.createNode(_0x3c97bd.root, _0x12239b, 4096, 0);
      _0xa9da4c.pipe = _0x1883f3;
      _0xb67ef.pipe = _0x1883f3;
      var _0x249c4e = _0x221e83.createStream({
        path: _0x4a6725,
        node: _0xa9da4c,
        flags: 0,
        seekable: false,
        stream_ops: _0x3c97bd.stream_ops
      });
      _0xa9da4c.stream = _0x249c4e;
      var _0x55a500 = _0x221e83.createStream({
        path: _0x12239b,
        node: _0xb67ef,
        flags: 1,
        seekable: false,
        stream_ops: _0x3c97bd.stream_ops
      });
      _0xb67ef.stream = _0x55a500;
      return {
        readable_fd: _0x249c4e.fd,
        writable_fd: _0x55a500.fd
      };
    },
    stream_ops: {
      poll: function (_0x3b19e5) {
        var _0x2f3723 = _0x3b19e5.node.pipe;
        if ((_0x3b19e5.flags & 2097155) === 1) {
          return 260;
        } else if (_0x2f3723.buckets.length > 0) {
          for (var _0x306bc9 = 0; _0x306bc9 < _0x2f3723.buckets.length; _0x306bc9++) {
            var _0x31752f = _0x2f3723.buckets[_0x306bc9];
            if (_0x31752f.offset - _0x31752f.roffset > 0) {
              return 65;
            }
          }
        }
        return 0;
      },
      ioctl: function (_0x368cb8, _0x55367f, _0x1b8c8a) {
        return 28;
      },
      fsync: function (_0x38055c) {
        return 28;
      },
      read: function (_0x274cdc, _0x14b976, _0x3b22e2, _0x5d9e60, _0x59909c) {
        var _0x2de06a = _0x274cdc.node.pipe;
        var _0x1756a3 = 0;
        for (var _0x114ee5 = 0; _0x114ee5 < _0x2de06a.buckets.length; _0x114ee5++) {
          var _0x26a48d = _0x2de06a.buckets[_0x114ee5];
          _0x1756a3 += _0x26a48d.offset - _0x26a48d.roffset;
        }
        _0x5181b0(_0x14b976 instanceof ArrayBuffer || ArrayBuffer.isView(_0x14b976));
        var _0x524770 = _0x14b976.subarray(_0x3b22e2, _0x3b22e2 + _0x5d9e60);
        if (_0x5d9e60 <= 0) {
          return 0;
        }
        if (_0x1756a3 == 0) {
          throw new _0x221e83.ErrnoError(6);
        }
        var _0x1f3948 = Math.min(_0x1756a3, _0x5d9e60);
        var _0x34f880 = _0x1f3948;
        var _0x17ed70 = 0;
        for (var _0x114ee5 = 0; _0x114ee5 < _0x2de06a.buckets.length; _0x114ee5++) {
          var _0x4f6ee3 = _0x2de06a.buckets[_0x114ee5];
          var _0x3c5bcd = _0x4f6ee3.offset - _0x4f6ee3.roffset;
          if (_0x1f3948 <= _0x3c5bcd) {
            var _0x394f85 = _0x4f6ee3.buffer.subarray(_0x4f6ee3.roffset, _0x4f6ee3.offset);
            if (_0x1f3948 < _0x3c5bcd) {
              _0x394f85 = _0x394f85.subarray(0, _0x1f3948);
              _0x4f6ee3.roffset += _0x1f3948;
            } else {
              _0x17ed70++;
            }
            _0x524770.set(_0x394f85);
            break;
          } else {
            var _0x394f85 = _0x4f6ee3.buffer.subarray(_0x4f6ee3.roffset, _0x4f6ee3.offset);
            _0x524770.set(_0x394f85);
            _0x524770 = _0x524770.subarray(_0x394f85.byteLength);
            _0x1f3948 -= _0x394f85.byteLength;
            _0x17ed70++;
          }
        }
        if (_0x17ed70 && _0x17ed70 == _0x2de06a.buckets.length) {
          _0x17ed70--;
          _0x2de06a.buckets[_0x17ed70].offset = 0;
          _0x2de06a.buckets[_0x17ed70].roffset = 0;
        }
        _0x2de06a.buckets.splice(0, _0x17ed70);
        return _0x34f880;
      },
      write: function (_0x38e25c, _0x12f763, _0x20ffbd, _0x331392, _0x2227d9) {
        var _0x3c1c03 = _0x38e25c.node.pipe;
        _0x5181b0(_0x12f763 instanceof ArrayBuffer || ArrayBuffer.isView(_0x12f763));
        var _0x4ac1de = _0x12f763.subarray(_0x20ffbd, _0x20ffbd + _0x331392);
        var _0x36735b = _0x4ac1de.byteLength;
        if (_0x36735b <= 0) {
          return 0;
        }
        var _0x27ba47 = null;
        if (_0x3c1c03.buckets.length == 0) {
          _0x27ba47 = {
            buffer: new Uint8Array(_0x3c97bd.BUCKET_BUFFER_SIZE),
            offset: 0,
            roffset: 0
          };
          _0x3c1c03.buckets.push(_0x27ba47);
        } else {
          _0x27ba47 = _0x3c1c03.buckets[_0x3c1c03.buckets.length - 1];
        }
        _0x5181b0(_0x27ba47.offset <= _0x3c97bd.BUCKET_BUFFER_SIZE);
        var _0x34d97a = _0x3c97bd.BUCKET_BUFFER_SIZE - _0x27ba47.offset;
        if (_0x34d97a >= _0x36735b) {
          _0x27ba47.buffer.set(_0x4ac1de, _0x27ba47.offset);
          _0x27ba47.offset += _0x36735b;
          return _0x36735b;
        } else if (_0x34d97a > 0) {
          _0x27ba47.buffer.set(_0x4ac1de.subarray(0, _0x34d97a), _0x27ba47.offset);
          _0x27ba47.offset += _0x34d97a;
          _0x4ac1de = _0x4ac1de.subarray(_0x34d97a, _0x4ac1de.byteLength);
        }
        var _0x11f821 = _0x4ac1de.byteLength / _0x3c97bd.BUCKET_BUFFER_SIZE | 0;
        var _0x8deccc = _0x4ac1de.byteLength % _0x3c97bd.BUCKET_BUFFER_SIZE;
        for (var _0x50e785 = 0; _0x50e785 < _0x11f821; _0x50e785++) {
          var _0x7b2598 = {
            buffer: new Uint8Array(_0x3c97bd.BUCKET_BUFFER_SIZE),
            offset: _0x3c97bd.BUCKET_BUFFER_SIZE,
            roffset: 0
          };
          _0x3c1c03.buckets.push(_0x7b2598);
          _0x7b2598.buffer.set(_0x4ac1de.subarray(0, _0x3c97bd.BUCKET_BUFFER_SIZE));
          _0x4ac1de = _0x4ac1de.subarray(_0x3c97bd.BUCKET_BUFFER_SIZE, _0x4ac1de.byteLength);
        }
        if (_0x8deccc > 0) {
          var _0x7b2598 = {
            buffer: new Uint8Array(_0x3c97bd.BUCKET_BUFFER_SIZE),
            offset: _0x4ac1de.byteLength,
            roffset: 0
          };
          _0x3c1c03.buckets.push(_0x7b2598);
          _0x7b2598.buffer.set(_0x4ac1de);
        }
        return _0x36735b;
      },
      close: function (_0x2ba9e9) {
        var _0x2db507 = _0x2ba9e9.node.pipe;
        _0x2db507.buckets = null;
      }
    },
    nextname: function () {
      if (!_0x3c97bd.nextname.current) {
        _0x3c97bd.nextname.current = 0;
      }
      return "pipe[" + _0x3c97bd.nextname.current++ + "]";
    }
  };
  function _0x5d579c(_0x2e1153) {
    try {
      if (_0x2e1153 == 0) {
        throw new _0x221e83.ErrnoError(21);
      }
      var _0x5deb47 = _0x3c97bd.createPipe();
      _0x5cc2c4[_0x2e1153 >> 2] = _0x5deb47.readable_fd;
      _0x5cc2c4[_0x2e1153 + 4 >> 2] = _0x5deb47.writable_fd;
      return 0;
    } catch (_0x58a439) {
      if (typeof _0x221e83 === "undefined" || !(_0x58a439 instanceof _0x221e83.ErrnoError)) {
        _0xb4b2ae(_0x58a439);
      }
      return -_0x58a439.errno;
    }
  }
  function _0x26f4ab(_0x1f905b, _0x274683, _0x1244e7) {
    try {
      var _0x2b8eb7 = 0;
      for (var _0x5e28eb = 0; _0x5e28eb < _0x274683; _0x5e28eb++) {
        var _0x4de3ac = _0x1f905b + _0x5e28eb * 8;
        var _0x46a755 = _0x5cc2c4[_0x4de3ac >> 2];
        var _0x3d66ab = _0x30f41b[_0x4de3ac + 4 >> 1];
        var _0x38a7c1 = 32;
        var _0x375789 = _0x221e83.getStream(_0x46a755);
        if (_0x375789) {
          _0x38a7c1 = _0x3eb2e6.DEFAULT_POLLMASK;
          if (_0x375789.stream_ops.poll) {
            _0x38a7c1 = _0x375789.stream_ops.poll(_0x375789);
          }
        }
        _0x38a7c1 &= _0x3d66ab | 8 | 16;
        if (_0x38a7c1) {
          _0x2b8eb7++;
        }
        _0x30f41b[_0x4de3ac + 6 >> 1] = _0x38a7c1;
      }
      return _0x2b8eb7;
    } catch (_0xceb2cd) {
      if (typeof _0x221e83 === "undefined" || !(_0xceb2cd instanceof _0x221e83.ErrnoError)) {
        _0xb4b2ae(_0xceb2cd);
      }
      return -_0xceb2cd.errno;
    }
  }
  function _0x44b917(_0x384b60, _0x18544e, _0x3549c8) {
    try {
      _0x384b60 = _0x3eb2e6.getStr(_0x384b60);
      return _0x3eb2e6.doReadlink(_0x384b60, _0x18544e, _0x3549c8);
    } catch (_0xd2db4d) {
      if (typeof _0x221e83 === "undefined" || !(_0xd2db4d instanceof _0x221e83.ErrnoError)) {
        _0xb4b2ae(_0xd2db4d);
      }
      return -_0xd2db4d.errno;
    }
  }
  function _0x42ffe1(_0x2037a5, _0x4fad94, _0x32c75f, _0x39c8f1, _0x18d331, _0xb194c0) {
    try {
      var _0x3fe209 = _0x57728b(_0x2037a5);
      var _0x16300f = _0x3fe209.sock_ops.recvmsg(_0x3fe209, _0x32c75f);
      if (!_0x16300f) {
        return 0;
      }
      if (_0x18d331) {
        var _0x33583e = _0xd32a86(_0x18d331, _0x3fe209.family, _0x10e357.lookup_name(_0x16300f.addr), _0x16300f.port, _0xb194c0);
      }
      _0x4f26b1.set(_0x16300f.buffer, _0x4fad94);
      return _0x16300f.buffer.byteLength;
    } catch (_0x2ae608) {
      if (typeof _0x221e83 === "undefined" || !(_0x2ae608 instanceof _0x221e83.ErrnoError)) {
        _0xb4b2ae(_0x2ae608);
      }
      return -_0x2ae608.errno;
    }
  }
  function _0x334786(_0x372084, _0x30b9b7, _0x23e03f) {
    try {
      var _0x35d9bd = _0x57728b(_0x372084);
      var _0x4c51f3 = _0x5cc2c4[_0x30b9b7 + 8 >> 2];
      var _0x36e94d = _0x5cc2c4[_0x30b9b7 + 12 >> 2];
      var _0x5d2b69 = 0;
      for (var _0x319cd0 = 0; _0x319cd0 < _0x36e94d; _0x319cd0++) {
        _0x5d2b69 += _0x5cc2c4[_0x4c51f3 + (_0x319cd0 * 8 + 4) >> 2];
      }
      var _0x2a7fac = _0x35d9bd.sock_ops.recvmsg(_0x35d9bd, _0x5d2b69);
      if (!_0x2a7fac) {
        return 0;
      }
      var _0x4c99aa = _0x5cc2c4[_0x30b9b7 >> 2];
      if (_0x4c99aa) {
        var _0x42ca2c = _0xd32a86(_0x4c99aa, _0x35d9bd.family, _0x10e357.lookup_name(_0x2a7fac.addr), _0x2a7fac.port);
      }
      var _0x36b3c5 = 0;
      var _0x51d13b = _0x2a7fac.buffer.byteLength;
      for (var _0x319cd0 = 0; _0x51d13b > 0 && _0x319cd0 < _0x36e94d; _0x319cd0++) {
        var _0x3f479f = _0x5cc2c4[_0x4c51f3 + (_0x319cd0 * 8 + 0) >> 2];
        var _0x10db22 = _0x5cc2c4[_0x4c51f3 + (_0x319cd0 * 8 + 4) >> 2];
        if (!_0x10db22) {
          continue;
        }
        var _0x29b636 = Math.min(_0x10db22, _0x51d13b);
        var _0x53fea6 = _0x2a7fac.buffer.subarray(_0x36b3c5, _0x36b3c5 + _0x29b636);
        _0x4f26b1.set(_0x53fea6, _0x3f479f + _0x36b3c5);
        _0x36b3c5 += _0x29b636;
        _0x51d13b -= _0x29b636;
      }
      return _0x36b3c5;
    } catch (_0x2bc620) {
      if (typeof _0x221e83 === "undefined" || !(_0x2bc620 instanceof _0x221e83.ErrnoError)) {
        _0xb4b2ae(_0x2bc620);
      }
      return -_0x2bc620.errno;
    }
  }
  function _0x5e869c(_0x56c650, _0x215002) {
    try {
      _0x56c650 = _0x3eb2e6.getStr(_0x56c650);
      _0x215002 = _0x3eb2e6.getStr(_0x215002);
      _0x221e83.rename(_0x56c650, _0x215002);
      return 0;
    } catch (_0x1d0392) {
      if (typeof _0x221e83 === "undefined" || !(_0x1d0392 instanceof _0x221e83.ErrnoError)) {
        _0xb4b2ae(_0x1d0392);
      }
      return -_0x1d0392.errno;
    }
  }
  function _0xbab2f0(_0x344eaa) {
    try {
      _0x344eaa = _0x3eb2e6.getStr(_0x344eaa);
      _0x221e83.rmdir(_0x344eaa);
      return 0;
    } catch (_0x9f6085) {
      if (typeof _0x221e83 === "undefined" || !(_0x9f6085 instanceof _0x221e83.ErrnoError)) {
        _0xb4b2ae(_0x9f6085);
      }
      return -_0x9f6085.errno;
    }
  }
  function _0x320243(_0x461384, _0x4b434e, _0x208af7) {
    try {
      var _0x4470ee = _0x57728b(_0x461384);
      var _0x34a8a7 = _0x5cc2c4[_0x4b434e + 8 >> 2];
      var _0x445510 = _0x5cc2c4[_0x4b434e + 12 >> 2];
      var _0x105597;
      var _0x5a7b98;
      var _0x5b3176 = _0x5cc2c4[_0x4b434e >> 2];
      var _0xac2e50 = _0x5cc2c4[_0x4b434e + 4 >> 2];
      if (_0x5b3176) {
        var _0xdd7fdb = _0x1d1689(_0x5b3176, _0xac2e50);
        if (_0xdd7fdb.errno) {
          return -_0xdd7fdb.errno;
        }
        _0x5a7b98 = _0xdd7fdb.port;
        _0x105597 = _0x10e357.lookup_addr(_0xdd7fdb.addr) || _0xdd7fdb.addr;
      }
      var _0xa06177 = 0;
      for (var _0x250f2f = 0; _0x250f2f < _0x445510; _0x250f2f++) {
        _0xa06177 += _0x5cc2c4[_0x34a8a7 + (_0x250f2f * 8 + 4) >> 2];
      }
      var _0x12ce87 = new Uint8Array(_0xa06177);
      var _0x120fde = 0;
      for (var _0x250f2f = 0; _0x250f2f < _0x445510; _0x250f2f++) {
        var _0x550b00 = _0x5cc2c4[_0x34a8a7 + (_0x250f2f * 8 + 0) >> 2];
        var _0x6ae870 = _0x5cc2c4[_0x34a8a7 + (_0x250f2f * 8 + 4) >> 2];
        for (var _0x5df576 = 0; _0x5df576 < _0x6ae870; _0x5df576++) {
          _0x12ce87[_0x120fde++] = _0xb3d98[_0x550b00 + _0x5df576 >> 0];
        }
      }
      return _0x4470ee.sock_ops.sendmsg(_0x4470ee, _0x12ce87, 0, _0xa06177, _0x105597, _0x5a7b98);
    } catch (_0x3d2d52) {
      if (typeof _0x221e83 === "undefined" || !(_0x3d2d52 instanceof _0x221e83.ErrnoError)) {
        _0xb4b2ae(_0x3d2d52);
      }
      return -_0x3d2d52.errno;
    }
  }
  function _0x46ee00(_0xb33d4f, _0x5de894, _0x165dcf, _0x5e3204, _0x1002e2, _0x17a57d) {
    try {
      var _0x321bd5 = _0x57728b(_0xb33d4f);
      var _0x54dbcb = _0x2d447c(_0x1002e2, _0x17a57d, true);
      if (!_0x54dbcb) {
        return _0x221e83.write(_0x321bd5.stream, _0xb3d98, _0x5de894, _0x165dcf);
      } else {
        return _0x321bd5.sock_ops.sendmsg(_0x321bd5, _0xb3d98, _0x5de894, _0x165dcf, _0x54dbcb.addr, _0x54dbcb.port);
      }
    } catch (_0x1af32a) {
      if (typeof _0x221e83 === "undefined" || !(_0x1af32a instanceof _0x221e83.ErrnoError)) {
        _0xb4b2ae(_0x1af32a);
      }
      return -_0x1af32a.errno;
    }
  }
  function _0x127b51(_0x4b60c7) {
    try {
      return -50;
    } catch (_0x1aaa59) {
      if (typeof _0x221e83 === "undefined" || !(_0x1aaa59 instanceof _0x221e83.ErrnoError)) {
        _0xb4b2ae(_0x1aaa59);
      }
      return -_0x1aaa59.errno;
    }
  }
  function _0x3e9d5a(_0x1fc647, _0x4c9b27) {
    try {
      _0x57728b(_0x1fc647);
      return -52;
    } catch (_0xa06cb2) {
      if (typeof _0x221e83 === "undefined" || !(_0xa06cb2 instanceof _0x221e83.ErrnoError)) {
        _0xb4b2ae(_0xa06cb2);
      }
      return -_0xa06cb2.errno;
    }
  }
  function _0x1a33f9(_0x160c32, _0x5a9725, _0x363588) {
    try {
      var _0x231994 = _0x22ae67.createSocket(_0x160c32, _0x5a9725, _0x363588);
      return _0x231994.stream.fd;
    } catch (_0x51b388) {
      if (typeof _0x221e83 === "undefined" || !(_0x51b388 instanceof _0x221e83.ErrnoError)) {
        _0xb4b2ae(_0x51b388);
      }
      return -_0x51b388.errno;
    }
  }
  function _0x392a95(_0x37b4c9, _0x532ddf) {
    try {
      _0x37b4c9 = _0x3eb2e6.getStr(_0x37b4c9);
      return _0x3eb2e6.doStat(_0x221e83.stat, _0x37b4c9, _0x532ddf);
    } catch (_0x2e2c00) {
      if (typeof _0x221e83 === "undefined" || !(_0x2e2c00 instanceof _0x221e83.ErrnoError)) {
        _0xb4b2ae(_0x2e2c00);
      }
      return -_0x2e2c00.errno;
    }
  }
  function _0x50cf44(_0x302a00, _0x5bcbaf, _0x309e4c) {
    try {
      _0x302a00 = _0x3eb2e6.getStr(_0x302a00);
      _0x5cc2c4[_0x309e4c + 4 >> 2] = 4096;
      _0x5cc2c4[_0x309e4c + 40 >> 2] = 4096;
      _0x5cc2c4[_0x309e4c + 8 >> 2] = 1000000;
      _0x5cc2c4[_0x309e4c + 12 >> 2] = 500000;
      _0x5cc2c4[_0x309e4c + 16 >> 2] = 500000;
      _0x5cc2c4[_0x309e4c + 20 >> 2] = _0x221e83.nextInode;
      _0x5cc2c4[_0x309e4c + 24 >> 2] = 1000000;
      _0x5cc2c4[_0x309e4c + 28 >> 2] = 42;
      _0x5cc2c4[_0x309e4c + 44 >> 2] = 2;
      _0x5cc2c4[_0x309e4c + 36 >> 2] = 255;
      return 0;
    } catch (_0x5d839b) {
      if (typeof _0x221e83 === "undefined" || !(_0x5d839b instanceof _0x221e83.ErrnoError)) {
        _0xb4b2ae(_0x5d839b);
      }
      return -_0x5d839b.errno;
    }
  }
  function _0x39e710(_0xf10d87, _0x19e3cb) {
    try {
      _0xf10d87 = _0x3eb2e6.getStr(_0xf10d87);
      _0x19e3cb = _0x3eb2e6.getStr(_0x19e3cb);
      _0x221e83.symlink(_0xf10d87, _0x19e3cb);
      return 0;
    } catch (_0x33fb28) {
      if (typeof _0x221e83 === "undefined" || !(_0x33fb28 instanceof _0x221e83.ErrnoError)) {
        _0xb4b2ae(_0x33fb28);
      }
      return -_0x33fb28.errno;
    }
  }
  function _0x55bed3(_0x2da753, _0x49992e, _0x5a99a4, _0x5935c2) {
    try {
      _0x2da753 = _0x3eb2e6.getStr(_0x2da753);
      var _0x44d811 = _0x3eb2e6.get64(_0x5a99a4, _0x5935c2);
      _0x221e83.truncate(_0x2da753, _0x44d811);
      return 0;
    } catch (_0x3f2348) {
      if (typeof _0x221e83 === "undefined" || !(_0x3f2348 instanceof _0x221e83.ErrnoError)) {
        _0xb4b2ae(_0x3f2348);
      }
      return -_0x3f2348.errno;
    }
  }
  function _0x1701cc(_0x272d1d) {
    try {
      if (!_0x272d1d) {
        return -21;
      }
      var _0x2045e4 = {
        __size__: 390,
        domainname: 325,
        machine: 260,
        nodename: 65,
        release: 130,
        sysname: 0,
        version: 195
      };
      function _0x653c5c(_0x17b5eb, _0x1585f9) {
        var _0x2c8ef1 = _0x2045e4[_0x17b5eb];
        _0x26daf7(_0x1585f9, _0x272d1d + _0x2c8ef1);
      }
      _0x653c5c("sysname", "Emscripten");
      _0x653c5c("nodename", "emscripten");
      _0x653c5c("release", "1.0");
      _0x653c5c("version", "#1");
      _0x653c5c("machine", "wasm32");
      return 0;
    } catch (_0x3f90ab) {
      if (typeof _0x221e83 === "undefined" || !(_0x3f90ab instanceof _0x221e83.ErrnoError)) {
        _0xb4b2ae(_0x3f90ab);
      }
      return -_0x3f90ab.errno;
    }
  }
  function _0x2c40df(_0x5bb6e6) {
    try {
      _0x5bb6e6 = _0x3eb2e6.getStr(_0x5bb6e6);
      _0x221e83.unlink(_0x5bb6e6);
      return 0;
    } catch (_0x5a2ebb) {
      if (typeof _0x221e83 === "undefined" || !(_0x5a2ebb instanceof _0x221e83.ErrnoError)) {
        _0xb4b2ae(_0x5a2ebb);
      }
      return -_0x5a2ebb.errno;
    }
  }
  function _0x22ecde(_0x2b3b79, _0x19f572, _0x3cdd8d, _0x3e4b26) {
    try {
      _0x19f572 = _0x3eb2e6.getStr(_0x19f572);
      _0x19f572 = _0x3eb2e6.calculateAt(_0x2b3b79, _0x19f572, true);
      var _0x23296b = _0x5cc2c4[_0x3cdd8d >> 2];
      var _0x52586a = _0x5cc2c4[_0x3cdd8d + 4 >> 2];
      var _0x3e7825 = _0x23296b * 1000 + _0x52586a / 1000000;
      _0x3cdd8d += 8;
      _0x23296b = _0x5cc2c4[_0x3cdd8d >> 2];
      _0x52586a = _0x5cc2c4[_0x3cdd8d + 4 >> 2];
      var _0x3e811f = _0x23296b * 1000 + _0x52586a / 1000000;
      _0x221e83.utime(_0x19f572, _0x3e7825, _0x3e811f);
      return 0;
    } catch (_0x28c088) {
      if (typeof _0x221e83 === "undefined" || !(_0x28c088 instanceof _0x221e83.ErrnoError)) {
        _0xb4b2ae(_0x28c088);
      }
      return -_0x28c088.errno;
    }
  }
  function _0x58ef57() {
    _0xb4b2ae();
  }
  function _0x2d5f2e() {
    if (_0x2d5f2e.start === undefined) {
      _0x2d5f2e.start = Date.now();
    }
    return (Date.now() - _0x2d5f2e.start) * 1000 | 0;
  }
  function _0x3722c3() {
    if (_0x23eb2f) {
      return 1;
    } else if (typeof dateNow !== "undefined") {
      return 1000;
    } else {
      return 1000;
    }
  }
  var _0x537c5a = true;
  function _0x367d78(_0x1f2775, _0x23dbdb) {
    var _0x5eb075;
    if (_0x1f2775 === 0) {
      _0x5eb075 = 1000000;
    } else if (_0x1f2775 === 1 && _0x537c5a) {
      _0x5eb075 = _0x3722c3();
    } else {
      _0x3559eb(28);
      return -1;
    }
    _0x5cc2c4[_0x23dbdb >> 2] = _0x5eb075 / 1000000000 | 0;
    _0x5cc2c4[_0x23dbdb + 4 >> 2] = _0x5eb075;
    return 0;
  }
  var _0x423d24;
  if (_0x23eb2f) {
    _0x423d24 = function () {
      var _0x315346 = process.hrtime();
      return _0x315346[0] * 1000 + _0x315346[1] / 1000000;
    };
  } else if (typeof dateNow !== "undefined") {
    _0x423d24 = dateNow;
  } else {
    _0x423d24 = function () {
      return performance.now();
    };
  }
  function _0x199e6d(_0x24e04c, _0x2e9b95) {
    var _0x361451;
    if (_0x24e04c === 0) {
      _0x361451 = Date.now();
    } else if ((_0x24e04c === 1 || _0x24e04c === 4) && _0x537c5a) {
      _0x361451 = _0x423d24();
    } else {
      _0x3559eb(28);
      return -1;
    }
    _0x5cc2c4[_0x2e9b95 >> 2] = _0x361451 / 1000 | 0;
    _0x5cc2c4[_0x2e9b95 + 4 >> 2] = _0x361451 % 1000 * 1000 * 1000 | 0;
    return 0;
  }
  function _0x44269f(_0x3ae8ee, _0x554566) {
    return _0x3ae8ee - _0x554566;
  }
  function _0x3e280e(_0x5e4774) {}
  function _0x5af7b5() {
    return 0;
  }
  function _0x67c3b2(_0x27779c, _0x399215) {}
  function _0x18bc8d(_0x16f6b6, _0x287133) {
    return 0;
  }
  var _0x43e066 = [];
  function _0x21bdba(_0x10806e, _0x3613b1) {
    _0x43e066.length = 0;
    var _0x3ab500;
    _0x3613b1 >>= 2;
    while (_0x3ab500 = _0x4f26b1[_0x10806e++]) {
      var _0x4ba6db = _0x3ab500 < 105;
      if (_0x4ba6db && _0x3613b1 & 1) {
        _0x3613b1++;
      }
      _0x43e066.push(_0x4ba6db ? _0x5b41dc[_0x3613b1++ >> 1] : _0x5cc2c4[_0x3613b1]);
      ++_0x3613b1;
    }
    return _0x43e066;
  }
  function _0x160e3a(_0x1ab7b4, _0x46b3ce, _0x14bad1, _0x34dccc) {
    var _0x13c447 = _0x21bdba(_0x46b3ce, _0x14bad1);
    return _0x244594[_0x1ab7b4].apply(null, _0x13c447);
  }
  function _0x216c68(_0x1d85f0, _0x42b20b, _0x4de421) {
    return _0x160e3a(_0x1d85f0, _0x42b20b, _0x4de421, 1);
  }
  function _0xc4039d(_0x533c1d, _0x396d8f) {
    _0x4954dc.mainLoop.timingMode = _0x533c1d;
    _0x4954dc.mainLoop.timingValue = _0x396d8f;
    if (!_0x4954dc.mainLoop.func) {
      return 1;
    }
    if (!_0x4954dc.mainLoop.running) {
      _0x4954dc.mainLoop.running = true;
    }
    if (_0x533c1d == 0) {
      _0x4954dc.mainLoop.scheduler = function _0x1a70a5() {
        var _0x2b40a2 = Math.max(0, _0x4954dc.mainLoop.tickStartTime + _0x396d8f - _0x423d24()) | 0;
        setTimeout(_0x4954dc.mainLoop.runner, _0x2b40a2);
      };
      _0x4954dc.mainLoop.method = "timeout";
    } else if (_0x533c1d == 1) {
      _0x4954dc.mainLoop.scheduler = function _0x3171f7() {
        _0x4954dc.requestAnimationFrame(_0x4954dc.mainLoop.runner);
      };
      _0x4954dc.mainLoop.method = "rAF";
    } else if (_0x533c1d == 2) {
      if (typeof setImmediate === "undefined") {
        var _0x27ae6c = [];
        var _0x4888ff = "setimmediate";
        function _0x9d9dfb(_0x145ce8) {
          if (_0x145ce8.data === _0x4888ff || _0x145ce8.data.target === _0x4888ff) {
            _0x145ce8.stopPropagation();
            _0x27ae6c.shift()();
          }
        }
        addEventListener("message", _0x9d9dfb, true);
        setImmediate = function _0x6b75b0(_0x30073e) {
          _0x27ae6c.push(_0x30073e);
          if (_0x433b11) {
            if (_0x3e078a.setImmediates === undefined) {
              _0x3e078a.setImmediates = [];
            }
            _0x3e078a.setImmediates.push(_0x30073e);
            postMessage({
              target: _0x4888ff
            });
          } else {
            postMessage(_0x4888ff, "*");
          }
        };
      }
      _0x4954dc.mainLoop.scheduler = function _0x26df47() {
        setImmediate(_0x4954dc.mainLoop.runner);
      };
      _0x4954dc.mainLoop.method = "immediate";
    }
    return 0;
  }
  function _0x32c952(_0x2773e6) {
    _0x55e1b2(_0x2773e6);
  }
  function _0x2426fd() {
    if (!_0x578875()) {
      try {
        _0x32c952(_0x1cd3c3);
      } catch (_0x54006a) {
        if (_0x54006a instanceof _0x295f08) {
          return;
        }
        throw _0x54006a;
      }
    }
  }
  function _0x1de3b1(_0xa8ac4d, _0x1d384d, _0x36a9a9, _0xc5bbe4, _0xb2f0a5) {
    _0x5181b0(!_0x4954dc.mainLoop.func, "emscripten_set_main_loop: there can only be one main loop function at once: call emscripten_cancel_main_loop to cancel the previous one before setting a new one with different parameters.");
    _0x4954dc.mainLoop.func = _0xa8ac4d;
    _0x4954dc.mainLoop.arg = _0xc5bbe4;
    var _0x1f73ce = _0x4954dc.mainLoop.currentlyRunningMainloop;
    function _0x1c1de3() {
      if (_0x1f73ce < _0x4954dc.mainLoop.currentlyRunningMainloop) {
        _0x2426fd();
        return false;
      }
      return true;
    }
    _0x4954dc.mainLoop.running = false;
    _0x4954dc.mainLoop.runner = function _0x3e6480() {
      if (_0x591d6a) {
        return;
      }
      if (_0x4954dc.mainLoop.queue.length > 0) {
        var _0x2a42d7 = Date.now();
        var _0x278094 = _0x4954dc.mainLoop.queue.shift();
        _0x278094.func(_0x278094.arg);
        if (_0x4954dc.mainLoop.remainingBlockers) {
          var _0x35011b = _0x4954dc.mainLoop.remainingBlockers;
          var _0x3f410e = _0x35011b % 1 == 0 ? _0x35011b - 1 : Math.floor(_0x35011b);
          if (_0x278094.counted) {
            _0x4954dc.mainLoop.remainingBlockers = _0x3f410e;
          } else {
            _0x3f410e = _0x3f410e + 0.5;
            _0x4954dc.mainLoop.remainingBlockers = (_0x35011b * 8 + _0x3f410e) / 9;
          }
        }
        console.log("main loop blocker \"" + _0x278094.name + "\" took " + (Date.now() - _0x2a42d7) + " ms");
        _0x4954dc.mainLoop.updateStatus();
        if (!_0x1c1de3()) {
          return;
        }
        setTimeout(_0x4954dc.mainLoop.runner, 0);
        return;
      }
      if (!_0x1c1de3()) {
        return;
      }
      _0x4954dc.mainLoop.currentFrameNumber = _0x4954dc.mainLoop.currentFrameNumber + 1 | 0;
      if (_0x4954dc.mainLoop.timingMode == 1 && _0x4954dc.mainLoop.timingValue > 1 && _0x4954dc.mainLoop.currentFrameNumber % _0x4954dc.mainLoop.timingValue != 0) {
        _0x4954dc.mainLoop.scheduler();
        return;
      } else if (_0x4954dc.mainLoop.timingMode == 0) {
        _0x4954dc.mainLoop.tickStartTime = _0x423d24();
      }
      _0x17d2b3.newRenderingFrameStarted();
      _0x4954dc.mainLoop.runIter(_0xa8ac4d);
      if (!_0x1c1de3()) {
        return;
      }
      if (typeof SDL === "object" && SDL.audio && SDL.audio.queueNewAudioData) {
        SDL.audio.queueNewAudioData();
      }
      _0x4954dc.mainLoop.scheduler();
    };
    if (!_0xb2f0a5) {
      if (_0x1d384d && _0x1d384d > 0) {
        _0xc4039d(0, 1000 / _0x1d384d);
      } else {
        _0xc4039d(1, 1);
      }
      _0x4954dc.mainLoop.scheduler();
    }
    if (_0x36a9a9) {
      throw "unwind";
    }
  }
  function _0x5c668d(_0x3781e9, _0x1e6dd2) {
    if (_0x591d6a) {
      return;
    }
    if (_0x1e6dd2) {
      _0x3781e9();
      return;
    }
    try {
      _0x3781e9();
    } catch (_0x18c603) {
      if (_0x18c603 instanceof _0x295f08) {
        return;
      } else if (_0x18c603 !== "unwind") {
        if (_0x18c603 && typeof _0x18c603 === "object" && _0x18c603.stack) {
          _0x516167("exception thrown: " + [_0x18c603, _0x18c603.stack]);
        }
        throw _0x18c603;
      }
    }
  }
  var _0x4954dc = {
    mainLoop: {
      running: false,
      scheduler: null,
      method: "",
      currentlyRunningMainloop: 0,
      func: null,
      arg: 0,
      timingMode: 0,
      timingValue: 0,
      currentFrameNumber: 0,
      queue: [],
      pause: function () {
        _0x4954dc.mainLoop.scheduler = null;
        _0x4954dc.mainLoop.currentlyRunningMainloop++;
      },
      resume: function () {
        _0x4954dc.mainLoop.currentlyRunningMainloop++;
        var _0x57733c = _0x4954dc.mainLoop.timingMode;
        var _0x363273 = _0x4954dc.mainLoop.timingValue;
        var _0x46b7c0 = _0x4954dc.mainLoop.func;
        _0x4954dc.mainLoop.func = null;
        _0x1de3b1(_0x46b7c0, 0, false, _0x4954dc.mainLoop.arg, true);
        _0xc4039d(_0x57733c, _0x363273);
        _0x4954dc.mainLoop.scheduler();
      },
      updateStatus: function () {
        if (_0x3e078a.setStatus) {
          var _0x24a786 = _0x3e078a.statusMessage || "Please wait...";
          var _0x532add = _0x4954dc.mainLoop.remainingBlockers;
          var _0x183089 = _0x4954dc.mainLoop.expectedBlockers;
          if (_0x532add) {
            if (_0x532add < _0x183089) {
              _0x3e078a.setStatus(_0x24a786 + " (" + (_0x183089 - _0x532add) + "/" + _0x183089 + ")");
            } else {
              _0x3e078a.setStatus(_0x24a786);
            }
          } else {
            _0x3e078a.setStatus("");
          }
        }
      },
      runIter: function (_0x3289a0) {
        if (_0x591d6a) {
          return;
        }
        if (_0x3e078a.preMainLoop) {
          var _0x5e70b4 = _0x3e078a.preMainLoop();
          if (_0x5e70b4 === false) {
            return;
          }
        }
        _0x5c668d(_0x3289a0);
        if (_0x3e078a.postMainLoop) {
          _0x3e078a.postMainLoop();
        }
      }
    },
    isFullscreen: false,
    pointerLock: false,
    moduleContextCreatedCallbacks: [],
    workers: [],
    init: function () {
      if (!_0x3e078a.preloadPlugins) {
        _0x3e078a.preloadPlugins = [];
      }
      if (_0x4954dc.initted) {
        return;
      }
      _0x4954dc.initted = true;
      try {
        new Blob();
        _0x4954dc.hasBlobConstructor = true;
      } catch (_0x196dac) {
        _0x4954dc.hasBlobConstructor = false;
        console.log("warning: no blob constructor, cannot create blobs with mimetypes");
      }
      _0x4954dc.BlobBuilder = typeof MozBlobBuilder != "undefined" ? MozBlobBuilder : typeof WebKitBlobBuilder != "undefined" ? WebKitBlobBuilder : !_0x4954dc.hasBlobConstructor ? console.log("warning: no BlobBuilder") : null;
      _0x4954dc.URLObject = typeof window != "undefined" ? window.URL ? window.URL : window.webkitURL : undefined;
      if (!_0x3e078a.noImageDecoding && typeof _0x4954dc.URLObject === "undefined") {
        console.log("warning: Browser does not support creating object URLs. Built-in browser image decoding will not be available.");
        _0x3e078a.noImageDecoding = true;
      }
      var _0x3a4cc4 = {};
      _0x3a4cc4.canHandle = function _0x3499d7(_0x2e2de0) {
        return !_0x3e078a.noImageDecoding && /\.(jpg|jpeg|png|bmp)$/i.test(_0x2e2de0);
      };
      _0x3a4cc4.handle = function _0x40fcf5(_0x49c4f4, _0x119973, _0x538a2f, _0x34614a) {
        var _0x2cbfd1 = null;
        if (_0x4954dc.hasBlobConstructor) {
          try {
            _0x2cbfd1 = new Blob([_0x49c4f4], {
              type: _0x4954dc.getMimetype(_0x119973)
            });
            if (_0x2cbfd1.size !== _0x49c4f4.length) {
              _0x2cbfd1 = new Blob([new Uint8Array(_0x49c4f4).buffer], {
                type: _0x4954dc.getMimetype(_0x119973)
              });
            }
          } catch (_0x4b2e2c) {
            _0x8cebcb("Blob constructor present but fails: " + _0x4b2e2c + "; falling back to blob builder");
          }
        }
        if (!_0x2cbfd1) {
          var _0x51b6a0 = new _0x4954dc.BlobBuilder();
          _0x51b6a0.append(new Uint8Array(_0x49c4f4).buffer);
          _0x2cbfd1 = _0x51b6a0.getBlob();
        }
        var _0x4bcb84 = _0x4954dc.URLObject.createObjectURL(_0x2cbfd1);
        var _0x437e14 = new Image();
        _0x437e14.onload = function _0x2d8cfa() {
          _0x5181b0(_0x437e14.complete, "Image " + _0x119973 + " could not be decoded");
          var _0x224658 = document.createElement("canvas");
          _0x224658.width = _0x437e14.width;
          _0x224658.height = _0x437e14.height;
          var _0x1cfc92 = _0x224658.getContext("2d");
          _0x1cfc92.drawImage(_0x437e14, 0, 0);
          _0x3e078a.preloadedImages[_0x119973] = _0x224658;
          _0x4954dc.URLObject.revokeObjectURL(_0x4bcb84);
          if (_0x538a2f) {
            _0x538a2f(_0x49c4f4);
          }
        };
        _0x437e14.onerror = function _0x228874(_0x2c02dd) {
          console.log("Image " + _0x4bcb84 + " could not be decoded");
          if (_0x34614a) {
            _0x34614a();
          }
        };
        _0x437e14.src = _0x4bcb84;
      };
      _0x3e078a.preloadPlugins.push(_0x3a4cc4);
      var _0x48bc30 = {};
      _0x48bc30.canHandle = function _0x2906d6(_0x47384b) {
        return !_0x3e078a.noAudioDecoding && _0x47384b.substr(-4) in {
          ".ogg": 1,
          ".wav": 1,
          ".mp3": 1
        };
      };
      _0x48bc30.handle = function _0x222aa9(_0x5b6d39, _0x50b136, _0x3d193f, _0x2382b9) {
        var _0x19c071 = false;
        function _0x402fa2(_0x1389c8) {
          if (_0x19c071) {
            return;
          }
          _0x19c071 = true;
          _0x3e078a.preloadedAudios[_0x50b136] = _0x1389c8;
          if (_0x3d193f) {
            _0x3d193f(_0x5b6d39);
          }
        }
        function _0x4ff74c() {
          if (_0x19c071) {
            return;
          }
          _0x19c071 = true;
          _0x3e078a.preloadedAudios[_0x50b136] = new Audio();
          if (_0x2382b9) {
            _0x2382b9();
          }
        }
        if (_0x4954dc.hasBlobConstructor) {
          try {
            var _0x4a9c51 = new Blob([_0x5b6d39], {
              type: _0x4954dc.getMimetype(_0x50b136)
            });
          } catch (_0x115340) {
            return _0x4ff74c();
          }
          var _0x5edd24 = _0x4954dc.URLObject.createObjectURL(_0x4a9c51);
          var _0x522215 = new Audio();
          _0x522215.addEventListener("canplaythrough", function () {
            _0x402fa2(_0x522215);
          }, false);
          _0x522215.onerror = function _0x43747f(_0x476042) {
            if (_0x19c071) {
              return;
            }
            console.log("warning: browser could not fully decode audio " + _0x50b136 + ", trying slower base64 approach");
            function _0x2513b8(_0x3a1acd) {
              var _0x21bd96 = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
              var _0x25ddd6 = "=";
              var _0x155082 = "";
              var _0x59e0b2 = 0;
              var _0x68bfb1 = 0;
              for (var _0x5476d9 = 0; _0x5476d9 < _0x3a1acd.length; _0x5476d9++) {
                _0x59e0b2 = _0x59e0b2 << 8 | _0x3a1acd[_0x5476d9];
                _0x68bfb1 += 8;
                while (_0x68bfb1 >= 6) {
                  var _0x24450e = _0x59e0b2 >> _0x68bfb1 - 6 & 63;
                  _0x68bfb1 -= 6;
                  _0x155082 += _0x21bd96[_0x24450e];
                }
              }
              if (_0x68bfb1 == 2) {
                _0x155082 += _0x21bd96[(_0x59e0b2 & 3) << 4];
                _0x155082 += _0x25ddd6 + _0x25ddd6;
              } else if (_0x68bfb1 == 4) {
                _0x155082 += _0x21bd96[(_0x59e0b2 & 15) << 2];
                _0x155082 += _0x25ddd6;
              }
              return _0x155082;
            }
            _0x522215.src = "data:audio/x-" + _0x50b136.substr(-3) + ";base64," + _0x2513b8(_0x5b6d39);
            _0x402fa2(_0x522215);
          };
          _0x522215.src = _0x5edd24;
          _0x4954dc.safeSetTimeout(function () {
            _0x402fa2(_0x522215);
          }, 10000);
        } else {
          return _0x4ff74c();
        }
      };
      _0x3e078a.preloadPlugins.push(_0x48bc30);
      function _0x2d7dce() {
        _0x4954dc.pointerLock = document.pointerLockElement === _0x3e078a.canvas || document.mozPointerLockElement === _0x3e078a.canvas || document.webkitPointerLockElement === _0x3e078a.canvas || document.msPointerLockElement === _0x3e078a.canvas;
      }
      var _0x5135f7 = _0x3e078a.canvas;
      if (_0x5135f7) {
        _0x5135f7.requestPointerLock = _0x5135f7.requestPointerLock || _0x5135f7.mozRequestPointerLock || _0x5135f7.webkitRequestPointerLock || _0x5135f7.msRequestPointerLock || function () {};
        _0x5135f7.exitPointerLock = document.exitPointerLock || document.mozExitPointerLock || document.webkitExitPointerLock || document.msExitPointerLock || function () {};
        _0x5135f7.exitPointerLock = _0x5135f7.exitPointerLock.bind(document);
        document.addEventListener("pointerlockchange", _0x2d7dce, false);
        document.addEventListener("mozpointerlockchange", _0x2d7dce, false);
        document.addEventListener("webkitpointerlockchange", _0x2d7dce, false);
        document.addEventListener("mspointerlockchange", _0x2d7dce, false);
        if (_0x3e078a.elementPointerLock) {
          _0x5135f7.addEventListener("click", function (_0x375933) {
            if (!_0x4954dc.pointerLock && _0x3e078a.canvas.requestPointerLock) {
              _0x3e078a.canvas.requestPointerLock();
              _0x375933.preventDefault();
            }
          }, false);
        }
      }
    },
    createContext: function (_0x11a0f4, _0x37b1a9, _0x88fd23, _0x30f99d) {
      if (_0x37b1a9 && _0x3e078a.ctx && _0x11a0f4 == _0x3e078a.canvas) {
        return _0x3e078a.ctx;
      }
      var _0x5ff079;
      var _0x484928;
      if (_0x37b1a9) {
        var _0x2e5b62 = {
          antialias: false,
          alpha: false,
          majorVersion: typeof WebGL2RenderingContext !== "undefined" ? 2 : 1
        };
        if (_0x30f99d) {
          for (var _0x3d7d69 in _0x30f99d) {
            _0x2e5b62[_0x3d7d69] = _0x30f99d[_0x3d7d69];
          }
        }
        if (typeof _0x17d2b3 !== "undefined") {
          _0x484928 = _0x17d2b3.createContext(_0x11a0f4, _0x2e5b62);
          if (_0x484928) {
            _0x5ff079 = _0x17d2b3.getContext(_0x484928).GLctx;
          }
        }
      } else {
        _0x5ff079 = _0x11a0f4.getContext("2d");
      }
      if (!_0x5ff079) {
        return null;
      }
      if (_0x88fd23) {
        if (!_0x37b1a9) {
          _0x5181b0(typeof _0x283457 === "undefined", "cannot set in module if GLctx is used, but we are a non-GL context that would replace it");
        }
        _0x3e078a.ctx = _0x5ff079;
        if (_0x37b1a9) {
          _0x17d2b3.makeContextCurrent(_0x484928);
        }
        _0x3e078a.useWebGL = _0x37b1a9;
        _0x4954dc.moduleContextCreatedCallbacks.forEach(function (_0x29bfae) {
          _0x29bfae();
        });
        _0x4954dc.init();
      }
      return _0x5ff079;
    },
    destroyContext: function (_0x2342a4, _0x4618f2, _0x500952) {},
    fullscreenHandlersInstalled: false,
    lockPointer: undefined,
    resizeCanvas: undefined,
    requestFullscreen: function (_0xea61c5, _0x125cdb) {
      _0x4954dc.lockPointer = _0xea61c5;
      _0x4954dc.resizeCanvas = _0x125cdb;
      if (typeof _0x4954dc.lockPointer === "undefined") {
        _0x4954dc.lockPointer = true;
      }
      if (typeof _0x4954dc.resizeCanvas === "undefined") {
        _0x4954dc.resizeCanvas = false;
      }
      var _0x459342 = _0x3e078a.canvas;
      function _0x517d6e() {
        _0x4954dc.isFullscreen = false;
        var _0x43cfa2 = _0x459342.parentNode;
        if ((document.fullscreenElement || document.mozFullScreenElement || document.msFullscreenElement || document.webkitFullscreenElement || document.webkitCurrentFullScreenElement) === _0x43cfa2) {
          _0x459342.exitFullscreen = _0x4954dc.exitFullscreen;
          if (_0x4954dc.lockPointer) {
            _0x459342.requestPointerLock();
          }
          _0x4954dc.isFullscreen = true;
          if (_0x4954dc.resizeCanvas) {
            _0x4954dc.setFullscreenCanvasSize();
          } else {
            _0x4954dc.updateCanvasDimensions(_0x459342);
          }
        } else {
          _0x43cfa2.parentNode.insertBefore(_0x459342, _0x43cfa2);
          _0x43cfa2.parentNode.removeChild(_0x43cfa2);
          if (_0x4954dc.resizeCanvas) {
            _0x4954dc.setWindowedCanvasSize();
          } else {
            _0x4954dc.updateCanvasDimensions(_0x459342);
          }
        }
        if (_0x3e078a.onFullScreen) {
          _0x3e078a.onFullScreen(_0x4954dc.isFullscreen);
        }
        if (_0x3e078a.onFullscreen) {
          _0x3e078a.onFullscreen(_0x4954dc.isFullscreen);
        }
      }
      if (!_0x4954dc.fullscreenHandlersInstalled) {
        _0x4954dc.fullscreenHandlersInstalled = true;
        document.addEventListener("fullscreenchange", _0x517d6e, false);
        document.addEventListener("mozfullscreenchange", _0x517d6e, false);
        document.addEventListener("webkitfullscreenchange", _0x517d6e, false);
        document.addEventListener("MSFullscreenChange", _0x517d6e, false);
      }
      var _0x22b1d3 = document.createElement("div");
      _0x459342.parentNode.insertBefore(_0x22b1d3, _0x459342);
      _0x22b1d3.appendChild(_0x459342);
      _0x22b1d3.requestFullscreen = _0x22b1d3.requestFullscreen || _0x22b1d3.mozRequestFullScreen || _0x22b1d3.msRequestFullscreen || (_0x22b1d3.webkitRequestFullscreen ? function () {
        _0x22b1d3.webkitRequestFullscreen(Element.ALLOW_KEYBOARD_INPUT);
      } : null) || (_0x22b1d3.webkitRequestFullScreen ? function () {
        _0x22b1d3.webkitRequestFullScreen(Element.ALLOW_KEYBOARD_INPUT);
      } : null);
      _0x22b1d3.requestFullscreen();
    },
    exitFullscreen: function () {
      if (!_0x4954dc.isFullscreen) {
        return false;
      }
      var _0x2bc1e1 = document.exitFullscreen || document.cancelFullScreen || document.mozCancelFullScreen || document.msExitFullscreen || document.webkitCancelFullScreen || function () {};
      _0x2bc1e1.apply(document, []);
      return true;
    },
    nextRAF: 0,
    fakeRequestAnimationFrame: function (_0x1ae338) {
      var _0x140f49 = Date.now();
      if (_0x4954dc.nextRAF === 0) {
        _0x4954dc.nextRAF = _0x140f49 + 1000 / 60;
      } else {
        while (_0x140f49 + 2 >= _0x4954dc.nextRAF) {
          _0x4954dc.nextRAF += 1000 / 60;
        }
      }
      var _0x175329 = Math.max(_0x4954dc.nextRAF - _0x140f49, 0);
      setTimeout(_0x1ae338, _0x175329);
    },
    requestAnimationFrame: function (_0xc82773) {
      if (typeof requestAnimationFrame === "function") {
        requestAnimationFrame(_0xc82773);
        return;
      }
      var _0x8161ee = _0x4954dc.fakeRequestAnimationFrame;
      _0x8161ee(_0xc82773);
    },
    safeRequestAnimationFrame: function (_0x3a43ae) {
      return _0x4954dc.requestAnimationFrame(function () {
        _0x5c668d(_0x3a43ae);
      });
    },
    safeSetTimeout: function (_0x1e0feb, _0x114f3b) {
      return setTimeout(function () {
        _0x5c668d(_0x1e0feb);
      }, _0x114f3b);
    },
    getMimetype: function (_0x148348) {
      return {
        jpg: "image/jpeg",
        jpeg: "image/jpeg",
        png: "image/png",
        bmp: "image/bmp",
        ogg: "audio/ogg",
        wav: "audio/wav",
        mp3: "audio/mpeg"
      }[_0x148348.substr(_0x148348.lastIndexOf(".") + 1)];
    },
    getUserMedia: function (_0x54e668) {
      if (!window.getUserMedia) {
        window.getUserMedia = navigator.getUserMedia || navigator.mozGetUserMedia;
      }
      window.getUserMedia(_0x54e668);
    },
    getMovementX: function (_0x32c438) {
      return _0x32c438.movementX || _0x32c438.mozMovementX || _0x32c438.webkitMovementX || 0;
    },
    getMovementY: function (_0x1e40f7) {
      return _0x1e40f7.movementY || _0x1e40f7.mozMovementY || _0x1e40f7.webkitMovementY || 0;
    },
    getMouseWheelDelta: function (_0x4c2c49) {
      var _0x3ef142 = 0;
      switch (_0x4c2c49.type) {
        case "DOMMouseScroll":
          _0x3ef142 = _0x4c2c49.detail / 3;
          break;
        case "mousewheel":
          _0x3ef142 = _0x4c2c49.wheelDelta / 120;
          break;
        case "wheel":
          _0x3ef142 = _0x4c2c49.deltaY;
          switch (_0x4c2c49.deltaMode) {
            case 0:
              _0x3ef142 /= 100;
              break;
            case 1:
              _0x3ef142 /= 3;
              break;
            case 2:
              _0x3ef142 *= 80;
              break;
            default:
              throw "unrecognized mouse wheel delta mode: " + _0x4c2c49.deltaMode;
          }
          break;
        default:
          throw "unrecognized mouse wheel event: " + _0x4c2c49.type;
      }
      return _0x3ef142;
    },
    mouseX: 0,
    mouseY: 0,
    mouseMovementX: 0,
    mouseMovementY: 0,
    touches: {},
    lastTouches: {},
    calculateMouseEvent: function (_0x5d1f49) {
      if (_0x4954dc.pointerLock) {
        if (_0x5d1f49.type != "mousemove" && "mozMovementX" in _0x5d1f49) {
          _0x4954dc.mouseMovementX = _0x4954dc.mouseMovementY = 0;
        } else {
          _0x4954dc.mouseMovementX = _0x4954dc.getMovementX(_0x5d1f49);
          _0x4954dc.mouseMovementY = _0x4954dc.getMovementY(_0x5d1f49);
        }
        if (typeof SDL != "undefined") {
          _0x4954dc.mouseX = SDL.mouseX + _0x4954dc.mouseMovementX;
          _0x4954dc.mouseY = SDL.mouseY + _0x4954dc.mouseMovementY;
        } else {
          _0x4954dc.mouseX += _0x4954dc.mouseMovementX;
          _0x4954dc.mouseY += _0x4954dc.mouseMovementY;
        }
      } else {
        var _0x5ed4d0 = _0x3e078a.canvas.getBoundingClientRect();
        var _0xf09ef6 = _0x3e078a.canvas.width;
        var _0x26e35f = _0x3e078a.canvas.height;
        var _0x45c371 = typeof window.scrollX !== "undefined" ? window.scrollX : window.pageXOffset;
        var _0x4ed898 = typeof window.scrollY !== "undefined" ? window.scrollY : window.pageYOffset;
        if (_0x5d1f49.type === "touchstart" || _0x5d1f49.type === "touchend" || _0x5d1f49.type === "touchmove") {
          var _0x707a82 = _0x5d1f49.touch;
          if (_0x707a82 === undefined) {
            return;
          }
          var _0x5a4dde = _0x707a82.pageX - (_0x45c371 + _0x5ed4d0.left);
          var _0x5c110f = _0x707a82.pageY - (_0x4ed898 + _0x5ed4d0.top);
          _0x5a4dde = _0x5a4dde * (_0xf09ef6 / _0x5ed4d0.width);
          _0x5c110f = _0x5c110f * (_0x26e35f / _0x5ed4d0.height);
          var _0x102f08 = {
            x: _0x5a4dde,
            y: _0x5c110f
          };
          if (_0x5d1f49.type === "touchstart") {
            _0x4954dc.lastTouches[_0x707a82.identifier] = _0x102f08;
            _0x4954dc.touches[_0x707a82.identifier] = _0x102f08;
          } else if (_0x5d1f49.type === "touchend" || _0x5d1f49.type === "touchmove") {
            var _0x47146d = _0x4954dc.touches[_0x707a82.identifier];
            if (!_0x47146d) {
              _0x47146d = _0x102f08;
            }
            _0x4954dc.lastTouches[_0x707a82.identifier] = _0x47146d;
            _0x4954dc.touches[_0x707a82.identifier] = _0x102f08;
          }
          return;
        }
        var _0x324004 = _0x5d1f49.pageX - (_0x45c371 + _0x5ed4d0.left);
        var _0x573635 = _0x5d1f49.pageY - (_0x4ed898 + _0x5ed4d0.top);
        _0x324004 = _0x324004 * (_0xf09ef6 / _0x5ed4d0.width);
        _0x573635 = _0x573635 * (_0x26e35f / _0x5ed4d0.height);
        _0x4954dc.mouseMovementX = _0x324004 - _0x4954dc.mouseX;
        _0x4954dc.mouseMovementY = _0x573635 - _0x4954dc.mouseY;
        _0x4954dc.mouseX = _0x324004;
        _0x4954dc.mouseY = _0x573635;
      }
    },
    asyncLoad: function (_0x345a35, _0x50267e, _0x721e04, _0x2d9913) {
      var _0x3d53ab = !_0x2d9913 ? _0x1f40d2("al " + _0x345a35) : "";
      _0xdb3350(_0x345a35, function (_0x1c1810) {
        _0x5181b0(_0x1c1810, "Loading data file \"" + _0x345a35 + "\" failed (no arrayBuffer).");
        _0x50267e(new Uint8Array(_0x1c1810));
        if (_0x3d53ab) {
          _0x1a1081(_0x3d53ab);
        }
      }, function (_0x557ba3) {
        if (_0x721e04) {
          _0x721e04();
        } else {
          throw "Loading data file \"" + _0x345a35 + "\" failed.";
        }
      });
      if (_0x3d53ab) {
        _0x1c2630(_0x3d53ab);
      }
    },
    resizeListeners: [],
    updateResizeListeners: function () {
      var _0x9b8419 = _0x3e078a.canvas;
      _0x4954dc.resizeListeners.forEach(function (_0x3a7d84) {
        _0x3a7d84(_0x9b8419.width, _0x9b8419.height);
      });
    },
    setCanvasSize: function (_0x3997e7, _0x1b3570, _0x1c76a5) {
      var _0x49b177 = _0x3e078a.canvas;
      _0x4954dc.updateCanvasDimensions(_0x49b177, _0x3997e7, _0x1b3570);
      if (!_0x1c76a5) {
        _0x4954dc.updateResizeListeners();
      }
    },
    windowedWidth: 0,
    windowedHeight: 0,
    setFullscreenCanvasSize: function () {
      if (typeof SDL != "undefined") {
        var _0x276e5e = _0x52253e[SDL.screen >> 2];
        _0x276e5e = _0x276e5e | 8388608;
        _0x5cc2c4[SDL.screen >> 2] = _0x276e5e;
      }
      _0x4954dc.updateCanvasDimensions(_0x3e078a.canvas);
      _0x4954dc.updateResizeListeners();
    },
    setWindowedCanvasSize: function () {
      if (typeof SDL != "undefined") {
        var _0x5b4f54 = _0x52253e[SDL.screen >> 2];
        _0x5b4f54 = _0x5b4f54 & ~8388608;
        _0x5cc2c4[SDL.screen >> 2] = _0x5b4f54;
      }
      _0x4954dc.updateCanvasDimensions(_0x3e078a.canvas);
      _0x4954dc.updateResizeListeners();
    },
    updateCanvasDimensions: function (_0x50ba8f, _0x260975, _0x5d8197) {
      if (_0x260975 && _0x5d8197) {
        _0x50ba8f.widthNative = _0x260975;
        _0x50ba8f.heightNative = _0x5d8197;
      } else {
        _0x260975 = _0x50ba8f.widthNative;
        _0x5d8197 = _0x50ba8f.heightNative;
      }
      var _0x5b56b7 = _0x260975;
      var _0x23d466 = _0x5d8197;
      if (_0x3e078a.forcedAspectRatio && _0x3e078a.forcedAspectRatio > 0) {
        if (_0x5b56b7 / _0x23d466 < _0x3e078a.forcedAspectRatio) {
          _0x5b56b7 = Math.round(_0x23d466 * _0x3e078a.forcedAspectRatio);
        } else {
          _0x23d466 = Math.round(_0x5b56b7 / _0x3e078a.forcedAspectRatio);
        }
      }
      if ((document.fullscreenElement || document.mozFullScreenElement || document.msFullscreenElement || document.webkitFullscreenElement || document.webkitCurrentFullScreenElement) === _0x50ba8f.parentNode && typeof screen != "undefined") {
        var _0x43fbd6 = Math.min(screen.width / _0x5b56b7, screen.height / _0x23d466);
        _0x5b56b7 = Math.round(_0x5b56b7 * _0x43fbd6);
        _0x23d466 = Math.round(_0x23d466 * _0x43fbd6);
      }
      if (_0x4954dc.resizeCanvas) {
        if (_0x50ba8f.width != _0x5b56b7) {
          _0x50ba8f.width = _0x5b56b7;
        }
        if (_0x50ba8f.height != _0x23d466) {
          _0x50ba8f.height = _0x23d466;
        }
        if (typeof _0x50ba8f.style != "undefined") {
          _0x50ba8f.style.removeProperty("width");
          _0x50ba8f.style.removeProperty("height");
        }
      } else {
        if (_0x50ba8f.width != _0x260975) {
          _0x50ba8f.width = _0x260975;
        }
        if (_0x50ba8f.height != _0x5d8197) {
          _0x50ba8f.height = _0x5d8197;
        }
        if (typeof _0x50ba8f.style != "undefined") {
          if (_0x5b56b7 != _0x260975 || _0x23d466 != _0x5d8197) {
            _0x50ba8f.style.setProperty("width", _0x5b56b7 + "px", "important");
            _0x50ba8f.style.setProperty("height", _0x23d466 + "px", "important");
          } else {
            _0x50ba8f.style.removeProperty("width");
            _0x50ba8f.style.removeProperty("height");
          }
        }
      }
    },
    wgetRequests: {},
    nextWgetRequestHandle: 0,
    getNextWgetRequestHandle: function () {
      var _0x2fa65e = _0x4954dc.nextWgetRequestHandle;
      _0x4954dc.nextWgetRequestHandle++;
      return _0x2fa65e;
    }
  };
  function _0xfbc0d9() {
    _0x4954dc.mainLoop.pause();
    _0x4954dc.mainLoop.func = null;
  }
  function _0x4784c2(_0x142010) {
    clearInterval(_0x142010);
  }
  var _0x55d55a = {
    inEventHandler: 0,
    removeAllEventListeners: function () {
      for (var _0x1ccd75 = _0x55d55a.eventHandlers.length - 1; _0x1ccd75 >= 0; --_0x1ccd75) {
        _0x55d55a._removeHandler(_0x1ccd75);
      }
      _0x55d55a.eventHandlers = [];
      _0x55d55a.deferredCalls = [];
    },
    registerRemoveEventListeners: function () {
      if (!_0x55d55a.removeEventListenersRegistered) {
        _0x14606e.push(_0x55d55a.removeAllEventListeners);
        _0x55d55a.removeEventListenersRegistered = true;
      }
    },
    deferredCalls: [],
    deferCall: function (_0x5b8686, _0x4f728f, _0x4de809) {
      function _0x2d78cc(_0x5f54c9, _0x44ad40) {
        if (_0x5f54c9.length != _0x44ad40.length) {
          return false;
        }
        for (var _0x10e56c in _0x5f54c9) {
          if (_0x5f54c9[_0x10e56c] != _0x44ad40[_0x10e56c]) {
            return false;
          }
        }
        return true;
      }
      for (var _0x527cf3 in _0x55d55a.deferredCalls) {
        var _0x1fbb7d = _0x55d55a.deferredCalls[_0x527cf3];
        if (_0x1fbb7d.targetFunction == _0x5b8686 && _0x2d78cc(_0x1fbb7d.argsList, _0x4de809)) {
          return;
        }
      }
      _0x55d55a.deferredCalls.push({
        targetFunction: _0x5b8686,
        precedence: _0x4f728f,
        argsList: _0x4de809
      });
      _0x55d55a.deferredCalls.sort(function (_0x54732d, _0x5ddae4) {
        return _0x54732d.precedence < _0x5ddae4.precedence;
      });
    },
    removeDeferredCalls: function (_0x1b2c4b) {
      for (var _0x1de233 = 0; _0x1de233 < _0x55d55a.deferredCalls.length; ++_0x1de233) {
        if (_0x55d55a.deferredCalls[_0x1de233].targetFunction == _0x1b2c4b) {
          _0x55d55a.deferredCalls.splice(_0x1de233, 1);
          --_0x1de233;
        }
      }
    },
    canPerformEventHandlerRequests: function () {
      return _0x55d55a.inEventHandler && _0x55d55a.currentEventHandler.allowsDeferredCalls;
    },
    runDeferredCalls: function () {
      if (!_0x55d55a.canPerformEventHandlerRequests()) {
        return;
      }
      for (var _0x52d894 = 0; _0x52d894 < _0x55d55a.deferredCalls.length; ++_0x52d894) {
        var _0x13d77e = _0x55d55a.deferredCalls[_0x52d894];
        _0x55d55a.deferredCalls.splice(_0x52d894, 1);
        --_0x52d894;
        _0x13d77e.targetFunction.apply(null, _0x13d77e.argsList);
      }
    },
    eventHandlers: [],
    removeAllHandlersOnTarget: function (_0x7243db, _0x208e71) {
      for (var _0x5404d5 = 0; _0x5404d5 < _0x55d55a.eventHandlers.length; ++_0x5404d5) {
        if (_0x55d55a.eventHandlers[_0x5404d5].target == _0x7243db && (!_0x208e71 || _0x208e71 == _0x55d55a.eventHandlers[_0x5404d5].eventTypeString)) {
          _0x55d55a._removeHandler(_0x5404d5--);
        }
      }
    },
    _removeHandler: function (_0x11db7b) {
      var _0xec3473 = _0x55d55a.eventHandlers[_0x11db7b];
      _0xec3473.target.removeEventListener(_0xec3473.eventTypeString, _0xec3473.eventListenerFunc, _0xec3473.useCapture);
      _0x55d55a.eventHandlers.splice(_0x11db7b, 1);
    },
    registerOrRemoveHandler: function (_0x56f914) {
      var _0x34ec5f = function _0x16c838(_0x544065) {
        ++_0x55d55a.inEventHandler;
        _0x55d55a.currentEventHandler = _0x56f914;
        _0x55d55a.runDeferredCalls();
        _0x56f914.handlerFunc(_0x544065);
        _0x55d55a.runDeferredCalls();
        --_0x55d55a.inEventHandler;
      };
      if (_0x56f914.callbackfunc) {
        _0x56f914.eventListenerFunc = _0x34ec5f;
        _0x56f914.target.addEventListener(_0x56f914.eventTypeString, _0x34ec5f, _0x56f914.useCapture);
        _0x55d55a.eventHandlers.push(_0x56f914);
        _0x55d55a.registerRemoveEventListeners();
      } else {
        for (var _0x26a237 = 0; _0x26a237 < _0x55d55a.eventHandlers.length; ++_0x26a237) {
          if (_0x55d55a.eventHandlers[_0x26a237].target == _0x56f914.target && _0x55d55a.eventHandlers[_0x26a237].eventTypeString == _0x56f914.eventTypeString) {
            _0x55d55a._removeHandler(_0x26a237--);
          }
        }
      }
    },
    getNodeNameForTarget: function (_0x5d0a64) {
      if (!_0x5d0a64) {
        return "";
      }
      if (_0x5d0a64 == window) {
        return "#window";
      }
      if (_0x5d0a64 == screen) {
        return "#screen";
      }
      if (_0x5d0a64 && _0x5d0a64.nodeName) {
        return _0x5d0a64.nodeName;
      } else {
        return "";
      }
    },
    fullscreenEnabled: function () {
      return document.fullscreenEnabled || document.webkitFullscreenEnabled;
    }
  };
  var _0x43e93f = {};
  function _0xc20cf4(_0x58ad16) {
    if (_0x58ad16 > 2) {
      return _0x3f3179(_0x58ad16);
    } else {
      return _0x58ad16;
    }
  }
  var _0x36c237 = [0, typeof document !== "undefined" ? document : 0, typeof window !== "undefined" ? window : 0];
  function _0x199b5c(_0x18d21e) {
    _0x18d21e = _0xc20cf4(_0x18d21e);
    var _0x50bdeb = _0x36c237[_0x18d21e] || (typeof document !== "undefined" ? document.querySelector(_0x18d21e) : undefined);
    return _0x50bdeb;
  }
  function _0xf4f750(_0x3d2275) {
    return _0x199b5c(_0x3d2275);
  }
  function _0x4ec033(_0x2f9935, _0x32fcb7, _0x4a0b99) {
    var _0x270ce8 = _0xf4f750(_0x2f9935);
    if (!_0x270ce8) {
      return -4;
    }
    _0x5cc2c4[_0x32fcb7 >> 2] = _0x270ce8.width;
    _0x5cc2c4[_0x4a0b99 >> 2] = _0x270ce8.height;
  }
  function _0x8b7d7f(_0xad9559) {
    var _0x5bc0b5 = _0x5ebf8c();
    var _0x4171e6 = _0x42f156(8);
    var _0x33dd09 = _0x4171e6 + 4;
    var _0x4bc5fa = _0x42f156(_0xad9559.id.length + 1);
    _0x53c85c(_0xad9559.id, _0x4bc5fa, _0xad9559.id.length + 1);
    var _0x16667e = _0x4ec033(_0x4bc5fa, _0x4171e6, _0x33dd09);
    var _0x5c5fac = [_0x5cc2c4[_0x4171e6 >> 2], _0x5cc2c4[_0x33dd09 >> 2]];
    _0x4c4e79(_0x5bc0b5);
    return _0x5c5fac;
  }
  function _0x794846(_0x374d88, _0x498fdf, _0xc89f23) {
    var _0x5d91f8 = _0xf4f750(_0x374d88);
    if (!_0x5d91f8) {
      return -4;
    }
    _0x5d91f8.width = _0x498fdf;
    _0x5d91f8.height = _0xc89f23;
    return 0;
  }
  function _0x503a01(_0x142ba3, _0x26cf05, _0x4b5575) {
    if (!_0x142ba3.controlTransferredOffscreen) {
      _0x142ba3.width = _0x26cf05;
      _0x142ba3.height = _0x4b5575;
    } else {
      var _0x33ad98 = _0x5ebf8c();
      var _0x3ac964 = _0x42f156(_0x142ba3.id.length + 1);
      _0x53c85c(_0x142ba3.id, _0x3ac964, _0x142ba3.id.length + 1);
      _0x794846(_0x3ac964, _0x26cf05, _0x4b5575);
      _0x4c4e79(_0x33ad98);
    }
  }
  function _0x54168c(_0x11d82c) {
    var _0x501f3c = _0x8b7d7f(_0x11d82c);
    var _0x57b5c9 = _0x501f3c[0];
    var _0x29688c = _0x501f3c[1];
    var _0x76b36d = _0x11d82c.style.width;
    var _0x156955 = _0x11d82c.style.height;
    var _0x501f66 = _0x11d82c.style.backgroundColor;
    var _0x1fb896 = document.body.style.backgroundColor;
    var _0x212546 = _0x11d82c.style.paddingLeft;
    var _0x4368b0 = _0x11d82c.style.paddingRight;
    var _0x524a38 = _0x11d82c.style.paddingTop;
    var _0x2c9ad0 = _0x11d82c.style.paddingBottom;
    var _0x24f945 = _0x11d82c.style.marginLeft;
    var _0x1d36b6 = _0x11d82c.style.marginRight;
    var _0x47220f = _0x11d82c.style.marginTop;
    var _0x2655b6 = _0x11d82c.style.marginBottom;
    var _0x2106d6 = document.body.style.margin;
    var _0x4ca17b = document.documentElement.style.overflow;
    var _0x49188e = document.body.scroll;
    var _0x4b17a6 = _0x11d82c.style.imageRendering;
    function _0xa170ea() {
      var _0x7920bd = document.fullscreenElement || document.webkitFullscreenElement || document.msFullscreenElement;
      if (!_0x7920bd) {
        document.removeEventListener("fullscreenchange", _0xa170ea);
        document.removeEventListener("webkitfullscreenchange", _0xa170ea);
        _0x503a01(_0x11d82c, _0x57b5c9, _0x29688c);
        _0x11d82c.style.width = _0x76b36d;
        _0x11d82c.style.height = _0x156955;
        _0x11d82c.style.backgroundColor = _0x501f66;
        if (!_0x1fb896) {
          document.body.style.backgroundColor = "white";
        }
        document.body.style.backgroundColor = _0x1fb896;
        _0x11d82c.style.paddingLeft = _0x212546;
        _0x11d82c.style.paddingRight = _0x4368b0;
        _0x11d82c.style.paddingTop = _0x524a38;
        _0x11d82c.style.paddingBottom = _0x2c9ad0;
        _0x11d82c.style.marginLeft = _0x24f945;
        _0x11d82c.style.marginRight = _0x1d36b6;
        _0x11d82c.style.marginTop = _0x47220f;
        _0x11d82c.style.marginBottom = _0x2655b6;
        document.body.style.margin = _0x2106d6;
        document.documentElement.style.overflow = _0x4ca17b;
        document.body.scroll = _0x49188e;
        _0x11d82c.style.imageRendering = _0x4b17a6;
        if (_0x11d82c.GLctxObject) {
          _0x11d82c.GLctxObject.GLctx.viewport(0, 0, _0x57b5c9, _0x29688c);
        }
        if (_0x43e93f.canvasResizedCallback) {
          (function (_0x487a68, _0x5147be, _0xa41861) {
            return _0x1b1167.apply(null, [_0x43e93f.canvasResizedCallback, _0x487a68, _0x5147be, _0xa41861]);
          })(37, 0, _0x43e93f.canvasResizedCallbackUserData);
        }
      }
    }
    document.addEventListener("fullscreenchange", _0xa170ea);
    document.addEventListener("webkitfullscreenchange", _0xa170ea);
    return _0xa170ea;
  }
  function _0x26a08e(_0x4e0ef2, _0x5ed570, _0x36f84e) {
    _0x4e0ef2.style.paddingLeft = _0x4e0ef2.style.paddingRight = _0x36f84e + "px";
    _0x4e0ef2.style.paddingTop = _0x4e0ef2.style.paddingBottom = _0x5ed570 + "px";
  }
  function _0x151914(_0x2f625c) {
    if (_0x36c237.indexOf(_0x2f625c) < 0) {
      return _0x2f625c.getBoundingClientRect();
    } else {
      return {
        left: 0,
        top: 0
      };
    }
  }
  function _0x28162d(_0x4c578a, _0x45eb85) {
    var _0x4e679b = _0x54168c(_0x4c578a);
    var _0x339005 = _0x45eb85.softFullscreen ? innerWidth : screen.width;
    var _0x3775b1 = _0x45eb85.softFullscreen ? innerHeight : screen.height;
    var _0x516cef = _0x151914(_0x4c578a);
    var _0x3e69bc = _0x516cef.width;
    var _0x4fb6bb = _0x516cef.height;
    var _0x3efe6e = _0x8b7d7f(_0x4c578a);
    var _0x484524 = _0x3efe6e[0];
    var _0x25df02 = _0x3efe6e[1];
    if (_0x45eb85.scaleMode == 3) {
      _0x26a08e(_0x4c578a, (_0x3775b1 - _0x4fb6bb) / 2, (_0x339005 - _0x3e69bc) / 2);
      _0x339005 = _0x3e69bc;
      _0x3775b1 = _0x4fb6bb;
    } else if (_0x45eb85.scaleMode == 2) {
      if (_0x339005 * _0x25df02 < _0x484524 * _0x3775b1) {
        var _0x3bc4ed = _0x25df02 * _0x339005 / _0x484524;
        _0x26a08e(_0x4c578a, (_0x3775b1 - _0x3bc4ed) / 2, 0);
        _0x3775b1 = _0x3bc4ed;
      } else {
        var _0x71de70 = _0x484524 * _0x3775b1 / _0x25df02;
        _0x26a08e(_0x4c578a, 0, (_0x339005 - _0x71de70) / 2);
        _0x339005 = _0x71de70;
      }
    }
    if (!_0x4c578a.style.backgroundColor) {
      _0x4c578a.style.backgroundColor = "black";
    }
    if (!document.body.style.backgroundColor) {
      document.body.style.backgroundColor = "black";
    }
    _0x4c578a.style.width = _0x339005 + "px";
    _0x4c578a.style.height = _0x3775b1 + "px";
    if (_0x45eb85.filteringMode == 1) {
      _0x4c578a.style.imageRendering = "optimizeSpeed";
      _0x4c578a.style.imageRendering = "-moz-crisp-edges";
      _0x4c578a.style.imageRendering = "-o-crisp-edges";
      _0x4c578a.style.imageRendering = "-webkit-optimize-contrast";
      _0x4c578a.style.imageRendering = "optimize-contrast";
      _0x4c578a.style.imageRendering = "crisp-edges";
      _0x4c578a.style.imageRendering = "pixelated";
    }
    var _0x29c9a6 = _0x45eb85.canvasResolutionScaleMode == 2 ? devicePixelRatio : 1;
    if (_0x45eb85.canvasResolutionScaleMode != 0) {
      var _0x35fbbe = _0x339005 * _0x29c9a6 | 0;
      var _0x4cac10 = _0x3775b1 * _0x29c9a6 | 0;
      _0x503a01(_0x4c578a, _0x35fbbe, _0x4cac10);
      if (_0x4c578a.GLctxObject) {
        _0x4c578a.GLctxObject.GLctx.viewport(0, 0, _0x35fbbe, _0x4cac10);
      }
    }
    return _0x4e679b;
  }
  function _0x5b8c90(_0x2cbf6c, _0x33b4de) {
    if (_0x33b4de.scaleMode != 0 || _0x33b4de.canvasResolutionScaleMode != 0) {
      _0x28162d(_0x2cbf6c, _0x33b4de);
    }
    if (_0x2cbf6c.requestFullscreen) {
      _0x2cbf6c.requestFullscreen();
    } else if (_0x2cbf6c.webkitRequestFullscreen) {
      _0x2cbf6c.webkitRequestFullscreen(Element.ALLOW_KEYBOARD_INPUT);
    } else if (_0x55d55a.fullscreenEnabled()) {
      return -3;
    } else {
      return -1;
    }
    _0x43e93f = _0x33b4de;
    if (_0x33b4de.canvasResizedCallback) {
      (function (_0x34d702, _0x22a265, _0x3c28c5) {
        return _0x1b1167.apply(null, [_0x33b4de.canvasResizedCallback, _0x34d702, _0x22a265, _0x3c28c5]);
      })(37, 0, _0x33b4de.canvasResizedCallbackUserData);
    }
    return 0;
  }
  function _0x3f8480() {
    if (!_0x55d55a.fullscreenEnabled()) {
      return -1;
    }
    _0x55d55a.removeDeferredCalls(_0x5b8c90);
    var _0x2f9905 = _0x36c237[1];
    if (_0x2f9905.exitFullscreen) {
      if (_0x2f9905.fullscreenElement) {
        _0x2f9905.exitFullscreen();
      }
    } else if (_0x2f9905.webkitExitFullscreen) {
      if (_0x2f9905.webkitFullscreenElement) {
        _0x2f9905.webkitExitFullscreen();
      }
    } else {
      return -1;
    }
    return 0;
  }
  function _0x350130(_0xaad523) {
    if (_0xaad523.requestPointerLock) {
      _0xaad523.requestPointerLock();
    } else if (_0xaad523.msRequestPointerLock) {
      _0xaad523.msRequestPointerLock();
    } else if (document.body.requestPointerLock || document.body.msRequestPointerLock) {
      return -3;
    } else {
      return -1;
    }
    return 0;
  }
  function _0x5556da() {
    _0x55d55a.removeDeferredCalls(_0x350130);
    if (document.exitPointerLock) {
      document.exitPointerLock();
    } else if (document.msExitPointerLock) {
      document.msExitPointerLock();
    } else {
      return -1;
    }
    return 0;
  }
  function _0x4426f2(_0x2a76fa) {
    var _0x4cb970 = document.fullscreenElement || document.mozFullScreenElement || document.webkitFullscreenElement || document.msFullscreenElement;
    var _0x3e2cec = !!_0x4cb970;
    _0x5cc2c4[_0x2a76fa >> 2] = _0x3e2cec;
    _0x5cc2c4[_0x2a76fa + 4 >> 2] = _0x55d55a.fullscreenEnabled();
    var _0x3a59b5 = _0x3e2cec ? _0x4cb970 : _0x55d55a.previousFullscreenElement;
    var _0x1f9d97 = _0x55d55a.getNodeNameForTarget(_0x3a59b5);
    var _0x13b9e6 = _0x3a59b5 && _0x3a59b5.id ? _0x3a59b5.id : "";
    _0x53c85c(_0x1f9d97, _0x2a76fa + 8, 128);
    _0x53c85c(_0x13b9e6, _0x2a76fa + 136, 128);
    _0x5cc2c4[_0x2a76fa + 264 >> 2] = _0x3a59b5 ? _0x3a59b5.clientWidth : 0;
    _0x5cc2c4[_0x2a76fa + 268 >> 2] = _0x3a59b5 ? _0x3a59b5.clientHeight : 0;
    _0x5cc2c4[_0x2a76fa + 272 >> 2] = screen.width;
    _0x5cc2c4[_0x2a76fa + 276 >> 2] = screen.height;
    if (_0x3e2cec) {
      _0x55d55a.previousFullscreenElement = _0x4cb970;
    }
  }
  function _0x274646(_0xf20f20) {
    if (!_0x55d55a.fullscreenEnabled()) {
      return -1;
    }
    _0x4426f2(_0xf20f20);
    return 0;
  }
  function _0x1a02e0(_0x2f8953, _0x5dc03d) {
    _0x5b41dc[_0x2f8953 >> 3] = _0x5dc03d.timestamp;
    for (var _0x20c103 = 0; _0x20c103 < _0x5dc03d.axes.length; ++_0x20c103) {
      _0x5b41dc[_0x2f8953 + _0x20c103 * 8 + 16 >> 3] = _0x5dc03d.axes[_0x20c103];
    }
    for (var _0x20c103 = 0; _0x20c103 < _0x5dc03d.buttons.length; ++_0x20c103) {
      if (typeof _0x5dc03d.buttons[_0x20c103] === "object") {
        _0x5b41dc[_0x2f8953 + _0x20c103 * 8 + 528 >> 3] = _0x5dc03d.buttons[_0x20c103].value;
      } else {
        _0x5b41dc[_0x2f8953 + _0x20c103 * 8 + 528 >> 3] = _0x5dc03d.buttons[_0x20c103];
      }
    }
    for (var _0x20c103 = 0; _0x20c103 < _0x5dc03d.buttons.length; ++_0x20c103) {
      if (typeof _0x5dc03d.buttons[_0x20c103] === "object") {
        _0x5cc2c4[_0x2f8953 + _0x20c103 * 4 + 1040 >> 2] = _0x5dc03d.buttons[_0x20c103].pressed;
      } else {
        _0x5cc2c4[_0x2f8953 + _0x20c103 * 4 + 1040 >> 2] = _0x5dc03d.buttons[_0x20c103] == 1;
      }
    }
    _0x5cc2c4[_0x2f8953 + 1296 >> 2] = _0x5dc03d.connected;
    _0x5cc2c4[_0x2f8953 + 1300 >> 2] = _0x5dc03d.index;
    _0x5cc2c4[_0x2f8953 + 8 >> 2] = _0x5dc03d.axes.length;
    _0x5cc2c4[_0x2f8953 + 12 >> 2] = _0x5dc03d.buttons.length;
    _0x53c85c(_0x5dc03d.id, _0x2f8953 + 1304, 64);
    _0x53c85c(_0x5dc03d.mapping, _0x2f8953 + 1368, 64);
  }
  function _0x5dfb99(_0x27c8d7, _0xcdc16a) {
    if (_0x27c8d7 < 0 || _0x27c8d7 >= _0x55d55a.lastGamepadState.length) {
      return -5;
    }
    if (!_0x55d55a.lastGamepadState[_0x27c8d7]) {
      return -7;
    }
    _0x1a02e0(_0xcdc16a, _0x55d55a.lastGamepadState[_0x27c8d7]);
    return 0;
  }
  function _0x211da4() {
    return 2147483648;
  }
  function _0x2612f4() {
    return _0x55d55a.lastGamepadState.length;
  }
  function _0x294385() {
    _0x55d55a.removeAllEventListeners();
  }
  function _0x4ae703(_0x11affb) {
    return !_0x17d2b3.contexts[_0x11affb] || _0x17d2b3.contexts[_0x11affb].GLctx.isContextLost();
  }
  function _0xf23cb2(_0xe94912) {
    return _0xe94912 < 0 || _0xe94912 === 0 && 1 / _0xe94912 === -Infinity;
  }
  function _0x5981a3(_0x295dc8, _0x24705d) {
    return (_0x295dc8 >>> 0) + _0x24705d * 4294967296;
  }
  function _0x724feb(_0x432c1b, _0x5239b6) {
    return (_0x432c1b >>> 0) + (_0x5239b6 >>> 0) * 4294967296;
  }
  function _0x326414(_0x409938, _0x1bdfdb) {
    if (_0x409938 <= 0) {
      return _0x409938;
    }
    var _0x456f1a = _0x1bdfdb <= 32 ? Math.abs(1 << _0x1bdfdb - 1) : Math.pow(2, _0x1bdfdb - 1);
    if (_0x409938 >= _0x456f1a && (_0x1bdfdb <= 32 || _0x409938 > _0x456f1a)) {
      _0x409938 = _0x456f1a * -2 + _0x409938;
    }
    return _0x409938;
  }
  function _0x2fca9c(_0x48f241, _0x38a41f) {
    if (_0x48f241 >= 0) {
      return _0x48f241;
    }
    if (_0x38a41f <= 32) {
      return Math.abs(1 << _0x38a41f - 1) * 2 + _0x48f241;
    } else {
      return Math.pow(2, _0x38a41f) + _0x48f241;
    }
  }
  function _0xb45e0a(_0x1b42e3, _0x3e0e47) {
    var _0x4999c5 = _0x1b42e3;
    var _0x155723 = _0x3e0e47;
    function _0x5cce67(_0x47b783, _0x143125) {
      if (_0x143125 === "double" || _0x143125 === "i64") {
        if (_0x47b783 & 7) {
          _0x47b783 += 4;
        }
      } else {}
      return _0x47b783;
    }
    function _0x6fdad4(_0x7a845e) {
      var _0x446274;
      _0x155723 = _0x5cce67(_0x155723, _0x7a845e);
      if (_0x7a845e === "double") {
        _0x446274 = _0x5b41dc[_0x155723 >> 3];
        _0x155723 += 8;
      } else if (_0x7a845e == "i64") {
        _0x446274 = [_0x5cc2c4[_0x155723 >> 2], _0x5cc2c4[_0x155723 + 4 >> 2]];
        _0x155723 += 8;
      } else {
        _0x7a845e = "i32";
        _0x446274 = _0x5cc2c4[_0x155723 >> 2];
        _0x155723 += 4;
      }
      return _0x446274;
    }
    var _0x3b6deb = [];
    var _0x2f0b2a;
    var _0x5590a6;
    var _0x4f2977;
    while (1) {
      var _0x50ce45 = _0x4999c5;
      _0x2f0b2a = _0xb3d98[_0x4999c5 >> 0];
      if (_0x2f0b2a === 0) {
        break;
      }
      _0x5590a6 = _0xb3d98[_0x4999c5 + 1 >> 0];
      if (_0x2f0b2a == 37) {
        var _0x3f98fa = false;
        var _0x36fb3f = false;
        var _0x90ce59 = false;
        var _0x1c5d1f = false;
        var _0x165ae0 = false;
        _0x90c90f: while (1) {
          switch (_0x5590a6) {
            case 43:
              _0x3f98fa = true;
              break;
            case 45:
              _0x36fb3f = true;
              break;
            case 35:
              _0x90ce59 = true;
              break;
            case 48:
              if (_0x1c5d1f) {
                break _0x90c90f;
              } else {
                _0x1c5d1f = true;
                break;
              }
            case 32:
              _0x165ae0 = true;
              break;
            default:
              break _0x90c90f;
          }
          _0x4999c5++;
          _0x5590a6 = _0xb3d98[_0x4999c5 + 1 >> 0];
        }
        var _0xe808d0 = 0;
        if (_0x5590a6 == 42) {
          _0xe808d0 = _0x6fdad4("i32");
          _0x4999c5++;
          _0x5590a6 = _0xb3d98[_0x4999c5 + 1 >> 0];
        } else {
          while (_0x5590a6 >= 48 && _0x5590a6 <= 57) {
            _0xe808d0 = _0xe808d0 * 10 + (_0x5590a6 - 48);
            _0x4999c5++;
            _0x5590a6 = _0xb3d98[_0x4999c5 + 1 >> 0];
          }
        }
        var _0x1468e2 = false;
        var _0x4c5f05 = -1;
        if (_0x5590a6 == 46) {
          _0x4c5f05 = 0;
          _0x1468e2 = true;
          _0x4999c5++;
          _0x5590a6 = _0xb3d98[_0x4999c5 + 1 >> 0];
          if (_0x5590a6 == 42) {
            _0x4c5f05 = _0x6fdad4("i32");
            _0x4999c5++;
          } else {
            while (1) {
              var _0x130441 = _0xb3d98[_0x4999c5 + 1 >> 0];
              if (_0x130441 < 48 || _0x130441 > 57) {
                break;
              }
              _0x4c5f05 = _0x4c5f05 * 10 + (_0x130441 - 48);
              _0x4999c5++;
            }
          }
          _0x5590a6 = _0xb3d98[_0x4999c5 + 1 >> 0];
        }
        if (_0x4c5f05 < 0) {
          _0x4c5f05 = 6;
          _0x1468e2 = false;
        }
        var _0x13a662;
        switch (String.fromCharCode(_0x5590a6)) {
          case "h":
            var _0x5d65b1 = _0xb3d98[_0x4999c5 + 2 >> 0];
            if (_0x5d65b1 == 104) {
              _0x4999c5++;
              _0x13a662 = 1;
            } else {
              _0x13a662 = 2;
            }
            break;
          case "l":
            var _0x5d65b1 = _0xb3d98[_0x4999c5 + 2 >> 0];
            if (_0x5d65b1 == 108) {
              _0x4999c5++;
              _0x13a662 = 8;
            } else {
              _0x13a662 = 4;
            }
            break;
          case "L":
          case "q":
          case "j":
            _0x13a662 = 8;
            break;
          case "z":
          case "t":
          case "I":
            _0x13a662 = 4;
            break;
          default:
            _0x13a662 = null;
        }
        if (_0x13a662) {
          _0x4999c5++;
        }
        _0x5590a6 = _0xb3d98[_0x4999c5 + 1 >> 0];
        switch (String.fromCharCode(_0x5590a6)) {
          case "d":
          case "i":
          case "u":
          case "o":
          case "x":
          case "X":
          case "p":
            {
              var _0x4509ec = _0x5590a6 == 100 || _0x5590a6 == 105;
              _0x13a662 = _0x13a662 || 4;
              _0x4f2977 = _0x6fdad4("i" + _0x13a662 * 8);
              var _0x1f4f09;
              if (_0x13a662 == 8) {
                _0x4f2977 = _0x5590a6 == 117 ? _0x724feb(_0x4f2977[0], _0x4f2977[1]) : _0x5981a3(_0x4f2977[0], _0x4f2977[1]);
              }
              if (_0x13a662 <= 4) {
                var _0x13284a = Math.pow(256, _0x13a662) - 1;
                _0x4f2977 = (_0x4509ec ? _0x326414 : _0x2fca9c)(_0x4f2977 & _0x13284a, _0x13a662 * 8);
              }
              var _0xa48964 = Math.abs(_0x4f2977);
              var _0x15c176 = "";
              if (_0x5590a6 == 100 || _0x5590a6 == 105) {
                _0x1f4f09 = _0x326414(_0x4f2977, _0x13a662 * 8, 1).toString(10);
              } else if (_0x5590a6 == 117) {
                _0x1f4f09 = _0x2fca9c(_0x4f2977, _0x13a662 * 8, 1).toString(10);
                _0x4f2977 = Math.abs(_0x4f2977);
              } else if (_0x5590a6 == 111) {
                _0x1f4f09 = (_0x90ce59 ? "0" : "") + _0xa48964.toString(8);
              } else if (_0x5590a6 == 120 || _0x5590a6 == 88) {
                _0x15c176 = _0x90ce59 && _0x4f2977 != 0 ? "0x" : "";
                if (_0x4f2977 < 0) {
                  _0x4f2977 = -_0x4f2977;
                  _0x1f4f09 = (_0xa48964 - 1).toString(16);
                  var _0x2bb4e8 = [];
                  for (var _0x3b8517 = 0; _0x3b8517 < _0x1f4f09.length; _0x3b8517++) {
                    _0x2bb4e8.push((15 - parseInt(_0x1f4f09[_0x3b8517], 16)).toString(16));
                  }
                  _0x1f4f09 = _0x2bb4e8.join("");
                  while (_0x1f4f09.length < _0x13a662 * 2) {
                    _0x1f4f09 = "f" + _0x1f4f09;
                  }
                } else {
                  _0x1f4f09 = _0xa48964.toString(16);
                }
                if (_0x5590a6 == 88) {
                  _0x15c176 = _0x15c176.toUpperCase();
                  _0x1f4f09 = _0x1f4f09.toUpperCase();
                }
              } else if (_0x5590a6 == 112) {
                if (_0xa48964 === 0) {
                  _0x1f4f09 = "(nil)";
                } else {
                  _0x15c176 = "0x";
                  _0x1f4f09 = _0xa48964.toString(16);
                }
              }
              if (_0x1468e2) {
                while (_0x1f4f09.length < _0x4c5f05) {
                  _0x1f4f09 = "0" + _0x1f4f09;
                }
              }
              if (_0x4f2977 >= 0) {
                if (_0x3f98fa) {
                  _0x15c176 = "+" + _0x15c176;
                } else if (_0x165ae0) {
                  _0x15c176 = " " + _0x15c176;
                }
              }
              if (_0x1f4f09.charAt(0) == "-") {
                _0x15c176 = "-" + _0x15c176;
                _0x1f4f09 = _0x1f4f09.substr(1);
              }
              while (_0x15c176.length + _0x1f4f09.length < _0xe808d0) {
                if (_0x36fb3f) {
                  _0x1f4f09 += " ";
                } else if (_0x1c5d1f) {
                  _0x1f4f09 = "0" + _0x1f4f09;
                } else {
                  _0x15c176 = " " + _0x15c176;
                }
              }
              _0x1f4f09 = _0x15c176 + _0x1f4f09;
              _0x1f4f09.split("").forEach(function (_0x459dc8) {
                _0x3b6deb.push(_0x459dc8.charCodeAt(0));
              });
              break;
            }
          case "f":
          case "F":
          case "e":
          case "E":
          case "g":
          case "G":
            {
              _0x4f2977 = _0x6fdad4("double");
              var _0x1f4f09;
              if (isNaN(_0x4f2977)) {
                _0x1f4f09 = "nan";
                _0x1c5d1f = false;
              } else if (!isFinite(_0x4f2977)) {
                _0x1f4f09 = (_0x4f2977 < 0 ? "-" : "") + "inf";
                _0x1c5d1f = false;
              } else {
                var _0x3b34ab = false;
                var _0x3f88e7 = Math.min(_0x4c5f05, 20);
                if (_0x5590a6 == 103 || _0x5590a6 == 71) {
                  _0x3b34ab = true;
                  _0x4c5f05 = _0x4c5f05 || 1;
                  var _0x2e818f = parseInt(_0x4f2977.toExponential(_0x3f88e7).split("e")[1], 10);
                  if (_0x4c5f05 > _0x2e818f && _0x2e818f >= -4) {
                    _0x5590a6 = (_0x5590a6 == 103 ? "f" : "F").charCodeAt(0);
                    _0x4c5f05 -= _0x2e818f + 1;
                  } else {
                    _0x5590a6 = (_0x5590a6 == 103 ? "e" : "E").charCodeAt(0);
                    _0x4c5f05--;
                  }
                  _0x3f88e7 = Math.min(_0x4c5f05, 20);
                }
                if (_0x5590a6 == 101 || _0x5590a6 == 69) {
                  _0x1f4f09 = _0x4f2977.toExponential(_0x3f88e7);
                  if (/[eE][-+]\d$/.test(_0x1f4f09)) {
                    _0x1f4f09 = _0x1f4f09.slice(0, -1) + "0" + _0x1f4f09.slice(-1);
                  }
                } else if (_0x5590a6 == 102 || _0x5590a6 == 70) {
                  _0x1f4f09 = _0x4f2977.toFixed(_0x3f88e7);
                  if (_0x4f2977 === 0 && _0xf23cb2(_0x4f2977)) {
                    _0x1f4f09 = "-" + _0x1f4f09;
                  }
                }
                var _0x142c60 = _0x1f4f09.split("e");
                if (_0x3b34ab && !_0x90ce59) {
                  while (_0x142c60[0].length > 1 && _0x142c60[0].includes(".") && (_0x142c60[0].slice(-1) == "0" || _0x142c60[0].slice(-1) == ".")) {
                    _0x142c60[0] = _0x142c60[0].slice(0, -1);
                  }
                } else {
                  if (_0x90ce59 && _0x1f4f09.indexOf(".") == -1) {
                    _0x142c60[0] += ".";
                  }
                  while (_0x4c5f05 > _0x3f88e7++) {
                    _0x142c60[0] += "0";
                  }
                }
                _0x1f4f09 = _0x142c60[0] + (_0x142c60.length > 1 ? "e" + _0x142c60[1] : "");
                if (_0x5590a6 == 69) {
                  _0x1f4f09 = _0x1f4f09.toUpperCase();
                }
                if (_0x4f2977 >= 0) {
                  if (_0x3f98fa) {
                    _0x1f4f09 = "+" + _0x1f4f09;
                  } else if (_0x165ae0) {
                    _0x1f4f09 = " " + _0x1f4f09;
                  }
                }
              }
              while (_0x1f4f09.length < _0xe808d0) {
                if (_0x36fb3f) {
                  _0x1f4f09 += " ";
                } else if (_0x1c5d1f && (_0x1f4f09[0] == "-" || _0x1f4f09[0] == "+")) {
                  _0x1f4f09 = _0x1f4f09[0] + "0" + _0x1f4f09.slice(1);
                } else {
                  _0x1f4f09 = (_0x1c5d1f ? "0" : " ") + _0x1f4f09;
                }
              }
              if (_0x5590a6 < 97) {
                _0x1f4f09 = _0x1f4f09.toUpperCase();
              }
              _0x1f4f09.split("").forEach(function (_0x52705a) {
                _0x3b6deb.push(_0x52705a.charCodeAt(0));
              });
              break;
            }
          case "s":
            {
              var _0xb5ca58 = _0x6fdad4("i8*");
              var _0x198cca = _0xb5ca58 ? _0x11fceb(_0xb5ca58) : "(null)".length;
              if (_0x1468e2) {
                _0x198cca = Math.min(_0x198cca, _0x4c5f05);
              }
              if (!_0x36fb3f) {
                while (_0x198cca < _0xe808d0--) {
                  _0x3b6deb.push(32);
                }
              }
              if (_0xb5ca58) {
                for (var _0x3b8517 = 0; _0x3b8517 < _0x198cca; _0x3b8517++) {
                  _0x3b6deb.push(_0x4f26b1[_0xb5ca58++ >> 0]);
                }
              } else {
                _0x3b6deb = _0x3b6deb.concat(_0x216a0f("(null)".substr(0, _0x198cca), true));
              }
              if (_0x36fb3f) {
                while (_0x198cca < _0xe808d0--) {
                  _0x3b6deb.push(32);
                }
              }
              break;
            }
          case "c":
            {
              if (_0x36fb3f) {
                _0x3b6deb.push(_0x6fdad4("i8"));
              }
              while (--_0xe808d0 > 0) {
                _0x3b6deb.push(32);
              }
              if (!_0x36fb3f) {
                _0x3b6deb.push(_0x6fdad4("i8"));
              }
              break;
            }
          case "n":
            {
              var _0x42ebb9 = _0x6fdad4("i32*");
              _0x5cc2c4[_0x42ebb9 >> 2] = _0x3b6deb.length;
              break;
            }
          case "%":
            {
              _0x3b6deb.push(_0x2f0b2a);
              break;
            }
          default:
            {
              for (var _0x3b8517 = _0x50ce45; _0x3b8517 < _0x4999c5 + 2; _0x3b8517++) {
                _0x3b6deb.push(_0xb3d98[_0x3b8517 >> 0]);
              }
            }
        }
        _0x4999c5 += 2;
      } else {
        _0x3b6deb.push(_0x2f0b2a);
        _0x4999c5 += 1;
      }
    }
    return _0x3b6deb;
  }
  function _0x1fca7a(_0x5dda2a) {
    if (!_0x5dda2a || !_0x5dda2a.callee || !_0x5dda2a.callee.name) {
      return [null, "", ""];
    }
    var _0x4bf805 = _0x5dda2a.callee.toString();
    var _0x3eb1cd = _0x5dda2a.callee.name;
    var _0x1b0fc8 = "(";
    var _0x1cee61 = true;
    for (var _0x51c1e4 in _0x5dda2a) {
      var _0x706e3a = _0x5dda2a[_0x51c1e4];
      if (!_0x1cee61) {
        _0x1b0fc8 += ", ";
      }
      _0x1cee61 = false;
      if (typeof _0x706e3a === "number" || typeof _0x706e3a === "string") {
        _0x1b0fc8 += _0x706e3a;
      } else {
        _0x1b0fc8 += "(" + typeof _0x706e3a + ")";
      }
    }
    _0x1b0fc8 += ")";
    var _0x4338e7 = _0x5dda2a.callee.caller;
    _0x5dda2a = _0x4338e7 ? _0x4338e7.arguments : [];
    if (_0x1cee61) {
      _0x1b0fc8 = "";
    }
    return [_0x5dda2a, _0x3eb1cd, _0x1b0fc8];
  }
  function _0x4812a3(_0x148bac) {
    var _0x476e83 = _0x13c2d9();
    var _0x177cc2 = _0x476e83.lastIndexOf("_emscripten_log");
    var _0x4921b7 = _0x476e83.lastIndexOf("_emscripten_get_callstack");
    var _0x35cf7e = _0x476e83.indexOf("\n", Math.max(_0x177cc2, _0x4921b7)) + 1;
    _0x476e83 = _0x476e83.slice(_0x35cf7e);
    if (_0x148bac & 32) {
      _0x8cebcb("EM_LOG_DEMANGLE is deprecated; ignoring");
    }
    if (_0x148bac & 8 && typeof emscripten_source_map === "undefined") {
      _0x8cebcb("Source map information is not available, emscripten_log with EM_LOG_C_STACK will be ignored. Build with \"--pre-js $EMSCRIPTEN/src/emscripten-source-map.min.js\" linker flag to add source map loading to code.");
      _0x148bac ^= 8;
      _0x148bac |= 16;
    }
    var _0x339afc = null;
    if (_0x148bac & 128) {
      _0x339afc = _0x1fca7a(arguments);
      while (_0x339afc[1].includes("_emscripten_")) {
        _0x339afc = _0x1fca7a(_0x339afc[0]);
      }
    }
    var _0xad5553 = _0x476e83.split("\n");
    _0x476e83 = "";
    var _0x2cdf4b = new RegExp("\\s*(.*?)@(.*?):([0-9]+):([0-9]+)");
    var _0x1eccf5 = new RegExp("\\s*(.*?)@(.*):(.*)(:(.*))?");
    var _0xd51c31 = new RegExp("\\s*at (.*?) \\((.*):(.*):(.*)\\)");
    for (var _0x4d8a20 in _0xad5553) {
      var _0x52f531 = _0xad5553[_0x4d8a20];
      var _0x390c67 = "";
      var _0x51ff05 = "";
      var _0xa48757 = 0;
      var _0x109498 = 0;
      var _0x4d9372 = _0xd51c31.exec(_0x52f531);
      if (_0x4d9372 && _0x4d9372.length == 5) {
        _0x390c67 = _0x4d9372[1];
        _0x51ff05 = _0x4d9372[2];
        _0xa48757 = _0x4d9372[3];
        _0x109498 = _0x4d9372[4];
      } else {
        _0x4d9372 = _0x2cdf4b.exec(_0x52f531);
        if (!_0x4d9372) {
          _0x4d9372 = _0x1eccf5.exec(_0x52f531);
        }
        if (_0x4d9372 && _0x4d9372.length >= 4) {
          _0x390c67 = _0x4d9372[1];
          _0x51ff05 = _0x4d9372[2];
          _0xa48757 = _0x4d9372[3];
          _0x109498 = _0x4d9372[4] | 0;
        } else {
          _0x476e83 += _0x52f531 + "\n";
          continue;
        }
      }
      var _0x5aec50 = false;
      if (_0x148bac & 8) {
        var _0x492ad2 = emscripten_source_map.originalPositionFor({
          line: _0xa48757,
          column: _0x109498
        });
        _0x5aec50 = _0x492ad2 && _0x492ad2.source;
        if (_0x5aec50) {
          if (_0x148bac & 64) {
            _0x492ad2.source = _0x492ad2.source.substring(_0x492ad2.source.replace(/\\/g, "/").lastIndexOf("/") + 1);
          }
          _0x476e83 += "    at " + _0x390c67 + " (" + _0x492ad2.source + ":" + _0x492ad2.line + ":" + _0x492ad2.column + ")\n";
        }
      }
      if (_0x148bac & 16 || !_0x5aec50) {
        if (_0x148bac & 64) {
          _0x51ff05 = _0x51ff05.substring(_0x51ff05.replace(/\\/g, "/").lastIndexOf("/") + 1);
        }
        _0x476e83 += (_0x5aec50 ? "     = " + _0x390c67 : "    at " + _0x390c67) + " (" + _0x51ff05 + ":" + _0xa48757 + ":" + _0x109498 + ")\n";
      }
      if (_0x148bac & 128 && _0x339afc[0]) {
        if (_0x339afc[1] == _0x390c67 && _0x339afc[2].length > 0) {
          _0x476e83 = _0x476e83.replace(/\s+$/, "");
          _0x476e83 += " with values: " + _0x339afc[1] + _0x339afc[2] + "\n";
        }
        _0x339afc = _0x1fca7a(_0x339afc[0]);
      }
    }
    _0x476e83 = _0x476e83.replace(/\s+$/, "");
    return _0x476e83;
  }
  function _0x5cb143(_0x427ec9, _0x542b94) {
    if (_0x427ec9 & 24) {
      _0x542b94 = _0x542b94.replace(/\s+$/, "");
      _0x542b94 += (_0x542b94.length > 0 ? "\n" : "") + _0x4812a3(_0x427ec9);
    }
    if (_0x427ec9 & 1) {
      if (_0x427ec9 & 4) {
        console.error(_0x542b94);
      } else if (_0x427ec9 & 2) {
        console.warn(_0x542b94);
      } else if (_0x427ec9 & 512) {
        console.info(_0x542b94);
      } else if (_0x427ec9 & 256) {
        console.debug(_0x542b94);
      } else {
        console.log(_0x542b94);
      }
    } else if (_0x427ec9 & 6) {
      _0x516167(_0x542b94);
    } else {
      _0x56a098(_0x542b94);
    }
  }
  function _0xbc5d47(_0x1091f6, _0x5a6013, _0x17e757) {
    var _0x203e75 = _0xb45e0a(_0x5a6013, _0x17e757);
    var _0x5339f2 = _0x1f45b0(_0x203e75, 0);
    _0x5cb143(_0x1091f6, _0x5339f2);
  }
  function _0x25509f(_0x1ae022, _0x452b21) {
    _0x202f4a(_0x1ae022, _0x452b21 || 1);
    throw "longjmp";
  }
  function _0x59d3de(_0x228a6e, _0x11bbee) {
    return _0x25509f(_0x228a6e, _0x11bbee);
  }
  function _0x262663(_0x1d54b8, _0xdb4835, _0x1439a4) {
    _0x4f26b1.copyWithin(_0x1d54b8, _0xdb4835, _0xdb4835 + _0x1439a4);
  }
  function _0x51a2c0(_0x1af40b, _0x5348f5) {
    if (!_0x55d55a.fullscreenEnabled()) {
      return -1;
    }
    _0x1af40b = _0x199b5c(_0x1af40b);
    if (!_0x1af40b) {
      return -4;
    }
    if (!_0x1af40b.requestFullscreen && !_0x1af40b.webkitRequestFullscreen) {
      return -3;
    }
    var _0x4f4512 = _0x55d55a.canPerformEventHandlerRequests();
    if (!_0x4f4512) {
      if (_0x5348f5.deferUntilInEventHandler) {
        _0x55d55a.deferCall(_0x5b8c90, 1, [_0x1af40b, _0x5348f5]);
        return 1;
      } else {
        return -2;
      }
    }
    return _0x5b8c90(_0x1af40b, _0x5348f5);
  }
  function _0x2355c4(_0x2d5f9f, _0x243f71) {
    var _0x45729e = {
      scaleMode: 0,
      canvasResolutionScaleMode: 0,
      filteringMode: 0,
      deferUntilInEventHandler: _0x243f71,
      canvasResizedCallbackTargetThread: 2
    };
    return _0x51a2c0(_0x2d5f9f, _0x45729e);
  }
  function _0x43c425(_0xed29f3, _0x250d7b) {
    _0xed29f3 = _0x199b5c(_0xed29f3);
    if (!_0xed29f3) {
      return -4;
    }
    if (!_0xed29f3.requestPointerLock && !_0xed29f3.msRequestPointerLock) {
      return -1;
    }
    var _0x4876a3 = _0x55d55a.canPerformEventHandlerRequests();
    if (!_0x4876a3) {
      if (_0x250d7b) {
        _0x55d55a.deferCall(_0x350130, 2, [_0xed29f3]);
        return 1;
      } else {
        return -2;
      }
    }
    return _0x350130(_0xed29f3);
  }
  function _0x2a9dd1(_0x296b97) {
    try {
      _0x26bdd5.grow(_0x296b97 - _0x47e5e9.byteLength + 65535 >>> 16);
      _0x25eba3(_0x26bdd5.buffer);
      return 1;
    } catch (_0x5ad9f3) {}
  }
  function _0x4b2138(_0x22ee6f) {
    var _0x57e715 = _0x4f26b1.length;
    _0x22ee6f = _0x22ee6f >>> 0;
    var _0xd55d9a = 2147483648;
    if (_0x22ee6f > _0xd55d9a) {
      return false;
    }
    for (var _0x5e5e22 = 1; _0x5e5e22 <= 4; _0x5e5e22 *= 2) {
      var _0x41e66d = _0x57e715 * (1 + 0.2 / _0x5e5e22);
      _0x41e66d = Math.min(_0x41e66d, _0x22ee6f + 100663296);
      var _0x11e803 = Math.min(_0xd55d9a, _0x1499a2(Math.max(_0x22ee6f, _0x41e66d), 65536));
      var _0x6c69e3 = _0x2a9dd1(_0x11e803);
      if (_0x6c69e3) {
        return true;
      }
    }
    return false;
  }
  function _0x24c4dc() {
    try {
      if (navigator.getGamepads) {
        if (_0x55d55a.lastGamepadState = navigator.getGamepads()) {
          return 0;
        } else {
          return -1;
        }
      }
    } catch (_0x191178) {
      navigator.getGamepads = null;
    }
    return -1;
  }
  function _0xdbf5f7(_0x49d9f1, _0x481f2a, _0xf77be5, _0x3a5c78, _0x20e78a, _0x54f3e9, _0x1fd169) {
    if (!_0x55d55a.focusEvent) {
      _0x55d55a.focusEvent = _0x253dd7(256);
    }
    function _0x11aab2(_0x4ecfdd) {
      var _0x2b4b62 = _0x4ecfdd || event;
      var _0x20fb91 = _0x55d55a.getNodeNameForTarget(_0x2b4b62.target);
      var _0x25e962 = _0x2b4b62.target.id ? _0x2b4b62.target.id : "";
      var _0x1c8dc8 = _0x55d55a.focusEvent;
      _0x53c85c(_0x20fb91, _0x1c8dc8 + 0, 128);
      _0x53c85c(_0x25e962, _0x1c8dc8 + 128, 128);
      if (function (_0x177172, _0x319f2d, _0x396bd7) {
        return _0x1b1167.apply(null, [_0x3a5c78, _0x177172, _0x319f2d, _0x396bd7]);
      }(_0x20e78a, _0x1c8dc8, _0x481f2a)) {
        _0x2b4b62.preventDefault();
      }
    }
    var _0x4bcf8f = {
      target: _0x199b5c(_0x49d9f1),
      eventTypeString: _0x54f3e9,
      callbackfunc: _0x3a5c78,
      handlerFunc: _0x11aab2,
      useCapture: _0xf77be5
    };
    _0x55d55a.registerOrRemoveHandler(_0x4bcf8f);
  }
  function _0x42346c(_0x5220ab, _0x51a16c, _0x3b8869, _0x13d564, _0x27c251) {
    _0xdbf5f7(_0x5220ab, _0x51a16c, _0x3b8869, _0x13d564, 12, "blur", _0x27c251);
    return 0;
  }
  function _0xa8a1bc(_0x57eb63, _0x393a58, _0x85ed47, _0x36a77a, _0x147ef7) {
    _0xdbf5f7(_0x57eb63, _0x393a58, _0x85ed47, _0x36a77a, 13, "focus", _0x147ef7);
    return 0;
  }
  function _0x19f1fa(_0x4133ca, _0x5d8ad7, _0x393b2f, _0x2403bd, _0x1dbaf3, _0x577ab0, _0x466a60) {
    if (!_0x55d55a.fullscreenChangeEvent) {
      _0x55d55a.fullscreenChangeEvent = _0x253dd7(280);
    }
    function _0x25b71f(_0x11ba6e) {
      var _0x38ac0d = _0x11ba6e || event;
      var _0x47eea1 = _0x55d55a.fullscreenChangeEvent;
      _0x4426f2(_0x47eea1);
      if (function (_0x1fb8a8, _0x3e720d, _0x75f48c) {
        return _0x1b1167.apply(null, [_0x2403bd, _0x1fb8a8, _0x3e720d, _0x75f48c]);
      }(_0x1dbaf3, _0x47eea1, _0x5d8ad7)) {
        _0x38ac0d.preventDefault();
      }
    }
    var _0x4618a4 = {
      target: _0x4133ca,
      eventTypeString: _0x577ab0,
      callbackfunc: _0x2403bd,
      handlerFunc: _0x25b71f,
      useCapture: _0x393b2f
    };
    _0x55d55a.registerOrRemoveHandler(_0x4618a4);
  }
  function _0x5883a1(_0x49e60d, _0x48c4e7, _0x23a5fb, _0x1ed9f4, _0x40ca78) {
    if (!_0x55d55a.fullscreenEnabled()) {
      return -1;
    }
    _0x49e60d = _0x199b5c(_0x49e60d);
    if (!_0x49e60d) {
      return -4;
    }
    _0x19f1fa(_0x49e60d, _0x48c4e7, _0x23a5fb, _0x1ed9f4, 19, "fullscreenchange", _0x40ca78);
    _0x19f1fa(_0x49e60d, _0x48c4e7, _0x23a5fb, _0x1ed9f4, 19, "webkitfullscreenchange", _0x40ca78);
    return 0;
  }
  function _0x3af124(_0xc82300, _0x394e87, _0x49e2f4, _0x335ab1, _0x4134ab, _0x19a1bf, _0x353a5f) {
    if (!_0x55d55a.gamepadEvent) {
      _0x55d55a.gamepadEvent = _0x253dd7(1432);
    }
    function _0x4be1a5(_0x46f151) {
      var _0x3d24ba = _0x46f151 || event;
      var _0x44dd0b = _0x55d55a.gamepadEvent;
      _0x1a02e0(_0x44dd0b, _0x3d24ba.gamepad);
      if (function (_0x38fb6c, _0x38b3d6, _0x538398) {
        return _0x1b1167.apply(null, [_0x335ab1, _0x38fb6c, _0x38b3d6, _0x538398]);
      }(_0x4134ab, _0x44dd0b, _0x394e87)) {
        _0x3d24ba.preventDefault();
      }
    }
    var _0x37de21 = {
      target: _0x199b5c(_0xc82300),
      allowsDeferredCalls: true,
      eventTypeString: _0x19a1bf,
      callbackfunc: _0x335ab1,
      handlerFunc: _0x4be1a5,
      useCapture: _0x49e2f4
    };
    _0x55d55a.registerOrRemoveHandler(_0x37de21);
  }
  function _0x5b231c(_0x29b5b1, _0x4b5b2d, _0x37587e, _0x26c67f) {
    if (_0x24c4dc()) {
      return -1;
    }
    return _0x3af124(2, _0x29b5b1, _0x4b5b2d, _0x37587e, 26, "gamepadconnected", _0x26c67f);
  }
  function _0x27b891(_0x127255, _0x274aa1, _0x15e059, _0x7decbf) {
    if (_0x24c4dc()) {
      return -1;
    }
    return _0x3af124(2, _0x127255, _0x274aa1, _0x15e059, 27, "gamepaddisconnected", _0x7decbf);
  }
  function _0x2aef22(_0x5c3509, _0x268383, _0x50cc2b) {
    return setInterval(function () {
      (function (_0x24ab79) {
        _0x37c083.apply(null, [_0x5c3509, _0x24ab79]);
      })(_0x50cc2b);
    }, _0x268383);
  }
  function _0x1097ad(_0x598f0d, _0x5ca067, _0x287a63, _0x5175b9, _0x245e74, _0x1115df, _0x18d79c) {
    if (!_0x55d55a.keyEvent) {
      _0x55d55a.keyEvent = _0x253dd7(164);
    }
    function _0x5f2c15(_0x498314) {
      var _0x2af0e9 = _0x55d55a.keyEvent;
      var _0x52a09b = _0x2af0e9 >> 2;
      _0x5cc2c4[_0x52a09b + 0] = _0x498314.location;
      _0x5cc2c4[_0x52a09b + 1] = _0x498314.ctrlKey;
      _0x5cc2c4[_0x52a09b + 2] = _0x498314.shiftKey;
      _0x5cc2c4[_0x52a09b + 3] = _0x498314.altKey;
      _0x5cc2c4[_0x52a09b + 4] = _0x498314.metaKey;
      _0x5cc2c4[_0x52a09b + 5] = _0x498314.repeat;
      _0x5cc2c4[_0x52a09b + 6] = _0x498314.charCode;
      _0x5cc2c4[_0x52a09b + 7] = _0x498314.keyCode;
      _0x5cc2c4[_0x52a09b + 8] = _0x498314.which;
      _0x53c85c(_0x498314.key || "", _0x2af0e9 + 36, 32);
      _0x53c85c(_0x498314.code || "", _0x2af0e9 + 68, 32);
      _0x53c85c(_0x498314.char || "", _0x2af0e9 + 100, 32);
      _0x53c85c(_0x498314.locale || "", _0x2af0e9 + 132, 32);
      if (function (_0x3621e7, _0x568c59, _0x279ae5) {
        return _0x1b1167.apply(null, [_0x5175b9, _0x3621e7, _0x568c59, _0x279ae5]);
      }(_0x245e74, _0x2af0e9, _0x5ca067)) {
        _0x498314.preventDefault();
      }
    }
    var _0x2139b4 = {
      target: _0x199b5c(_0x598f0d),
      allowsDeferredCalls: true,
      eventTypeString: _0x1115df,
      callbackfunc: _0x5175b9,
      handlerFunc: _0x5f2c15,
      useCapture: _0x287a63
    };
    _0x55d55a.registerOrRemoveHandler(_0x2139b4);
  }
  function _0x4dd06d(_0x1814f6, _0x53fae3, _0x17d42c, _0x27405a, _0x4ca4e4) {
    _0x1097ad(_0x1814f6, _0x53fae3, _0x17d42c, _0x27405a, 2, "keydown", _0x4ca4e4);
    return 0;
  }
  function _0x496fea(_0x2df6c3, _0x39131a, _0x4d8575, _0x2fe345, _0x4e6400) {
    _0x1097ad(_0x2df6c3, _0x39131a, _0x4d8575, _0x2fe345, 1, "keypress", _0x4e6400);
    return 0;
  }
  function _0x34e95c(_0x248f78, _0x4fa0ab, _0x20d8f1, _0x4359e1, _0x17831e) {
    _0x1097ad(_0x248f78, _0x4fa0ab, _0x20d8f1, _0x4359e1, 3, "keyup", _0x17831e);
    return 0;
  }
  function _0xf0e95e(_0x1a9382, _0x40db36, _0x5ea4ac) {
    function _0x59a6bc() {
      _0x4f38c0.call(null, _0x1a9382);
    }
    _0x1de3b1(_0x59a6bc, _0x40db36, _0x5ea4ac);
  }
  function _0x1aa6a1(_0x3eb424, _0x299d42, _0x1c22d2) {
    var _0xb11d76 = _0x3eb424 >> 2;
    _0x5cc2c4[_0xb11d76 + 0] = _0x299d42.screenX;
    _0x5cc2c4[_0xb11d76 + 1] = _0x299d42.screenY;
    _0x5cc2c4[_0xb11d76 + 2] = _0x299d42.clientX;
    _0x5cc2c4[_0xb11d76 + 3] = _0x299d42.clientY;
    _0x5cc2c4[_0xb11d76 + 4] = _0x299d42.ctrlKey;
    _0x5cc2c4[_0xb11d76 + 5] = _0x299d42.shiftKey;
    _0x5cc2c4[_0xb11d76 + 6] = _0x299d42.altKey;
    _0x5cc2c4[_0xb11d76 + 7] = _0x299d42.metaKey;
    _0x30f41b[_0xb11d76 * 2 + 16] = _0x299d42.button;
    _0x30f41b[_0xb11d76 * 2 + 17] = _0x299d42.buttons;
    _0x5cc2c4[_0xb11d76 + 9] = _0x299d42.movementX;
    _0x5cc2c4[_0xb11d76 + 10] = _0x299d42.movementY;
    var _0x2b962d = _0x151914(_0x1c22d2);
    _0x5cc2c4[_0xb11d76 + 11] = _0x299d42.clientX - _0x2b962d.left;
    _0x5cc2c4[_0xb11d76 + 12] = _0x299d42.clientY - _0x2b962d.top;
  }
  function _0x90da6a(_0x4934a0, _0x40f4ec, _0xcbfe89, _0x16fc30, _0x1843fc, _0x388f9a, _0x154014) {
    if (!_0x55d55a.mouseEvent) {
      _0x55d55a.mouseEvent = _0x253dd7(64);
    }
    _0x4934a0 = _0x199b5c(_0x4934a0);
    function _0x4b0515(_0x517ed2) {
      var _0x57dd6c = _0x517ed2 || event;
      _0x1aa6a1(_0x55d55a.mouseEvent, _0x57dd6c, _0x4934a0);
      if (function (_0x4cc95c, _0x5334d4, _0x218f1a) {
        return _0x1b1167.apply(null, [_0x16fc30, _0x4cc95c, _0x5334d4, _0x218f1a]);
      }(_0x1843fc, _0x55d55a.mouseEvent, _0x40f4ec)) {
        _0x57dd6c.preventDefault();
      }
    }
    var _0x49776a = {
      target: _0x4934a0,
      allowsDeferredCalls: _0x388f9a != "mousemove" && _0x388f9a != "mouseenter" && _0x388f9a != "mouseleave",
      eventTypeString: _0x388f9a,
      callbackfunc: _0x16fc30,
      handlerFunc: _0x4b0515,
      useCapture: _0xcbfe89
    };
    _0x55d55a.registerOrRemoveHandler(_0x49776a);
  }
  function _0x163702(_0x2519e5, _0x703548, _0x4634f5, _0xd74cbc, _0x6182aa) {
    _0x90da6a(_0x2519e5, _0x703548, _0x4634f5, _0xd74cbc, 5, "mousedown", _0x6182aa);
    return 0;
  }
  function _0x5afd45(_0x4316da, _0x16c514, _0x566b7, _0x33f224, _0x4635d4) {
    _0x90da6a(_0x4316da, _0x16c514, _0x566b7, _0x33f224, 8, "mousemove", _0x4635d4);
    return 0;
  }
  function _0x2f5edc(_0x1772cf, _0x1444b8, _0x5e604c, _0x355a2a, _0x3e2607) {
    _0x90da6a(_0x1772cf, _0x1444b8, _0x5e604c, _0x355a2a, 6, "mouseup", _0x3e2607);
    return 0;
  }
  function _0x293ea6(_0x16d67d) {
    var _0x24959f = document.pointerLockElement || document.mozPointerLockElement || document.webkitPointerLockElement || document.msPointerLockElement;
    var _0x1dd3a0 = !!_0x24959f;
    _0x5cc2c4[_0x16d67d >> 2] = _0x1dd3a0;
    var _0x4aaeb1 = _0x55d55a.getNodeNameForTarget(_0x24959f);
    var _0x321f17 = _0x24959f && _0x24959f.id ? _0x24959f.id : "";
    _0x53c85c(_0x4aaeb1, _0x16d67d + 4, 128);
    _0x53c85c(_0x321f17, _0x16d67d + 132, 128);
  }
  function _0x1e266f(_0x1345b1, _0x37579d, _0xb8f9e1, _0x494704, _0x17338b, _0x586ea0, _0xdd5f6b) {
    if (!_0x55d55a.pointerlockChangeEvent) {
      _0x55d55a.pointerlockChangeEvent = _0x253dd7(260);
    }
    function _0x3fbddc(_0x14eb5d) {
      var _0x60ad22 = _0x14eb5d || event;
      var _0x1e34d2 = _0x55d55a.pointerlockChangeEvent;
      _0x293ea6(_0x1e34d2);
      if (function (_0x2113a2, _0x395406, _0x50e157) {
        return _0x1b1167.apply(null, [_0x494704, _0x2113a2, _0x395406, _0x50e157]);
      }(_0x17338b, _0x1e34d2, _0x37579d)) {
        _0x60ad22.preventDefault();
      }
    }
    var _0x257e2e = {
      target: _0x1345b1,
      eventTypeString: _0x586ea0,
      callbackfunc: _0x494704,
      handlerFunc: _0x3fbddc,
      useCapture: _0xb8f9e1
    };
    _0x55d55a.registerOrRemoveHandler(_0x257e2e);
  }
  function _0x98bca7(_0x56fdd9, _0x2409c1, _0x5c4f5e, _0xb91be5, _0x3fd926) {
    if (!document || !document.body || !document.body.requestPointerLock && !document.body.mozRequestPointerLock && !document.body.webkitRequestPointerLock && !document.body.msRequestPointerLock) {
      return -1;
    }
    _0x56fdd9 = _0x199b5c(_0x56fdd9);
    if (!_0x56fdd9) {
      return -4;
    }
    _0x1e266f(_0x56fdd9, _0x2409c1, _0x5c4f5e, _0xb91be5, 20, "pointerlockchange", _0x3fd926);
    _0x1e266f(_0x56fdd9, _0x2409c1, _0x5c4f5e, _0xb91be5, 20, "mozpointerlockchange", _0x3fd926);
    _0x1e266f(_0x56fdd9, _0x2409c1, _0x5c4f5e, _0xb91be5, 20, "webkitpointerlockchange", _0x3fd926);
    _0x1e266f(_0x56fdd9, _0x2409c1, _0x5c4f5e, _0xb91be5, 20, "mspointerlockchange", _0x3fd926);
    return 0;
  }
  function _0x3635c4(_0x492dde, _0x3b3a92, _0x1ccc88, _0x4aa6c0, _0x445607, _0x2fd6bf, _0x13f90b) {
    if (!_0x55d55a.touchEvent) {
      _0x55d55a.touchEvent = _0x253dd7(1684);
    }
    _0x492dde = _0x199b5c(_0x492dde);
    function _0x489aca(_0x256154) {
      var _0x5f2334;
      var _0x1d3eb0 = {};
      var _0x1f98e3 = _0x256154.touches;
      for (var _0x3f980a = 0; _0x3f980a < _0x1f98e3.length; ++_0x3f980a) {
        _0x5f2334 = _0x1f98e3[_0x3f980a];
        _0x5f2334.isChanged = _0x5f2334.onTarget = 0;
        _0x1d3eb0[_0x5f2334.identifier] = _0x5f2334;
      }
      for (var _0x3f980a = 0; _0x3f980a < _0x256154.changedTouches.length; ++_0x3f980a) {
        _0x5f2334 = _0x256154.changedTouches[_0x3f980a];
        _0x5f2334.isChanged = 1;
        _0x1d3eb0[_0x5f2334.identifier] = _0x5f2334;
      }
      for (var _0x3f980a = 0; _0x3f980a < _0x256154.targetTouches.length; ++_0x3f980a) {
        _0x1d3eb0[_0x256154.targetTouches[_0x3f980a].identifier].onTarget = 1;
      }
      var _0x65fc6a = _0x55d55a.touchEvent;
      var _0x3db8f6 = _0x65fc6a >> 2;
      _0x5cc2c4[_0x3db8f6 + 1] = _0x256154.ctrlKey;
      _0x5cc2c4[_0x3db8f6 + 2] = _0x256154.shiftKey;
      _0x5cc2c4[_0x3db8f6 + 3] = _0x256154.altKey;
      _0x5cc2c4[_0x3db8f6 + 4] = _0x256154.metaKey;
      _0x3db8f6 += 5;
      var _0x38a08d = _0x151914(_0x492dde);
      var _0xbdb095 = 0;
      for (var _0x3f980a in _0x1d3eb0) {
        var _0x5f2334 = _0x1d3eb0[_0x3f980a];
        _0x5cc2c4[_0x3db8f6 + 0] = _0x5f2334.identifier;
        _0x5cc2c4[_0x3db8f6 + 1] = _0x5f2334.screenX;
        _0x5cc2c4[_0x3db8f6 + 2] = _0x5f2334.screenY;
        _0x5cc2c4[_0x3db8f6 + 3] = _0x5f2334.clientX;
        _0x5cc2c4[_0x3db8f6 + 4] = _0x5f2334.clientY;
        _0x5cc2c4[_0x3db8f6 + 5] = _0x5f2334.pageX;
        _0x5cc2c4[_0x3db8f6 + 6] = _0x5f2334.pageY;
        _0x5cc2c4[_0x3db8f6 + 7] = _0x5f2334.isChanged;
        _0x5cc2c4[_0x3db8f6 + 8] = _0x5f2334.onTarget;
        _0x5cc2c4[_0x3db8f6 + 9] = _0x5f2334.clientX - _0x38a08d.left;
        _0x5cc2c4[_0x3db8f6 + 10] = _0x5f2334.clientY - _0x38a08d.top;
        _0x3db8f6 += 13;
        if (++_0xbdb095 > 31) {
          break;
        }
      }
      _0x5cc2c4[_0x65fc6a >> 2] = _0xbdb095;
      if (function (_0x14a44c, _0x5256bf, _0x55615c) {
        return _0x1b1167.apply(null, [_0x4aa6c0, _0x14a44c, _0x5256bf, _0x55615c]);
      }(_0x445607, _0x65fc6a, _0x3b3a92)) {
        _0x256154.preventDefault();
      }
    }
    var _0x2a71bf = {
      target: _0x492dde,
      allowsDeferredCalls: _0x2fd6bf == "touchstart" || _0x2fd6bf == "touchend",
      eventTypeString: _0x2fd6bf,
      callbackfunc: _0x4aa6c0,
      handlerFunc: _0x489aca,
      useCapture: _0x1ccc88
    };
    _0x55d55a.registerOrRemoveHandler(_0x2a71bf);
  }
  function _0x40b982(_0x44d981, _0x793b35, _0x237cf4, _0x3f61bf, _0x3c5db2) {
    _0x3635c4(_0x44d981, _0x793b35, _0x237cf4, _0x3f61bf, 25, "touchcancel", _0x3c5db2);
    return 0;
  }
  function _0x3ac67e(_0x386e40, _0x528726, _0x300e66, _0x11e26b, _0x1ac3be) {
    _0x3635c4(_0x386e40, _0x528726, _0x300e66, _0x11e26b, 23, "touchend", _0x1ac3be);
    return 0;
  }
  function _0x3addea(_0x127f33, _0x51fb8e, _0x3018fa, _0x3d0781, _0x32e608) {
    _0x3635c4(_0x127f33, _0x51fb8e, _0x3018fa, _0x3d0781, 24, "touchmove", _0x32e608);
    return 0;
  }
  function _0xefe510(_0x2b7ef9, _0x136c63, _0x5d7964, _0x2526e9, _0x1a5245) {
    _0x3635c4(_0x2b7ef9, _0x136c63, _0x5d7964, _0x2526e9, 22, "touchstart", _0x1a5245);
    return 0;
  }
  function _0x4a3177(_0x48155c, _0xdeadf6, _0x2be2f8, _0x5e762e, _0x45d4bf, _0x3c5903, _0x20b220) {
    if (!_0x55d55a.wheelEvent) {
      _0x55d55a.wheelEvent = _0x253dd7(96);
    }
    function _0x4ca70f(_0x56cfa5) {
      var _0x4a475f = _0x56cfa5 || event;
      var _0x239568 = _0x55d55a.wheelEvent;
      _0x1aa6a1(_0x239568, _0x4a475f, _0x48155c);
      _0x5b41dc[_0x239568 + 64 >> 3] = _0x4a475f.deltaX;
      _0x5b41dc[_0x239568 + 72 >> 3] = _0x4a475f.deltaY;
      _0x5b41dc[_0x239568 + 80 >> 3] = _0x4a475f.deltaZ;
      _0x5cc2c4[_0x239568 + 88 >> 2] = _0x4a475f.deltaMode;
      if (function (_0x53961b, _0x548d8d, _0x1f4443) {
        return _0x1b1167.apply(null, [_0x5e762e, _0x53961b, _0x548d8d, _0x1f4443]);
      }(_0x45d4bf, _0x239568, _0xdeadf6)) {
        _0x4a475f.preventDefault();
      }
    }
    var _0x18dca7 = {
      target: _0x48155c,
      allowsDeferredCalls: true,
      eventTypeString: _0x3c5903,
      callbackfunc: _0x5e762e,
      handlerFunc: _0x4ca70f,
      useCapture: _0x2be2f8
    };
    _0x55d55a.registerOrRemoveHandler(_0x18dca7);
  }
  function _0x2f7d33(_0x536a10, _0x45449a, _0x4654e2, _0x6781e2, _0x2f8be8) {
    _0x536a10 = _0x199b5c(_0x536a10);
    if (typeof _0x536a10.onwheel !== "undefined") {
      _0x4a3177(_0x536a10, _0x45449a, _0x4654e2, _0x6781e2, 9, "wheel", _0x2f8be8);
      return 0;
    } else {
      return -1;
    }
  }
  function _0x2a25e0(_0x1ba913) {
    var _0x4df641 = _0x423d24();
    while (_0x423d24() - _0x4df641 < _0x1ba913) {}
  }
  function _0x106d4a(_0x254c45) {
    var _0xc0f01c = _0x254c45.getExtension("ANGLE_instanced_arrays");
    if (_0xc0f01c) {
      _0x254c45.vertexAttribDivisor = function (_0x34cafa, _0x5f3099) {
        _0xc0f01c.vertexAttribDivisorANGLE(_0x34cafa, _0x5f3099);
      };
      _0x254c45.drawArraysInstanced = function (_0x5cb7fe, _0x490dd5, _0x278ddb, _0x1b5b1e) {
        _0xc0f01c.drawArraysInstancedANGLE(_0x5cb7fe, _0x490dd5, _0x278ddb, _0x1b5b1e);
      };
      _0x254c45.drawElementsInstanced = function (_0x2f21bf, _0x81e00c, _0x40a910, _0x5e628c, _0x1773b1) {
        _0xc0f01c.drawElementsInstancedANGLE(_0x2f21bf, _0x81e00c, _0x40a910, _0x5e628c, _0x1773b1);
      };
      return 1;
    }
  }
  function _0x4f8734(_0x42eb2a) {
    var _0x385250 = _0x42eb2a.getExtension("OES_vertex_array_object");
    if (_0x385250) {
      _0x42eb2a.createVertexArray = function () {
        return _0x385250.createVertexArrayOES();
      };
      _0x42eb2a.deleteVertexArray = function (_0x5cf8cc) {
        _0x385250.deleteVertexArrayOES(_0x5cf8cc);
      };
      _0x42eb2a.bindVertexArray = function (_0xcf6296) {
        _0x385250.bindVertexArrayOES(_0xcf6296);
      };
      _0x42eb2a.isVertexArray = function (_0x5b5ec5) {
        return _0x385250.isVertexArrayOES(_0x5b5ec5);
      };
      return 1;
    }
  }
  function _0x3407e0(_0x3e48c6) {
    var _0x4e9953 = _0x3e48c6.getExtension("WEBGL_draw_buffers");
    if (_0x4e9953) {
      _0x3e48c6.drawBuffers = function (_0x33d94a, _0x509034) {
        _0x4e9953.drawBuffersWEBGL(_0x33d94a, _0x509034);
      };
      return 1;
    }
  }
  function _0x43efd1(_0x508351) {
    return !!(_0x508351.dibvbi = _0x508351.getExtension("WEBGL_draw_instanced_base_vertex_base_instance"));
  }
  function _0x457a72(_0x2485e7) {
    return !!(_0x2485e7.mdibvbi = _0x2485e7.getExtension("WEBGL_multi_draw_instanced_base_vertex_base_instance"));
  }
  function _0x4e852f(_0x33e8f1) {
    return !!(_0x33e8f1.multiDrawWebgl = _0x33e8f1.getExtension("WEBGL_multi_draw"));
  }
  var _0x17d2b3 = {
    counter: 1,
    buffers: [],
    mappedBuffers: {},
    programs: [],
    framebuffers: [],
    renderbuffers: [],
    textures: [],
    shaders: [],
    vaos: [],
    contexts: [],
    offscreenCanvases: {},
    queries: [],
    samplers: [],
    transformFeedbacks: [],
    syncs: [],
    byteSizeByTypeRoot: 5120,
    byteSizeByType: [1, 1, 2, 2, 4, 4, 4, 2, 3, 4, 8],
    stringCache: {},
    stringiCache: {},
    unpackAlignment: 4,
    recordError: function _0x4e0338(_0x2e5187) {
      if (!_0x17d2b3.lastError) {
        _0x17d2b3.lastError = _0x2e5187;
      }
    },
    getNewId: function (_0x278ec4) {
      var _0x4233fc = _0x17d2b3.counter++;
      for (var _0x2f99e1 = _0x278ec4.length; _0x2f99e1 < _0x4233fc; _0x2f99e1++) {
        _0x278ec4[_0x2f99e1] = null;
      }
      return _0x4233fc;
    },
    MAX_TEMP_BUFFER_SIZE: 2097152,
    numTempVertexBuffersPerSize: 64,
    log2ceilLookup: function (_0x313a0d) {
      return 32 - Math.clz32(_0x313a0d === 0 ? 0 : _0x313a0d - 1);
    },
    generateTempBuffers: function (_0xac247d, _0xff3783) {
      var _0x207de8 = _0x17d2b3.log2ceilLookup(_0x17d2b3.MAX_TEMP_BUFFER_SIZE);
      _0xff3783.tempVertexBufferCounters1 = [];
      _0xff3783.tempVertexBufferCounters2 = [];
      _0xff3783.tempVertexBufferCounters1.length = _0xff3783.tempVertexBufferCounters2.length = _0x207de8 + 1;
      _0xff3783.tempVertexBuffers1 = [];
      _0xff3783.tempVertexBuffers2 = [];
      _0xff3783.tempVertexBuffers1.length = _0xff3783.tempVertexBuffers2.length = _0x207de8 + 1;
      _0xff3783.tempIndexBuffers = [];
      _0xff3783.tempIndexBuffers.length = _0x207de8 + 1;
      for (var _0x453eb8 = 0; _0x453eb8 <= _0x207de8; ++_0x453eb8) {
        _0xff3783.tempIndexBuffers[_0x453eb8] = null;
        _0xff3783.tempVertexBufferCounters1[_0x453eb8] = _0xff3783.tempVertexBufferCounters2[_0x453eb8] = 0;
        var _0x3a4dda = _0x17d2b3.numTempVertexBuffersPerSize;
        _0xff3783.tempVertexBuffers1[_0x453eb8] = [];
        _0xff3783.tempVertexBuffers2[_0x453eb8] = [];
        var _0x37ac2a = _0xff3783.tempVertexBuffers1[_0x453eb8];
        var _0x68aa20 = _0xff3783.tempVertexBuffers2[_0x453eb8];
        _0x37ac2a.length = _0x68aa20.length = _0x3a4dda;
        for (var _0x3f8cea = 0; _0x3f8cea < _0x3a4dda; ++_0x3f8cea) {
          _0x37ac2a[_0x3f8cea] = _0x68aa20[_0x3f8cea] = null;
        }
      }
      if (_0xac247d) {
        _0xff3783.tempQuadIndexBuffer = _0x283457.createBuffer();
        _0xff3783.GLctx.bindBuffer(34963, _0xff3783.tempQuadIndexBuffer);
        var _0x1c2866 = _0x17d2b3.MAX_TEMP_BUFFER_SIZE >> 1;
        var _0x1cb87e = new Uint16Array(_0x1c2866);
        var _0x453eb8 = 0;
        var _0x2336c5 = 0;
        while (1) {
          _0x1cb87e[_0x453eb8++] = _0x2336c5;
          if (_0x453eb8 >= _0x1c2866) {
            break;
          }
          _0x1cb87e[_0x453eb8++] = _0x2336c5 + 1;
          if (_0x453eb8 >= _0x1c2866) {
            break;
          }
          _0x1cb87e[_0x453eb8++] = _0x2336c5 + 2;
          if (_0x453eb8 >= _0x1c2866) {
            break;
          }
          _0x1cb87e[_0x453eb8++] = _0x2336c5;
          if (_0x453eb8 >= _0x1c2866) {
            break;
          }
          _0x1cb87e[_0x453eb8++] = _0x2336c5 + 2;
          if (_0x453eb8 >= _0x1c2866) {
            break;
          }
          _0x1cb87e[_0x453eb8++] = _0x2336c5 + 3;
          if (_0x453eb8 >= _0x1c2866) {
            break;
          }
          _0x2336c5 += 4;
        }
        _0xff3783.GLctx.bufferData(34963, _0x1cb87e, 35044);
        _0xff3783.GLctx.bindBuffer(34963, null);
      }
    },
    getTempVertexBuffer: function _0xfb7fb0(_0x3cd573) {
      var _0x568d00 = _0x17d2b3.log2ceilLookup(_0x3cd573);
      var _0x36385f = _0x17d2b3.currentContext.tempVertexBuffers1[_0x568d00];
      var _0xfc111d = _0x17d2b3.currentContext.tempVertexBufferCounters1[_0x568d00];
      _0x17d2b3.currentContext.tempVertexBufferCounters1[_0x568d00] = _0x17d2b3.currentContext.tempVertexBufferCounters1[_0x568d00] + 1 & _0x17d2b3.numTempVertexBuffersPerSize - 1;
      var _0x4213ed = _0x36385f[_0xfc111d];
      if (_0x4213ed) {
        return _0x4213ed;
      }
      var _0x103490 = _0x283457.getParameter(34964);
      _0x36385f[_0xfc111d] = _0x283457.createBuffer();
      _0x283457.bindBuffer(34962, _0x36385f[_0xfc111d]);
      _0x283457.bufferData(34962, 1 << _0x568d00, 35048);
      _0x283457.bindBuffer(34962, _0x103490);
      return _0x36385f[_0xfc111d];
    },
    getTempIndexBuffer: function _0x74c78e(_0x2c82d9) {
      var _0x3427b5 = _0x17d2b3.log2ceilLookup(_0x2c82d9);
      var _0x383757 = _0x17d2b3.currentContext.tempIndexBuffers[_0x3427b5];
      if (_0x383757) {
        return _0x383757;
      }
      var _0x432a63 = _0x283457.getParameter(34965);
      _0x17d2b3.currentContext.tempIndexBuffers[_0x3427b5] = _0x283457.createBuffer();
      _0x283457.bindBuffer(34963, _0x17d2b3.currentContext.tempIndexBuffers[_0x3427b5]);
      _0x283457.bufferData(34963, 1 << _0x3427b5, 35048);
      _0x283457.bindBuffer(34963, _0x432a63);
      return _0x17d2b3.currentContext.tempIndexBuffers[_0x3427b5];
    },
    newRenderingFrameStarted: function _0xee05b3() {
      if (!_0x17d2b3.currentContext) {
        return;
      }
      var _0x57a138 = _0x17d2b3.currentContext.tempVertexBuffers1;
      _0x17d2b3.currentContext.tempVertexBuffers1 = _0x17d2b3.currentContext.tempVertexBuffers2;
      _0x17d2b3.currentContext.tempVertexBuffers2 = _0x57a138;
      _0x57a138 = _0x17d2b3.currentContext.tempVertexBufferCounters1;
      _0x17d2b3.currentContext.tempVertexBufferCounters1 = _0x17d2b3.currentContext.tempVertexBufferCounters2;
      _0x17d2b3.currentContext.tempVertexBufferCounters2 = _0x57a138;
      var _0x410a55 = _0x17d2b3.log2ceilLookup(_0x17d2b3.MAX_TEMP_BUFFER_SIZE);
      for (var _0x97ab34 = 0; _0x97ab34 <= _0x410a55; ++_0x97ab34) {
        _0x17d2b3.currentContext.tempVertexBufferCounters1[_0x97ab34] = 0;
      }
    },
    getSource: function (_0x42f0b8, _0x2f446f, _0x28fe04, _0x5ee949) {
      var _0x281cd5 = "";
      for (var _0x29195e = 0; _0x29195e < _0x2f446f; ++_0x29195e) {
        var _0x1b9fac = _0x5ee949 ? _0x5cc2c4[_0x5ee949 + _0x29195e * 4 >> 2] : -1;
        _0x281cd5 += _0x3f3179(_0x5cc2c4[_0x28fe04 + _0x29195e * 4 >> 2], _0x1b9fac < 0 ? undefined : _0x1b9fac);
      }
      return _0x281cd5;
    },
    calcBufLength: function _0xbae460(_0x56f634, _0x3ff48e, _0xc77bce, _0x141877) {
      if (_0xc77bce > 0) {
        return _0x141877 * _0xc77bce;
      }
      var _0x287878 = _0x17d2b3.byteSizeByType[_0x3ff48e - _0x17d2b3.byteSizeByTypeRoot];
      return _0x56f634 * _0x287878 * _0x141877;
    },
    usedTempBuffers: [],
    preDrawHandleClientVertexAttribBindings: function _0x4576a9(_0x2a7f9c) {
      _0x17d2b3.resetBufferBinding = false;
      for (var _0x2d18ee = 0; _0x2d18ee < _0x17d2b3.currentContext.maxVertexAttribs; ++_0x2d18ee) {
        var _0x38780d = _0x17d2b3.currentContext.clientBuffers[_0x2d18ee];
        if (!_0x38780d.clientside || !_0x38780d.enabled) {
          continue;
        }
        _0x17d2b3.resetBufferBinding = true;
        var _0x25f21a = _0x17d2b3.calcBufLength(_0x38780d.size, _0x38780d.type, _0x38780d.stride, _0x2a7f9c);
        var _0x514591 = _0x17d2b3.getTempVertexBuffer(_0x25f21a);
        _0x283457.bindBuffer(34962, _0x514591);
        _0x283457.bufferSubData(34962, 0, _0x4f26b1.subarray(_0x38780d.ptr, _0x38780d.ptr + _0x25f21a));
        _0x38780d.vertexAttribPointerAdaptor.call(_0x283457, _0x2d18ee, _0x38780d.size, _0x38780d.type, _0x38780d.normalized, _0x38780d.stride, 0);
      }
    },
    postDrawHandleClientVertexAttribBindings: function _0x5a954e() {
      if (_0x17d2b3.resetBufferBinding) {
        _0x283457.bindBuffer(34962, _0x17d2b3.buffers[_0x283457.currentArrayBufferBinding]);
      }
    },
    createContext: function (_0x2e107b, _0x3099e2) {
      if (!_0x2e107b.getContextSafariWebGL2Fixed) {
        _0x2e107b.getContextSafariWebGL2Fixed = _0x2e107b.getContext;
        _0x2e107b.getContext = function (_0x31937b, _0x5ea730) {
          var _0x17cfdf = _0x2e107b.getContextSafariWebGL2Fixed(_0x31937b, _0x5ea730);
          if (_0x31937b == "webgl" == _0x17cfdf instanceof WebGLRenderingContext) {
            return _0x17cfdf;
          } else {
            return null;
          }
        };
      }
      var _0x377e9d = _0x3099e2.majorVersion > 1 ? _0x2e107b.getContext("webgl2", _0x3099e2) : _0x2e107b.getContext("webgl", _0x3099e2);
      if (!_0x377e9d) {
        return 0;
      }
      var _0x5238d1 = _0x17d2b3.registerContext(_0x377e9d, _0x3099e2);
      return _0x5238d1;
    },
    registerContext: function (_0x26126e, _0x32be9b) {
      var _0x13efff = _0x17d2b3.getNewId(_0x17d2b3.contexts);
      var _0xce8fdd = {
        handle: _0x13efff,
        attributes: _0x32be9b,
        version: _0x32be9b.majorVersion,
        GLctx: _0x26126e
      };
      if (_0x26126e.canvas) {
        _0x26126e.canvas.GLctxObject = _0xce8fdd;
      }
      _0x17d2b3.contexts[_0x13efff] = _0xce8fdd;
      if (typeof _0x32be9b.enableExtensionsByDefault === "undefined" || _0x32be9b.enableExtensionsByDefault) {
        _0x17d2b3.initExtensions(_0xce8fdd);
      }
      _0xce8fdd.maxVertexAttribs = _0xce8fdd.GLctx.getParameter(34921);
      _0xce8fdd.clientBuffers = [];
      for (var _0x3dae93 = 0; _0x3dae93 < _0xce8fdd.maxVertexAttribs; _0x3dae93++) {
        _0xce8fdd.clientBuffers[_0x3dae93] = {
          enabled: false,
          clientside: false,
          size: 0,
          type: 0,
          normalized: 0,
          stride: 0,
          ptr: 0,
          vertexAttribPointerAdaptor: null
        };
      }
      _0x17d2b3.generateTempBuffers(false, _0xce8fdd);
      return _0x13efff;
    },
    makeContextCurrent: function (_0x10f56c) {
      _0x17d2b3.currentContext = _0x17d2b3.contexts[_0x10f56c];
      _0x3e078a.ctx = _0x283457 = _0x17d2b3.currentContext && _0x17d2b3.currentContext.GLctx;
      return !_0x10f56c || !!_0x283457;
    },
    getContext: function (_0x17a271) {
      return _0x17d2b3.contexts[_0x17a271];
    },
    deleteContext: function (_0x1b05f9) {
      if (_0x17d2b3.currentContext === _0x17d2b3.contexts[_0x1b05f9]) {
        _0x17d2b3.currentContext = null;
      }
      if (typeof _0x55d55a === "object") {
        _0x55d55a.removeAllHandlersOnTarget(_0x17d2b3.contexts[_0x1b05f9].GLctx.canvas);
      }
      if (_0x17d2b3.contexts[_0x1b05f9] && _0x17d2b3.contexts[_0x1b05f9].GLctx.canvas) {
        _0x17d2b3.contexts[_0x1b05f9].GLctx.canvas.GLctxObject = undefined;
      }
      _0x17d2b3.contexts[_0x1b05f9] = null;
    },
    initExtensions: function (_0x579616) {
      if (!_0x579616) {
        _0x579616 = _0x17d2b3.currentContext;
      }
      if (_0x579616.initExtensionsDone) {
        return;
      }
      _0x579616.initExtensionsDone = true;
      var _0x2ad8fb = _0x579616.GLctx;
      _0x106d4a(_0x2ad8fb);
      _0x4f8734(_0x2ad8fb);
      _0x3407e0(_0x2ad8fb);
      _0x43efd1(_0x2ad8fb);
      _0x457a72(_0x2ad8fb);
      if (_0x579616.version >= 2) {
        _0x2ad8fb.disjointTimerQueryExt = _0x2ad8fb.getExtension("EXT_disjoint_timer_query_webgl2");
      }
      if (_0x579616.version < 2 || !_0x2ad8fb.disjointTimerQueryExt) {
        _0x2ad8fb.disjointTimerQueryExt = _0x2ad8fb.getExtension("EXT_disjoint_timer_query");
      }
      _0x4e852f(_0x2ad8fb);
      var _0x7dcdac = _0x2ad8fb.getSupportedExtensions() || [];
      _0x7dcdac.forEach(function (_0x3cfc94) {
        if (!_0x3cfc94.includes("lose_context") && !_0x3cfc94.includes("debug")) {
          _0x2ad8fb.getExtension(_0x3cfc94);
        }
      });
    }
  };
  var _0x19430f = ["default", "low-power", "high-performance"];
  function _0x453ce1(_0x150be0, _0x4cb38a) {
    var _0x516c1a = _0x4cb38a >> 2;
    var _0x225e0c = _0x5cc2c4[_0x516c1a + 6];
    var _0x4ae307 = {
      alpha: !!_0x5cc2c4[_0x516c1a + 0],
      depth: !!_0x5cc2c4[_0x516c1a + 1],
      stencil: !!_0x5cc2c4[_0x516c1a + 2],
      antialias: !!_0x5cc2c4[_0x516c1a + 3],
      premultipliedAlpha: !!_0x5cc2c4[_0x516c1a + 4],
      preserveDrawingBuffer: !!_0x5cc2c4[_0x516c1a + 5],
      powerPreference: _0x19430f[_0x225e0c],
      failIfMajorPerformanceCaveat: !!_0x5cc2c4[_0x516c1a + 7],
      majorVersion: _0x5cc2c4[_0x516c1a + 8],
      minorVersion: _0x5cc2c4[_0x516c1a + 9],
      enableExtensionsByDefault: _0x5cc2c4[_0x516c1a + 10],
      explicitSwapControl: _0x5cc2c4[_0x516c1a + 11],
      proxyContextToMainThread: _0x5cc2c4[_0x516c1a + 12],
      renderViaOffscreenBackBuffer: _0x5cc2c4[_0x516c1a + 13]
    };
    var _0x330233 = _0xf4f750(_0x150be0);
    if (!_0x330233) {
      return 0;
    }
    if (_0x4ae307.explicitSwapControl) {
      return 0;
    }
    var _0x1bff16 = _0x17d2b3.createContext(_0x330233, _0x4ae307);
    return _0x1bff16;
  }
  function _0x48df6b(_0x32e996, _0xa814e5) {
    return _0x453ce1(_0x32e996, _0xa814e5);
  }
  function _0x580f3a() {
    if (_0x17d2b3.currentContext) {
      return _0x17d2b3.currentContext.handle;
    } else {
      return 0;
    }
  }
  function _0x41aaf1() {
    return _0x580f3a();
  }
  _0x3e078a._emscripten_webgl_get_current_context = _0x41aaf1;
  function _0x2ee0d8(_0x72a3a4) {
    var _0x425294 = _0x17d2b3.makeContextCurrent(_0x72a3a4);
    if (_0x425294) {
      return 0;
    } else {
      return -5;
    }
  }
  _0x3e078a._emscripten_webgl_make_context_current = _0x2ee0d8;
  function _0x173d7b(_0x16f05f) {
    if (_0x17d2b3.currentContext == _0x16f05f) {
      _0x17d2b3.currentContext = 0;
    }
    _0x17d2b3.deleteContext(_0x16f05f);
  }
  function _0x5969d6(_0x13b67a, _0x5eae54) {
    var _0x46ee7b = _0x17d2b3.getContext(_0x13b67a);
    var _0x5b06c1 = _0x3f3179(_0x5eae54);
    if (_0x5b06c1.startsWith("GL_")) {
      _0x5b06c1 = _0x5b06c1.substr(3);
    }
    if (_0x5b06c1 == "ANGLE_instanced_arrays") {
      _0x106d4a(_0x283457);
    }
    if (_0x5b06c1 == "OES_vertex_array_object") {
      _0x4f8734(_0x283457);
    }
    if (_0x5b06c1 == "WEBGL_draw_buffers") {
      _0x3407e0(_0x283457);
    }
    if (_0x5b06c1 == "WEBGL_draw_instanced_base_vertex_base_instance") {
      _0x43efd1(_0x283457);
    }
    if (_0x5b06c1 == "WEBGL_multi_draw_instanced_base_vertex_base_instance") {
      _0x457a72(_0x283457);
    }
    if (_0x5b06c1 == "WEBGL_multi_draw") {
      _0x4e852f(_0x283457);
    }
    var _0x56a9f0 = _0x46ee7b.GLctx.getExtension(_0x5b06c1);
    return !!_0x56a9f0;
  }
  function _0x4ddae1(_0x1e8fec) {
    var _0x193d0e = _0x1e8fec >> 2;
    for (var _0x4c7e82 = 0; _0x4c7e82 < 14; ++_0x4c7e82) {
      _0x5cc2c4[_0x193d0e + _0x4c7e82] = 0;
    }
    _0x5cc2c4[_0x193d0e + 0] = _0x5cc2c4[_0x193d0e + 1] = _0x5cc2c4[_0x193d0e + 3] = _0x5cc2c4[_0x193d0e + 4] = _0x5cc2c4[_0x193d0e + 8] = _0x5cc2c4[_0x193d0e + 10] = 1;
  }
  var _0x47cc10 = {};
  function _0x3c0fb1() {
    return _0x2048af || "./this.program";
  }
  function _0x4419ee() {
    if (!_0x4419ee.strings) {
      var _0x15afc5 = (typeof navigator === "object" && navigator.languages && navigator.languages[0] || "C").replace("-", "_") + ".UTF-8";
      var _0x19b1a6 = {
        USER: "web_user",
        LOGNAME: "web_user",
        PATH: "/",
        PWD: "/",
        HOME: "/home/web_user",
        LANG: _0x15afc5,
        _: _0x3c0fb1()
      };
      for (var _0x14ae2a in _0x47cc10) {
        _0x19b1a6[_0x14ae2a] = _0x47cc10[_0x14ae2a];
      }
      var _0x5d1a78 = [];
      for (var _0x14ae2a in _0x19b1a6) {
        _0x5d1a78.push(_0x14ae2a + "=" + _0x19b1a6[_0x14ae2a]);
      }
      _0x4419ee.strings = _0x5d1a78;
    }
    return _0x4419ee.strings;
  }
  function _0x4efcce(_0x2fff4d, _0x5b91b8) {
    try {
      var _0xa17f39 = 0;
      _0x4419ee().forEach(function (_0x4b38ed, _0x45adea) {
        var _0x522551 = _0x5b91b8 + _0xa17f39;
        _0x5cc2c4[_0x2fff4d + _0x45adea * 4 >> 2] = _0x522551;
        _0x26daf7(_0x4b38ed, _0x522551);
        _0xa17f39 += _0x4b38ed.length + 1;
      });
      return 0;
    } catch (_0x3541d7) {
      if (typeof _0x221e83 === "undefined" || !(_0x3541d7 instanceof _0x221e83.ErrnoError)) {
        _0xb4b2ae(_0x3541d7);
      }
      return _0x3541d7.errno;
    }
  }
  function _0x418ae7(_0x22e221, _0x2a2fca) {
    try {
      var _0x10cee5 = _0x4419ee();
      _0x5cc2c4[_0x22e221 >> 2] = _0x10cee5.length;
      var _0x452549 = 0;
      _0x10cee5.forEach(function (_0x16e081) {
        _0x452549 += _0x16e081.length + 1;
      });
      _0x5cc2c4[_0x2a2fca >> 2] = _0x452549;
      return 0;
    } catch (_0x421908) {
      if (typeof _0x221e83 === "undefined" || !(_0x421908 instanceof _0x221e83.ErrnoError)) {
        _0xb4b2ae(_0x421908);
      }
      return _0x421908.errno;
    }
  }
  function _0x1e4e02(_0xcac985) {
    try {
      var _0xd4b138 = _0x3eb2e6.getStreamFromFD(_0xcac985);
      _0x221e83.close(_0xd4b138);
      return 0;
    } catch (_0x33c1f1) {
      if (typeof _0x221e83 === "undefined" || !(_0x33c1f1 instanceof _0x221e83.ErrnoError)) {
        _0xb4b2ae(_0x33c1f1);
      }
      return _0x33c1f1.errno;
    }
  }
  function _0x236e54(_0x1b5f98, _0x536209) {
    try {
      var _0x223ca8 = _0x3eb2e6.getStreamFromFD(_0x1b5f98);
      var _0x22a029 = _0x223ca8.tty ? 2 : _0x221e83.isDir(_0x223ca8.mode) ? 3 : _0x221e83.isLink(_0x223ca8.mode) ? 7 : 4;
      _0xb3d98[_0x536209 >> 0] = _0x22a029;
      return 0;
    } catch (_0x8cadc5) {
      if (typeof _0x221e83 === "undefined" || !(_0x8cadc5 instanceof _0x221e83.ErrnoError)) {
        _0xb4b2ae(_0x8cadc5);
      }
      return _0x8cadc5.errno;
    }
  }
  function _0x18d8a4(_0x386a09, _0x54a3d1, _0x44658b, _0x1c282d) {
    try {
      var _0x2343f5 = _0x3eb2e6.getStreamFromFD(_0x386a09);
      var _0x56fb98 = _0x3eb2e6.doReadv(_0x2343f5, _0x54a3d1, _0x44658b);
      _0x5cc2c4[_0x1c282d >> 2] = _0x56fb98;
      return 0;
    } catch (_0x497f2a) {
      if (typeof _0x221e83 === "undefined" || !(_0x497f2a instanceof _0x221e83.ErrnoError)) {
        _0xb4b2ae(_0x497f2a);
      }
      return _0x497f2a.errno;
    }
  }
  function _0x1d4cf4(_0xfb71b8, _0x110359, _0x388213, _0x213cda, _0x779bea) {
    try {
      var _0x5d5890 = _0x3eb2e6.getStreamFromFD(_0xfb71b8);
      var _0x3a03a2 = 4294967296;
      var _0x1978b4 = _0x388213 * _0x3a03a2 + (_0x110359 >>> 0);
      var _0x511bdb = 9007199254740992;
      if (_0x1978b4 <= -_0x511bdb || _0x1978b4 >= _0x511bdb) {
        return -61;
      }
      _0x221e83.llseek(_0x5d5890, _0x1978b4, _0x213cda);
      _0x300ee3 = [_0x5d5890.position >>> 0, (_0x2453c8 = _0x5d5890.position, +Math.abs(_0x2453c8) >= 1 ? _0x2453c8 > 0 ? (Math.min(+Math.floor(_0x2453c8 / 4294967296), 4294967295) | 0) >>> 0 : ~~+Math.ceil((_0x2453c8 - +(~~_0x2453c8 >>> 0)) / 4294967296) >>> 0 : 0)];
      _0x5cc2c4[_0x779bea >> 2] = _0x300ee3[0];
      _0x5cc2c4[_0x779bea + 4 >> 2] = _0x300ee3[1];
      if (_0x5d5890.getdents && _0x1978b4 === 0 && _0x213cda === 0) {
        _0x5d5890.getdents = null;
      }
      return 0;
    } catch (_0x379e4d) {
      if (typeof _0x221e83 === "undefined" || !(_0x379e4d instanceof _0x221e83.ErrnoError)) {
        _0xb4b2ae(_0x379e4d);
      }
      return _0x379e4d.errno;
    }
  }
  function _0x1bd520(_0x4b86c7, _0x5a87f1, _0x425642, _0xef0762) {
    try {
      var _0x4b6adf = _0x3eb2e6.getStreamFromFD(_0x4b86c7);
      var _0x3be6de = _0x3eb2e6.doWritev(_0x4b6adf, _0x5a87f1, _0x425642);
      _0x5cc2c4[_0xef0762 >> 2] = _0x3be6de;
      return 0;
    } catch (_0x49b733) {
      if (typeof _0x221e83 === "undefined" || !(_0x49b733 instanceof _0x221e83.ErrnoError)) {
        _0xb4b2ae(_0x49b733);
      }
      return _0x49b733.errno;
    }
  }
  function _0x436d72(_0x2a6a6d, _0x452318) {
    return 0;
  }
  function _0x396fcd() {
    return _0x1b1938();
  }
  function _0x3cce55(_0x41fe4f, _0x153f3b, _0x1afeaa, _0x49e9ed) {
    var _0x2b4feb = 0;
    var _0x44f210 = 0;
    var _0xf90d84 = 0;
    var _0x425dd3 = 0;
    var _0x345ccd = 0;
    var _0x3eedd6 = 0;
    var _0x18ace3;
    function _0x25009c(_0x580ee6, _0x45367f, _0x1076c1, _0x57d07b, _0x50244b, _0x4064ec) {
      var _0x563740;
      var _0x26c0c5;
      var _0xf50b35;
      var _0x47cbe1;
      _0x26c0c5 = _0x580ee6 === 10 ? 28 : 16;
      _0x50244b = _0x580ee6 === 10 ? _0x154356(_0x50244b) : _0x48211c(_0x50244b);
      _0x563740 = _0x253dd7(_0x26c0c5);
      _0x47cbe1 = _0xd32a86(_0x563740, _0x580ee6, _0x50244b, _0x4064ec);
      _0x5181b0(!_0x47cbe1);
      _0xf50b35 = _0x253dd7(32);
      _0x5cc2c4[_0xf50b35 + 4 >> 2] = _0x580ee6;
      _0x5cc2c4[_0xf50b35 + 8 >> 2] = _0x45367f;
      _0x5cc2c4[_0xf50b35 + 12 >> 2] = _0x1076c1;
      _0x5cc2c4[_0xf50b35 + 24 >> 2] = _0x57d07b;
      _0x5cc2c4[_0xf50b35 + 20 >> 2] = _0x563740;
      if (_0x580ee6 === 10) {
        _0x5cc2c4[_0xf50b35 + 16 >> 2] = 28;
      } else {
        _0x5cc2c4[_0xf50b35 + 16 >> 2] = 16;
      }
      _0x5cc2c4[_0xf50b35 + 28 >> 2] = 0;
      return _0xf50b35;
    }
    if (_0x1afeaa) {
      _0xf90d84 = _0x5cc2c4[_0x1afeaa >> 2];
      _0x425dd3 = _0x5cc2c4[_0x1afeaa + 4 >> 2];
      _0x345ccd = _0x5cc2c4[_0x1afeaa + 8 >> 2];
      _0x3eedd6 = _0x5cc2c4[_0x1afeaa + 12 >> 2];
    }
    if (_0x345ccd && !_0x3eedd6) {
      _0x3eedd6 = _0x345ccd === 2 ? 17 : 6;
    }
    if (!_0x345ccd && _0x3eedd6) {
      _0x345ccd = _0x3eedd6 === 17 ? 2 : 1;
    }
    if (_0x3eedd6 === 0) {
      _0x3eedd6 = 6;
    }
    if (_0x345ccd === 0) {
      _0x345ccd = 1;
    }
    if (!_0x41fe4f && !_0x153f3b) {
      return -2;
    }
    if (_0xf90d84 & ~1087) {
      return -1;
    }
    if (_0x1afeaa !== 0 && _0x5cc2c4[_0x1afeaa >> 2] & 2 && !_0x41fe4f) {
      return -1;
    }
    if (_0xf90d84 & 32) {
      return -2;
    }
    if (_0x345ccd !== 0 && _0x345ccd !== 1 && _0x345ccd !== 2) {
      return -7;
    }
    if (_0x425dd3 !== 0 && _0x425dd3 !== 2 && _0x425dd3 !== 10) {
      return -6;
    }
    if (_0x153f3b) {
      _0x153f3b = _0x3f3179(_0x153f3b);
      _0x44f210 = parseInt(_0x153f3b, 10);
      if (isNaN(_0x44f210)) {
        if (_0xf90d84 & 1024) {
          return -2;
        }
        return -8;
      }
    }
    if (!_0x41fe4f) {
      if (_0x425dd3 === 0) {
        _0x425dd3 = 2;
      }
      if ((_0xf90d84 & 1) === 0) {
        if (_0x425dd3 === 2) {
          _0x2b4feb = _0x4eba84(2130706433);
        } else {
          _0x2b4feb = [0, 0, 0, 1];
        }
      }
      _0x18ace3 = _0x25009c(_0x425dd3, _0x345ccd, _0x3eedd6, null, _0x2b4feb, _0x44f210);
      _0x5cc2c4[_0x49e9ed >> 2] = _0x18ace3;
      return 0;
    }
    _0x41fe4f = _0x3f3179(_0x41fe4f);
    _0x2b4feb = _0x3b4356(_0x41fe4f);
    if (_0x2b4feb !== null) {
      if (_0x425dd3 === 0 || _0x425dd3 === 2) {
        _0x425dd3 = 2;
      } else if (_0x425dd3 === 10 && _0xf90d84 & 8) {
        _0x2b4feb = [0, 0, _0x4eba84(65535), _0x2b4feb];
        _0x425dd3 = 10;
      } else {
        return -2;
      }
    } else {
      _0x2b4feb = _0x282dea(_0x41fe4f);
      if (_0x2b4feb !== null) {
        if (_0x425dd3 === 0 || _0x425dd3 === 10) {
          _0x425dd3 = 10;
        } else {
          return -2;
        }
      }
    }
    if (_0x2b4feb != null) {
      _0x18ace3 = _0x25009c(_0x425dd3, _0x345ccd, _0x3eedd6, _0x41fe4f, _0x2b4feb, _0x44f210);
      _0x5cc2c4[_0x49e9ed >> 2] = _0x18ace3;
      return 0;
    }
    if (_0xf90d84 & 4) {
      return -2;
    }
    _0x41fe4f = _0x10e357.lookup_name(_0x41fe4f);
    _0x2b4feb = _0x3b4356(_0x41fe4f);
    if (_0x425dd3 === 0) {
      _0x425dd3 = 2;
    } else if (_0x425dd3 === 10) {
      _0x2b4feb = [0, 0, _0x4eba84(65535), _0x2b4feb];
    }
    _0x18ace3 = _0x25009c(_0x425dd3, _0x345ccd, _0x3eedd6, null, _0x2b4feb, _0x44f210);
    _0x5cc2c4[_0x49e9ed >> 2] = _0x18ace3;
    return 0;
  }
  function _0x367adb(_0x195f3b) {
    var _0xdc57b0 = _0x253dd7(20);
    var _0x190a37 = _0x253dd7(_0x195f3b.length + 1);
    _0x53c85c(_0x195f3b, _0x190a37, _0x195f3b.length + 1);
    _0x5cc2c4[_0xdc57b0 >> 2] = _0x190a37;
    var _0x2f5b56 = _0x253dd7(4);
    _0x5cc2c4[_0x2f5b56 >> 2] = 0;
    _0x5cc2c4[_0xdc57b0 + 4 >> 2] = _0x2f5b56;
    var _0x4f89d6 = 2;
    _0x5cc2c4[_0xdc57b0 + 8 >> 2] = _0x4f89d6;
    _0x5cc2c4[_0xdc57b0 + 12 >> 2] = 4;
    var _0x12c69a = _0x253dd7(12);
    _0x5cc2c4[_0x12c69a >> 2] = _0x12c69a + 8;
    _0x5cc2c4[_0x12c69a + 4 >> 2] = 0;
    _0x5cc2c4[_0x12c69a + 8 >> 2] = _0x3b4356(_0x10e357.lookup_name(_0x195f3b));
    _0x5cc2c4[_0xdc57b0 + 16 >> 2] = _0x12c69a;
    return _0xdc57b0;
  }
  function _0x17760e(_0xe5b7a5, _0x55201f, _0x5f4a4b) {
    if (_0x5f4a4b !== 2) {
      _0x3559eb(5);
      return null;
    }
    _0xe5b7a5 = _0x5cc2c4[_0xe5b7a5 >> 2];
    var _0x161920 = _0x48211c(_0xe5b7a5);
    var _0x57d403 = _0x10e357.lookup_addr(_0x161920);
    if (_0x57d403) {
      _0x161920 = _0x57d403;
    }
    return _0x367adb(_0x161920);
  }
  function _0x180a85(_0x274a98) {
    return _0x367adb(_0x3f3179(_0x274a98));
  }
  function _0x7262e0(_0x55295c, _0x4a7d7a, _0x35cb76, _0xed86f4, _0x216083, _0x5abad2, _0xb2418f) {
    var _0x3db8d9 = _0x1d1689(_0x55295c, _0x4a7d7a);
    if (_0x3db8d9.errno) {
      return -6;
    }
    var _0x3e8b29 = _0x3db8d9.port;
    var _0x3cf305 = _0x3db8d9.addr;
    var _0x173e08 = false;
    if (_0x35cb76 && _0xed86f4) {
      var _0x538e99;
      if (_0xb2418f & 1 || !(_0x538e99 = _0x10e357.lookup_addr(_0x3cf305))) {
        if (_0xb2418f & 8) {
          return -2;
        }
      } else {
        _0x3cf305 = _0x538e99;
      }
      var _0x59e346 = _0x53c85c(_0x3cf305, _0x35cb76, _0xed86f4);
      if (_0x59e346 + 1 >= _0xed86f4) {
        _0x173e08 = true;
      }
    }
    if (_0x216083 && _0x5abad2) {
      _0x3e8b29 = "" + _0x3e8b29;
      var _0x59e346 = _0x53c85c(_0x3e8b29, _0x216083, _0x5abad2);
      if (_0x59e346 + 1 >= _0x5abad2) {
        _0x173e08 = true;
      }
    }
    if (_0x173e08) {
      return -12;
    }
    return 0;
  }
  function _0xbb0175() {
    throw "getpwuid: TODO";
  }
  function _0x580812(_0x3e1817) {
    var _0x267306 = Date.now();
    _0x5cc2c4[_0x3e1817 >> 2] = _0x267306 / 1000 | 0;
    _0x5cc2c4[_0x3e1817 + 4 >> 2] = _0x267306 % 1000 * 1000 | 0;
    return 0;
  }
  function _0x37217e(_0x19e3bb) {
    _0x283457.activeTexture(_0x19e3bb);
  }
  function _0x5eeba8(_0x1056cf, _0x4c69e6) {
    _0x1056cf = _0x17d2b3.programs[_0x1056cf];
    _0x4c69e6 = _0x17d2b3.shaders[_0x4c69e6];
    _0x1056cf[_0x4c69e6.shaderType] = _0x4c69e6;
    _0x283457.attachShader(_0x1056cf, _0x4c69e6);
  }
  function _0x436c7f(_0x4f8d82, _0x32f64b) {
    _0x283457.beginQuery(_0x4f8d82, _0x17d2b3.queries[_0x32f64b]);
  }
  function _0x399824(_0x3aae67) {
    _0x283457.beginTransformFeedback(_0x3aae67);
  }
  function _0x223db3(_0x198411, _0x26a829, _0x42db9c) {
    _0x283457.bindAttribLocation(_0x17d2b3.programs[_0x198411], _0x26a829, _0x3f3179(_0x42db9c));
  }
  function _0x5df716(_0x3759bb, _0x3a2a45) {
    if (_0x3759bb == 34962) {
      _0x283457.currentArrayBufferBinding = _0x3a2a45;
    } else if (_0x3759bb == 34963) {
      _0x283457.currentElementArrayBufferBinding = _0x3a2a45;
    }
    if (_0x3759bb == 35051) {
      _0x283457.currentPixelPackBufferBinding = _0x3a2a45;
    } else if (_0x3759bb == 35052) {
      _0x283457.currentPixelUnpackBufferBinding = _0x3a2a45;
    }
    _0x283457.bindBuffer(_0x3759bb, _0x17d2b3.buffers[_0x3a2a45]);
  }
  function _0x58b3d0(_0xfb383e, _0x210adf, _0x5941e8) {
    _0x283457.bindBufferBase(_0xfb383e, _0x210adf, _0x17d2b3.buffers[_0x5941e8]);
  }
  function _0x3e221f(_0x180316, _0x2488fd, _0x4283cb, _0xc11c09, _0x4e87e1) {
    _0x283457.bindBufferRange(_0x180316, _0x2488fd, _0x17d2b3.buffers[_0x4283cb], _0xc11c09, _0x4e87e1);
  }
  function _0x2aa585(_0x378a18, _0x58724d) {
    _0x283457.bindFramebuffer(_0x378a18, _0x17d2b3.framebuffers[_0x58724d]);
  }
  function _0x500cee(_0x244def, _0x35eea4) {
    _0x283457.bindRenderbuffer(_0x244def, _0x17d2b3.renderbuffers[_0x35eea4]);
  }
  function _0x37625e(_0x4c3c65, _0xd61d56) {
    _0x283457.bindSampler(_0x4c3c65, _0x17d2b3.samplers[_0xd61d56]);
  }
  function _0x419740(_0x49ccef, _0x51a912) {
    _0x283457.bindTexture(_0x49ccef, _0x17d2b3.textures[_0x51a912]);
  }
  function _0xea4510(_0x5bd7ea, _0x31ee4c) {
    _0x283457.bindTransformFeedback(_0x5bd7ea, _0x17d2b3.transformFeedbacks[_0x31ee4c]);
  }
  function _0x44e500(_0x60abb9) {
    _0x283457.bindVertexArray(_0x17d2b3.vaos[_0x60abb9]);
    var _0x6b7edb = _0x283457.getParameter(34965);
    _0x283457.currentElementArrayBufferBinding = _0x6b7edb ? _0x6b7edb.name | 0 : 0;
  }
  function _0x4b926b(_0x25eda2) {
    _0x283457.blendEquation(_0x25eda2);
  }
  function _0x89272e(_0x484b68, _0x2bcffd) {
    _0x283457.blendEquationSeparate(_0x484b68, _0x2bcffd);
  }
  function _0x23a265(_0x52d11a, _0x13a075, _0x58b6b2, _0x571eb8) {
    _0x283457.blendFuncSeparate(_0x52d11a, _0x13a075, _0x58b6b2, _0x571eb8);
  }
  function _0x11dfb9(_0x419a9a, _0x1bacf5, _0x1d8377, _0x215045, _0x58a04a, _0x166e3f, _0x43d697, _0x41257c, _0x111465, _0x2de88a) {
    _0x283457.blitFramebuffer(_0x419a9a, _0x1bacf5, _0x1d8377, _0x215045, _0x58a04a, _0x166e3f, _0x43d697, _0x41257c, _0x111465, _0x2de88a);
  }
  function _0x15ebf1(_0x54064c, _0x493ff5, _0x576c13, _0x200cad) {
    if (_0x17d2b3.currentContext.version >= 2) {
      if (_0x576c13) {
        _0x283457.bufferData(_0x54064c, _0x4f26b1, _0x200cad, _0x576c13, _0x493ff5);
      } else {
        _0x283457.bufferData(_0x54064c, _0x493ff5, _0x200cad);
      }
    } else {
      _0x283457.bufferData(_0x54064c, _0x576c13 ? _0x4f26b1.subarray(_0x576c13, _0x576c13 + _0x493ff5) : _0x493ff5, _0x200cad);
    }
  }
  function _0x3319f9(_0x1b2003, _0x37df55, _0x3a3cf9, _0x372b59) {
    if (_0x17d2b3.currentContext.version >= 2) {
      _0x283457.bufferSubData(_0x1b2003, _0x37df55, _0x4f26b1, _0x372b59, _0x3a3cf9);
      return;
    }
    _0x283457.bufferSubData(_0x1b2003, _0x37df55, _0x4f26b1.subarray(_0x372b59, _0x372b59 + _0x3a3cf9));
  }
  function _0x3bb136(_0x3633e6) {
    return _0x283457.checkFramebufferStatus(_0x3633e6);
  }
  function _0x40c018(_0x499820) {
    _0x283457.clear(_0x499820);
  }
  function _0x40c570(_0x5edf18, _0x3b9460, _0x5cd2bb, _0x2a1666) {
    _0x283457.clearBufferfi(_0x5edf18, _0x3b9460, _0x5cd2bb, _0x2a1666);
  }
  function _0xa84845(_0x4aeb2c, _0x540cd8, _0x1c2a1a) {
    _0x283457.clearBufferfv(_0x4aeb2c, _0x540cd8, _0x2c2a07, _0x1c2a1a >> 2);
  }
  function _0x1797d5(_0x117f0d, _0x10d2a9, _0x519e7a) {
    _0x283457.clearBufferuiv(_0x117f0d, _0x10d2a9, _0x52253e, _0x519e7a >> 2);
  }
  function _0x37b79d(_0x1b327d, _0x529d51, _0x23e982, _0x31f750) {
    _0x283457.clearColor(_0x1b327d, _0x529d51, _0x23e982, _0x31f750);
  }
  function _0x2f9000(_0x264231) {
    _0x283457.clearDepth(_0x264231);
  }
  function _0x56a9cc(_0x270ff7) {
    _0x283457.clearStencil(_0x270ff7);
  }
  function _0x184887(_0x16fd38, _0x770102, _0x45d227, _0x153c5a) {
    return _0x283457.clientWaitSync(_0x17d2b3.syncs[_0x16fd38], _0x770102, _0x5981a3(_0x45d227, _0x153c5a));
  }
  function _0x18fdfc(_0x444390, _0x3809d1, _0x8c157f, _0x2689f0) {
    _0x283457.colorMask(!!_0x444390, !!_0x3809d1, !!_0x8c157f, !!_0x2689f0);
  }
  function _0x3be0f3(_0x4666de) {
    _0x283457.compileShader(_0x17d2b3.shaders[_0x4666de]);
  }
  function _0x173380(_0x1e56b2, _0x1b38de, _0xd28a91, _0x2239e9, _0x4c74d9, _0x103e4b, _0x38d897, _0x13cf13) {
    if (_0x17d2b3.currentContext.version >= 2) {
      if (_0x283457.currentPixelUnpackBufferBinding) {
        _0x283457.compressedTexImage2D(_0x1e56b2, _0x1b38de, _0xd28a91, _0x2239e9, _0x4c74d9, _0x103e4b, _0x38d897, _0x13cf13);
      } else {
        _0x283457.compressedTexImage2D(_0x1e56b2, _0x1b38de, _0xd28a91, _0x2239e9, _0x4c74d9, _0x103e4b, _0x4f26b1, _0x13cf13, _0x38d897);
      }
      return;
    }
    _0x283457.compressedTexImage2D(_0x1e56b2, _0x1b38de, _0xd28a91, _0x2239e9, _0x4c74d9, _0x103e4b, _0x13cf13 ? _0x4f26b1.subarray(_0x13cf13, _0x13cf13 + _0x38d897) : null);
  }
  function _0x35f349(_0x32d5e8, _0x3de929, _0x52bd23, _0x162861, _0x44fef0, _0xb0a75d, _0x2c4812, _0x1bbcb1, _0x163cd5) {
    if (_0x283457.currentPixelUnpackBufferBinding) {
      _0x283457.compressedTexImage3D(_0x32d5e8, _0x3de929, _0x52bd23, _0x162861, _0x44fef0, _0xb0a75d, _0x2c4812, _0x1bbcb1, _0x163cd5);
    } else {
      _0x283457.compressedTexImage3D(_0x32d5e8, _0x3de929, _0x52bd23, _0x162861, _0x44fef0, _0xb0a75d, _0x2c4812, _0x4f26b1, _0x163cd5, _0x1bbcb1);
    }
  }
  function _0x47994d(_0x12acad, _0x5f5789, _0x240006, _0x144fdf, _0x3d5eb5, _0x56c91d, _0x232622, _0x3bf904, _0x4cebd8) {
    if (_0x17d2b3.currentContext.version >= 2) {
      if (_0x283457.currentPixelUnpackBufferBinding) {
        _0x283457.compressedTexSubImage2D(_0x12acad, _0x5f5789, _0x240006, _0x144fdf, _0x3d5eb5, _0x56c91d, _0x232622, _0x3bf904, _0x4cebd8);
      } else {
        _0x283457.compressedTexSubImage2D(_0x12acad, _0x5f5789, _0x240006, _0x144fdf, _0x3d5eb5, _0x56c91d, _0x232622, _0x4f26b1, _0x4cebd8, _0x3bf904);
      }
      return;
    }
    _0x283457.compressedTexSubImage2D(_0x12acad, _0x5f5789, _0x240006, _0x144fdf, _0x3d5eb5, _0x56c91d, _0x232622, _0x4cebd8 ? _0x4f26b1.subarray(_0x4cebd8, _0x4cebd8 + _0x3bf904) : null);
  }
  function _0x3f77be(_0x40ca22, _0x850a61, _0x3d9a69, _0x58e611, _0x515bcd, _0x2515d0, _0x41bd25, _0x17339d, _0x58cb92, _0x34127d, _0x2e79c6) {
    if (_0x283457.currentPixelUnpackBufferBinding) {
      _0x283457.compressedTexSubImage3D(_0x40ca22, _0x850a61, _0x3d9a69, _0x58e611, _0x515bcd, _0x2515d0, _0x41bd25, _0x17339d, _0x58cb92, _0x34127d, _0x2e79c6);
    } else {
      _0x283457.compressedTexSubImage3D(_0x40ca22, _0x850a61, _0x3d9a69, _0x58e611, _0x515bcd, _0x2515d0, _0x41bd25, _0x17339d, _0x58cb92, _0x4f26b1, _0x2e79c6, _0x34127d);
    }
  }
  function _0x24611e(_0x936b81, _0x4a118f, _0x1453a8, _0x350e5d, _0x429696) {
    _0x283457.copyBufferSubData(_0x936b81, _0x4a118f, _0x1453a8, _0x350e5d, _0x429696);
  }
  function _0x2f2c11(_0x342f36, _0x38e0b2, _0x2e1db6, _0x1a45d3, _0x283768, _0x1951d1, _0x2a26bb, _0x1267b9) {
    _0x283457.copyTexImage2D(_0x342f36, _0x38e0b2, _0x2e1db6, _0x1a45d3, _0x283768, _0x1951d1, _0x2a26bb, _0x1267b9);
  }
  function _0x53e0b9(_0x22690d, _0x38d6a1, _0x5e8952, _0xa678f2, _0x174f01, _0x27802d, _0x2c5433, _0x5887cf) {
    _0x283457.copyTexSubImage2D(_0x22690d, _0x38d6a1, _0x5e8952, _0xa678f2, _0x174f01, _0x27802d, _0x2c5433, _0x5887cf);
  }
  function _0x230086() {
    var _0x5a09f2 = _0x17d2b3.getNewId(_0x17d2b3.programs);
    var _0x371047 = _0x283457.createProgram();
    _0x371047.name = _0x5a09f2;
    _0x371047.maxUniformLength = _0x371047.maxAttributeLength = _0x371047.maxUniformBlockNameLength = 0;
    _0x371047.uniformIdCounter = 1;
    _0x17d2b3.programs[_0x5a09f2] = _0x371047;
    return _0x5a09f2;
  }
  function _0x2a4cb3(_0xf15ac6) {
    var _0x58f46f = _0x17d2b3.getNewId(_0x17d2b3.shaders);
    _0x17d2b3.shaders[_0x58f46f] = _0x283457.createShader(_0xf15ac6);
    _0x17d2b3.shaders[_0x58f46f].shaderType = _0xf15ac6 & 1 ? "vs" : "fs";
    return _0x58f46f;
  }
  function _0x2948b2(_0x2ae315) {
    _0x283457.cullFace(_0x2ae315);
  }
  function _0x315af7(_0x32e47d, _0x1cc968) {
    for (var _0x1e78fa = 0; _0x1e78fa < _0x32e47d; _0x1e78fa++) {
      var _0x46ceb7 = _0x5cc2c4[_0x1cc968 + _0x1e78fa * 4 >> 2];
      var _0x89478 = _0x17d2b3.buffers[_0x46ceb7];
      if (!_0x89478) {
        continue;
      }
      _0x283457.deleteBuffer(_0x89478);
      _0x89478.name = 0;
      _0x17d2b3.buffers[_0x46ceb7] = null;
      if (_0x46ceb7 == _0x283457.currentArrayBufferBinding) {
        _0x283457.currentArrayBufferBinding = 0;
      }
      if (_0x46ceb7 == _0x283457.currentElementArrayBufferBinding) {
        _0x283457.currentElementArrayBufferBinding = 0;
      }
      if (_0x46ceb7 == _0x283457.currentPixelPackBufferBinding) {
        _0x283457.currentPixelPackBufferBinding = 0;
      }
      if (_0x46ceb7 == _0x283457.currentPixelUnpackBufferBinding) {
        _0x283457.currentPixelUnpackBufferBinding = 0;
      }
    }
  }
  function _0x44c14c(_0x213ca4, _0x13fc19) {
    for (var _0x28956e = 0; _0x28956e < _0x213ca4; ++_0x28956e) {
      var _0x3ed8d3 = _0x5cc2c4[_0x13fc19 + _0x28956e * 4 >> 2];
      var _0x1e6a6b = _0x17d2b3.framebuffers[_0x3ed8d3];
      if (!_0x1e6a6b) {
        continue;
      }
      _0x283457.deleteFramebuffer(_0x1e6a6b);
      _0x1e6a6b.name = 0;
      _0x17d2b3.framebuffers[_0x3ed8d3] = null;
    }
  }
  function _0x3a884a(_0x806cf5) {
    if (!_0x806cf5) {
      return;
    }
    var _0x1c3235 = _0x17d2b3.programs[_0x806cf5];
    if (!_0x1c3235) {
      _0x17d2b3.recordError(1281);
      return;
    }
    _0x283457.deleteProgram(_0x1c3235);
    _0x1c3235.name = 0;
    _0x17d2b3.programs[_0x806cf5] = null;
  }
  function _0x52bfc2(_0x2ef006, _0x2921a5) {
    for (var _0x5c0d95 = 0; _0x5c0d95 < _0x2ef006; _0x5c0d95++) {
      var _0xeaabc5 = _0x5cc2c4[_0x2921a5 + _0x5c0d95 * 4 >> 2];
      var _0x32fbee = _0x17d2b3.queries[_0xeaabc5];
      if (!_0x32fbee) {
        continue;
      }
      _0x283457.deleteQuery(_0x32fbee);
      _0x17d2b3.queries[_0xeaabc5] = null;
    }
  }
  function _0x103c3e(_0x27c9dc, _0x26eb84) {
    for (var _0x1be1b6 = 0; _0x1be1b6 < _0x27c9dc; _0x1be1b6++) {
      var _0x53a0ac = _0x5cc2c4[_0x26eb84 + _0x1be1b6 * 4 >> 2];
      var _0x34b8bd = _0x17d2b3.renderbuffers[_0x53a0ac];
      if (!_0x34b8bd) {
        continue;
      }
      _0x283457.deleteRenderbuffer(_0x34b8bd);
      _0x34b8bd.name = 0;
      _0x17d2b3.renderbuffers[_0x53a0ac] = null;
    }
  }
  function _0xe7861(_0x4c7bd2, _0x2b5882) {
    for (var _0x403d5e = 0; _0x403d5e < _0x4c7bd2; _0x403d5e++) {
      var _0x44a48b = _0x5cc2c4[_0x2b5882 + _0x403d5e * 4 >> 2];
      var _0x17163e = _0x17d2b3.samplers[_0x44a48b];
      if (!_0x17163e) {
        continue;
      }
      _0x283457.deleteSampler(_0x17163e);
      _0x17163e.name = 0;
      _0x17d2b3.samplers[_0x44a48b] = null;
    }
  }
  function _0x2447c4(_0x512c5f) {
    if (!_0x512c5f) {
      return;
    }
    var _0x42e249 = _0x17d2b3.shaders[_0x512c5f];
    if (!_0x42e249) {
      _0x17d2b3.recordError(1281);
      return;
    }
    _0x283457.deleteShader(_0x42e249);
    _0x17d2b3.shaders[_0x512c5f] = null;
  }
  function _0x28bded(_0x46f074) {
    if (!_0x46f074) {
      return;
    }
    var _0x291e52 = _0x17d2b3.syncs[_0x46f074];
    if (!_0x291e52) {
      _0x17d2b3.recordError(1281);
      return;
    }
    _0x283457.deleteSync(_0x291e52);
    _0x291e52.name = 0;
    _0x17d2b3.syncs[_0x46f074] = null;
  }
  function _0x3229db(_0x59705f, _0x2f4c6d) {
    for (var _0x2393aa = 0; _0x2393aa < _0x59705f; _0x2393aa++) {
      var _0x1ee43d = _0x5cc2c4[_0x2f4c6d + _0x2393aa * 4 >> 2];
      var _0xa594c4 = _0x17d2b3.textures[_0x1ee43d];
      if (!_0xa594c4) {
        continue;
      }
      _0x283457.deleteTexture(_0xa594c4);
      _0xa594c4.name = 0;
      _0x17d2b3.textures[_0x1ee43d] = null;
    }
  }
  function _0x497882(_0x1570a7, _0xb6967e) {
    for (var _0x5b8d94 = 0; _0x5b8d94 < _0x1570a7; _0x5b8d94++) {
      var _0x416928 = _0x5cc2c4[_0xb6967e + _0x5b8d94 * 4 >> 2];
      var _0x592bf3 = _0x17d2b3.transformFeedbacks[_0x416928];
      if (!_0x592bf3) {
        continue;
      }
      _0x283457.deleteTransformFeedback(_0x592bf3);
      _0x592bf3.name = 0;
      _0x17d2b3.transformFeedbacks[_0x416928] = null;
    }
  }
  function _0x399294(_0x2236e5, _0x4b3ac3) {
    for (var _0x41aa68 = 0; _0x41aa68 < _0x2236e5; _0x41aa68++) {
      var _0xcce87d = _0x5cc2c4[_0x4b3ac3 + _0x41aa68 * 4 >> 2];
      _0x283457.deleteVertexArray(_0x17d2b3.vaos[_0xcce87d]);
      _0x17d2b3.vaos[_0xcce87d] = null;
    }
  }
  function _0xa0d5ca(_0x411683) {
    _0x283457.depthFunc(_0x411683);
  }
  function _0x3bb44c(_0x45324c) {
    _0x283457.depthMask(!!_0x45324c);
  }
  function _0x5d1209(_0x469989, _0x30dd47) {
    _0x283457.detachShader(_0x17d2b3.programs[_0x469989], _0x17d2b3.shaders[_0x30dd47]);
  }
  function _0x3daa8b(_0x39d020) {
    _0x283457.disable(_0x39d020);
  }
  function _0x3e6269(_0x4d6227) {
    var _0x8ee2e9 = _0x17d2b3.currentContext.clientBuffers[_0x4d6227];
    _0x8ee2e9.enabled = false;
    _0x283457.disableVertexAttribArray(_0x4d6227);
  }
  function _0xa41d5f(_0xfa88c0, _0x1171d3, _0x31ba24) {
    _0x17d2b3.preDrawHandleClientVertexAttribBindings(_0x1171d3 + _0x31ba24);
    _0x283457.drawArrays(_0xfa88c0, _0x1171d3, _0x31ba24);
    _0x17d2b3.postDrawHandleClientVertexAttribBindings();
  }
  function _0x18b32b(_0x5f2f86, _0x4a003a, _0x5f4d76, _0x154642) {
    _0x283457.drawArraysInstanced(_0x5f2f86, _0x4a003a, _0x5f4d76, _0x154642);
  }
  var _0x4bc30c = [];
  function _0x3ecf3f(_0x6f672e, _0x2aa246) {
    var _0x189424 = _0x4bc30c[_0x6f672e];
    for (var _0x78161d = 0; _0x78161d < _0x6f672e; _0x78161d++) {
      _0x189424[_0x78161d] = _0x5cc2c4[_0x2aa246 + _0x78161d * 4 >> 2];
    }
    _0x283457.drawBuffers(_0x189424);
  }
  function _0x429234(_0x22094c, _0x4d6732, _0x10e1c5, _0x55527d) {
    var _0x179c86;
    if (!_0x283457.currentElementArrayBufferBinding) {
      var _0x31fc3d = _0x17d2b3.calcBufLength(1, _0x10e1c5, 0, _0x4d6732);
      _0x179c86 = _0x17d2b3.getTempIndexBuffer(_0x31fc3d);
      _0x283457.bindBuffer(34963, _0x179c86);
      _0x283457.bufferSubData(34963, 0, _0x4f26b1.subarray(_0x55527d, _0x55527d + _0x31fc3d));
      _0x55527d = 0;
    }
    _0x17d2b3.preDrawHandleClientVertexAttribBindings(_0x4d6732);
    _0x283457.drawElements(_0x22094c, _0x4d6732, _0x10e1c5, _0x55527d);
    _0x17d2b3.postDrawHandleClientVertexAttribBindings(_0x4d6732);
    if (!_0x283457.currentElementArrayBufferBinding) {
      _0x283457.bindBuffer(34963, null);
    }
  }
  function _0x41ff66(_0x4206c0, _0x4ac0ba, _0x472540, _0x473e4b, _0x3ec11d) {
    _0x283457.drawElementsInstanced(_0x4206c0, _0x4ac0ba, _0x472540, _0x473e4b, _0x3ec11d);
  }
  function _0x5a1915(_0x544a1d) {
    _0x283457.enable(_0x544a1d);
  }
  function _0xf60971(_0x195a86) {
    var _0x3a5cb7 = _0x17d2b3.currentContext.clientBuffers[_0x195a86];
    _0x3a5cb7.enabled = true;
    _0x283457.enableVertexAttribArray(_0x195a86);
  }
  function _0x1f0b9f(_0x3bbf89) {
    _0x283457.endQuery(_0x3bbf89);
  }
  function _0x595ae6() {
    _0x283457.endTransformFeedback();
  }
  function _0x484f74(_0x2cc74a, _0x354f6c) {
    var _0x550be8 = _0x283457.fenceSync(_0x2cc74a, _0x354f6c);
    if (_0x550be8) {
      var _0x164706 = _0x17d2b3.getNewId(_0x17d2b3.syncs);
      _0x550be8.name = _0x164706;
      _0x17d2b3.syncs[_0x164706] = _0x550be8;
      return _0x164706;
    } else {
      return 0;
    }
  }
  function _0x123d99() {
    _0x283457.finish();
  }
  function _0x2296b8() {
    _0x283457.flush();
  }
  function _0x481ead(_0x312a5a) {
    switch (_0x312a5a) {
      case 34962:
        _0x312a5a = 34964;
        break;
      case 34963:
        _0x312a5a = 34965;
        break;
      case 35051:
        _0x312a5a = 35053;
        break;
      case 35052:
        _0x312a5a = 35055;
        break;
      case 35982:
        _0x312a5a = 35983;
        break;
      case 36662:
        _0x312a5a = 36662;
        break;
      case 36663:
        _0x312a5a = 36663;
        break;
      case 35345:
        _0x312a5a = 35368;
        break;
    }
    var _0x27b70b = _0x283457.getParameter(_0x312a5a);
    if (_0x27b70b) {
      return _0x27b70b.name | 0;
    } else {
      return 0;
    }
  }
  function _0x3302ae(_0x1add80) {
    switch (_0x1add80) {
      case 34962:
      case 34963:
      case 36662:
      case 36663:
      case 35051:
      case 35052:
      case 35882:
      case 35982:
      case 35345:
        return true;
      default:
        return false;
    }
  }
  function _0x10b3a6(_0x50de4f, _0x5e4d61, _0x3f67da) {
    if (!_0x3302ae(_0x50de4f)) {
      _0x17d2b3.recordError(1280);
      _0x516167("GL_INVALID_ENUM in glFlushMappedBufferRange");
      return;
    }
    var _0x160b1d = _0x17d2b3.mappedBuffers[_0x481ead(_0x50de4f)];
    if (!_0x160b1d) {
      _0x17d2b3.recordError(1282);
      _0x516167("buffer was never mapped in glFlushMappedBufferRange");
      return;
    }
    if (!(_0x160b1d.access & 16)) {
      _0x17d2b3.recordError(1282);
      _0x516167("buffer was not mapped with GL_MAP_FLUSH_EXPLICIT_BIT in glFlushMappedBufferRange");
      return;
    }
    if (_0x5e4d61 < 0 || _0x3f67da < 0 || _0x5e4d61 + _0x3f67da > _0x160b1d.length) {
      _0x17d2b3.recordError(1281);
      _0x516167("invalid range in glFlushMappedBufferRange");
      return;
    }
    _0x283457.bufferSubData(_0x50de4f, _0x160b1d.offset, _0x4f26b1.subarray(_0x160b1d.mem + _0x5e4d61, _0x160b1d.mem + _0x5e4d61 + _0x3f67da));
  }
  function _0x426822(_0x2b2fac, _0xe13853, _0x3f0109, _0x1cd44d) {
    _0x283457.framebufferRenderbuffer(_0x2b2fac, _0xe13853, _0x3f0109, _0x17d2b3.renderbuffers[_0x1cd44d]);
  }
  function _0x440328(_0xdc670d, _0x3f227c, _0x1e5636, _0x44869b, _0x480582) {
    _0x283457.framebufferTexture2D(_0xdc670d, _0x3f227c, _0x1e5636, _0x17d2b3.textures[_0x44869b], _0x480582);
  }
  function _0x219120(_0x24bf13, _0xa2913f, _0x25d6b8, _0x28e5d2, _0x20e03a) {
    _0x283457.framebufferTextureLayer(_0x24bf13, _0xa2913f, _0x17d2b3.textures[_0x25d6b8], _0x28e5d2, _0x20e03a);
  }
  function _0x2e1e4e(_0x3a5135) {
    _0x283457.frontFace(_0x3a5135);
  }
  function _0x4c6e31(_0x44b3f1, _0x57687a, _0x29dfaa, _0x279d78) {
    for (var _0x36a987 = 0; _0x36a987 < _0x44b3f1; _0x36a987++) {
      var _0x2c43cb = _0x283457[_0x29dfaa]();
      var _0x8e6b7f = _0x2c43cb && _0x17d2b3.getNewId(_0x279d78);
      if (_0x2c43cb) {
        _0x2c43cb.name = _0x8e6b7f;
        _0x279d78[_0x8e6b7f] = _0x2c43cb;
      } else {
        _0x17d2b3.recordError(1282);
      }
      _0x5cc2c4[_0x57687a + _0x36a987 * 4 >> 2] = _0x8e6b7f;
    }
  }
  function _0x212f0b(_0x287c77, _0x4abeec) {
    _0x4c6e31(_0x287c77, _0x4abeec, "createBuffer", _0x17d2b3.buffers);
  }
  function _0x1785f5(_0x1eec03, _0x379b98) {
    _0x4c6e31(_0x1eec03, _0x379b98, "createFramebuffer", _0x17d2b3.framebuffers);
  }
  function _0x567d86(_0x2a40f8, _0x5ec046) {
    _0x4c6e31(_0x2a40f8, _0x5ec046, "createQuery", _0x17d2b3.queries);
  }
  function _0xadfd65(_0x12e44f, _0x42103e) {
    _0x4c6e31(_0x12e44f, _0x42103e, "createRenderbuffer", _0x17d2b3.renderbuffers);
  }
  function _0x53802b(_0x13bf77, _0x4e3567) {
    _0x4c6e31(_0x13bf77, _0x4e3567, "createSampler", _0x17d2b3.samplers);
  }
  function _0x5717b7(_0xc6e332, _0x2046ff) {
    _0x4c6e31(_0xc6e332, _0x2046ff, "createTexture", _0x17d2b3.textures);
  }
  function _0x50246e(_0x2748f3, _0x41ab8b) {
    _0x4c6e31(_0x2748f3, _0x41ab8b, "createTransformFeedback", _0x17d2b3.transformFeedbacks);
  }
  function _0x472541(_0x3db40c, _0x22e53c) {
    _0x4c6e31(_0x3db40c, _0x22e53c, "createVertexArray", _0x17d2b3.vaos);
  }
  function _0x52b8a3(_0x5239ed) {
    _0x283457.generateMipmap(_0x5239ed);
  }
  function _0x1bc040(_0x3a1263, _0x274428, _0x38f3aa, _0x3fe159, _0x343f10, _0x36ef93, _0x3896a4, _0x3c2464) {
    _0x274428 = _0x17d2b3.programs[_0x274428];
    var _0x15e8ef = _0x283457[_0x3a1263](_0x274428, _0x38f3aa);
    if (_0x15e8ef) {
      var _0x124b5a = _0x3c2464 && _0x53c85c(_0x15e8ef.name, _0x3c2464, _0x3fe159);
      if (_0x343f10) {
        _0x5cc2c4[_0x343f10 >> 2] = _0x124b5a;
      }
      if (_0x36ef93) {
        _0x5cc2c4[_0x36ef93 >> 2] = _0x15e8ef.size;
      }
      if (_0x3896a4) {
        _0x5cc2c4[_0x3896a4 >> 2] = _0x15e8ef.type;
      }
    }
  }
  function _0x4bcf1a(_0x553753, _0x3d355a, _0xabc267, _0x11d093, _0x150a27, _0x21b03e, _0xfb889c) {
    _0x1bc040("getActiveAttrib", _0x553753, _0x3d355a, _0xabc267, _0x11d093, _0x150a27, _0x21b03e, _0xfb889c);
  }
  function _0x320b90(_0x4c3917, _0xa5c795, _0x5cd0d3, _0x311c84, _0x4ce7c0, _0x1cf69b, _0x5938fb) {
    _0x1bc040("getActiveUniform", _0x4c3917, _0xa5c795, _0x5cd0d3, _0x311c84, _0x4ce7c0, _0x1cf69b, _0x5938fb);
  }
  function _0x1980a3(_0x6903b7, _0x547b49, _0x99d478, _0x5b2656, _0x4803a9) {
    _0x6903b7 = _0x17d2b3.programs[_0x6903b7];
    var _0x10cd7f = _0x283457.getActiveUniformBlockName(_0x6903b7, _0x547b49);
    if (!_0x10cd7f) {
      return;
    }
    if (_0x4803a9 && _0x99d478 > 0) {
      var _0x3cccc7 = _0x53c85c(_0x10cd7f, _0x4803a9, _0x99d478);
      if (_0x5b2656) {
        _0x5cc2c4[_0x5b2656 >> 2] = _0x3cccc7;
      }
    } else if (_0x5b2656) {
      _0x5cc2c4[_0x5b2656 >> 2] = 0;
    }
  }
  function _0x55a389(_0x4dc199, _0x36fa4b, _0x3c6548, _0x5798bc) {
    if (!_0x5798bc) {
      _0x17d2b3.recordError(1281);
      return;
    }
    _0x4dc199 = _0x17d2b3.programs[_0x4dc199];
    if (_0x3c6548 == 35393) {
      var _0x5d2070 = _0x283457.getActiveUniformBlockName(_0x4dc199, _0x36fa4b);
      _0x5cc2c4[_0x5798bc >> 2] = _0x5d2070.length + 1;
      return;
    }
    var _0x160453 = _0x283457.getActiveUniformBlockParameter(_0x4dc199, _0x36fa4b, _0x3c6548);
    if (_0x160453 === null) {
      return;
    }
    if (_0x3c6548 == 35395) {
      for (var _0x458e43 = 0; _0x458e43 < _0x160453.length; _0x458e43++) {
        _0x5cc2c4[_0x5798bc + _0x458e43 * 4 >> 2] = _0x160453[_0x458e43];
      }
    } else {
      _0x5cc2c4[_0x5798bc >> 2] = _0x160453;
    }
  }
  function _0x2ee57e(_0x20acfe, _0x3ab501, _0x48f1d4, _0x46be02, _0x164b9e) {
    if (!_0x164b9e) {
      _0x17d2b3.recordError(1281);
      return;
    }
    if (_0x3ab501 > 0 && _0x48f1d4 == 0) {
      _0x17d2b3.recordError(1281);
      return;
    }
    _0x20acfe = _0x17d2b3.programs[_0x20acfe];
    var _0x485b76 = [];
    for (var _0x5e9e49 = 0; _0x5e9e49 < _0x3ab501; _0x5e9e49++) {
      _0x485b76.push(_0x5cc2c4[_0x48f1d4 + _0x5e9e49 * 4 >> 2]);
    }
    var _0x2808b4 = _0x283457.getActiveUniforms(_0x20acfe, _0x485b76, _0x46be02);
    if (!_0x2808b4) {
      return;
    }
    var _0x35be70 = _0x2808b4.length;
    for (var _0x5e9e49 = 0; _0x5e9e49 < _0x35be70; _0x5e9e49++) {
      _0x5cc2c4[_0x164b9e + _0x5e9e49 * 4 >> 2] = _0x2808b4[_0x5e9e49];
    }
  }
  function _0x484ddf(_0x1d82b1, _0xbf6710) {
    return _0x283457.getAttribLocation(_0x17d2b3.programs[_0x1d82b1], _0x3f3179(_0xbf6710));
  }
  function _0x6ab91c(_0x40d4f0, _0x4178bb, _0x2aa5e6, _0x37251e) {
    if (!_0x37251e) {
      _0x17d2b3.recordError(1281);
      return;
    }
    _0x283457.getBufferSubData(_0x40d4f0, _0x4178bb, _0x4f26b1, _0x37251e, _0x2aa5e6);
  }
  function _0x5ed13a() {
    var _0x3e280c = _0x283457.getError() || _0x17d2b3.lastError;
    _0x17d2b3.lastError = 0;
    return _0x3e280c;
  }
  function _0x1f0d84(_0x3e735b, _0x56349c, _0x45e892, _0x21e998) {
    var _0x1e9422 = _0x283457.getFramebufferAttachmentParameter(_0x3e735b, _0x56349c, _0x45e892);
    if (_0x1e9422 instanceof WebGLRenderbuffer || _0x1e9422 instanceof WebGLTexture) {
      _0x1e9422 = _0x1e9422.name | 0;
    }
    _0x5cc2c4[_0x21e998 >> 2] = _0x1e9422;
  }
  function _0x89baa7(_0x546dd2, _0x3f1eaf) {
    _0x52253e[_0x546dd2 >> 2] = _0x3f1eaf;
    _0x52253e[_0x546dd2 + 4 >> 2] = (_0x3f1eaf - _0x52253e[_0x546dd2 >> 2]) / 4294967296;
  }
  function _0x31724c(_0x34680d, _0x21524a, _0x41478f, _0x57e55f) {
    if (!_0x41478f) {
      _0x17d2b3.recordError(1281);
      return;
    }
    var _0x5134e3 = _0x283457.getIndexedParameter(_0x34680d, _0x21524a);
    var _0x2ed43;
    switch (typeof _0x5134e3) {
      case "boolean":
        _0x2ed43 = _0x5134e3 ? 1 : 0;
        break;
      case "number":
        _0x2ed43 = _0x5134e3;
        break;
      case "object":
        if (_0x5134e3 === null) {
          switch (_0x34680d) {
            case 35983:
            case 35368:
              _0x2ed43 = 0;
              break;
            default:
              {
                _0x17d2b3.recordError(1280);
                return;
              }
          }
        } else if (_0x5134e3 instanceof WebGLBuffer) {
          _0x2ed43 = _0x5134e3.name | 0;
        } else {
          _0x17d2b3.recordError(1280);
          return;
        }
        break;
      default:
        _0x17d2b3.recordError(1280);
        return;
    }
    switch (_0x57e55f) {
      case 1:
        _0x89baa7(_0x41478f, _0x2ed43);
        break;
      case 0:
        _0x5cc2c4[_0x41478f >> 2] = _0x2ed43;
        break;
      case 2:
        _0x2c2a07[_0x41478f >> 2] = _0x2ed43;
        break;
      case 4:
        _0xb3d98[_0x41478f >> 0] = _0x2ed43 ? 1 : 0;
        break;
      default:
        throw "internal emscriptenWebGLGetIndexed() error, bad type: " + _0x57e55f;
    }
  }
  function _0x5b9c0d(_0x3d5054, _0x266ed5, _0x502e4d) {
    _0x31724c(_0x3d5054, _0x266ed5, _0x502e4d, 0);
  }
  function _0x16e0a2(_0x1dcff8, _0xdc9d2d, _0x1b0e06) {
    if (!_0xdc9d2d) {
      _0x17d2b3.recordError(1281);
      return;
    }
    var _0xed78fe = undefined;
    switch (_0x1dcff8) {
      case 36346:
        _0xed78fe = 1;
        break;
      case 36344:
        if (_0x1b0e06 != 0 && _0x1b0e06 != 1) {
          _0x17d2b3.recordError(1280);
        }
        return;
      case 34814:
      case 36345:
        _0xed78fe = 0;
        break;
      case 34466:
        var _0x351b1d = _0x283457.getParameter(34467);
        _0xed78fe = _0x351b1d ? _0x351b1d.length : 0;
        break;
      case 33390:
        _0xed78fe = 1048576;
        break;
      case 33309:
        if (_0x17d2b3.currentContext.version < 2) {
          _0x17d2b3.recordError(1282);
          return;
        }
        var _0x5b56c7 = _0x283457.getSupportedExtensions() || [];
        _0xed78fe = _0x5b56c7.length * 2;
        break;
      case 33307:
      case 33308:
        if (_0x17d2b3.currentContext.version < 2) {
          _0x17d2b3.recordError(1280);
          return;
        }
        _0xed78fe = _0x1dcff8 == 33307 ? 3 : 0;
        break;
    }
    if (_0xed78fe === undefined) {
      var _0x36eb80 = _0x283457.getParameter(_0x1dcff8);
      switch (typeof _0x36eb80) {
        case "number":
          _0xed78fe = _0x36eb80;
          break;
        case "boolean":
          _0xed78fe = _0x36eb80 ? 1 : 0;
          break;
        case "string":
          _0x17d2b3.recordError(1280);
          return;
        case "object":
          if (_0x36eb80 === null) {
            switch (_0x1dcff8) {
              case 34964:
              case 35725:
              case 34965:
              case 36006:
              case 36007:
              case 32873:
              case 34229:
              case 36662:
              case 36663:
              case 35053:
              case 35055:
              case 36010:
              case 35097:
              case 35869:
              case 32874:
              case 36389:
              case 35983:
              case 35368:
              case 34068:
                {
                  _0xed78fe = 0;
                  break;
                }
              default:
                {
                  _0x17d2b3.recordError(1280);
                  return;
                }
            }
          } else if (_0x36eb80 instanceof Float32Array || _0x36eb80 instanceof Uint32Array || _0x36eb80 instanceof Int32Array || _0x36eb80 instanceof Array) {
            for (var _0xf665fa = 0; _0xf665fa < _0x36eb80.length; ++_0xf665fa) {
              switch (_0x1b0e06) {
                case 0:
                  _0x5cc2c4[_0xdc9d2d + _0xf665fa * 4 >> 2] = _0x36eb80[_0xf665fa];
                  break;
                case 2:
                  _0x2c2a07[_0xdc9d2d + _0xf665fa * 4 >> 2] = _0x36eb80[_0xf665fa];
                  break;
                case 4:
                  _0xb3d98[_0xdc9d2d + _0xf665fa >> 0] = _0x36eb80[_0xf665fa] ? 1 : 0;
                  break;
              }
            }
            return;
          } else {
            try {
              _0xed78fe = _0x36eb80.name | 0;
            } catch (_0x3bc7f9) {
              _0x17d2b3.recordError(1280);
              _0x516167("GL_INVALID_ENUM in glGet" + _0x1b0e06 + "v: Unknown object returned from WebGL getParameter(" + _0x1dcff8 + ")! (error: " + _0x3bc7f9 + ")");
              return;
            }
          }
          break;
        default:
          _0x17d2b3.recordError(1280);
          _0x516167("GL_INVALID_ENUM in glGet" + _0x1b0e06 + "v: Native code calling glGet" + _0x1b0e06 + "v(" + _0x1dcff8 + ") and it returns " + _0x36eb80 + " of type " + typeof _0x36eb80 + "!");
          return;
      }
    }
    switch (_0x1b0e06) {
      case 1:
        _0x89baa7(_0xdc9d2d, _0xed78fe);
        break;
      case 0:
        _0x5cc2c4[_0xdc9d2d >> 2] = _0xed78fe;
        break;
      case 2:
        _0x2c2a07[_0xdc9d2d >> 2] = _0xed78fe;
        break;
      case 4:
        _0xb3d98[_0xdc9d2d >> 0] = _0xed78fe ? 1 : 0;
        break;
    }
  }
  function _0x2a3cba(_0x280d3f, _0x57c1a1) {
    _0x16e0a2(_0x280d3f, _0x57c1a1, 0);
  }
  function _0x38de4f(_0x169970, _0x1d0ac3, _0x5afbe4, _0x32a20d, _0x4f8c77) {
    if (_0x32a20d < 0) {
      _0x17d2b3.recordError(1281);
      return;
    }
    if (!_0x4f8c77) {
      _0x17d2b3.recordError(1281);
      return;
    }
    var _0x286449 = _0x283457.getInternalformatParameter(_0x169970, _0x1d0ac3, _0x5afbe4);
    if (_0x286449 === null) {
      return;
    }
    for (var _0x5a1ed7 = 0; _0x5a1ed7 < _0x286449.length && _0x5a1ed7 < _0x32a20d; ++_0x5a1ed7) {
      _0x5cc2c4[_0x4f8c77 + _0x5a1ed7 * 4 >> 2] = _0x286449[_0x5a1ed7];
    }
  }
  function _0x32cdcb(_0x14631e, _0x5cc34f, _0x2d5278, _0x4c5dd8, _0xe95684) {
    _0x17d2b3.recordError(1282);
  }
  function _0x128881(_0x253eb3, _0x4bae21, _0x36dd9c, _0x584a00) {
    var _0x1fc02a = _0x283457.getProgramInfoLog(_0x17d2b3.programs[_0x253eb3]);
    if (_0x1fc02a === null) {
      _0x1fc02a = "(unknown error)";
    }
    var _0x3d41b8 = _0x4bae21 > 0 && _0x584a00 ? _0x53c85c(_0x1fc02a, _0x584a00, _0x4bae21) : 0;
    if (_0x36dd9c) {
      _0x5cc2c4[_0x36dd9c >> 2] = _0x3d41b8;
    }
  }
  function _0x31d0b9(_0x3256e, _0x251a04, _0xe29ed) {
    if (!_0xe29ed) {
      _0x17d2b3.recordError(1281);
      return;
    }
    if (_0x3256e >= _0x17d2b3.counter) {
      _0x17d2b3.recordError(1281);
      return;
    }
    _0x3256e = _0x17d2b3.programs[_0x3256e];
    if (_0x251a04 == 35716) {
      var _0x9c615e = _0x283457.getProgramInfoLog(_0x3256e);
      if (_0x9c615e === null) {
        _0x9c615e = "(unknown error)";
      }
      _0x5cc2c4[_0xe29ed >> 2] = _0x9c615e.length + 1;
    } else if (_0x251a04 == 35719) {
      if (!_0x3256e.maxUniformLength) {
        for (var _0x4755b9 = 0; _0x4755b9 < _0x283457.getProgramParameter(_0x3256e, 35718); ++_0x4755b9) {
          _0x3256e.maxUniformLength = Math.max(_0x3256e.maxUniformLength, _0x283457.getActiveUniform(_0x3256e, _0x4755b9).name.length + 1);
        }
      }
      _0x5cc2c4[_0xe29ed >> 2] = _0x3256e.maxUniformLength;
    } else if (_0x251a04 == 35722) {
      if (!_0x3256e.maxAttributeLength) {
        for (var _0x4755b9 = 0; _0x4755b9 < _0x283457.getProgramParameter(_0x3256e, 35721); ++_0x4755b9) {
          _0x3256e.maxAttributeLength = Math.max(_0x3256e.maxAttributeLength, _0x283457.getActiveAttrib(_0x3256e, _0x4755b9).name.length + 1);
        }
      }
      _0x5cc2c4[_0xe29ed >> 2] = _0x3256e.maxAttributeLength;
    } else if (_0x251a04 == 35381) {
      if (!_0x3256e.maxUniformBlockNameLength) {
        for (var _0x4755b9 = 0; _0x4755b9 < _0x283457.getProgramParameter(_0x3256e, 35382); ++_0x4755b9) {
          _0x3256e.maxUniformBlockNameLength = Math.max(_0x3256e.maxUniformBlockNameLength, _0x283457.getActiveUniformBlockName(_0x3256e, _0x4755b9).length + 1);
        }
      }
      _0x5cc2c4[_0xe29ed >> 2] = _0x3256e.maxUniformBlockNameLength;
    } else {
      _0x5cc2c4[_0xe29ed >> 2] = _0x283457.getProgramParameter(_0x3256e, _0x251a04);
    }
  }
  function _0x3fc145(_0x2b16a2, _0xf8934a, _0x385938) {
    if (!_0x385938) {
      _0x17d2b3.recordError(1281);
      return;
    }
    var _0x3c75f5 = _0x17d2b3.queries[_0x2b16a2];
    var _0x1e12de = _0x283457.getQueryParameter(_0x3c75f5, _0xf8934a);
    var _0x586f45;
    if (typeof _0x1e12de == "boolean") {
      _0x586f45 = _0x1e12de ? 1 : 0;
    } else {
      _0x586f45 = _0x1e12de;
    }
    _0x5cc2c4[_0x385938 >> 2] = _0x586f45;
  }
  function _0x229b79(_0x3478d6, _0x18d2c7, _0xf66784) {
    if (!_0xf66784) {
      _0x17d2b3.recordError(1281);
      return;
    }
    _0x5cc2c4[_0xf66784 >> 2] = _0x283457.getQuery(_0x3478d6, _0x18d2c7);
  }
  function _0x530a9d(_0x47a20d, _0x357c34, _0x3c6d3b) {
    if (!_0x3c6d3b) {
      _0x17d2b3.recordError(1281);
      return;
    }
    _0x5cc2c4[_0x3c6d3b >> 2] = _0x283457.getRenderbufferParameter(_0x47a20d, _0x357c34);
  }
  function _0x36abbb(_0x4f0d30, _0x23b494, _0xa50bcc, _0x45c9b7) {
    var _0x3fb0ae = _0x283457.getShaderInfoLog(_0x17d2b3.shaders[_0x4f0d30]);
    if (_0x3fb0ae === null) {
      _0x3fb0ae = "(unknown error)";
    }
    var _0x4d31ce = _0x23b494 > 0 && _0x45c9b7 ? _0x53c85c(_0x3fb0ae, _0x45c9b7, _0x23b494) : 0;
    if (_0xa50bcc) {
      _0x5cc2c4[_0xa50bcc >> 2] = _0x4d31ce;
    }
  }
  function _0x51517a(_0x4344ba, _0x157094, _0x4ac8bd, _0x2ec0ad) {
    var _0x3774a9 = _0x283457.getShaderPrecisionFormat(_0x4344ba, _0x157094);
    _0x5cc2c4[_0x4ac8bd >> 2] = _0x3774a9.rangeMin;
    _0x5cc2c4[_0x4ac8bd + 4 >> 2] = _0x3774a9.rangeMax;
    _0x5cc2c4[_0x2ec0ad >> 2] = _0x3774a9.precision;
  }
  function _0x472919(_0x493b56, _0x21aa69, _0x21f9bc, _0x38e755) {
    var _0x3365d5 = _0x283457.getShaderSource(_0x17d2b3.shaders[_0x493b56]);
    if (!_0x3365d5) {
      return;
    }
    var _0x2c0da2 = _0x21aa69 > 0 && _0x38e755 ? _0x53c85c(_0x3365d5, _0x38e755, _0x21aa69) : 0;
    if (_0x21f9bc) {
      _0x5cc2c4[_0x21f9bc >> 2] = _0x2c0da2;
    }
  }
  function _0x5c924e(_0x684e4e, _0x1d63ed, _0x3868cb) {
    if (!_0x3868cb) {
      _0x17d2b3.recordError(1281);
      return;
    }
    if (_0x1d63ed == 35716) {
      var _0x15b8f3 = _0x283457.getShaderInfoLog(_0x17d2b3.shaders[_0x684e4e]);
      if (_0x15b8f3 === null) {
        _0x15b8f3 = "(unknown error)";
      }
      var _0x49e2b0 = _0x15b8f3 ? _0x15b8f3.length + 1 : 0;
      _0x5cc2c4[_0x3868cb >> 2] = _0x49e2b0;
    } else if (_0x1d63ed == 35720) {
      var _0x27dfc0 = _0x283457.getShaderSource(_0x17d2b3.shaders[_0x684e4e]);
      var _0x4d7110 = _0x27dfc0 ? _0x27dfc0.length + 1 : 0;
      _0x5cc2c4[_0x3868cb >> 2] = _0x4d7110;
    } else {
      _0x5cc2c4[_0x3868cb >> 2] = _0x283457.getShaderParameter(_0x17d2b3.shaders[_0x684e4e], _0x1d63ed);
    }
  }
  function _0x382027(_0x348b81) {
    var _0x34966b = _0x17d2b3.stringCache[_0x348b81];
    if (!_0x34966b) {
      switch (_0x348b81) {
        case 7939:
          var _0xb112c8 = _0x283457.getSupportedExtensions() || [];
          _0xb112c8 = _0xb112c8.concat(_0xb112c8.map(function (_0xc57a60) {
            return "GL_" + _0xc57a60;
          }));
          _0x34966b = _0x59a36d(_0xb112c8.join(" "));
          break;
        case 7936:
        case 7937:
        case 37445:
        case 37446:
          var _0x50e7d3 = _0x283457.getParameter(_0x348b81);
          if (!_0x50e7d3) {
            _0x17d2b3.recordError(1280);
          }
          _0x34966b = _0x50e7d3 && _0x59a36d(_0x50e7d3);
          break;
        case 7938:
          var _0x387af3 = _0x283457.getParameter(7938);
          if (_0x17d2b3.currentContext.version >= 2) {
            _0x387af3 = "OpenGL ES 3.0 (" + _0x387af3 + ")";
          } else {
            _0x387af3 = "OpenGL ES 2.0 (" + _0x387af3 + ")";
          }
          _0x34966b = _0x59a36d(_0x387af3);
          break;
        case 35724:
          var _0x22a87f = _0x283457.getParameter(35724);
          var _0x35ba77 = /^WebGL GLSL ES ([0-9]\.[0-9][0-9]?)(?:$| .*)/;
          var _0x405469 = _0x22a87f.match(_0x35ba77);
          if (_0x405469 !== null) {
            if (_0x405469[1].length == 3) {
              _0x405469[1] = _0x405469[1] + "0";
            }
            _0x22a87f = "OpenGL ES GLSL ES " + _0x405469[1] + " (" + _0x22a87f + ")";
          }
          _0x34966b = _0x59a36d(_0x22a87f);
          break;
        default:
          _0x17d2b3.recordError(1280);
      }
      _0x17d2b3.stringCache[_0x348b81] = _0x34966b;
    }
    return _0x34966b;
  }
  function _0x471111(_0x4b642e, _0x827c64) {
    if (_0x17d2b3.currentContext.version < 2) {
      _0x17d2b3.recordError(1282);
      return 0;
    }
    var _0x4e14e3 = _0x17d2b3.stringiCache[_0x4b642e];
    if (_0x4e14e3) {
      if (_0x827c64 < 0 || _0x827c64 >= _0x4e14e3.length) {
        _0x17d2b3.recordError(1281);
        return 0;
      }
      return _0x4e14e3[_0x827c64];
    }
    switch (_0x4b642e) {
      case 7939:
        var _0x3c2f3f = _0x283457.getSupportedExtensions() || [];
        _0x3c2f3f = _0x3c2f3f.concat(_0x3c2f3f.map(function (_0x281fc3) {
          return "GL_" + _0x281fc3;
        }));
        _0x3c2f3f = _0x3c2f3f.map(function (_0x324acf) {
          return _0x59a36d(_0x324acf);
        });
        _0x4e14e3 = _0x17d2b3.stringiCache[_0x4b642e] = _0x3c2f3f;
        if (_0x827c64 < 0 || _0x827c64 >= _0x4e14e3.length) {
          _0x17d2b3.recordError(1281);
          return 0;
        }
        return _0x4e14e3[_0x827c64];
      default:
        _0x17d2b3.recordError(1280);
        return 0;
    }
  }
  function _0x1bb5a6(_0x12c3b3, _0x2e61ad, _0x1a89d0) {
    if (!_0x1a89d0) {
      _0x17d2b3.recordError(1281);
      return;
    }
    _0x5cc2c4[_0x1a89d0 >> 2] = _0x283457.getTexParameter(_0x12c3b3, _0x2e61ad);
  }
  function _0x188f1e(_0xa4c7b3, _0x1e191b) {
    return _0x283457.getUniformBlockIndex(_0x17d2b3.programs[_0xa4c7b3], _0x3f3179(_0x1e191b));
  }
  function _0x1e50fe(_0x5f1dd0, _0x4a7886, _0x261187, _0x298801) {
    if (!_0x298801) {
      _0x17d2b3.recordError(1281);
      return;
    }
    if (_0x4a7886 > 0 && (_0x261187 == 0 || _0x298801 == 0)) {
      _0x17d2b3.recordError(1281);
      return;
    }
    _0x5f1dd0 = _0x17d2b3.programs[_0x5f1dd0];
    var _0x2cf603 = [];
    for (var _0x1a0a67 = 0; _0x1a0a67 < _0x4a7886; _0x1a0a67++) {
      _0x2cf603.push(_0x3f3179(_0x5cc2c4[_0x261187 + _0x1a0a67 * 4 >> 2]));
    }
    var _0x5c3ef0 = _0x283457.getUniformIndices(_0x5f1dd0, _0x2cf603);
    if (!_0x5c3ef0) {
      return;
    }
    var _0x1cc50f = _0x5c3ef0.length;
    for (var _0x1a0a67 = 0; _0x1a0a67 < _0x1cc50f; _0x1a0a67++) {
      _0x5cc2c4[_0x298801 + _0x1a0a67 * 4 >> 2] = _0x5c3ef0[_0x1a0a67];
    }
  }
  function _0x387322(_0x100b18, _0x46a701) {
    function _0x5ae8cb(_0x43b126) {
      return _0x43b126.slice(-1) == "]" && _0x43b126.lastIndexOf("[");
    }
    _0x46a701 = _0x3f3179(_0x46a701);
    if (_0x100b18 = _0x17d2b3.programs[_0x100b18]) {
      var _0x3410ae = _0x100b18.uniformLocsById;
      var _0x27f8db = _0x100b18.uniformSizeAndIdsByName;
      var _0x138949;
      var _0x5afa0b;
      var _0x2b2d72 = 0;
      var _0x274fb5 = _0x46a701;
      var _0x28d6c6 = _0x5ae8cb(_0x46a701);
      if (!_0x3410ae) {
        _0x100b18.uniformLocsById = _0x3410ae = {};
        _0x100b18.uniformArrayNamesById = {};
        for (_0x138949 = 0; _0x138949 < _0x283457.getProgramParameter(_0x100b18, 35718); ++_0x138949) {
          var _0xb1d71f = _0x283457.getActiveUniform(_0x100b18, _0x138949);
          var _0x233419 = _0xb1d71f.name;
          var _0xbcace7 = _0xb1d71f.size;
          var _0x4fc546 = _0x5ae8cb(_0x233419);
          var _0x4be23d = _0x4fc546 > 0 ? _0x233419.slice(0, _0x4fc546) : _0x233419;
          var _0x4bd208 = _0x27f8db[_0x4be23d] ? _0x27f8db[_0x4be23d][1] : _0x100b18.uniformIdCounter;
          _0x100b18.uniformIdCounter = Math.max(_0x4bd208 + _0xbcace7, _0x100b18.uniformIdCounter);
          _0x27f8db[_0x4be23d] = [_0xbcace7, _0x4bd208];
          for (_0x5afa0b = 0; _0x5afa0b < _0xbcace7; ++_0x5afa0b) {
            _0x3410ae[_0x4bd208] = _0x5afa0b;
            _0x100b18.uniformArrayNamesById[_0x4bd208++] = _0x4be23d;
          }
        }
      }
      if (_0x28d6c6 > 0) {
        _0x2b2d72 = _0x3c269d(_0x46a701.slice(_0x28d6c6 + 1)) >>> 0;
        _0x274fb5 = _0x46a701.slice(0, _0x28d6c6);
      }
      var _0x184513 = _0x27f8db[_0x274fb5];
      if (_0x184513 && _0x2b2d72 < _0x184513[0]) {
        _0x2b2d72 += _0x184513[1];
        if (_0x3410ae[_0x2b2d72] = _0x3410ae[_0x2b2d72] || _0x283457.getUniformLocation(_0x100b18, _0x46a701)) {
          return _0x2b2d72;
        }
      }
    } else {
      _0x17d2b3.recordError(1281);
    }
    return -1;
  }
  function _0x58cae9(_0x2d28d1) {
    var _0xb4b939 = _0x283457.currentProgram;
    if (_0xb4b939) {
      var _0x326a63 = _0xb4b939.uniformLocsById[_0x2d28d1];
      if (typeof _0x326a63 === "number") {
        _0xb4b939.uniformLocsById[_0x2d28d1] = _0x326a63 = _0x283457.getUniformLocation(_0xb4b939, _0xb4b939.uniformArrayNamesById[_0x2d28d1] + (_0x326a63 > 0 ? "[" + _0x326a63 + "]" : ""));
      }
      return _0x326a63;
    } else {
      _0x17d2b3.recordError(1282);
    }
  }
  function _0x315727(_0xfc7b77, _0x48e7f4, _0x44bc75, _0x3c8e39) {
    if (!_0x44bc75) {
      _0x17d2b3.recordError(1281);
      return;
    }
    _0xfc7b77 = _0x17d2b3.programs[_0xfc7b77];
    var _0x289bf7 = _0x283457.getUniform(_0xfc7b77, _0x58cae9(_0x48e7f4));
    if (typeof _0x289bf7 == "number" || typeof _0x289bf7 == "boolean") {
      switch (_0x3c8e39) {
        case 0:
          _0x5cc2c4[_0x44bc75 >> 2] = _0x289bf7;
          break;
        case 2:
          _0x2c2a07[_0x44bc75 >> 2] = _0x289bf7;
          break;
      }
    } else {
      for (var _0xb37a07 = 0; _0xb37a07 < _0x289bf7.length; _0xb37a07++) {
        switch (_0x3c8e39) {
          case 0:
            _0x5cc2c4[_0x44bc75 + _0xb37a07 * 4 >> 2] = _0x289bf7[_0xb37a07];
            break;
          case 2:
            _0x2c2a07[_0x44bc75 + _0xb37a07 * 4 >> 2] = _0x289bf7[_0xb37a07];
            break;
        }
      }
    }
  }
  function _0x29bc17(_0x59648f, _0x5c54f9, _0x440028) {
    _0x315727(_0x59648f, _0x5c54f9, _0x440028, 0);
  }
  function _0x1b25ef(_0x195cf3, _0x426968, _0x2fed99, _0x1368e2) {
    if (!_0x2fed99) {
      _0x17d2b3.recordError(1281);
      return;
    }
    if (_0x17d2b3.currentContext.clientBuffers[_0x195cf3].enabled) {
      _0x516167("glGetVertexAttrib*v on client-side array: not supported, bad data returned");
    }
    var _0x48b049 = _0x283457.getVertexAttrib(_0x195cf3, _0x426968);
    if (_0x426968 == 34975) {
      _0x5cc2c4[_0x2fed99 >> 2] = _0x48b049 && _0x48b049.name;
    } else if (typeof _0x48b049 == "number" || typeof _0x48b049 == "boolean") {
      switch (_0x1368e2) {
        case 0:
          _0x5cc2c4[_0x2fed99 >> 2] = _0x48b049;
          break;
        case 2:
          _0x2c2a07[_0x2fed99 >> 2] = _0x48b049;
          break;
        case 5:
          _0x5cc2c4[_0x2fed99 >> 2] = Math.fround(_0x48b049);
          break;
      }
    } else {
      for (var _0x36bd02 = 0; _0x36bd02 < _0x48b049.length; _0x36bd02++) {
        switch (_0x1368e2) {
          case 0:
            _0x5cc2c4[_0x2fed99 + _0x36bd02 * 4 >> 2] = _0x48b049[_0x36bd02];
            break;
          case 2:
            _0x2c2a07[_0x2fed99 + _0x36bd02 * 4 >> 2] = _0x48b049[_0x36bd02];
            break;
          case 5:
            _0x5cc2c4[_0x2fed99 + _0x36bd02 * 4 >> 2] = Math.fround(_0x48b049[_0x36bd02]);
            break;
        }
      }
    }
  }
  function _0x8a213e(_0x2cdc4f, _0xa4d444, _0x273587) {
    _0x1b25ef(_0x2cdc4f, _0xa4d444, _0x273587, 5);
  }
  function _0x3d6ee8(_0x7202b6, _0x2f633a, _0x25d129) {
    var _0x2de38c = _0x4bc30c[_0x2f633a];
    for (var _0x24fbab = 0; _0x24fbab < _0x2f633a; _0x24fbab++) {
      _0x2de38c[_0x24fbab] = _0x5cc2c4[_0x25d129 + _0x24fbab * 4 >> 2];
    }
    _0x283457.invalidateFramebuffer(_0x7202b6, _0x2de38c);
  }
  function _0x366e81(_0x35ba93) {
    return _0x283457.isEnabled(_0x35ba93);
  }
  function _0x22e74c(_0x3529c6) {
    var _0x382aca = _0x17d2b3.vaos[_0x3529c6];
    if (!_0x382aca) {
      return 0;
    }
    return _0x283457.isVertexArray(_0x382aca);
  }
  function _0x355020(_0x25ab75) {
    _0x25ab75 = _0x17d2b3.programs[_0x25ab75];
    _0x283457.linkProgram(_0x25ab75);
    _0x25ab75.uniformLocsById = 0;
    _0x25ab75.uniformSizeAndIdsByName = {};
    [_0x25ab75.vs, _0x25ab75.fs].forEach(function (_0x505765) {
      Object.keys(_0x505765.explicitUniformLocations).forEach(function (_0x31f769) {
        var _0x5358cd = _0x505765.explicitUniformLocations[_0x31f769];
        _0x25ab75.uniformSizeAndIdsByName[_0x31f769] = [1, _0x5358cd];
        _0x25ab75.uniformIdCounter = Math.max(_0x25ab75.uniformIdCounter, _0x5358cd + 1);
      });
    });
    function _0x13d9b5(_0x214fde, _0x19c5c6) {
      Object.keys(_0x19c5c6).forEach(function (_0x110597) {
        _0x214fde[_0x110597] = _0x19c5c6[_0x110597];
      });
    }
    _0x25ab75.explicitUniformBindings = {};
    _0x25ab75.explicitSamplerBindings = {};
    [_0x25ab75.vs, _0x25ab75.fs].forEach(function (_0x3ceed7) {
      _0x13d9b5(_0x25ab75.explicitUniformBindings, _0x3ceed7.explicitUniformBindings);
      _0x13d9b5(_0x25ab75.explicitSamplerBindings, _0x3ceed7.explicitSamplerBindings);
    });
    _0x25ab75.explicitProgramBindingsApplied = 0;
  }
  function _0x35c684(_0x5af6e1, _0x72a428, _0x3a4880, _0x48a68a) {
    if (_0x48a68a != 26 && _0x48a68a != 10) {
      _0x516167("glMapBufferRange is only supported when access is MAP_WRITE|INVALIDATE_BUFFER");
      return 0;
    }
    if (!_0x3302ae(_0x5af6e1)) {
      _0x17d2b3.recordError(1280);
      _0x516167("GL_INVALID_ENUM in glMapBufferRange");
      return 0;
    }
    var _0x595779 = _0x253dd7(_0x3a4880);
    if (!_0x595779) {
      return 0;
    }
    _0x17d2b3.mappedBuffers[_0x481ead(_0x5af6e1)] = {
      offset: _0x72a428,
      length: _0x3a4880,
      mem: _0x595779,
      access: _0x48a68a
    };
    return _0x595779;
  }
  function _0x28c02e(_0x3496db, _0x427c74) {
    if (_0x3496db == 3317) {
      _0x17d2b3.unpackAlignment = _0x427c74;
    }
    _0x283457.pixelStorei(_0x3496db, _0x427c74);
  }
  function _0x5e897c(_0x45c851, _0xb1f586) {
    _0x283457.polygonOffset(_0x45c851, _0xb1f586);
  }
  function _0x337b68(_0x35eaa6, _0x59c7b6, _0x48c6f7, _0x730d37) {
    _0x17d2b3.recordError(1280);
  }
  function _0x287242(_0x1a1ab6, _0x2ebd3c, _0x160178) {
    _0x17d2b3.recordError(1280);
  }
  function _0x3b7bc0(_0x24cd8c) {
    _0x283457.readBuffer(_0x24cd8c);
  }
  function _0x5be0da(_0x2c6b75, _0xf72ac7, _0x9af55b, _0x48b8a9) {
    function _0x10f2bd(_0x5278f7, _0x12ac02) {
      return _0x5278f7 + _0x12ac02 - 1 & -_0x12ac02;
    }
    var _0x5740a9 = _0x2c6b75 * _0x9af55b;
    var _0xe79a0a = _0x10f2bd(_0x5740a9, _0x48b8a9);
    return _0xf72ac7 * _0xe79a0a;
  }
  function _0x5f2861(_0x56b4f7) {
    var _0x38c53a = {
      5: 3,
      6: 4,
      8: 2,
      29502: 3,
      29504: 4,
      26917: 2,
      26918: 2,
      29846: 3,
      29847: 4
    };
    return _0x38c53a[_0x56b4f7 - 6402] || 1;
  }
  function _0x25c41e(_0x495404) {
    _0x495404 -= 5120;
    if (_0x495404 == 0) {
      return _0xb3d98;
    }
    if (_0x495404 == 1) {
      return _0x4f26b1;
    }
    if (_0x495404 == 2) {
      return _0x30f41b;
    }
    if (_0x495404 == 4) {
      return _0x5cc2c4;
    }
    if (_0x495404 == 6) {
      return _0x2c2a07;
    }
    if (_0x495404 == 5 || _0x495404 == 28922 || _0x495404 == 28520 || _0x495404 == 30779 || _0x495404 == 30782) {
      return _0x52253e;
    }
    return _0x2cfdbc;
  }
  function _0x2947a7(_0x352469) {
    return 31 - Math.clz32(_0x352469.BYTES_PER_ELEMENT);
  }
  function _0x461c96(_0x2fb916, _0x21891b, _0x1bf3b2, _0xee07f3, _0x36b11a, _0x44b414) {
    var _0x282f7f = _0x25c41e(_0x2fb916);
    var _0x510be6 = _0x2947a7(_0x282f7f);
    var _0x335add = 1 << _0x510be6;
    var _0x563992 = _0x5f2861(_0x21891b) * _0x335add;
    var _0x432390 = _0x5be0da(_0x1bf3b2, _0xee07f3, _0x563992, _0x17d2b3.unpackAlignment);
    return _0x282f7f.subarray(_0x36b11a >> _0x510be6, _0x36b11a + _0x432390 >> _0x510be6);
  }
  function _0x3a7ca7(_0x1094d2, _0x441109, _0x41291b, _0x59b8ae, _0x139bfd, _0x4d8ac8, _0x2f7595) {
    if (_0x17d2b3.currentContext.version >= 2) {
      if (_0x283457.currentPixelPackBufferBinding) {
        _0x283457.readPixels(_0x1094d2, _0x441109, _0x41291b, _0x59b8ae, _0x139bfd, _0x4d8ac8, _0x2f7595);
      } else {
        var _0x3d658b = _0x25c41e(_0x4d8ac8);
        _0x283457.readPixels(_0x1094d2, _0x441109, _0x41291b, _0x59b8ae, _0x139bfd, _0x4d8ac8, _0x3d658b, _0x2f7595 >> _0x2947a7(_0x3d658b));
      }
      return;
    }
    var _0x2d4dbc = _0x461c96(_0x4d8ac8, _0x139bfd, _0x41291b, _0x59b8ae, _0x2f7595, _0x139bfd);
    if (!_0x2d4dbc) {
      _0x17d2b3.recordError(1280);
      return;
    }
    _0x283457.readPixels(_0x1094d2, _0x441109, _0x41291b, _0x59b8ae, _0x139bfd, _0x4d8ac8, _0x2d4dbc);
  }
  function _0x2f03cb(_0x1b306c, _0x56b416, _0x1e5197, _0x2c9f10) {
    _0x283457.renderbufferStorage(_0x1b306c, _0x56b416, _0x1e5197, _0x2c9f10);
  }
  function _0x3c700c(_0x19f4cd, _0x36d08f, _0x25e46c, _0xb23f8a, _0x520e3d) {
    _0x283457.renderbufferStorageMultisample(_0x19f4cd, _0x36d08f, _0x25e46c, _0xb23f8a, _0x520e3d);
  }
  function _0x13cd7a(_0x191d65, _0x256f8c, _0x10e73c) {
    _0x283457.samplerParameteri(_0x17d2b3.samplers[_0x191d65], _0x256f8c, _0x10e73c);
  }
  function _0x479870(_0x552a23, _0xf174ed, _0x45fbcf, _0x11e8ce) {
    _0x283457.scissor(_0x552a23, _0xf174ed, _0x45fbcf, _0x11e8ce);
  }
  function _0x46f493(_0x29fdba, _0x1bf137, _0x22a663 = "(", _0xc12e7d = ")") {
    var _0x2535b1 = 0;
    for (; _0x1bf137 < _0x29fdba.length; ++_0x1bf137) {
      if (_0x29fdba[_0x1bf137] == _0x22a663) {
        ++_0x2535b1;
      }
      if (_0x29fdba[_0x1bf137] == _0xc12e7d && --_0x2535b1 == 0) {
        return _0x1bf137;
      }
    }
  }
  function _0x287f9b(_0x41013c) {
    var _0xe1d4c4 = 0;
    var _0x26a42a = _0x41013c.length;
    var _0x4b35ef = "";
    var _0x4acfd4 = [1];
    var _0x1e6478 = {
      defined: function (_0x5aa9fd) {
        if (_0x1e6478[_0x5aa9fd[0]]) {
          return 1;
        } else {
          return 0;
        }
      },
      GL_FRAGMENT_PRECISION_HIGH: function () {
        return 1;
      }
    };
    function _0x44f717(_0x1b6040, _0x1e09b8) {
      return !(_0x1b6040.charCodeAt(_0x1e09b8) > 32);
    }
    function _0x6c60eb(_0x4c3018, _0x6945f5) {
      while (!_0x44f717(_0x4c3018, _0x6945f5)) {
        ++_0x6945f5;
      }
      return _0x6945f5;
    }
    function _0x5d5976(_0x241542, _0x2ef1f7) {
      var _0x3a5c09 = _0x241542.charCodeAt(_0x2ef1f7);
      if (_0x3a5c09 > 32) {
        if (_0x3a5c09 < 48) {
          return 1;
        }
        if (_0x3a5c09 < 58) {
          return 2;
        }
        if (_0x3a5c09 < 65) {
          return 1;
        }
        if (_0x3a5c09 < 91 || _0x3a5c09 == 95) {
          return 3;
        }
        if (_0x3a5c09 < 97) {
          return 1;
        }
        if (_0x3a5c09 < 123) {
          return 3;
        }
        return 1;
      }
      if (_0x3a5c09 < 33) {
        return 0;
      } else {
        return 4;
      }
    }
    function _0x176160(_0x55e032, _0x20906f) {
      var _0x72b7d = [];
      var _0x1df28a = _0x55e032.length;
      for (var _0x67f332 = 0; _0x67f332 <= _0x1df28a; ++_0x67f332) {
        var _0x18daac = _0x5d5976(_0x55e032, _0x67f332);
        if (_0x18daac == 2 || _0x18daac == 3) {
          for (var _0x46916a = _0x67f332 + 1; _0x46916a <= _0x1df28a; ++_0x46916a) {
            var _0x419430 = _0x5d5976(_0x55e032, _0x46916a);
            if (_0x419430 != _0x18daac && (_0x419430 != 2 || _0x18daac != 3)) {
              _0x72b7d.push(_0x55e032.substring(_0x67f332, _0x46916a));
              _0x67f332 = _0x46916a - 1;
              break;
            }
          }
        } else if (_0x18daac == 1) {
          var _0x4cf5e1 = _0x55e032.substr(_0x67f332, 2);
          if (["<=", ">=", "==", "!=", "&&", "||"].includes(_0x4cf5e1)) {
            _0x72b7d.push(_0x4cf5e1);
            ++_0x67f332;
          } else {
            _0x72b7d.push(_0x55e032[_0x67f332]);
          }
        }
      }
      return _0x72b7d;
    }
    function _0x1b5bab(_0x32c619, _0x493861, _0x259b55 = _0x32c619.length) {
      var _0x58de51 = _0x32c619.length;
      var _0x4537f3 = "";
      for (var _0x5b6b78 = _0x493861; _0x5b6b78 < _0x259b55; ++_0x5b6b78) {
        var _0x361b9b = _0x5d5976(_0x32c619, _0x5b6b78);
        if (_0x361b9b == 3) {
          for (var _0x5ae604 = _0x5b6b78 + 1; _0x5ae604 <= _0x259b55; ++_0x5ae604) {
            var _0x2441d0 = _0x5d5976(_0x32c619, _0x5ae604);
            if (_0x2441d0 != 2 && _0x2441d0 != 3) {
              var _0x5b2566 = _0x32c619.substring(_0x5b6b78, _0x5ae604);
              var _0x52e7f8 = _0x1e6478[_0x5b2566];
              if (_0x52e7f8) {
                var _0x32a40f = _0x32c619.substring(_0x493861, _0x5b6b78);
                if (_0x52e7f8.length && _0x32c619[_0x5ae604] == "(") {
                  var _0x165eff = _0x46f493(_0x32c619, _0x5ae604);
                  _0x32a40f += _0x52e7f8(_0x32c619.substring(_0x5ae604 + 1, _0x165eff).split(",")) + _0x32c619.substring(_0x165eff + 1, _0x259b55);
                } else {
                  _0x32a40f += _0x52e7f8() + _0x32c619.substring(_0x5ae604, _0x259b55);
                }
                return _0x1b5bab(_0x32a40f, 0);
              } else {
                _0x4537f3 += _0x5b2566;
                _0x5b6b78 = _0x5ae604 - 1;
                break;
              }
            }
          }
        } else {
          _0x4537f3 += _0x32c619[_0x5b6b78];
        }
      }
      return _0x4537f3;
    }
    function _0x2492de(_0x11ae82) {
      while (_0x11ae82.length > 1 || typeof _0x11ae82[0] != "function") {
        _0x11ae82 = function (_0x361bdf) {
          var _0x17b635;
          var _0x36d0d0;
          var _0x26234e;
          var _0x5463e9 = -2;
          for (_0x36d0d0 = 0; _0x36d0d0 < _0x361bdf.length; ++_0x36d0d0) {
            if ((_0x26234e = ["*", "/", "+", "-", "!", "<", "<=", ">", ">=", "==", "!=", "&&", "||", "("].indexOf(_0x361bdf[_0x36d0d0])) > _0x5463e9) {
              _0x17b635 = _0x36d0d0;
              _0x5463e9 = _0x26234e;
            }
          }
          if (_0x5463e9 == 13) {
            var _0x36d0d0 = _0x46f493(_0x361bdf, _0x17b635);
            if (_0x36d0d0) {
              _0x361bdf.splice(_0x17b635, _0x36d0d0 + 1 - _0x17b635, _0x2492de(_0x361bdf.slice(_0x17b635 + 1, _0x36d0d0)));
              return _0x361bdf;
            }
          }
          if (_0x5463e9 == 4) {
            _0x17b635 = _0x361bdf.lastIndexOf("!");
            var _0x326a5c = _0x2492de(_0x361bdf.slice(_0x17b635 + 1, _0x17b635 + 2));
            _0x361bdf.splice(_0x17b635, 2, function () {
              return !_0x326a5c();
            });
            return _0x361bdf;
          }
          if (_0x5463e9 >= 0) {
            var _0x40ec84 = _0x2492de(_0x361bdf.slice(0, _0x17b635));
            var _0x581256 = _0x2492de(_0x361bdf.slice(_0x17b635 + 1));
            switch (_0x361bdf[_0x17b635]) {
              case "&&":
                return [function () {
                  return _0x40ec84() && _0x581256();
                }];
              case "||":
                return [function () {
                  return _0x40ec84() || _0x581256();
                }];
              case "==":
                return [function () {
                  return _0x40ec84() == _0x581256();
                }];
              case "!=":
                return [function () {
                  return _0x40ec84() != _0x581256();
                }];
              case "<":
                return [function () {
                  return _0x40ec84() < _0x581256();
                }];
              case "<=":
                return [function () {
                  return _0x40ec84() <= _0x581256();
                }];
              case ">":
                return [function () {
                  return _0x40ec84() > _0x581256();
                }];
              case ">=":
                return [function () {
                  return _0x40ec84() >= _0x581256();
                }];
              case "+":
                return [function () {
                  return _0x40ec84() + _0x581256();
                }];
              case "-":
                return [function () {
                  return _0x40ec84() - _0x581256();
                }];
              case "*":
                return [function () {
                  return _0x40ec84() * _0x581256();
                }];
              case "/":
                return [function () {
                  return Math.floor(_0x40ec84() / _0x581256());
                }];
            }
          }
          var _0x22b66c = _0x3c269d(_0x361bdf[_0x17b635]);
          return [function () {
            return _0x22b66c;
          }];
        }(_0x11ae82);
      }
      return _0x11ae82[0];
    }
    for (; _0xe1d4c4 < _0x26a42a; ++_0xe1d4c4) {
      var _0x2431ec = _0xe1d4c4;
      _0xe1d4c4 = _0x41013c.indexOf("\n", _0xe1d4c4);
      if (_0xe1d4c4 < 0) {
        _0xe1d4c4 = _0x26a42a;
      }
      for (var _0x2bdf45 = _0x2431ec; _0x2bdf45 < _0xe1d4c4 && _0x44f717(_0x41013c, _0x2bdf45); ++_0x2bdf45);
      var _0x24f381 = _0x4acfd4[_0x4acfd4.length - 1];
      if (_0x41013c[_0x2bdf45] != "#") {
        if (_0x24f381) {
          _0x4b35ef += _0x1b5bab(_0x41013c, _0x2431ec, _0xe1d4c4) + "\n";
        }
        continue;
      }
      var _0xe6187e = _0x6c60eb(_0x41013c, _0x2bdf45);
      var _0x59e639 = _0x41013c.substring(_0x2bdf45 + 1, _0xe6187e);
      var _0x30c85b = _0x41013c.substring(_0xe6187e, _0xe1d4c4).trim();
      switch (_0x59e639) {
        case "if":
          var _0x1a5ef3 = _0x176160(_0x1b5bab(_0x30c85b, 0));
          var _0x330f9e = _0x2492de(_0x1a5ef3);
          var _0x410a16 = _0x330f9e();
          _0x4acfd4.push(!!_0x410a16 * _0x4acfd4[_0x4acfd4.length - 1]);
          break;
        case "ifdef":
          _0x4acfd4.push(!!_0x1e6478[_0x30c85b] * _0x4acfd4[_0x4acfd4.length - 1]);
          break;
        case "ifndef":
          _0x4acfd4.push(!_0x1e6478[_0x30c85b] * _0x4acfd4[_0x4acfd4.length - 1]);
          break;
        case "else":
          _0x4acfd4[_0x4acfd4.length - 1] = 1 - _0x4acfd4[_0x4acfd4.length - 1];
          break;
        case "endif":
          _0x4acfd4.pop();
          break;
        case "define":
          if (_0x24f381) {
            var _0x44aab7 = _0x30c85b.indexOf("(");
            var _0x33f4b0 = _0x6c60eb(_0x30c85b, 0);
            if (_0x33f4b0 < _0x44aab7) {
              _0x44aab7 = 0;
            }
            if (_0x44aab7 > 0) {
              var _0x62e3e1 = _0x30c85b.indexOf(")", _0x44aab7);
              let _0xf3c64d = _0x30c85b.substring(_0x44aab7 + 1, _0x62e3e1).split(",").map(_0x842852 => _0x842852.trim());
              let _0x5b8e2e = _0x176160(_0x30c85b.substring(_0x62e3e1 + 1).trim());
              _0x1e6478[_0x30c85b.substring(0, _0x44aab7)] = function (_0x3865ad) {
                var _0x38c35c = "";
                _0x5b8e2e.forEach(_0x37032d => {
                  var _0x28b30f = _0xf3c64d.indexOf(_0x37032d);
                  _0x38c35c += _0x28b30f >= 0 ? _0x3865ad[_0x28b30f] : _0x37032d;
                });
                return _0x38c35c;
              };
            } else {
              let _0x3cba59 = _0x1b5bab(_0x30c85b.substring(_0x33f4b0 + 1).trim(), 0);
              _0x1e6478[_0x30c85b.substring(0, _0x33f4b0)] = function () {
                return _0x3cba59;
              };
            }
          }
          break;
        case "undef":
          if (_0x24f381) {
            delete _0x1e6478[_0x30c85b];
          }
          break;
        default:
          if (_0x59e639 != "version" && _0x59e639 != "pragma" && _0x59e639 != "extension") {}
          _0x4b35ef += _0x1b5bab(_0x41013c, _0x2431ec, _0xe1d4c4) + "\n";
      }
    }
    return _0x4b35ef;
  }
  function _0x4fbbf0(_0x3fd61e) {
    var _0x24caf3 = 0;
    var _0x394611 = "";
    var _0x20f349;
    var _0x444922;
    var _0x200b89 = _0x3fd61e.length;
    for (; _0x24caf3 < _0x200b89; ++_0x24caf3) {
      _0x20f349 = _0x3fd61e[_0x24caf3];
      if (_0x20f349 == "/") {
        _0x444922 = _0x3fd61e[_0x24caf3 + 1];
        if (_0x444922 == "/") {
          while (_0x24caf3 < _0x200b89 && _0x3fd61e[_0x24caf3 + 1] != "\n") {
            ++_0x24caf3;
          }
        } else if (_0x444922 == "*") {
          while (_0x24caf3 < _0x200b89 && (_0x3fd61e[_0x24caf3 - 1] != "*" || _0x3fd61e[_0x24caf3] != "/")) {
            ++_0x24caf3;
          }
        } else {
          _0x394611 += _0x20f349;
        }
      } else {
        _0x394611 += _0x20f349;
      }
    }
    return _0x394611;
  }
  function _0x3e8c51(_0x195c28, _0x1a69b2, _0x2361fb, _0x2c0863) {
    var _0x12aea8 = _0x17d2b3.getSource(_0x195c28, _0x1a69b2, _0x2361fb, _0x2c0863);
    _0x12aea8 = _0x287f9b(_0x4fbbf0(_0x12aea8));
    var _0x4e5150 = /layout\s*\(\s*location\s*=\s*(-?\d+)\s*\)\s*(uniform\s+((lowp|mediump|highp)\s+)?\w+\s+(\w+))/g;
    var _0x566eb0 = {};
    var _0x1de116;
    while (_0x1de116 = _0x4e5150.exec(_0x12aea8)) {
      _0x566eb0[_0x1de116[5]] = _0x3c269d(_0x1de116[1]);
      if (!(_0x566eb0[_0x1de116[5]] >= 0) || !(_0x566eb0[_0x1de116[5]] < 1048576)) {
        console.error("Specified an out of range layout(location=x) directive \"" + _0x566eb0[_0x1de116[5]] + "\"! (" + _0x1de116[0] + ")");
        _0x17d2b3.recordError(1281);
        return;
      }
    }
    _0x12aea8 = _0x12aea8.replace(_0x4e5150, "$2");
    _0x17d2b3.shaders[_0x195c28].explicitUniformLocations = _0x566eb0;
    var _0x535fcd = /layout\s*\(.*?binding\s*=\s*(-?\d+).*?\)\s*uniform\s+(\w+)\s+(\w+)?/g;
    var _0x2865cd = {};
    var _0x188cd8 = {};
    var _0x4b0925;
    while (_0x4b0925 = _0x535fcd.exec(_0x12aea8)) {
      var _0x207c56 = 1;
      for (var _0x5f3b81 = _0x4b0925.index; _0x5f3b81 < _0x12aea8.length && _0x12aea8[_0x5f3b81] != ";"; ++_0x5f3b81) {
        if (_0x12aea8[_0x5f3b81] == "[") {
          _0x207c56 = _0x3c269d(_0x12aea8.slice(_0x5f3b81 + 1));
          break;
        }
        if (_0x12aea8[_0x5f3b81] == "{") {
          _0x5f3b81 = _0x46f493(_0x12aea8, _0x5f3b81, "{", "}") - 1;
        }
      }
      var _0x1da9db = _0x3c269d(_0x4b0925[1]);
      var _0x5339e1 = 34930;
      if (_0x4b0925[3] && _0x4b0925[2].indexOf("sampler") != -1) {
        _0x2865cd[_0x4b0925[3]] = [_0x1da9db, _0x207c56];
      } else {
        _0x5339e1 = 35374;
        _0x188cd8[_0x4b0925[2]] = [_0x1da9db, _0x207c56];
      }
      var _0x421cad = _0x283457.getParameter(_0x5339e1);
      if (!(_0x1da9db >= 0) || !(_0x1da9db + _0x207c56 <= _0x421cad)) {
        console.error("Specified an out of range layout(binding=x) directive \"" + _0x1da9db + "\"! (" + _0x4b0925[0] + "). Valid range is [0, " + _0x421cad + "-1]");
        _0x17d2b3.recordError(1281);
        return;
      }
    }
    _0x12aea8 = _0x12aea8.replace(/layout\s*\(.*?binding\s*=\s*([-\d]+).*?\)/g, "");
    _0x12aea8 = _0x12aea8.replace(/(layout\s*\((.*?)),\s*binding\s*=\s*([-\d]+)\)/g, "$1)");
    _0x12aea8 = _0x12aea8.replace(/layout\s*\(\s*binding\s*=\s*([-\d]+)\s*,(.*?)\)/g, "layout($2)");
    _0x17d2b3.shaders[_0x195c28].explicitSamplerBindings = _0x2865cd;
    _0x17d2b3.shaders[_0x195c28].explicitUniformBindings = _0x188cd8;
    _0x283457.shaderSource(_0x17d2b3.shaders[_0x195c28], _0x12aea8);
  }
  function _0x398047(_0x14c54b, _0x1b740d, _0x141cfb, _0x3cee1f) {
    _0x283457.stencilFuncSeparate(_0x14c54b, _0x1b740d, _0x141cfb, _0x3cee1f);
  }
  function _0xaf9a62(_0x5c1cb6) {
    _0x283457.stencilMask(_0x5c1cb6);
  }
  function _0x7836ec(_0x1315ff, _0x504c7e, _0xf0f14c, _0x251fe0) {
    _0x283457.stencilOpSeparate(_0x1315ff, _0x504c7e, _0xf0f14c, _0x251fe0);
  }
  function _0x3de450(_0x1aab0b, _0x3272fd, _0x554a4d, _0x29470b, _0x2faf91, _0x2ec782, _0x26ae3b, _0x21529e, _0x315293) {
    if (_0x17d2b3.currentContext.version >= 2) {
      if (_0x283457.currentPixelUnpackBufferBinding) {
        _0x283457.texImage2D(_0x1aab0b, _0x3272fd, _0x554a4d, _0x29470b, _0x2faf91, _0x2ec782, _0x26ae3b, _0x21529e, _0x315293);
      } else if (_0x315293) {
        var _0x1d68f7 = _0x25c41e(_0x21529e);
        _0x283457.texImage2D(_0x1aab0b, _0x3272fd, _0x554a4d, _0x29470b, _0x2faf91, _0x2ec782, _0x26ae3b, _0x21529e, _0x1d68f7, _0x315293 >> _0x2947a7(_0x1d68f7));
      } else {
        _0x283457.texImage2D(_0x1aab0b, _0x3272fd, _0x554a4d, _0x29470b, _0x2faf91, _0x2ec782, _0x26ae3b, _0x21529e, null);
      }
      return;
    }
    _0x283457.texImage2D(_0x1aab0b, _0x3272fd, _0x554a4d, _0x29470b, _0x2faf91, _0x2ec782, _0x26ae3b, _0x21529e, _0x315293 ? _0x461c96(_0x21529e, _0x26ae3b, _0x29470b, _0x2faf91, _0x315293, _0x554a4d) : null);
  }
  function _0x31af96(_0x3247d0, _0x191ae2, _0x468f7b, _0x2b68c0, _0x55fe3a, _0x45a546, _0x1f0e28, _0x597998, _0x5ebc4c, _0x1934f7) {
    if (_0x283457.currentPixelUnpackBufferBinding) {
      _0x283457.texImage3D(_0x3247d0, _0x191ae2, _0x468f7b, _0x2b68c0, _0x55fe3a, _0x45a546, _0x1f0e28, _0x597998, _0x5ebc4c, _0x1934f7);
    } else if (_0x1934f7) {
      var _0x540dc3 = _0x25c41e(_0x5ebc4c);
      _0x283457.texImage3D(_0x3247d0, _0x191ae2, _0x468f7b, _0x2b68c0, _0x55fe3a, _0x45a546, _0x1f0e28, _0x597998, _0x5ebc4c, _0x540dc3, _0x1934f7 >> _0x2947a7(_0x540dc3));
    } else {
      _0x283457.texImage3D(_0x3247d0, _0x191ae2, _0x468f7b, _0x2b68c0, _0x55fe3a, _0x45a546, _0x1f0e28, _0x597998, _0x5ebc4c, null);
    }
  }
  function _0x248c11(_0x15bb33, _0x5a1b26, _0x35ed07) {
    _0x283457.texParameterf(_0x15bb33, _0x5a1b26, _0x35ed07);
  }
  function _0x29a06c(_0x2c1005, _0x23202e, _0x26ea66) {
    _0x283457.texParameteri(_0x2c1005, _0x23202e, _0x26ea66);
  }
  function _0x509947(_0x80df3c, _0x43cc76, _0x1739d9) {
    var _0x5019e0 = _0x5cc2c4[_0x1739d9 >> 2];
    _0x283457.texParameteri(_0x80df3c, _0x43cc76, _0x5019e0);
  }
  function _0x458f62(_0x54f506, _0x38bdae, _0x4584c8, _0x22034d, _0x3c31e9) {
    _0x283457.texStorage2D(_0x54f506, _0x38bdae, _0x4584c8, _0x22034d, _0x3c31e9);
  }
  function _0x5414de(_0x57d260, _0x4d9dc1, _0x229010, _0xf4f719, _0x12c77d, _0x3725f7) {
    _0x283457.texStorage3D(_0x57d260, _0x4d9dc1, _0x229010, _0xf4f719, _0x12c77d, _0x3725f7);
  }
  function _0x3af648(_0x3e278e, _0x2217cb, _0x229741, _0x4d82e7, _0xdd1aca, _0x47cb5d, _0x52863e, _0x4242ac, _0x1dc491) {
    if (_0x17d2b3.currentContext.version >= 2) {
      if (_0x283457.currentPixelUnpackBufferBinding) {
        _0x283457.texSubImage2D(_0x3e278e, _0x2217cb, _0x229741, _0x4d82e7, _0xdd1aca, _0x47cb5d, _0x52863e, _0x4242ac, _0x1dc491);
      } else if (_0x1dc491) {
        var _0x3eaddf = _0x25c41e(_0x4242ac);
        _0x283457.texSubImage2D(_0x3e278e, _0x2217cb, _0x229741, _0x4d82e7, _0xdd1aca, _0x47cb5d, _0x52863e, _0x4242ac, _0x3eaddf, _0x1dc491 >> _0x2947a7(_0x3eaddf));
      } else {
        _0x283457.texSubImage2D(_0x3e278e, _0x2217cb, _0x229741, _0x4d82e7, _0xdd1aca, _0x47cb5d, _0x52863e, _0x4242ac, null);
      }
      return;
    }
    var _0x1f18c2 = null;
    if (_0x1dc491) {
      _0x1f18c2 = _0x461c96(_0x4242ac, _0x52863e, _0xdd1aca, _0x47cb5d, _0x1dc491, 0);
    }
    _0x283457.texSubImage2D(_0x3e278e, _0x2217cb, _0x229741, _0x4d82e7, _0xdd1aca, _0x47cb5d, _0x52863e, _0x4242ac, _0x1f18c2);
  }
  function _0x2192f0(_0x10ae11, _0x5aa9ba, _0x44a2b3, _0x29f231, _0x2dea75, _0x5b73d6, _0x44d373, _0x25f920, _0x142f7d, _0x2be909, _0xee154c) {
    if (_0x283457.currentPixelUnpackBufferBinding) {
      _0x283457.texSubImage3D(_0x10ae11, _0x5aa9ba, _0x44a2b3, _0x29f231, _0x2dea75, _0x5b73d6, _0x44d373, _0x25f920, _0x142f7d, _0x2be909, _0xee154c);
    } else if (_0xee154c) {
      var _0x32e91a = _0x25c41e(_0x2be909);
      _0x283457.texSubImage3D(_0x10ae11, _0x5aa9ba, _0x44a2b3, _0x29f231, _0x2dea75, _0x5b73d6, _0x44d373, _0x25f920, _0x142f7d, _0x2be909, _0x32e91a, _0xee154c >> _0x2947a7(_0x32e91a));
    } else {
      _0x283457.texSubImage3D(_0x10ae11, _0x5aa9ba, _0x44a2b3, _0x29f231, _0x2dea75, _0x5b73d6, _0x44d373, _0x25f920, _0x142f7d, _0x2be909, null);
    }
  }
  function _0x3ef8a4(_0x34a656, _0x39727f, _0x145e55, _0xccecbc) {
    _0x34a656 = _0x17d2b3.programs[_0x34a656];
    var _0x456df8 = [];
    for (var _0xa36ab2 = 0; _0xa36ab2 < _0x39727f; _0xa36ab2++) {
      _0x456df8.push(_0x3f3179(_0x5cc2c4[_0x145e55 + _0xa36ab2 * 4 >> 2]));
    }
    _0x283457.transformFeedbackVaryings(_0x34a656, _0x456df8, _0xccecbc);
  }
  var _0x1beb75 = [];
  function _0xdf4f57(_0x5cceb1, _0x1e7c28, _0x5ea967) {
    if (_0x17d2b3.currentContext.version >= 2) {
      _0x283457.uniform1fv(_0x58cae9(_0x5cceb1), _0x2c2a07, _0x5ea967 >> 2, _0x1e7c28);
      return;
    }
    if (_0x1e7c28 <= 288) {
      var _0x1853f0 = _0x1beb75[_0x1e7c28 - 1];
      for (var _0x1e228c = 0; _0x1e228c < _0x1e7c28; ++_0x1e228c) {
        _0x1853f0[_0x1e228c] = _0x2c2a07[_0x5ea967 + _0x1e228c * 4 >> 2];
      }
    } else {
      var _0x1853f0 = _0x2c2a07.subarray(_0x5ea967 >> 2, _0x5ea967 + _0x1e7c28 * 4 >> 2);
    }
    _0x283457.uniform1fv(_0x58cae9(_0x5cceb1), _0x1853f0);
  }
  function _0x221730(_0xd29fd4, _0x48179f) {
    _0x283457.uniform1i(_0x58cae9(_0xd29fd4), _0x48179f);
  }
  var _0x57911c = [];
  function _0x53fce1(_0x2e933c, _0x2d8ea9, _0x337545) {
    if (_0x17d2b3.currentContext.version >= 2) {
      _0x283457.uniform1iv(_0x58cae9(_0x2e933c), _0x5cc2c4, _0x337545 >> 2, _0x2d8ea9);
      return;
    }
    if (_0x2d8ea9 <= 288) {
      var _0x512331 = _0x57911c[_0x2d8ea9 - 1];
      for (var _0x4bbbbc = 0; _0x4bbbbc < _0x2d8ea9; ++_0x4bbbbc) {
        _0x512331[_0x4bbbbc] = _0x5cc2c4[_0x337545 + _0x4bbbbc * 4 >> 2];
      }
    } else {
      var _0x512331 = _0x5cc2c4.subarray(_0x337545 >> 2, _0x337545 + _0x2d8ea9 * 4 >> 2);
    }
    _0x283457.uniform1iv(_0x58cae9(_0x2e933c), _0x512331);
  }
  function _0x386784(_0x2af654, _0x23021e, _0x18da65) {
    _0x283457.uniform1uiv(_0x58cae9(_0x2af654), _0x52253e, _0x18da65 >> 2, _0x23021e);
  }
  function _0x3d0fac(_0x2a9c5d, _0x1c8553, _0x4adf2e) {
    if (_0x17d2b3.currentContext.version >= 2) {
      _0x283457.uniform2fv(_0x58cae9(_0x2a9c5d), _0x2c2a07, _0x4adf2e >> 2, _0x1c8553 * 2);
      return;
    }
    if (_0x1c8553 <= 144) {
      var _0x496023 = _0x1beb75[_0x1c8553 * 2 - 1];
      for (var _0x34b064 = 0; _0x34b064 < _0x1c8553 * 2; _0x34b064 += 2) {
        _0x496023[_0x34b064] = _0x2c2a07[_0x4adf2e + _0x34b064 * 4 >> 2];
        _0x496023[_0x34b064 + 1] = _0x2c2a07[_0x4adf2e + (_0x34b064 * 4 + 4) >> 2];
      }
    } else {
      var _0x496023 = _0x2c2a07.subarray(_0x4adf2e >> 2, _0x4adf2e + _0x1c8553 * 8 >> 2);
    }
    _0x283457.uniform2fv(_0x58cae9(_0x2a9c5d), _0x496023);
  }
  function _0x381479(_0x3efe9b, _0x2783bf, _0x180267) {
    if (_0x17d2b3.currentContext.version >= 2) {
      _0x283457.uniform2iv(_0x58cae9(_0x3efe9b), _0x5cc2c4, _0x180267 >> 2, _0x2783bf * 2);
      return;
    }
    if (_0x2783bf <= 144) {
      var _0x55fea9 = _0x57911c[_0x2783bf * 2 - 1];
      for (var _0xc922cb = 0; _0xc922cb < _0x2783bf * 2; _0xc922cb += 2) {
        _0x55fea9[_0xc922cb] = _0x5cc2c4[_0x180267 + _0xc922cb * 4 >> 2];
        _0x55fea9[_0xc922cb + 1] = _0x5cc2c4[_0x180267 + (_0xc922cb * 4 + 4) >> 2];
      }
    } else {
      var _0x55fea9 = _0x5cc2c4.subarray(_0x180267 >> 2, _0x180267 + _0x2783bf * 8 >> 2);
    }
    _0x283457.uniform2iv(_0x58cae9(_0x3efe9b), _0x55fea9);
  }
  function _0x1980a1(_0x5691cd, _0x2fed79, _0x24f7ba) {
    _0x283457.uniform2uiv(_0x58cae9(_0x5691cd), _0x52253e, _0x24f7ba >> 2, _0x2fed79 * 2);
  }
  function _0x53d49a(_0x1b47cb, _0x476f7c, _0x44c21d) {
    if (_0x17d2b3.currentContext.version >= 2) {
      _0x283457.uniform3fv(_0x58cae9(_0x1b47cb), _0x2c2a07, _0x44c21d >> 2, _0x476f7c * 3);
      return;
    }
    if (_0x476f7c <= 96) {
      var _0x5d0d2e = _0x1beb75[_0x476f7c * 3 - 1];
      for (var _0x1e4f39 = 0; _0x1e4f39 < _0x476f7c * 3; _0x1e4f39 += 3) {
        _0x5d0d2e[_0x1e4f39] = _0x2c2a07[_0x44c21d + _0x1e4f39 * 4 >> 2];
        _0x5d0d2e[_0x1e4f39 + 1] = _0x2c2a07[_0x44c21d + (_0x1e4f39 * 4 + 4) >> 2];
        _0x5d0d2e[_0x1e4f39 + 2] = _0x2c2a07[_0x44c21d + (_0x1e4f39 * 4 + 8) >> 2];
      }
    } else {
      var _0x5d0d2e = _0x2c2a07.subarray(_0x44c21d >> 2, _0x44c21d + _0x476f7c * 12 >> 2);
    }
    _0x283457.uniform3fv(_0x58cae9(_0x1b47cb), _0x5d0d2e);
  }
  function _0x4bfdd7(_0x552ce5, _0x1d5ae3, _0x1c1e8b) {
    if (_0x17d2b3.currentContext.version >= 2) {
      _0x283457.uniform3iv(_0x58cae9(_0x552ce5), _0x5cc2c4, _0x1c1e8b >> 2, _0x1d5ae3 * 3);
      return;
    }
    if (_0x1d5ae3 <= 96) {
      var _0x41e70c = _0x57911c[_0x1d5ae3 * 3 - 1];
      for (var _0x4d9d82 = 0; _0x4d9d82 < _0x1d5ae3 * 3; _0x4d9d82 += 3) {
        _0x41e70c[_0x4d9d82] = _0x5cc2c4[_0x1c1e8b + _0x4d9d82 * 4 >> 2];
        _0x41e70c[_0x4d9d82 + 1] = _0x5cc2c4[_0x1c1e8b + (_0x4d9d82 * 4 + 4) >> 2];
        _0x41e70c[_0x4d9d82 + 2] = _0x5cc2c4[_0x1c1e8b + (_0x4d9d82 * 4 + 8) >> 2];
      }
    } else {
      var _0x41e70c = _0x5cc2c4.subarray(_0x1c1e8b >> 2, _0x1c1e8b + _0x1d5ae3 * 12 >> 2);
    }
    _0x283457.uniform3iv(_0x58cae9(_0x552ce5), _0x41e70c);
  }
  function _0x4075a3(_0x73875d, _0xaf75c6, _0x2ba2a4) {
    _0x283457.uniform3uiv(_0x58cae9(_0x73875d), _0x52253e, _0x2ba2a4 >> 2, _0xaf75c6 * 3);
  }
  function _0x14342f(_0x56fa39, _0xa7abf9, _0x1c7dc8) {
    if (_0x17d2b3.currentContext.version >= 2) {
      _0x283457.uniform4fv(_0x58cae9(_0x56fa39), _0x2c2a07, _0x1c7dc8 >> 2, _0xa7abf9 * 4);
      return;
    }
    if (_0xa7abf9 <= 72) {
      var _0x31d4ff = _0x1beb75[_0xa7abf9 * 4 - 1];
      var _0x5e2275 = _0x2c2a07;
      _0x1c7dc8 >>= 2;
      for (var _0x37edb9 = 0; _0x37edb9 < _0xa7abf9 * 4; _0x37edb9 += 4) {
        var _0x5f37dd = _0x1c7dc8 + _0x37edb9;
        _0x31d4ff[_0x37edb9] = _0x5e2275[_0x5f37dd];
        _0x31d4ff[_0x37edb9 + 1] = _0x5e2275[_0x5f37dd + 1];
        _0x31d4ff[_0x37edb9 + 2] = _0x5e2275[_0x5f37dd + 2];
        _0x31d4ff[_0x37edb9 + 3] = _0x5e2275[_0x5f37dd + 3];
      }
    } else {
      var _0x31d4ff = _0x2c2a07.subarray(_0x1c7dc8 >> 2, _0x1c7dc8 + _0xa7abf9 * 16 >> 2);
    }
    _0x283457.uniform4fv(_0x58cae9(_0x56fa39), _0x31d4ff);
  }
  function _0x298752(_0x507997, _0x28e603, _0x35f3e1) {
    if (_0x17d2b3.currentContext.version >= 2) {
      _0x283457.uniform4iv(_0x58cae9(_0x507997), _0x5cc2c4, _0x35f3e1 >> 2, _0x28e603 * 4);
      return;
    }
    if (_0x28e603 <= 72) {
      var _0x2f3781 = _0x57911c[_0x28e603 * 4 - 1];
      for (var _0x20bccc = 0; _0x20bccc < _0x28e603 * 4; _0x20bccc += 4) {
        _0x2f3781[_0x20bccc] = _0x5cc2c4[_0x35f3e1 + _0x20bccc * 4 >> 2];
        _0x2f3781[_0x20bccc + 1] = _0x5cc2c4[_0x35f3e1 + (_0x20bccc * 4 + 4) >> 2];
        _0x2f3781[_0x20bccc + 2] = _0x5cc2c4[_0x35f3e1 + (_0x20bccc * 4 + 8) >> 2];
        _0x2f3781[_0x20bccc + 3] = _0x5cc2c4[_0x35f3e1 + (_0x20bccc * 4 + 12) >> 2];
      }
    } else {
      var _0x2f3781 = _0x5cc2c4.subarray(_0x35f3e1 >> 2, _0x35f3e1 + _0x28e603 * 16 >> 2);
    }
    _0x283457.uniform4iv(_0x58cae9(_0x507997), _0x2f3781);
  }
  function _0x3f30a0(_0x324633, _0x365d63, _0x434f07) {
    _0x283457.uniform4uiv(_0x58cae9(_0x324633), _0x52253e, _0x434f07 >> 2, _0x365d63 * 4);
  }
  function _0x521be2(_0x3daa10, _0x24ef4f, _0x1edeb4) {
    _0x3daa10 = _0x17d2b3.programs[_0x3daa10];
    _0x283457.uniformBlockBinding(_0x3daa10, _0x24ef4f, _0x1edeb4);
  }
  function _0x3a3fcd(_0x1eb3b8, _0x288816, _0x4b5634, _0x295af9) {
    if (_0x17d2b3.currentContext.version >= 2) {
      _0x283457.uniformMatrix3fv(_0x58cae9(_0x1eb3b8), !!_0x4b5634, _0x2c2a07, _0x295af9 >> 2, _0x288816 * 9);
      return;
    }
    if (_0x288816 <= 32) {
      var _0x650c14 = _0x1beb75[_0x288816 * 9 - 1];
      for (var _0x160f1e = 0; _0x160f1e < _0x288816 * 9; _0x160f1e += 9) {
        _0x650c14[_0x160f1e] = _0x2c2a07[_0x295af9 + _0x160f1e * 4 >> 2];
        _0x650c14[_0x160f1e + 1] = _0x2c2a07[_0x295af9 + (_0x160f1e * 4 + 4) >> 2];
        _0x650c14[_0x160f1e + 2] = _0x2c2a07[_0x295af9 + (_0x160f1e * 4 + 8) >> 2];
        _0x650c14[_0x160f1e + 3] = _0x2c2a07[_0x295af9 + (_0x160f1e * 4 + 12) >> 2];
        _0x650c14[_0x160f1e + 4] = _0x2c2a07[_0x295af9 + (_0x160f1e * 4 + 16) >> 2];
        _0x650c14[_0x160f1e + 5] = _0x2c2a07[_0x295af9 + (_0x160f1e * 4 + 20) >> 2];
        _0x650c14[_0x160f1e + 6] = _0x2c2a07[_0x295af9 + (_0x160f1e * 4 + 24) >> 2];
        _0x650c14[_0x160f1e + 7] = _0x2c2a07[_0x295af9 + (_0x160f1e * 4 + 28) >> 2];
        _0x650c14[_0x160f1e + 8] = _0x2c2a07[_0x295af9 + (_0x160f1e * 4 + 32) >> 2];
      }
    } else {
      var _0x650c14 = _0x2c2a07.subarray(_0x295af9 >> 2, _0x295af9 + _0x288816 * 36 >> 2);
    }
    _0x283457.uniformMatrix3fv(_0x58cae9(_0x1eb3b8), !!_0x4b5634, _0x650c14);
  }
  function _0x3b65a8(_0x1d0ccb, _0x170194, _0x4e34e6, _0x674cb8) {
    if (_0x17d2b3.currentContext.version >= 2) {
      _0x283457.uniformMatrix4fv(_0x58cae9(_0x1d0ccb), !!_0x4e34e6, _0x2c2a07, _0x674cb8 >> 2, _0x170194 * 16);
      return;
    }
    if (_0x170194 <= 18) {
      var _0x2e0782 = _0x1beb75[_0x170194 * 16 - 1];
      var _0x2909b2 = _0x2c2a07;
      _0x674cb8 >>= 2;
      for (var _0x51ac49 = 0; _0x51ac49 < _0x170194 * 16; _0x51ac49 += 16) {
        var _0x22efb1 = _0x674cb8 + _0x51ac49;
        _0x2e0782[_0x51ac49] = _0x2909b2[_0x22efb1];
        _0x2e0782[_0x51ac49 + 1] = _0x2909b2[_0x22efb1 + 1];
        _0x2e0782[_0x51ac49 + 2] = _0x2909b2[_0x22efb1 + 2];
        _0x2e0782[_0x51ac49 + 3] = _0x2909b2[_0x22efb1 + 3];
        _0x2e0782[_0x51ac49 + 4] = _0x2909b2[_0x22efb1 + 4];
        _0x2e0782[_0x51ac49 + 5] = _0x2909b2[_0x22efb1 + 5];
        _0x2e0782[_0x51ac49 + 6] = _0x2909b2[_0x22efb1 + 6];
        _0x2e0782[_0x51ac49 + 7] = _0x2909b2[_0x22efb1 + 7];
        _0x2e0782[_0x51ac49 + 8] = _0x2909b2[_0x22efb1 + 8];
        _0x2e0782[_0x51ac49 + 9] = _0x2909b2[_0x22efb1 + 9];
        _0x2e0782[_0x51ac49 + 10] = _0x2909b2[_0x22efb1 + 10];
        _0x2e0782[_0x51ac49 + 11] = _0x2909b2[_0x22efb1 + 11];
        _0x2e0782[_0x51ac49 + 12] = _0x2909b2[_0x22efb1 + 12];
        _0x2e0782[_0x51ac49 + 13] = _0x2909b2[_0x22efb1 + 13];
        _0x2e0782[_0x51ac49 + 14] = _0x2909b2[_0x22efb1 + 14];
        _0x2e0782[_0x51ac49 + 15] = _0x2909b2[_0x22efb1 + 15];
      }
    } else {
      var _0x2e0782 = _0x2c2a07.subarray(_0x674cb8 >> 2, _0x674cb8 + _0x170194 * 64 >> 2);
    }
    _0x283457.uniformMatrix4fv(_0x58cae9(_0x1d0ccb), !!_0x4e34e6, _0x2e0782);
  }
  function _0x3a2191(_0x15d00c) {
    if (!_0x3302ae(_0x15d00c)) {
      _0x17d2b3.recordError(1280);
      _0x516167("GL_INVALID_ENUM in glUnmapBuffer");
      return 0;
    }
    var _0x1ae136 = _0x481ead(_0x15d00c);
    var _0x1ef45a = _0x17d2b3.mappedBuffers[_0x1ae136];
    if (!_0x1ef45a) {
      _0x17d2b3.recordError(1282);
      _0x516167("buffer was never mapped in glUnmapBuffer");
      return 0;
    }
    _0x17d2b3.mappedBuffers[_0x1ae136] = null;
    if (!(_0x1ef45a.access & 16)) {
      if (_0x17d2b3.currentContext.version >= 2) {
        _0x283457.bufferSubData(_0x15d00c, _0x1ef45a.offset, _0x4f26b1, _0x1ef45a.mem, _0x1ef45a.length);
      } else {
        _0x283457.bufferSubData(_0x15d00c, _0x1ef45a.offset, _0x4f26b1.subarray(_0x1ef45a.mem, _0x1ef45a.mem + _0x1ef45a.length));
      }
    }
    _0x2b8491(_0x1ef45a.mem);
    return 1;
  }
  function _0x388223() {
    var _0x159f0a = _0x283457.currentProgram;
    if (!_0x159f0a.explicitProgramBindingsApplied) {
      if (_0x17d2b3.currentContext.version >= 2) {
        Object.keys(_0x159f0a.explicitUniformBindings).forEach(function (_0x408800) {
          var _0x1f4785 = _0x159f0a.explicitUniformBindings[_0x408800];
          for (var _0x2b0a19 = 0; _0x2b0a19 < _0x1f4785[1]; ++_0x2b0a19) {
            var _0x2fbb7e = _0x283457.getUniformBlockIndex(_0x159f0a, _0x408800 + (_0x1f4785[1] > 1 ? "[" + _0x2b0a19 + "]" : ""));
            _0x283457.uniformBlockBinding(_0x159f0a, _0x2fbb7e, _0x1f4785[0] + _0x2b0a19);
          }
        });
      }
      Object.keys(_0x159f0a.explicitSamplerBindings).forEach(function (_0x3f20f7) {
        var _0x4a1b6c = _0x159f0a.explicitSamplerBindings[_0x3f20f7];
        for (var _0x399c18 = 0; _0x399c18 < _0x4a1b6c[1]; ++_0x399c18) {
          _0x283457.uniform1i(_0x283457.getUniformLocation(_0x159f0a, _0x3f20f7 + (_0x399c18 ? "[" + _0x399c18 + "]" : "")), _0x4a1b6c[0] + _0x399c18);
        }
      });
      _0x159f0a.explicitProgramBindingsApplied = 1;
    }
  }
  function _0x5de4b8(_0x425855) {
    _0x425855 = _0x17d2b3.programs[_0x425855];
    _0x283457.useProgram(_0x425855);
    if (_0x283457.currentProgram = _0x425855) {
      _0x388223();
    }
  }
  function _0x363522(_0x223a49) {
    _0x283457.validateProgram(_0x17d2b3.programs[_0x223a49]);
  }
  function _0x508b03(_0x3e5eca, _0x2b402c, _0x2aed4b, _0x5d284e, _0x5cccdf) {
    _0x283457.vertexAttrib4f(_0x3e5eca, _0x2b402c, _0x2aed4b, _0x5d284e, _0x5cccdf);
  }
  function _0xc78277(_0x25bf99, _0xf018de) {
    _0x283457.vertexAttrib4f(_0x25bf99, _0x2c2a07[_0xf018de >> 2], _0x2c2a07[_0xf018de + 4 >> 2], _0x2c2a07[_0xf018de + 8 >> 2], _0x2c2a07[_0xf018de + 12 >> 2]);
  }
  function _0x567b52(_0x488782, _0x40c257, _0x3a9df0, _0x591af, _0x31234e) {
    var _0x7e43c5 = _0x17d2b3.currentContext.clientBuffers[_0x488782];
    if (!_0x283457.currentArrayBufferBinding) {
      _0x7e43c5.size = _0x40c257;
      _0x7e43c5.type = _0x3a9df0;
      _0x7e43c5.normalized = false;
      _0x7e43c5.stride = _0x591af;
      _0x7e43c5.ptr = _0x31234e;
      _0x7e43c5.clientside = true;
      _0x7e43c5.vertexAttribPointerAdaptor = function (_0x224a7f, _0x22307f, _0x222526, _0x573608, _0x22ead8, _0xe95b27) {
        this.vertexAttribIPointer(_0x224a7f, _0x22307f, _0x222526, _0x22ead8, _0xe95b27);
      };
      return;
    }
    _0x7e43c5.clientside = false;
    _0x283457.vertexAttribIPointer(_0x488782, _0x40c257, _0x3a9df0, _0x591af, _0x31234e);
  }
  function _0x4ec8ef(_0x8ea811, _0x58ecb9, _0x1c0c0b, _0x34aa8c, _0x2daa5e, _0x251bf6) {
    var _0x15edd5 = _0x17d2b3.currentContext.clientBuffers[_0x8ea811];
    if (!_0x283457.currentArrayBufferBinding) {
      _0x15edd5.size = _0x58ecb9;
      _0x15edd5.type = _0x1c0c0b;
      _0x15edd5.normalized = _0x34aa8c;
      _0x15edd5.stride = _0x2daa5e;
      _0x15edd5.ptr = _0x251bf6;
      _0x15edd5.clientside = true;
      _0x15edd5.vertexAttribPointerAdaptor = function (_0x41b08d, _0x565681, _0x2cad4f, _0x3368d6, _0x32afa7, _0x361374) {
        this.vertexAttribPointer(_0x41b08d, _0x565681, _0x2cad4f, _0x3368d6, _0x32afa7, _0x361374);
      };
      return;
    }
    _0x15edd5.clientside = false;
    _0x283457.vertexAttribPointer(_0x8ea811, _0x58ecb9, _0x1c0c0b, !!_0x34aa8c, _0x2daa5e, _0x251bf6);
  }
  function _0x17b6ae(_0x410edb, _0x6e70c6, _0x5e3d8a, _0x11f130) {
    _0x283457.viewport(_0x410edb, _0x6e70c6, _0x5e3d8a, _0x11f130);
  }
  function _0xaed45c(_0x50566b) {
    return _0x50566b;
  }
  function _0x58aad7(_0x5b18d5) {
    _0x57b57c();
    var _0x2dbe89 = new Date(_0x5cc2c4[_0x5b18d5 + 20 >> 2] + 1900, _0x5cc2c4[_0x5b18d5 + 16 >> 2], _0x5cc2c4[_0x5b18d5 + 12 >> 2], _0x5cc2c4[_0x5b18d5 + 8 >> 2], _0x5cc2c4[_0x5b18d5 + 4 >> 2], _0x5cc2c4[_0x5b18d5 >> 2], 0);
    var _0x652e4 = _0x5cc2c4[_0x5b18d5 + 32 >> 2];
    var _0xf223ef = _0x2dbe89.getTimezoneOffset();
    var _0x423314 = new Date(_0x2dbe89.getFullYear(), 0, 1);
    var _0x4f44e8 = new Date(_0x2dbe89.getFullYear(), 6, 1).getTimezoneOffset();
    var _0x176e93 = _0x423314.getTimezoneOffset();
    var _0x141740 = Math.min(_0x176e93, _0x4f44e8);
    if (_0x652e4 < 0) {
      _0x5cc2c4[_0x5b18d5 + 32 >> 2] = Number(_0x4f44e8 != _0x176e93 && _0x141740 == _0xf223ef);
    } else if (_0x652e4 > 0 != (_0x141740 == _0xf223ef)) {
      var _0x5703b2 = Math.max(_0x176e93, _0x4f44e8);
      var _0x1c5344 = _0x652e4 > 0 ? _0x141740 : _0x5703b2;
      _0x2dbe89.setTime(_0x2dbe89.getTime() + (_0x1c5344 - _0xf223ef) * 60000);
    }
    _0x5cc2c4[_0x5b18d5 + 24 >> 2] = _0x2dbe89.getDay();
    var _0x187e11 = (_0x2dbe89.getTime() - _0x423314.getTime()) / 86400000 | 0;
    _0x5cc2c4[_0x5b18d5 + 28 >> 2] = _0x187e11;
    _0x5cc2c4[_0x5b18d5 >> 2] = _0x2dbe89.getSeconds();
    _0x5cc2c4[_0x5b18d5 + 4 >> 2] = _0x2dbe89.getMinutes();
    _0x5cc2c4[_0x5b18d5 + 8 >> 2] = _0x2dbe89.getHours();
    _0x5cc2c4[_0x5b18d5 + 12 >> 2] = _0x2dbe89.getDate();
    _0x5cc2c4[_0x5b18d5 + 16 >> 2] = _0x2dbe89.getMonth();
    return _0x2dbe89.getTime() / 1000 | 0;
  }
  function _0x415a83(_0x33ac59) {
    _0x41dc07(_0x33ac59);
  }
  function _0x3ab817(_0x4faca1) {
    return _0x4faca1 % 4 === 0 && (_0x4faca1 % 100 !== 0 || _0x4faca1 % 400 === 0);
  }
  function _0x3835a6(_0x41b1fc, _0x3db930) {
    var _0x7e73c2 = 0;
    for (var _0x37321d = 0; _0x37321d <= _0x3db930; _0x7e73c2 += _0x41b1fc[_0x37321d++]) {}
    return _0x7e73c2;
  }
  var _0x2b6ad = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  var _0x490420 = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  function _0x469719(_0x88e890, _0x1ff21c) {
    var _0x426444 = new Date(_0x88e890.getTime());
    while (_0x1ff21c > 0) {
      var _0x346044 = _0x3ab817(_0x426444.getFullYear());
      var _0x1a9eab = _0x426444.getMonth();
      var _0x9340ae = (_0x346044 ? _0x2b6ad : _0x490420)[_0x1a9eab];
      if (_0x1ff21c > _0x9340ae - _0x426444.getDate()) {
        _0x1ff21c -= _0x9340ae - _0x426444.getDate() + 1;
        _0x426444.setDate(1);
        if (_0x1a9eab < 11) {
          _0x426444.setMonth(_0x1a9eab + 1);
        } else {
          _0x426444.setMonth(0);
          _0x426444.setFullYear(_0x426444.getFullYear() + 1);
        }
      } else {
        _0x426444.setDate(_0x426444.getDate() + _0x1ff21c);
        return _0x426444;
      }
    }
    return _0x426444;
  }
  function _0x39a8b6(_0xa8126d, _0x448825, _0x210783, _0x516a9c) {
    var _0x25b09b = _0x5cc2c4[_0x516a9c + 40 >> 2];
    var _0x46e143 = {
      tm_sec: _0x5cc2c4[_0x516a9c >> 2],
      tm_min: _0x5cc2c4[_0x516a9c + 4 >> 2],
      tm_hour: _0x5cc2c4[_0x516a9c + 8 >> 2],
      tm_mday: _0x5cc2c4[_0x516a9c + 12 >> 2],
      tm_mon: _0x5cc2c4[_0x516a9c + 16 >> 2],
      tm_year: _0x5cc2c4[_0x516a9c + 20 >> 2],
      tm_wday: _0x5cc2c4[_0x516a9c + 24 >> 2],
      tm_yday: _0x5cc2c4[_0x516a9c + 28 >> 2],
      tm_isdst: _0x5cc2c4[_0x516a9c + 32 >> 2],
      tm_gmtoff: _0x5cc2c4[_0x516a9c + 36 >> 2],
      tm_zone: _0x25b09b ? _0x3f3179(_0x25b09b) : ""
    };
    var _0x49da65 = _0x3f3179(_0x210783);
    var _0x2417c7 = {
      "%c": "%a %b %d %H:%M:%S %Y",
      "%D": "%m/%d/%y",
      "%F": "%Y-%m-%d",
      "%h": "%b",
      "%r": "%I:%M:%S %p",
      "%R": "%H:%M",
      "%T": "%H:%M:%S",
      "%x": "%m/%d/%y",
      "%X": "%H:%M:%S",
      "%Ec": "%c",
      "%EC": "%C",
      "%Ex": "%m/%d/%y",
      "%EX": "%H:%M:%S",
      "%Ey": "%y",
      "%EY": "%Y",
      "%Od": "%d",
      "%Oe": "%e",
      "%OH": "%H",
      "%OI": "%I",
      "%Om": "%m",
      "%OM": "%M",
      "%OS": "%S",
      "%Ou": "%u",
      "%OU": "%U",
      "%OV": "%V",
      "%Ow": "%w",
      "%OW": "%W",
      "%Oy": "%y"
    };
    for (var _0xba2e9e in _0x2417c7) {
      _0x49da65 = _0x49da65.replace(new RegExp(_0xba2e9e, "g"), _0x2417c7[_0xba2e9e]);
    }
    var _0x4ca828 = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    var _0x51a308 = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    function _0x2c9215(_0xf3a31b, _0x13111b, _0x973bcb) {
      var _0xdaa0b0 = typeof _0xf3a31b === "number" ? _0xf3a31b.toString() : _0xf3a31b || "";
      while (_0xdaa0b0.length < _0x13111b) {
        _0xdaa0b0 = _0x973bcb[0] + _0xdaa0b0;
      }
      return _0xdaa0b0;
    }
    function _0x3f4616(_0x276f29, _0x397b31) {
      return _0x2c9215(_0x276f29, _0x397b31, "0");
    }
    function _0x594e67(_0x5e1bfb, _0x25cc44) {
      function _0x2d7c5c(_0x9e64c0) {
        if (_0x9e64c0 < 0) {
          return -1;
        } else if (_0x9e64c0 > 0) {
          return 1;
        } else {
          return 0;
        }
      }
      var _0x2862f1;
      if ((_0x2862f1 = _0x2d7c5c(_0x5e1bfb.getFullYear() - _0x25cc44.getFullYear())) === 0) {
        if ((_0x2862f1 = _0x2d7c5c(_0x5e1bfb.getMonth() - _0x25cc44.getMonth())) === 0) {
          _0x2862f1 = _0x2d7c5c(_0x5e1bfb.getDate() - _0x25cc44.getDate());
        }
      }
      return _0x2862f1;
    }
    function _0x12a8e4(_0x40cf02) {
      switch (_0x40cf02.getDay()) {
        case 0:
          return new Date(_0x40cf02.getFullYear() - 1, 11, 29);
        case 1:
          return _0x40cf02;
        case 2:
          return new Date(_0x40cf02.getFullYear(), 0, 3);
        case 3:
          return new Date(_0x40cf02.getFullYear(), 0, 2);
        case 4:
          return new Date(_0x40cf02.getFullYear(), 0, 1);
        case 5:
          return new Date(_0x40cf02.getFullYear() - 1, 11, 31);
        case 6:
          return new Date(_0x40cf02.getFullYear() - 1, 11, 30);
      }
    }
    function _0x3fe998(_0x541360) {
      var _0x1f01bb = _0x469719(new Date(_0x541360.tm_year + 1900, 0, 1), _0x541360.tm_yday);
      var _0x4b9c8f = new Date(_0x1f01bb.getFullYear(), 0, 4);
      var _0x35a9e9 = new Date(_0x1f01bb.getFullYear() + 1, 0, 4);
      var _0x81f14d = _0x12a8e4(_0x4b9c8f);
      var _0x29a262 = _0x12a8e4(_0x35a9e9);
      if (_0x594e67(_0x81f14d, _0x1f01bb) <= 0) {
        if (_0x594e67(_0x29a262, _0x1f01bb) <= 0) {
          return _0x1f01bb.getFullYear() + 1;
        } else {
          return _0x1f01bb.getFullYear();
        }
      } else {
        return _0x1f01bb.getFullYear() - 1;
      }
    }
    var _0x3e7a99 = {
      "%a": function (_0x346105) {
        return _0x4ca828[_0x346105.tm_wday].substring(0, 3);
      },
      "%A": function (_0x57eb44) {
        return _0x4ca828[_0x57eb44.tm_wday];
      },
      "%b": function (_0x321615) {
        return _0x51a308[_0x321615.tm_mon].substring(0, 3);
      },
      "%B": function (_0x15e799) {
        return _0x51a308[_0x15e799.tm_mon];
      },
      "%C": function (_0x5111b6) {
        var _0xff1c8a = _0x5111b6.tm_year + 1900;
        return _0x3f4616(_0xff1c8a / 100 | 0, 2);
      },
      "%d": function (_0x272220) {
        return _0x3f4616(_0x272220.tm_mday, 2);
      },
      "%e": function (_0x1bbd6a) {
        return _0x2c9215(_0x1bbd6a.tm_mday, 2, " ");
      },
      "%g": function (_0x4a77af) {
        return _0x3fe998(_0x4a77af).toString().substring(2);
      },
      "%G": function (_0x16a830) {
        return _0x3fe998(_0x16a830);
      },
      "%H": function (_0x25ebb5) {
        return _0x3f4616(_0x25ebb5.tm_hour, 2);
      },
      "%I": function (_0x50e035) {
        var _0x26914f = _0x50e035.tm_hour;
        if (_0x26914f == 0) {
          _0x26914f = 12;
        } else if (_0x26914f > 12) {
          _0x26914f -= 12;
        }
        return _0x3f4616(_0x26914f, 2);
      },
      "%j": function (_0x260689) {
        return _0x3f4616(_0x260689.tm_mday + _0x3835a6(_0x3ab817(_0x260689.tm_year + 1900) ? _0x2b6ad : _0x490420, _0x260689.tm_mon - 1), 3);
      },
      "%m": function (_0x1192c6) {
        return _0x3f4616(_0x1192c6.tm_mon + 1, 2);
      },
      "%M": function (_0x45ea81) {
        return _0x3f4616(_0x45ea81.tm_min, 2);
      },
      "%n": function () {
        return "\n";
      },
      "%p": function (_0x21e1e4) {
        if (_0x21e1e4.tm_hour >= 0 && _0x21e1e4.tm_hour < 12) {
          return "AM";
        } else {
          return "PM";
        }
      },
      "%S": function (_0x4c44e9) {
        return _0x3f4616(_0x4c44e9.tm_sec, 2);
      },
      "%t": function () {
        return "\t";
      },
      "%u": function (_0x4cded3) {
        return _0x4cded3.tm_wday || 7;
      },
      "%U": function (_0x2ffa57) {
        var _0x38c13a = new Date(_0x2ffa57.tm_year + 1900, 0, 1);
        var _0xd0675b = _0x38c13a.getDay() === 0 ? _0x38c13a : _0x469719(_0x38c13a, 7 - _0x38c13a.getDay());
        var _0x27b5c3 = new Date(_0x2ffa57.tm_year + 1900, _0x2ffa57.tm_mon, _0x2ffa57.tm_mday);
        if (_0x594e67(_0xd0675b, _0x27b5c3) < 0) {
          var _0x8c8795 = _0x3835a6(_0x3ab817(_0x27b5c3.getFullYear()) ? _0x2b6ad : _0x490420, _0x27b5c3.getMonth() - 1) - 31;
          var _0x3c0492 = 31 - _0xd0675b.getDate();
          var _0xa7eed4 = _0x3c0492 + _0x8c8795 + _0x27b5c3.getDate();
          return _0x3f4616(Math.ceil(_0xa7eed4 / 7), 2);
        }
        if (_0x594e67(_0xd0675b, _0x38c13a) === 0) {
          return "01";
        } else {
          return "00";
        }
      },
      "%V": function (_0x1878ae) {
        var _0x571796 = new Date(_0x1878ae.tm_year + 1900, 0, 4);
        var _0x10be99 = new Date(_0x1878ae.tm_year + 1901, 0, 4);
        var _0x3515ff = _0x12a8e4(_0x571796);
        var _0x290b4a = _0x12a8e4(_0x10be99);
        var _0x2deda0 = _0x469719(new Date(_0x1878ae.tm_year + 1900, 0, 1), _0x1878ae.tm_yday);
        if (_0x594e67(_0x2deda0, _0x3515ff) < 0) {
          return "53";
        }
        if (_0x594e67(_0x290b4a, _0x2deda0) <= 0) {
          return "01";
        }
        var _0x555d57;
        if (_0x3515ff.getFullYear() < _0x1878ae.tm_year + 1900) {
          _0x555d57 = _0x1878ae.tm_yday + 32 - _0x3515ff.getDate();
        } else {
          _0x555d57 = _0x1878ae.tm_yday + 1 - _0x3515ff.getDate();
        }
        return _0x3f4616(Math.ceil(_0x555d57 / 7), 2);
      },
      "%w": function (_0x2d9616) {
        return _0x2d9616.tm_wday;
      },
      "%W": function (_0x574b46) {
        var _0x2f3a84 = new Date(_0x574b46.tm_year, 0, 1);
        var _0x2eb32d = _0x2f3a84.getDay() === 1 ? _0x2f3a84 : _0x469719(_0x2f3a84, _0x2f3a84.getDay() === 0 ? 1 : 7 - _0x2f3a84.getDay() + 1);
        var _0x24859f = new Date(_0x574b46.tm_year + 1900, _0x574b46.tm_mon, _0x574b46.tm_mday);
        if (_0x594e67(_0x2eb32d, _0x24859f) < 0) {
          var _0xadac9a = _0x3835a6(_0x3ab817(_0x24859f.getFullYear()) ? _0x2b6ad : _0x490420, _0x24859f.getMonth() - 1) - 31;
          var _0x588c38 = 31 - _0x2eb32d.getDate();
          var _0x3fdd76 = _0x588c38 + _0xadac9a + _0x24859f.getDate();
          return _0x3f4616(Math.ceil(_0x3fdd76 / 7), 2);
        }
        if (_0x594e67(_0x2eb32d, _0x2f3a84) === 0) {
          return "01";
        } else {
          return "00";
        }
      },
      "%y": function (_0x4da608) {
        return (_0x4da608.tm_year + 1900).toString().substring(2);
      },
      "%Y": function (_0x2f9223) {
        return _0x2f9223.tm_year + 1900;
      },
      "%z": function (_0x49ce5d) {
        var _0x130487 = _0x49ce5d.tm_gmtoff;
        var _0x3c15bf = _0x130487 >= 0;
        _0x130487 = Math.abs(_0x130487) / 60;
        _0x130487 = _0x130487 / 60 * 100 + _0x130487 % 60;
        return (_0x3c15bf ? "+" : "-") + String("0000" + _0x130487).slice(-4);
      },
      "%Z": function (_0x33d1c2) {
        return _0x33d1c2.tm_zone;
      },
      "%%": function () {
        return "%";
      }
    };
    for (var _0xba2e9e in _0x3e7a99) {
      if (_0x49da65.includes(_0xba2e9e)) {
        _0x49da65 = _0x49da65.replace(new RegExp(_0xba2e9e, "g"), _0x3e7a99[_0xba2e9e](_0x46e143));
      }
    }
    var _0x294afb = _0x216a0f(_0x49da65, false);
    if (_0x294afb.length > _0x448825) {
      return 0;
    }
    _0x4bce85(_0x294afb, _0xa8126d);
    return _0x294afb.length - 1;
  }
  function _0x3f7e0f(_0x441cd5) {
    var _0x5d6706 = Date.now() / 1000 | 0;
    if (_0x441cd5) {
      _0x5cc2c4[_0x441cd5 >> 2] = _0x5d6706;
    }
    return _0x5d6706;
  }
  function _0x24cf47(_0x3b7431, _0x447106) {
    _0x3b7431 = _0x3f3179(_0x3b7431);
    try {
      _0x221e83.utime(_0x3b7431, _0x447106, _0x447106);
      return 0;
    } catch (_0xa26026) {
      if (!(_0xa26026 instanceof _0x221e83.ErrnoError)) {
        throw _0xa26026 + " : " + _0x2d7851();
      }
      _0x3559eb(_0xa26026.errno);
      return -1;
    }
  }
  function _0x48b8eb(_0x3bb7f8, _0x3a74da) {
    var _0x213061;
    if (_0x3a74da) {
      _0x213061 = _0x5cc2c4[_0x3a74da + 4 >> 2] * 1000;
    } else {
      _0x213061 = Date.now();
    }
    return _0x24cf47(_0x3bb7f8, _0x213061);
  }
  function _0x5a9d12(_0x562014, _0x2de391, _0x3a26c9, _0x3bab34) {
    if (!_0x562014) {
      _0x562014 = this;
    }
    this.parent = _0x562014;
    this.mount = _0x562014.mount;
    this.mounted = null;
    this.id = _0x221e83.nextInode++;
    this.name = _0x2de391;
    this.mode = _0x3a26c9;
    this.node_ops = {};
    this.stream_ops = {};
    this.rdev = _0x3bab34;
  }
  var _0x24e81d = 365;
  var _0x1e721b = 146;
  Object.defineProperties(_0x5a9d12.prototype, {
    read: {
      get: function () {
        return (this.mode & _0x24e81d) === _0x24e81d;
      },
      set: function (_0x1631ad) {
        if (_0x1631ad) {
          this.mode |= _0x24e81d;
        } else {
          this.mode &= ~_0x24e81d;
        }
      }
    },
    write: {
      get: function () {
        return (this.mode & _0x1e721b) === _0x1e721b;
      },
      set: function (_0x44173c) {
        if (_0x44173c) {
          this.mode |= _0x1e721b;
        } else {
          this.mode &= ~_0x1e721b;
        }
      }
    },
    isFolder: {
      get: function () {
        return _0x221e83.isDir(this.mode);
      }
    },
    isDevice: {
      get: function () {
        return _0x221e83.isChrdev(this.mode);
      }
    }
  });
  _0x221e83.FSNode = _0x5a9d12;
  _0x221e83.staticInit();
  _0x3e078a.FS_createPath = _0x221e83.createPath;
  _0x3e078a.FS_createDataFile = _0x221e83.createDataFile;
  _0x3e078a.requestFullscreen = function _0x5ca73f(_0x1b7484, _0x545fdf) {
    _0x4954dc.requestFullscreen(_0x1b7484, _0x545fdf);
  };
  _0x3e078a.requestAnimationFrame = function _0x455edb(_0x1caada) {
    _0x4954dc.requestAnimationFrame(_0x1caada);
  };
  _0x3e078a.setCanvasSize = function _0x1c1f45(_0x4c6013, _0x345e98, _0x473703) {
    _0x4954dc.setCanvasSize(_0x4c6013, _0x345e98, _0x473703);
  };
  _0x3e078a.pauseMainLoop = function _0x25def6() {
    _0x4954dc.mainLoop.pause();
  };
  _0x3e078a.resumeMainLoop = function _0x4b5889() {
    _0x4954dc.mainLoop.resume();
  };
  _0x3e078a.getUserMedia = function _0x364c86() {
    _0x4954dc.getUserMedia();
  };
  _0x3e078a.createContext = function _0x189f30(_0x3cd3ce, _0x3dd605, _0x421b14, _0xdb3cf0) {
    return _0x4954dc.createContext(_0x3cd3ce, _0x3dd605, _0x421b14, _0xdb3cf0);
  };
  var _0x283457;
  for (var _0x420141 = 0; _0x420141 < 32; ++_0x420141) {
    _0x4bc30c.push(new Array(_0x420141));
  }
  var _0x4dafe5 = new Float32Array(288);
  for (var _0x420141 = 0; _0x420141 < 288; ++_0x420141) {
    _0x1beb75[_0x420141] = _0x4dafe5.subarray(0, _0x420141 + 1);
  }
  var _0x1304ce = new Int32Array(288);
  for (var _0x420141 = 0; _0x420141 < 288; ++_0x420141) {
    _0x57911c[_0x420141] = _0x1304ce.subarray(0, _0x420141 + 1);
  }
  function _0x216a0f(_0x41e396, _0x14bb16, _0x14182a) {
    var _0xfeeede = _0x14182a > 0 ? _0x14182a : _0x3e3578(_0x41e396) + 1;
    var _0x30519b = new Array(_0xfeeede);
    var _0x3b73c2 = _0x3e4fca(_0x41e396, _0x30519b, 0, _0x30519b.length);
    if (_0x14bb16) {
      _0x30519b.length = _0x3b73c2;
    }
    return _0x30519b;
  }
  var _0x4d783c = {
    Xi: _0xfc9684,
    Ti: _0x17ab14,
    sj: _0x488296,
    Vi: _0x3f2a25,
    Ui: _0x235e19,
    jj: _0x3721e7,
    Ki: _0x20b605,
    ib: _0x484065,
    Fi: _0x241e59,
    Ei: _0x40e4f6,
    Ci: _0x4d3ad6,
    Di: _0x4676d2,
    ti: _0x175b11,
    Mi: _0x377c66,
    _i: _0x4d2e43,
    Zi: _0x4b33de,
    nj: _0x246e81,
    Ri: _0x400a89,
    pi: _0x4c5836,
    ri: _0x331b65,
    We: _0x5c47a1,
    Eb: _0x19bf7a,
    Db: _0x21576f,
    af: _0x1dfc4b,
    Na: _0x126d28,
    Ma: _0x56c6c3,
    Ae: _0x38e61d,
    bf: _0x55589a,
    Ce: _0x541938,
    re: _0x1db2c2,
    ea: _0x1ceef3,
    Ue: _0x5e0509,
    Ab: _0x5d8d52,
    zb: _0x15d2c4,
    Se: _0xda32c3,
    Te: _0x2166b5,
    yb: _0x586d7d,
    xb: _0x31aadb,
    Mc: _0x56bf1c,
    Ve: _0x5dc6e6,
    Cb: _0x3da009,
    Bb: _0x54e8bb,
    Be: _0x1be19f,
    De: _0x5e47f3,
    Ye: _0x19bf63,
    Gb: _0x589095,
    Fb: _0x281783,
    Hb: _0x10c2e6,
    ue: _0x21323b,
    Re: _0x571f94,
    _e: _0x52dc08,
    ba: _0x3dc66c,
    Hf: _0x51d87c,
    qa: _0x474dbd,
    Bf: _0x38b792,
    zf: _0x231443,
    Vb: _0x8cd80,
    Af: _0x2dfd56,
    Qa: _0x17333b,
    Ra: _0x9e27a6,
    Ib: _0x3aadd1,
    Ef: _0x3e4bb1,
    xf: _0x21f0f3,
    yf: _0x194e5e,
    Xb: _0x4bede5,
    Wb: _0x5c44bc,
    pa: _0x5b3566,
    ca: _0x393ef4,
    Gf: _0x1c29ae,
    Ff: _0x26161e,
    ra: _0x259478,
    ja: _0x237a4e,
    Ub: _0x54170e,
    rb: _0x36e481,
    wb: _0x2027cd,
    Ha: _0x327740,
    sb: _0x1ed386,
    ub: _0x3a1b70,
    Ge: _0x374e68,
    Tb: _0x3d7c93,
    cf: _0x4d54ce,
    tb: _0x390367,
    Qe: _0x806d3c,
    ta: _0x346861,
    ze: _0x57eac1,
    tf: _0x5af12c,
    qf: _0x4a91d7,
    rf: _0x330f6d,
    sf: _0x2f0563,
    Pa: _0x1e5a0a,
    mf: _0x387102,
    of: _0xdc9087,
    nf: _0x38accb,
    pf: _0x48b2a0,
    gj: _0x2f5ee2,
    ej: _0x4a8db9,
    cj: _0x2a3498,
    Oi: _0x1c385b,
    Qi: _0x56f595,
    ij: _0x4a7282,
    Ii: _0x3a59db,
    Hi: _0x50685c,
    aj: _0x337f9b,
    oj: _0x18090b,
    qi: _0x2eb687,
    wi: _0x1c0fd1,
    mj: _0x5ad044,
    lj: _0x1c8f81,
    oi: _0x8fadd7,
    si: _0x1ca8f4,
    gb: _0x57aad1,
    vi: _0x508db8,
    ui: _0x5c6ccb,
    Si: _0x1def3e,
    Bi: _0x498ebe,
    Ai: _0x30b253,
    ga: _0x596b51,
    zi: _0x374e3d,
    xi: _0x19849d,
    yi: _0x19dd4e,
    Yi: _0x3bc29e,
    Ji: _0x44543b,
    hb: _0x4db8f9,
    tj: _0x342477,
    rj: _0x958548,
    pj: _0x49bd64,
    qj: _0x4ae78a,
    fj: _0x5ba645,
    dj: _0x171939,
    bj: _0x1c2df1,
    Ni: _0x359b0b,
    Pi: _0x2c9ce2,
    hj: _0x2e05f0,
    $i: _0x2712d8,
    Wi: _0x21f791,
    kj: _0x2a11f3,
    Li: _0x2309c1,
    db: _0x172b50,
    ki: _0x28c88c,
    Bc: _0xd7a1b6,
    ii: _0x5d2dd9,
    Cc: _0x49775d,
    fi: _0x1277c3,
    hi: _0x14a71e,
    gi: _0x18a7dc,
    ji: _0x18715a,
    p: _0x250112,
    h: _0x5e8700,
    n: _0x546d7f,
    g: _0x15a93b,
    a: _0xd4105,
    Lc: _0x2e167e,
    eb: _0x583e22,
    ad: _0x5e4db3,
    aa: _0x56d87c,
    Pc: _0x2f1d9e,
    Qc: _0x2b7b65,
    k: _0x4b95d4,
    ae: _0x35c239,
    Xe: _0x21544a,
    le: _0x3579e8,
    Cf: _0x3dc533,
    nb: _0x449be5,
    lf: _0x3e1b68,
    dd: _0x595f5f,
    Yh: _0x41208a,
    P: _0x36643a,
    Cg: _0x15ae4f,
    jg: _0x693729,
    Xc: _0x348fed,
    Uc: _0x51e68b,
    yc: _0x43b77f,
    zc: _0x7fb12,
    fd: _0x1e47d3,
    Tc: _0x140175,
    $e: _0x181d46,
    vf: _0x5ef534,
    Mf: _0x242ec3,
    qb: _0x2a6985,
    $h: _0x43aa3d,
    Ze: _0x437fd8,
    _c: _0x19d230,
    Wc: _0x629cc,
    we: _0x43ef03,
    hd: _0x50ea97,
    Ya: _0x40c5d4,
    $c: _0x5d579c,
    ef: _0x26f4ab,
    Zh: _0x44b917,
    Ee: _0x42ffe1,
    bd: _0x334786,
    Yc: _0x5e869c,
    Vc: _0xbab2f0,
    cd: _0x320243,
    Me: _0x46ee00,
    ve: _0x127b51,
    ed: _0x3e9d5a,
    ob: _0x1a33f9,
    bc: _0x392a95,
    If: _0x50cf44,
    _h: _0x39e710,
    Kf: _0x55bed3,
    gd: _0x1701cc,
    Zc: _0x2c40df,
    Xh: _0x22ecde,
    x: _0x58ef57,
    L: _0x2d5f2e,
    Sc: _0x367d78,
    kb: _0x199e6d,
    Oc: _0x44269f,
    Jf: _0x3e280e,
    ua: _0x5af7b5,
    ac: _0x67c3b2,
    Pf: _0x18bc8d,
    Oa: _0x216c68,
    xe: _0xfbc0d9,
    te: _0x4784c2,
    Oe: _0x3f8480,
    He: _0x5556da,
    Fe: _0x4ec033,
    Ne: _0x274646,
    Ja: _0x5dfb99,
    Rc: _0x211da4,
    J: _0x423d24,
    Ka: _0x2612f4,
    ye: _0x294385,
    gf: _0x4ae703,
    B: _0xbc5d47,
    E: _0x59d3de,
    wj: _0x262663,
    Pe: _0x2355c4,
    Ie: _0x43c425,
    xj: _0x4b2138,
    La: _0x24c4dc,
    vb: _0x42346c,
    Ia: _0x794846,
    Ke: _0xa8a1bc,
    Le: _0x5883a1,
    Kb: _0x5b231c,
    Jb: _0x27b891,
    qe: _0x2aef22,
    ma: _0x4dd06d,
    ka: _0x496fea,
    la: _0x34e95c,
    pe: _0xf0e95e,
    se: _0xc4039d,
    Rb: _0x163702,
    Qb: _0x5afd45,
    Sb: _0x2f5edc,
    Je: _0x98bca7,
    Lb: _0x40b982,
    Nb: _0x3ac67e,
    Mb: _0x3addea,
    Ob: _0xefe510,
    Pb: _0x2f7d33,
    Nc: _0x2a25e0,
    jf: _0x48df6b,
    hf: _0x173d7b,
    na: _0x5969d6,
    ff: _0x41aaf1,
    Nf: _0x4ddae1,
    oa: _0x2ee0d8,
    wd: _0x4efcce,
    Hd: _0x418ae7,
    z: _0x32c952,
    W: _0x1e4e02,
    Df: _0x236e54,
    mb: _0x18d8a4,
    oe: _0x1d4cf4,
    $a: _0x1bd520,
    sa: _0x436d72,
    b: _0x396fcd,
    id: _0x3cce55,
    uf: _0x17760e,
    wf: _0x180a85,
    pb: _0x7262e0,
    Lf: _0xbb0175,
    Ea: _0x580812,
    Oh: _0x37217e,
    Lh: _0x5eeba8,
    dc: _0x436c7f,
    Ag: _0x399824,
    Ba: _0x223db3,
    Kh: _0x5df716,
    $f: _0x58b3d0,
    _f: _0x3e221f,
    Hh: _0x2aa585,
    Ih: _0x500cee,
    Vf: _0x37625e,
    Jh: _0x419740,
    tg: _0xea4510,
    wg: _0x44e500,
    vc: _0x4b926b,
    wc: _0x89272e,
    xc: _0x23a265,
    lg: _0x11dfb9,
    Fh: _0x15ebf1,
    Gh: _0x3319f9,
    Eh: _0x3bb136,
    Ah: _0x40c018,
    Rf: _0x40c570,
    Qf: _0xa84845,
    Of: _0x1797d5,
    Bh: _0x37b79d,
    Ch: _0x2f9000,
    Dh: _0x56a9cc,
    jd: _0x184887,
    cb: _0x18fdfc,
    zh: _0x3be0f3,
    xh: _0x173380,
    ng: _0x35f349,
    yh: _0x47994d,
    rg: _0x3f77be,
    cg: _0x24611e,
    wh: _0x2f2c11,
    uc: _0x53e0b9,
    vh: _0x230086,
    uh: _0x2a4cb3,
    th: _0x2948b2,
    sh: _0x315af7,
    rh: _0x44c14c,
    qh: _0x3a884a,
    Wa: _0x52bfc2,
    ph: _0x103c3e,
    Uf: _0xe7861,
    oh: _0x2447c4,
    Zb: _0x28bded,
    nh: _0x3229db,
    ug: _0x497882,
    yg: _0x399294,
    Aa: _0xa0d5ca,
    za: _0x3bb44c,
    mh: _0x5d1209,
    lh: _0x3daa8b,
    kh: _0x3e6269,
    hh: _0xa41d5f,
    eg: _0x18b32b,
    bg: _0x3ecf3f,
    ih: _0x429234,
    dg: _0x41ff66,
    jh: _0x5a1915,
    gh: _0xf60971,
    ec: _0x1f0b9f,
    Bg: _0x595ae6,
    Yb: _0x484f74,
    dh: _0x123d99,
    eh: _0x2296b8,
    hg: _0x10b3a6,
    R: _0x426822,
    N: _0x440328,
    va: _0x219120,
    ya: _0x2e1e4e,
    ch: _0x212f0b,
    _g: _0x1785f5,
    cc: _0x567d86,
    $g: _0xadfd65,
    Tf: _0x53802b,
    bh: _0x5717b7,
    vg: _0x50246e,
    zg: _0x472541,
    ah: _0x52b8a3,
    Uh: _0x4bcf1a,
    bb: _0x320b90,
    Ta: _0x1980a3,
    Z: _0x55a389,
    Y: _0x2ee57e,
    Th: _0x484ddf,
    df: _0x6ab91c,
    Zg: _0x5ed13a,
    Yg: _0x1f0d84,
    Nh: _0x5b9c0d,
    Ca: _0x2a3cba,
    Xf: _0x38de4f,
    _b: _0x32cdcb,
    Qh: _0x128881,
    U: _0x31d0b9,
    Eg: _0x3fc145,
    Dg: _0x229b79,
    fh: _0x530a9d,
    Wg: _0x36abbb,
    tc: _0x51517a,
    Xg: _0x472919,
    Ph: _0x5c924e,
    Vg: _0x382027,
    ig: _0x471111,
    Ug: _0x1bb5a6,
    Yf: _0x188f1e,
    Sa: _0x1e50fe,
    da: _0x387322,
    sc: _0x29bc17,
    Sh: _0x8a213e,
    Va: _0x3d6ee8,
    Mh: _0x366e81,
    xg: _0x22e74c,
    Sg: _0x355020,
    fg: _0x35c684,
    Tg: _0x28c02e,
    qc: _0x5e897c,
    $b: _0x337b68,
    Sf: _0x287242,
    ag: _0x3b7bc0,
    $: _0x3a7ca7,
    Rg: _0x2f03cb,
    kg: _0x3c700c,
    Wf: _0x13cd7a,
    ab: _0x479870,
    Pg: _0x3e8c51,
    Qg: _0x398047,
    Ng: _0xaf9a62,
    Og: _0x7836ec,
    Lg: _0x3de450,
    pg: _0x31af96,
    Mg: _0x248c11,
    _a: _0x29a06c,
    Kg: _0x509947,
    mg: _0x458f62,
    og: _0x5414de,
    Jg: _0x3af648,
    qg: _0x2192f0,
    sg: _0x3ef8a4,
    fc: _0xdf4f57,
    wa: _0x221730,
    gc: _0x53fce1,
    hc: _0x386784,
    ic: _0x3d0fac,
    jc: _0x381479,
    kc: _0x1980a1,
    Za: _0x53d49a,
    lc: _0x4bfdd7,
    mc: _0x4075a3,
    _: _0x14342f,
    nc: _0x298752,
    oc: _0x3f30a0,
    Ua: _0x521be2,
    pc: _0x3a3fcd,
    xa: _0x3b65a8,
    gg: _0x3a2191,
    Fg: _0x5de4b8,
    Rh: _0x363522,
    Gg: _0x508b03,
    Hg: _0xc78277,
    Zf: _0x567b52,
    Ig: _0x4ec8ef,
    Xa: _0x17b6ae,
    Dc: _0x470d6c,
    uj: _0x2fe0f6,
    I: _0x20ea41,
    M: _0x14ac08,
    Jc: _0x472cde,
    Ec: _0x283633,
    vd: _0x5b2c61,
    Fc: _0x287742,
    X: _0x4e05aa,
    V: _0x3e4dfe,
    D: _0x3a380d,
    Ic: _0x37eb59,
    ci: _0x4be7a3,
    w: _0x3b1215,
    fb: _0x2e325b,
    Hc: _0x19a41f,
    d: _0x49e272,
    ni: _0x14f48a,
    mi: _0x334dc3,
    c: _0x4c946c,
    fa: _0x503bd0,
    i: _0x203c42,
    Wh: _0x10542e,
    Vh: _0x171709,
    q: _0x588aea,
    Da: _0x5f4858,
    li: _0x1cf9bf,
    s: _0x207296,
    u: _0x387071,
    A: _0x2c364c,
    G: _0x16a140,
    O: _0x2fede9,
    Kc: _0x4bf956,
    di: _0x45a59d,
    Sd: _0x1db53f,
    td: _0x3a1864,
    Id: _0x25b348,
    Ed: _0xb9d0a7,
    me: _0x4a9266,
    ie: _0x2e3a68,
    je: _0x1b6087,
    _d: _0x49bb6a,
    Td: _0x3b98b5,
    Cd: _0xa24d,
    Ad: _0x16748f,
    pd: _0x2ff513,
    Bd: _0x1c1233,
    ud: _0xd87657,
    Md: _0x2b3162,
    Wd: _0xf3287,
    ke: _0x2d9768,
    Od: _0x2c904b,
    he: _0x23bda8,
    Xd: _0x35fa0c,
    ge: _0x3905ec,
    ce: _0x240249,
    ne: _0xa4ce69,
    zd: _0x5c7b85,
    kd: _0x24b0a9,
    ld: _0x51fc3f,
    Yd: _0xca3e2b,
    Ld: _0x3815eb,
    Qd: _0x3d59cd,
    Fd: _0xfc103f,
    $d: _0x595acd,
    Vd: _0x485c78,
    Zd: _0x174b8f,
    Ud: _0x2ad7e9,
    e: _0x201ad5,
    l: _0x14048d,
    kf: _0x1bb0eb,
    y: _0x58a442,
    F: _0x4c4d50,
    m: _0xc01dd,
    ha: _0x351620,
    rc: _0x457b14,
    S: _0x35df96,
    Gi: _0x4d1b43,
    Q: _0x25c075,
    f: _0x146fbf,
    vj: _0x14ae42,
    o: _0x1bf41e,
    ei: _0x2cb200,
    r: _0x585006,
    t: _0x2ce5b9,
    C: _0x5dcd6f,
    bi: _0x506bd1,
    ai: _0x51bc49,
    K: _0x30d7a8,
    xd: _0x26cc90,
    H: _0xcd2e84,
    T: _0x2c51af,
    Ac: _0x3722df,
    Fa: _0x4b205c,
    Gc: _0x49c8d1,
    qd: _0x113d57,
    be: _0x1540e7,
    Gd: _0x31ac7a,
    Jd: _0x447c38,
    Kd: _0x48dd8c,
    ee: _0x3097b8,
    Dd: _0xd7db44,
    md: _0x3cd6dd,
    sd: _0x3fcc82,
    Pd: _0x16ec5c,
    de: _0x4e5909,
    fe: _0x5f2ceb,
    Nd: _0x1ffda9,
    yd: _0x540d84,
    rd: _0x3fc554,
    Rd: _0x1fef55,
    nd: _0x121ed8,
    od: _0x2363b4,
    j: _0xaed45c,
    jb: _0x58aad7,
    v: _0x415a83,
    Ga: _0x39a8b6,
    ia: _0x3f7e0f,
    lb: _0x48b8eb
  };
  var _0x112e43 = _0x568d8c();
  var _0xe10549 = _0x3e078a.___wasm_call_ctors = function () {
    return (_0xe10549 = _0x3e078a.___wasm_call_ctors = _0x3e078a.asm.zj).apply(null, arguments);
  };
  var _0x284aca = _0x3e078a._ReleaseKeys = function () {
    return (_0x284aca = _0x3e078a._ReleaseKeys = _0x3e078a.asm.Aj).apply(null, arguments);
  };
  var _0x1b6c38 = _0x3e078a._SendMessageFloat = function () {
    return (_0x1b6c38 = _0x3e078a._SendMessageFloat = _0x3e078a.asm.Bj).apply(null, arguments);
  };
  var _0x844b45 = _0x3e078a._SendMessageString = function () {
    return (_0x844b45 = _0x3e078a._SendMessageString = _0x3e078a.asm.Cj).apply(null, arguments);
  };
  var _0x233dd5 = _0x3e078a._SendMessage = function () {
    return (_0x233dd5 = _0x3e078a._SendMessage = _0x3e078a.asm.Dj).apply(null, arguments);
  };
  var _0x2b5613 = _0x3e078a._SetFullscreen = function () {
    return (_0x2b5613 = _0x3e078a._SetFullscreen = _0x3e078a.asm.Ej).apply(null, arguments);
  };
  var _0x547536 = _0x3e078a._main = function () {
    return (_0x547536 = _0x3e078a._main = _0x3e078a.asm.Fj).apply(null, arguments);
  };
  var _0x25a545 = _0x3e078a.___errno_location = function () {
    return (_0x25a545 = _0x3e078a.___errno_location = _0x3e078a.asm.Gj).apply(null, arguments);
  };
  var _0x4eba84 = _0x3e078a._htonl = function () {
    return (_0x4eba84 = _0x3e078a._htonl = _0x3e078a.asm.Hj).apply(null, arguments);
  };
  var _0x31ddf1 = _0x3e078a._htons = function () {
    return (_0x31ddf1 = _0x3e078a._htons = _0x3e078a.asm.Ij).apply(null, arguments);
  };
  var _0x5ac15f = _0x3e078a._ntohs = function () {
    return (_0x5ac15f = _0x3e078a._ntohs = _0x3e078a.asm.Jj).apply(null, arguments);
  };
  var _0x496272 = _0x3e078a.__get_tzname = function () {
    return (_0x496272 = _0x3e078a.__get_tzname = _0x3e078a.asm.Kj).apply(null, arguments);
  };
  var _0x561ec2 = _0x3e078a.__get_daylight = function () {
    return (_0x561ec2 = _0x3e078a.__get_daylight = _0x3e078a.asm.Lj).apply(null, arguments);
  };
  var _0xfcd343 = _0x3e078a.__get_timezone = function () {
    return (_0xfcd343 = _0x3e078a.__get_timezone = _0x3e078a.asm.Mj).apply(null, arguments);
  };
  var _0x5ebf8c = _0x3e078a.stackSave = function () {
    return (_0x5ebf8c = _0x3e078a.stackSave = _0x3e078a.asm.Nj).apply(null, arguments);
  };
  var _0x4c4e79 = _0x3e078a.stackRestore = function () {
    return (_0x4c4e79 = _0x3e078a.stackRestore = _0x3e078a.asm.Oj).apply(null, arguments);
  };
  var _0x42f156 = _0x3e078a.stackAlloc = function () {
    return (_0x42f156 = _0x3e078a.stackAlloc = _0x3e078a.asm.Pj).apply(null, arguments);
  };
  var _0x202f4a = _0x3e078a._setThrew = function () {
    return (_0x202f4a = _0x3e078a._setThrew = _0x3e078a.asm.Qj).apply(null, arguments);
  };
  var _0x2e743a = _0x3e078a.___cxa_can_catch = function () {
    return (_0x2e743a = _0x3e078a.___cxa_can_catch = _0x3e078a.asm.Rj).apply(null, arguments);
  };
  var _0x217ce3 = _0x3e078a.___cxa_is_pointer_type = function () {
    return (_0x217ce3 = _0x3e078a.___cxa_is_pointer_type = _0x3e078a.asm.Sj).apply(null, arguments);
  };
  var _0x253dd7 = _0x3e078a._malloc = function () {
    return (_0x253dd7 = _0x3e078a._malloc = _0x3e078a.asm.Tj).apply(null, arguments);
  };
  var _0x2b8491 = _0x3e078a._free = function () {
    return (_0x2b8491 = _0x3e078a._free = _0x3e078a.asm.Uj).apply(null, arguments);
  };
  var _0x5ab15b = _0x3e078a._memalign = function () {
    return (_0x5ab15b = _0x3e078a._memalign = _0x3e078a.asm.Vj).apply(null, arguments);
  };
  var _0xe1599f = _0x3e078a._memset = function () {
    return (_0xe1599f = _0x3e078a._memset = _0x3e078a.asm.Wj).apply(null, arguments);
  };
  var _0x11fceb = _0x3e078a._strlen = function () {
    return (_0x11fceb = _0x3e078a._strlen = _0x3e078a.asm.Xj).apply(null, arguments);
  };
  var _0x524de6 = _0x3e078a.dynCall_iidiiii = function () {
    return (_0x524de6 = _0x3e078a.dynCall_iidiiii = _0x3e078a.asm.Zj).apply(null, arguments);
  };
  var _0x592745 = _0x3e078a.dynCall_vii = function () {
    return (_0x592745 = _0x3e078a.dynCall_vii = _0x3e078a.asm._j).apply(null, arguments);
  };
  var _0x5562d3 = _0x3e078a.dynCall_iii = function () {
    return (_0x5562d3 = _0x3e078a.dynCall_iii = _0x3e078a.asm.$j).apply(null, arguments);
  };
  var _0x1746fb = _0x3e078a.dynCall_ii = function () {
    return (_0x1746fb = _0x3e078a.dynCall_ii = _0x3e078a.asm.ak).apply(null, arguments);
  };
  var _0x1b1167 = _0x3e078a.dynCall_iiii = function () {
    return (_0x1b1167 = _0x3e078a.dynCall_iiii = _0x3e078a.asm.bk).apply(null, arguments);
  };
  var _0x1f79c2 = _0x3e078a.dynCall_jiji = function () {
    return (_0x1f79c2 = _0x3e078a.dynCall_jiji = _0x3e078a.asm.ck).apply(null, arguments);
  };
  var _0x37c083 = _0x3e078a.dynCall_vi = function () {
    return (_0x37c083 = _0x3e078a.dynCall_vi = _0x3e078a.asm.dk).apply(null, arguments);
  };
  var _0x1b7631 = _0x3e078a.dynCall_iiiii = function () {
    return (_0x1b7631 = _0x3e078a.dynCall_iiiii = _0x3e078a.asm.ek).apply(null, arguments);
  };
  var _0x1cd87a = _0x3e078a.dynCall_viii = function () {
    return (_0x1cd87a = _0x3e078a.dynCall_viii = _0x3e078a.asm.fk).apply(null, arguments);
  };
  var _0x44a3a9 = _0x3e078a.dynCall_viiiiii = function () {
    return (_0x44a3a9 = _0x3e078a.dynCall_viiiiii = _0x3e078a.asm.gk).apply(null, arguments);
  };
  var _0x2d3e45 = _0x3e078a.dynCall_viiiii = function () {
    return (_0x2d3e45 = _0x3e078a.dynCall_viiiii = _0x3e078a.asm.hk).apply(null, arguments);
  };
  var _0x35d61d = _0x3e078a.dynCall_viiii = function () {
    return (_0x35d61d = _0x3e078a.dynCall_viiii = _0x3e078a.asm.ik).apply(null, arguments);
  };
  var _0xcd6034 = _0x3e078a.dynCall_iiiiii = function () {
    return (_0xcd6034 = _0x3e078a.dynCall_iiiiii = _0x3e078a.asm.jk).apply(null, arguments);
  };
  var _0xddd37c = _0x3e078a.dynCall_iiij = function () {
    return (_0xddd37c = _0x3e078a.dynCall_iiij = _0x3e078a.asm.kk).apply(null, arguments);
  };
  var _0x4f38c0 = _0x3e078a.dynCall_v = function () {
    return (_0x4f38c0 = _0x3e078a.dynCall_v = _0x3e078a.asm.lk).apply(null, arguments);
  };
  var _0x2aed31 = _0x3e078a.dynCall_i = function () {
    return (_0x2aed31 = _0x3e078a.dynCall_i = _0x3e078a.asm.mk).apply(null, arguments);
  };
  var _0x20deee = _0x3e078a.dynCall_iiiiiiii = function () {
    return (_0x20deee = _0x3e078a.dynCall_iiiiiiii = _0x3e078a.asm.nk).apply(null, arguments);
  };
  var _0x5dd76f = _0x3e078a.dynCall_iiijiii = function () {
    return (_0x5dd76f = _0x3e078a.dynCall_iiijiii = _0x3e078a.asm.ok).apply(null, arguments);
  };
  var _0x3622cd = _0x3e078a.dynCall_iij = function () {
    return (_0x3622cd = _0x3e078a.dynCall_iij = _0x3e078a.asm.pk).apply(null, arguments);
  };
  var _0x293df2 = _0x3e078a.dynCall_iiiiiii = function () {
    return (_0x293df2 = _0x3e078a.dynCall_iiiiiii = _0x3e078a.asm.qk).apply(null, arguments);
  };
  var _0x3a9146 = _0x3e078a.dynCall_jii = function () {
    return (_0x3a9146 = _0x3e078a.dynCall_jii = _0x3e078a.asm.rk).apply(null, arguments);
  };
  var _0x6aaec1 = _0x3e078a.dynCall_viiiiiii = function () {
    return (_0x6aaec1 = _0x3e078a.dynCall_viiiiiii = _0x3e078a.asm.sk).apply(null, arguments);
  };
  var _0x399c48 = _0x3e078a.dynCall_iijji = function () {
    return (_0x399c48 = _0x3e078a.dynCall_iijji = _0x3e078a.asm.tk).apply(null, arguments);
  };
  var _0x5dd169 = _0x3e078a.dynCall_iiddi = function () {
    return (_0x5dd169 = _0x3e078a.dynCall_iiddi = _0x3e078a.asm.uk).apply(null, arguments);
  };
  var _0x2ea2e8 = _0x3e078a.dynCall_iiffi = function () {
    return (_0x2ea2e8 = _0x3e078a.dynCall_iiffi = _0x3e078a.asm.vk).apply(null, arguments);
  };
  var _0x1bb16c = _0x3e078a.dynCall_vijii = function () {
    return (_0x1bb16c = _0x3e078a.dynCall_vijii = _0x3e078a.asm.wk).apply(null, arguments);
  };
  var _0x4c2dd0 = _0x3e078a.dynCall_jiii = function () {
    return (_0x4c2dd0 = _0x3e078a.dynCall_jiii = _0x3e078a.asm.xk).apply(null, arguments);
  };
  var _0x34ef82 = _0x3e078a.dynCall_fiiffi = function () {
    return (_0x34ef82 = _0x3e078a.dynCall_fiiffi = _0x3e078a.asm.yk).apply(null, arguments);
  };
  var _0x31db12 = _0x3e078a.dynCall_viiififii = function () {
    return (_0x31db12 = _0x3e078a.dynCall_viiififii = _0x3e078a.asm.zk).apply(null, arguments);
  };
  var _0x43d146 = _0x3e078a.dynCall_fiii = function () {
    return (_0x43d146 = _0x3e078a.dynCall_fiii = _0x3e078a.asm.Ak).apply(null, arguments);
  };
  var _0x1d78f1 = _0x3e078a.dynCall_viiifi = function () {
    return (_0x1d78f1 = _0x3e078a.dynCall_viiifi = _0x3e078a.asm.Bk).apply(null, arguments);
  };
  var _0x18fdb5 = _0x3e078a.dynCall_viiji = function () {
    return (_0x18fdb5 = _0x3e078a.dynCall_viiji = _0x3e078a.asm.Ck).apply(null, arguments);
  };
  var _0x3425df = _0x3e078a.dynCall_fii = function () {
    return (_0x3425df = _0x3e078a.dynCall_fii = _0x3e078a.asm.Dk).apply(null, arguments);
  };
  var _0x183cdd = _0x3e078a.dynCall_viifi = function () {
    return (_0x183cdd = _0x3e078a.dynCall_viifi = _0x3e078a.asm.Ek).apply(null, arguments);
  };
  var _0x11dd79 = _0x3e078a.dynCall_iiiiiiiiiii = function () {
    return (_0x11dd79 = _0x3e078a.dynCall_iiiiiiiiiii = _0x3e078a.asm.Fk).apply(null, arguments);
  };
  var _0x28bf6e = _0x3e078a.dynCall_j = function () {
    return (_0x28bf6e = _0x3e078a.dynCall_j = _0x3e078a.asm.Gk).apply(null, arguments);
  };
  var _0x44df33 = _0x3e078a.dynCall_ji = function () {
    return (_0x44df33 = _0x3e078a.dynCall_ji = _0x3e078a.asm.Hk).apply(null, arguments);
  };
  var _0x529594 = _0x3e078a.dynCall_jijj = function () {
    return (_0x529594 = _0x3e078a.dynCall_jijj = _0x3e078a.asm.Ik).apply(null, arguments);
  };
  var _0x54c3dc = _0x3e078a.dynCall_iiji = function () {
    return (_0x54c3dc = _0x3e078a.dynCall_iiji = _0x3e078a.asm.Jk).apply(null, arguments);
  };
  var _0x3a550 = _0x3e078a.dynCall_viiiiiiiii = function () {
    return (_0x3a550 = _0x3e078a.dynCall_viiiiiiiii = _0x3e078a.asm.Kk).apply(null, arguments);
  };
  var _0x5daf9e = _0x3e078a.dynCall_diii = function () {
    return (_0x5daf9e = _0x3e078a.dynCall_diii = _0x3e078a.asm.Lk).apply(null, arguments);
  };
  var _0x59cc84 = _0x3e078a.dynCall_iiiiiiiiii = function () {
    return (_0x59cc84 = _0x3e078a.dynCall_iiiiiiiiii = _0x3e078a.asm.Mk).apply(null, arguments);
  };
  var _0xea2243 = _0x3e078a.dynCall_iiiiiiiii = function () {
    return (_0xea2243 = _0x3e078a.dynCall_iiiiiiiii = _0x3e078a.asm.Nk).apply(null, arguments);
  };
  var _0xf10b9 = _0x3e078a.dynCall_jjii = function () {
    return (_0xf10b9 = _0x3e078a.dynCall_jjii = _0x3e078a.asm.Ok).apply(null, arguments);
  };
  var _0x984f63 = _0x3e078a.dynCall_viiiiiiii = function () {
    return (_0x984f63 = _0x3e078a.dynCall_viiiiiiii = _0x3e078a.asm.Pk).apply(null, arguments);
  };
  var _0x490a8d = _0x3e078a.dynCall_viiff = function () {
    return (_0x490a8d = _0x3e078a.dynCall_viiff = _0x3e078a.asm.Qk).apply(null, arguments);
  };
  var _0x169531 = _0x3e078a.dynCall_ddiii = function () {
    return (_0x169531 = _0x3e078a.dynCall_ddiii = _0x3e078a.asm.Rk).apply(null, arguments);
  };
  var _0x7e04d5 = _0x3e078a.dynCall_viiffi = function () {
    return (_0x7e04d5 = _0x3e078a.dynCall_viiffi = _0x3e078a.asm.Sk).apply(null, arguments);
  };
  var _0x2362df = _0x3e078a.dynCall_diiid = function () {
    return (_0x2362df = _0x3e078a.dynCall_diiid = _0x3e078a.asm.Tk).apply(null, arguments);
  };
  var _0x24bfa7 = _0x3e078a.dynCall_jiiij = function () {
    return (_0x24bfa7 = _0x3e078a.dynCall_jiiij = _0x3e078a.asm.Uk).apply(null, arguments);
  };
  var _0x5b53cf = _0x3e078a.dynCall_fiiif = function () {
    return (_0x5b53cf = _0x3e078a.dynCall_fiiif = _0x3e078a.asm.Vk).apply(null, arguments);
  };
  var _0x5c1fc8 = _0x3e078a.dynCall_fi = function () {
    return (_0x5c1fc8 = _0x3e078a.dynCall_fi = _0x3e078a.asm.Wk).apply(null, arguments);
  };
  var _0x301ce5 = _0x3e078a.dynCall_vifi = function () {
    return (_0x301ce5 = _0x3e078a.dynCall_vifi = _0x3e078a.asm.Xk).apply(null, arguments);
  };
  var _0x561f3d = _0x3e078a.dynCall_viji = function () {
    return (_0x561f3d = _0x3e078a.dynCall_viji = _0x3e078a.asm.Yk).apply(null, arguments);
  };
  var _0x314f94 = _0x3e078a.dynCall_jidi = function () {
    return (_0x314f94 = _0x3e078a.dynCall_jidi = _0x3e078a.asm.Zk).apply(null, arguments);
  };
  var _0x4052eb = _0x3e078a.dynCall_vidi = function () {
    return (_0x4052eb = _0x3e078a.dynCall_vidi = _0x3e078a.asm._k).apply(null, arguments);
  };
  var _0x8e64ef = _0x3e078a.dynCall_dii = function () {
    return (_0x8e64ef = _0x3e078a.dynCall_dii = _0x3e078a.asm.$k).apply(null, arguments);
  };
  var _0x5cfb19 = _0x3e078a.dynCall_iiifi = function () {
    return (_0x5cfb19 = _0x3e078a.dynCall_iiifi = _0x3e078a.asm.al).apply(null, arguments);
  };
  var _0x6daf63 = _0x3e078a.dynCall_ifi = function () {
    return (_0x6daf63 = _0x3e078a.dynCall_ifi = _0x3e078a.asm.bl).apply(null, arguments);
  };
  var _0x1866c2 = _0x3e078a.dynCall_idi = function () {
    return (_0x1866c2 = _0x3e078a.dynCall_idi = _0x3e078a.asm.cl).apply(null, arguments);
  };
  var _0xd08020 = _0x3e078a.dynCall_jiiii = function () {
    return (_0xd08020 = _0x3e078a.dynCall_jiiii = _0x3e078a.asm.dl).apply(null, arguments);
  };
  var _0x539725 = _0x3e078a.dynCall_viiiiiiiiiiii = function () {
    return (_0x539725 = _0x3e078a.dynCall_viiiiiiiiiiii = _0x3e078a.asm.el).apply(null, arguments);
  };
  var _0xa60448 = _0x3e078a.dynCall_iiiiji = function () {
    return (_0xa60448 = _0x3e078a.dynCall_iiiiji = _0x3e078a.asm.fl).apply(null, arguments);
  };
  var _0x12e600 = _0x3e078a.dynCall_viiiiiiiiiiiii = function () {
    return (_0x12e600 = _0x3e078a.dynCall_viiiiiiiiiiiii = _0x3e078a.asm.gl).apply(null, arguments);
  };
  var _0x1e9b85 = _0x3e078a.dynCall_iidi = function () {
    return (_0x1e9b85 = _0x3e078a.dynCall_iidi = _0x3e078a.asm.hl).apply(null, arguments);
  };
  var _0x1bf14a = _0x3e078a.dynCall_iifi = function () {
    return (_0x1bf14a = _0x3e078a.dynCall_iifi = _0x3e078a.asm.il).apply(null, arguments);
  };
  var _0x622d20 = _0x3e078a.dynCall_fffi = function () {
    return (_0x622d20 = _0x3e078a.dynCall_fffi = _0x3e078a.asm.jl).apply(null, arguments);
  };
  var _0x484ad9 = _0x3e078a.dynCall_ijji = function () {
    return (_0x484ad9 = _0x3e078a.dynCall_ijji = _0x3e078a.asm.kl).apply(null, arguments);
  };
  var _0x28f036 = _0x3e078a.dynCall_jji = function () {
    return (_0x28f036 = _0x3e078a.dynCall_jji = _0x3e078a.asm.ll).apply(null, arguments);
  };
  var _0x2e9ef4 = _0x3e078a.dynCall_jjji = function () {
    return (_0x2e9ef4 = _0x3e078a.dynCall_jjji = _0x3e078a.asm.ml).apply(null, arguments);
  };
  var _0xb9f87d = _0x3e078a.dynCall_diiii = function () {
    return (_0xb9f87d = _0x3e078a.dynCall_diiii = _0x3e078a.asm.nl).apply(null, arguments);
  };
  var _0x2a28f0 = _0x3e078a.dynCall_viiiiiiiiii = function () {
    return (_0x2a28f0 = _0x3e078a.dynCall_viiiiiiiiii = _0x3e078a.asm.ol).apply(null, arguments);
  };
  var _0xd66e4b = _0x3e078a.dynCall_dddi = function () {
    return (_0xd66e4b = _0x3e078a.dynCall_dddi = _0x3e078a.asm.pl).apply(null, arguments);
  };
  var _0x4c0755 = _0x3e078a.dynCall_viidi = function () {
    return (_0x4c0755 = _0x3e078a.dynCall_viidi = _0x3e078a.asm.ql).apply(null, arguments);
  };
  var _0x21f958 = _0x3e078a.dynCall_iijii = function () {
    return (_0x21f958 = _0x3e078a.dynCall_iijii = _0x3e078a.asm.rl).apply(null, arguments);
  };
  var _0x2ec1cb = _0x3e078a.dynCall_iiiiidii = function () {
    return (_0x2ec1cb = _0x3e078a.dynCall_iiiiidii = _0x3e078a.asm.sl).apply(null, arguments);
  };
  var _0x1000e8 = _0x3e078a.dynCall_iiiiiiiiiji = function () {
    return (_0x1000e8 = _0x3e078a.dynCall_iiiiiiiiiji = _0x3e078a.asm.tl).apply(null, arguments);
  };
  var _0x5b0fe3 = _0x3e078a.dynCall_vji = function () {
    return (_0x5b0fe3 = _0x3e078a.dynCall_vji = _0x3e078a.asm.ul).apply(null, arguments);
  };
  var _0x570891 = _0x3e078a.dynCall_viijji = function () {
    return (_0x570891 = _0x3e078a.dynCall_viijji = _0x3e078a.asm.vl).apply(null, arguments);
  };
  var _0x14c21a = _0x3e078a.dynCall_jdi = function () {
    return (_0x14c21a = _0x3e078a.dynCall_jdi = _0x3e078a.asm.wl).apply(null, arguments);
  };
  var _0x2e451b = _0x3e078a.dynCall_vijiii = function () {
    return (_0x2e451b = _0x3e078a.dynCall_vijiii = _0x3e078a.asm.xl).apply(null, arguments);
  };
  var _0x509d68 = _0x3e078a.dynCall_ijiii = function () {
    return (_0x509d68 = _0x3e078a.dynCall_ijiii = _0x3e078a.asm.yl).apply(null, arguments);
  };
  var _0x8034a9 = _0x3e078a.dynCall_jiiji = function () {
    return (_0x8034a9 = _0x3e078a.dynCall_jiiji = _0x3e078a.asm.zl).apply(null, arguments);
  };
  var _0x467364 = _0x3e078a.dynCall_viij = function () {
    return (_0x467364 = _0x3e078a.dynCall_viij = _0x3e078a.asm.Al).apply(null, arguments);
  };
  var _0x34f749 = _0x3e078a.dynCall_viiijj = function () {
    return (_0x34f749 = _0x3e078a.dynCall_viiijj = _0x3e078a.asm.Bl).apply(null, arguments);
  };
  var _0x597673 = _0x3e078a.dynCall_viiij = function () {
    return (_0x597673 = _0x3e078a.dynCall_viiij = _0x3e078a.asm.Cl).apply(null, arguments);
  };
  var _0x16552a = _0x3e078a.dynCall_vifii = function () {
    return (_0x16552a = _0x3e078a.dynCall_vifii = _0x3e078a.asm.Dl).apply(null, arguments);
  };
  var _0x22297d = _0x3e078a.dynCall_viiiji = function () {
    return (_0x22297d = _0x3e078a.dynCall_viiiji = _0x3e078a.asm.El).apply(null, arguments);
  };
  var _0x5884d8 = _0x3e078a.dynCall_jijiii = function () {
    return (_0x5884d8 = _0x3e078a.dynCall_jijiii = _0x3e078a.asm.Fl).apply(null, arguments);
  };
  var _0x3703cf = _0x3e078a.dynCall_viiiiiiiiiii = function () {
    return (_0x3703cf = _0x3e078a.dynCall_viiiiiiiiiii = _0x3e078a.asm.Gl).apply(null, arguments);
  };
  var _0x1905f1 = _0x3e078a.dynCall_iiijii = function () {
    return (_0x1905f1 = _0x3e078a.dynCall_iiijii = _0x3e078a.asm.Hl).apply(null, arguments);
  };
  var _0x25dc34 = _0x3e078a.dynCall_iijiiii = function () {
    return (_0x25dc34 = _0x3e078a.dynCall_iijiiii = _0x3e078a.asm.Il).apply(null, arguments);
  };
  var _0x15648c = _0x3e078a.dynCall_viijii = function () {
    return (_0x15648c = _0x3e078a.dynCall_viijii = _0x3e078a.asm.Jl).apply(null, arguments);
  };
  var _0x531abb = _0x3e078a.dynCall_iijiiiiii = function () {
    return (_0x531abb = _0x3e078a.dynCall_iijiiiiii = _0x3e078a.asm.Kl).apply(null, arguments);
  };
  var _0x13ceb5 = _0x3e078a.dynCall_iijjiiiiii = function () {
    return (_0x13ceb5 = _0x3e078a.dynCall_iijjiiiiii = _0x3e078a.asm.Ll).apply(null, arguments);
  };
  var _0x32eaf0 = _0x3e078a.dynCall_iiiijjii = function () {
    return (_0x32eaf0 = _0x3e078a.dynCall_iiiijjii = _0x3e078a.asm.Ml).apply(null, arguments);
  };
  var _0x4e072f = _0x3e078a.dynCall_iijiii = function () {
    return (_0x4e072f = _0x3e078a.dynCall_iijiii = _0x3e078a.asm.Nl).apply(null, arguments);
  };
  var _0x2e863f = _0x3e078a.dynCall_iiiiidi = function () {
    return (_0x2e863f = _0x3e078a.dynCall_iiiiidi = _0x3e078a.asm.Ol).apply(null, arguments);
  };
  var _0x36823c = _0x3e078a.dynCall_iiiiiiiiiiii = function () {
    return (_0x36823c = _0x3e078a.dynCall_iiiiiiiiiiii = _0x3e078a.asm.Pl).apply(null, arguments);
  };
  var _0x388ac4 = _0x3e078a.dynCall_iiiiiiiiiiiii = function () {
    return (_0x388ac4 = _0x3e078a.dynCall_iiiiiiiiiiiii = _0x3e078a.asm.Ql).apply(null, arguments);
  };
  var _0x3a3206 = _0x3e078a.dynCall_iiiiiiiiiiiiii = function () {
    return (_0x3a3206 = _0x3e078a.dynCall_iiiiiiiiiiiiii = _0x3e078a.asm.Rl).apply(null, arguments);
  };
  var _0x4afdda = _0x3e078a.dynCall_iiiiiiiiiiiiiii = function () {
    return (_0x4afdda = _0x3e078a.dynCall_iiiiiiiiiiiiiii = _0x3e078a.asm.Sl).apply(null, arguments);
  };
  var _0x24137d = _0x3e078a.dynCall_iiiiiiiiiiiiiiii = function () {
    return (_0x24137d = _0x3e078a.dynCall_iiiiiiiiiiiiiiii = _0x3e078a.asm.Tl).apply(null, arguments);
  };
  var _0x3450a0 = _0x3e078a.dynCall_iiiiiiiiiiiiiiiii = function () {
    return (_0x3450a0 = _0x3e078a.dynCall_iiiiiiiiiiiiiiiii = _0x3e078a.asm.Ul).apply(null, arguments);
  };
  var _0x24b94e = _0x3e078a.dynCall_iiiiiiiiiiiiiiiiii = function () {
    return (_0x24b94e = _0x3e078a.dynCall_iiiiiiiiiiiiiiiiii = _0x3e078a.asm.Vl).apply(null, arguments);
  };
  var _0x148188 = _0x3e078a.dynCall_iiiiiiiiiiiiiiiiiii = function () {
    return (_0x148188 = _0x3e078a.dynCall_iiiiiiiiiiiiiiiiiii = _0x3e078a.asm.Wl).apply(null, arguments);
  };
  var _0x4a823d = _0x3e078a.dynCall_fifi = function () {
    return (_0x4a823d = _0x3e078a.dynCall_fifi = _0x3e078a.asm.Xl).apply(null, arguments);
  };
  var _0x119783 = _0x3e078a.dynCall_fiiii = function () {
    return (_0x119783 = _0x3e078a.dynCall_fiiii = _0x3e078a.asm.Yl).apply(null, arguments);
  };
  var _0x52aa09 = _0x3e078a.dynCall_fiifi = function () {
    return (_0x52aa09 = _0x3e078a.dynCall_fiifi = _0x3e078a.asm.Zl).apply(null, arguments);
  };
  var _0x28424c = _0x3e078a.dynCall_iiiifi = function () {
    return (_0x28424c = _0x3e078a.dynCall_iiiifi = _0x3e078a.asm._l).apply(null, arguments);
  };
  var _0x1dd8f2 = _0x3e078a.dynCall_jiiijii = function () {
    return (_0x1dd8f2 = _0x3e078a.dynCall_jiiijii = _0x3e078a.asm.$l).apply(null, arguments);
  };
  var _0x1415ac = _0x3e078a.dynCall_viiijiii = function () {
    return (_0x1415ac = _0x3e078a.dynCall_viiijiii = _0x3e078a.asm.am).apply(null, arguments);
  };
  var _0x4fd308 = _0x3e078a.dynCall_viiiifi = function () {
    return (_0x4fd308 = _0x3e078a.dynCall_viiiifi = _0x3e078a.asm.bm).apply(null, arguments);
  };
  var _0x286aa5 = _0x3e078a.dynCall_viiiiiiiiifi = function () {
    return (_0x286aa5 = _0x3e078a.dynCall_viiiiiiiiifi = _0x3e078a.asm.cm).apply(null, arguments);
  };
  var _0x20efe8 = _0x3e078a.dynCall_iiiifii = function () {
    return (_0x20efe8 = _0x3e078a.dynCall_iiiifii = _0x3e078a.asm.dm).apply(null, arguments);
  };
  var _0x2ae79d = _0x3e078a.dynCall_iiifii = function () {
    return (_0x2ae79d = _0x3e078a.dynCall_iiifii = _0x3e078a.asm.em).apply(null, arguments);
  };
  var _0x2bdcd3 = _0x3e078a.dynCall_viiiifii = function () {
    return (_0x2bdcd3 = _0x3e078a.dynCall_viiiifii = _0x3e078a.asm.fm).apply(null, arguments);
  };
  var _0x2df344 = _0x3e078a.dynCall_jiiiid = function () {
    return (_0x2df344 = _0x3e078a.dynCall_jiiiid = _0x3e078a.asm.gm).apply(null, arguments);
  };
  var _0xbf6398 = _0x3e078a.dynCall_viiiiiiifiifii = function () {
    return (_0xbf6398 = _0x3e078a.dynCall_viiiiiiifiifii = _0x3e078a.asm.hm).apply(null, arguments);
  };
  var _0x1a76c1 = _0x3e078a.dynCall_viiiiiiifddfii = function () {
    return (_0x1a76c1 = _0x3e078a.dynCall_viiiiiiifddfii = _0x3e078a.asm.im).apply(null, arguments);
  };
  var _0x5d16e5 = _0x3e078a.dynCall_viiiiiiifjjfii = function () {
    return (_0x5d16e5 = _0x3e078a.dynCall_viiiiiiifjjfii = _0x3e078a.asm.jm).apply(null, arguments);
  };
  var _0x2c9792 = _0x3e078a.dynCall_viiiiiiiffffii = function () {
    return (_0x2c9792 = _0x3e078a.dynCall_viiiiiiiffffii = _0x3e078a.asm.km).apply(null, arguments);
  };
  var _0x5958ac = _0x3e078a.dynCall_dji = function () {
    return (_0x5958ac = _0x3e078a.dynCall_dji = _0x3e078a.asm.lm).apply(null, arguments);
  };
  var _0x400335 = _0x3e078a.dynCall_iji = function () {
    return (_0x400335 = _0x3e078a.dynCall_iji = _0x3e078a.asm.mm).apply(null, arguments);
  };
  var _0x1e61a4 = _0x3e078a.dynCall_viif = function () {
    return (_0x1e61a4 = _0x3e078a.dynCall_viif = _0x3e078a.asm.nm).apply(null, arguments);
  };
  var _0x2089a7 = _0x3e078a.dynCall_iiiiij = function () {
    return (_0x2089a7 = _0x3e078a.dynCall_iiiiij = _0x3e078a.asm.om).apply(null, arguments);
  };
  var _0x758b04 = _0x3e078a.dynCall_viijiiijiiii = function () {
    return (_0x758b04 = _0x3e078a.dynCall_viijiiijiiii = _0x3e078a.asm.pm).apply(null, arguments);
  };
  var _0x27e273 = _0x3e078a.dynCall_vijjji = function () {
    return (_0x27e273 = _0x3e078a.dynCall_vijjji = _0x3e078a.asm.qm).apply(null, arguments);
  };
  var _0x4363e8 = _0x3e078a.dynCall_viiiijiii = function () {
    return (_0x4363e8 = _0x3e078a.dynCall_viiiijiii = _0x3e078a.asm.rm).apply(null, arguments);
  };
  var _0x1bf5e1 = _0x3e078a.dynCall_viiiiiiiiiiiiii = function () {
    return (_0x1bf5e1 = _0x3e078a.dynCall_viiiiiiiiiiiiii = _0x3e078a.asm.sm).apply(null, arguments);
  };
  var _0x48d9dc = _0x3e078a.dynCall_viiiiiiiiiiiiiii = function () {
    return (_0x48d9dc = _0x3e078a.dynCall_viiiiiiiiiiiiiii = _0x3e078a.asm.tm).apply(null, arguments);
  };
  var _0x451ecb = _0x3e078a.dynCall_viiiiiiiiiiiiiiii = function () {
    return (_0x451ecb = _0x3e078a.dynCall_viiiiiiiiiiiiiiii = _0x3e078a.asm.um).apply(null, arguments);
  };
  var _0xae29e0 = _0x3e078a.dynCall_viiiiiiiiiiiiiiiii = function () {
    return (_0xae29e0 = _0x3e078a.dynCall_viiiiiiiiiiiiiiiii = _0x3e078a.asm.vm).apply(null, arguments);
  };
  var _0x16480a = _0x3e078a.dynCall_viiiiiiiiiiiiiiiiii = function () {
    return (_0x16480a = _0x3e078a.dynCall_viiiiiiiiiiiiiiiiii = _0x3e078a.asm.wm).apply(null, arguments);
  };
  var _0x26929a = _0x3e078a.dynCall_viiidi = function () {
    return (_0x26929a = _0x3e078a.dynCall_viiidi = _0x3e078a.asm.xm).apply(null, arguments);
  };
  var _0x560aa0 = _0x3e078a.dynCall_vijijii = function () {
    return (_0x560aa0 = _0x3e078a.dynCall_vijijii = _0x3e078a.asm.ym).apply(null, arguments);
  };
  var _0x4c197a = _0x3e078a.dynCall_viijiiiiii = function () {
    return (_0x4c197a = _0x3e078a.dynCall_viijiiiiii = _0x3e078a.asm.zm).apply(null, arguments);
  };
  var _0xdf6fa4 = _0x3e078a.dynCall_vjjjiiii = function () {
    return (_0xdf6fa4 = _0x3e078a.dynCall_vjjjiiii = _0x3e078a.asm.Am).apply(null, arguments);
  };
  var _0x4c952e = _0x3e078a.dynCall_vjiiiii = function () {
    return (_0x4c952e = _0x3e078a.dynCall_vjiiiii = _0x3e078a.asm.Bm).apply(null, arguments);
  };
  var _0x22efe7 = _0x3e078a.dynCall_jiiiiiiiiii = function () {
    return (_0x22efe7 = _0x3e078a.dynCall_jiiiiiiiiii = _0x3e078a.asm.Cm).apply(null, arguments);
  };
  var _0x568e75 = _0x3e078a.dynCall_jiiiii = function () {
    return (_0x568e75 = _0x3e078a.dynCall_jiiiii = _0x3e078a.asm.Dm).apply(null, arguments);
  };
  var _0x2a7fdf = _0x3e078a.dynCall_fiffffi = function () {
    return (_0x2a7fdf = _0x3e078a.dynCall_fiffffi = _0x3e078a.asm.Em).apply(null, arguments);
  };
  var _0x42a486 = _0x3e078a.dynCall_iiiffi = function () {
    return (_0x42a486 = _0x3e078a.dynCall_iiiffi = _0x3e078a.asm.Fm).apply(null, arguments);
  };
  var _0x1d9719 = _0x3e078a.dynCall_iifii = function () {
    return (_0x1d9719 = _0x3e078a.dynCall_iifii = _0x3e078a.asm.Gm).apply(null, arguments);
  };
  var _0xc50c3b = _0x3e078a.dynCall_iiffii = function () {
    return (_0xc50c3b = _0x3e078a.dynCall_iiffii = _0x3e078a.asm.Hm).apply(null, arguments);
  };
  var _0x2e70aa = _0x3e078a.dynCall_iiifiii = function () {
    return (_0x2e70aa = _0x3e078a.dynCall_iiifiii = _0x3e078a.asm.Im).apply(null, arguments);
  };
  var _0x41f8c9 = _0x3e078a.dynCall_iiififii = function () {
    return (_0x41f8c9 = _0x3e078a.dynCall_iiififii = _0x3e078a.asm.Jm).apply(null, arguments);
  };
  var _0x4d01b4 = _0x3e078a.dynCall_iiifiiiii = function () {
    return (_0x4d01b4 = _0x3e078a.dynCall_iiifiiiii = _0x3e078a.asm.Km).apply(null, arguments);
  };
  var _0x1445d7 = _0x3e078a.dynCall_iiffifiii = function () {
    return (_0x1445d7 = _0x3e078a.dynCall_iiffifiii = _0x3e078a.asm.Lm).apply(null, arguments);
  };
  var _0x49c842 = _0x3e078a.dynCall_iifiifiii = function () {
    return (_0x49c842 = _0x3e078a.dynCall_iifiifiii = _0x3e078a.asm.Mm).apply(null, arguments);
  };
  var _0x328b80 = _0x3e078a.dynCall_iiiifiii = function () {
    return (_0x328b80 = _0x3e078a.dynCall_iiiifiii = _0x3e078a.asm.Nm).apply(null, arguments);
  };
  var _0x3ed0bd = _0x3e078a.dynCall_iiifiiii = function () {
    return (_0x3ed0bd = _0x3e078a.dynCall_iiifiiii = _0x3e078a.asm.Om).apply(null, arguments);
  };
  var _0x17398c = _0x3e078a.dynCall_iiiiifii = function () {
    return (_0x17398c = _0x3e078a.dynCall_iiiiifii = _0x3e078a.asm.Pm).apply(null, arguments);
  };
  var _0x53ff76 = _0x3e078a.dynCall_iifiifffii = function () {
    return (_0x53ff76 = _0x3e078a.dynCall_iifiifffii = _0x3e078a.asm.Qm).apply(null, arguments);
  };
  var _0x3eef3c = _0x3e078a.dynCall_iiffffi = function () {
    return (_0x3eef3c = _0x3e078a.dynCall_iiffffi = _0x3e078a.asm.Rm).apply(null, arguments);
  };
  var _0x4c791e = _0x3e078a.dynCall_viiiijii = function () {
    return (_0x4c791e = _0x3e078a.dynCall_viiiijii = _0x3e078a.asm.Sm).apply(null, arguments);
  };
  var _0x4e0a1e = _0x3e078a.dynCall_vifiiii = function () {
    return (_0x4e0a1e = _0x3e078a.dynCall_vifiiii = _0x3e078a.asm.Tm).apply(null, arguments);
  };
  var _0x1fb1b6 = _0x3e078a.dynCall_vidii = function () {
    return (_0x1fb1b6 = _0x3e078a.dynCall_vidii = _0x3e078a.asm.Um).apply(null, arguments);
  };
  var _0x143950 = _0x3e078a.dynCall_iiffffii = function () {
    return (_0x143950 = _0x3e078a.dynCall_iiffffii = _0x3e078a.asm.Vm).apply(null, arguments);
  };
  var _0x2cd330 = _0x3e078a.dynCall_vifffii = function () {
    return (_0x2cd330 = _0x3e078a.dynCall_vifffii = _0x3e078a.asm.Wm).apply(null, arguments);
  };
  var _0x177b43 = _0x3e078a.dynCall_fiifii = function () {
    return (_0x177b43 = _0x3e078a.dynCall_fiifii = _0x3e078a.asm.Xm).apply(null, arguments);
  };
  var _0x2d209f = _0x3e078a.dynCall_viiiiiifiifiii = function () {
    return (_0x2d209f = _0x3e078a.dynCall_viiiiiifiifiii = _0x3e078a.asm.Ym).apply(null, arguments);
  };
  var _0x580042 = _0x3e078a.dynCall_iiffffiii = function () {
    return (_0x580042 = _0x3e078a.dynCall_iiffffiii = _0x3e078a.asm.Zm).apply(null, arguments);
  };
  var _0x3a2a96 = _0x3e078a.dynCall_vffi = function () {
    return (_0x3a2a96 = _0x3e078a.dynCall_vffi = _0x3e078a.asm._m).apply(null, arguments);
  };
  var _0x27bd77 = _0x3e078a.dynCall_iiidfi = function () {
    return (_0x27bd77 = _0x3e078a.dynCall_iiidfi = _0x3e078a.asm.$m).apply(null, arguments);
  };
  var _0x2f524a = _0x3e078a.dynCall_iiijfi = function () {
    return (_0x2f524a = _0x3e078a.dynCall_iiijfi = _0x3e078a.asm.an).apply(null, arguments);
  };
  var _0x31b7d3 = _0x3e078a.dynCall_iiiffii = function () {
    return (_0x31b7d3 = _0x3e078a.dynCall_iiiffii = _0x3e078a.asm.bn).apply(null, arguments);
  };
  var _0x37b2b2 = _0x3e078a.dynCall_iifffi = function () {
    return (_0x37b2b2 = _0x3e078a.dynCall_iifffi = _0x3e078a.asm.cn).apply(null, arguments);
  };
  var _0x1c1766 = _0x3e078a.dynCall_iiiififi = function () {
    return (_0x1c1766 = _0x3e078a.dynCall_iiiififi = _0x3e078a.asm.dn).apply(null, arguments);
  };
  var _0x3a9ea1 = _0x3e078a.dynCall_iiiffifiii = function () {
    return (_0x3a9ea1 = _0x3e078a.dynCall_iiiffifiii = _0x3e078a.asm.en).apply(null, arguments);
  };
  var _0x14326b = _0x3e078a.dynCall_iiifiifii = function () {
    return (_0x14326b = _0x3e078a.dynCall_iiifiifii = _0x3e078a.asm.fn).apply(null, arguments);
  };
  var _0x5a3a5e = _0x3e078a.dynCall_iiifiifiiii = function () {
    return (_0x5a3a5e = _0x3e078a.dynCall_iiifiifiiii = _0x3e078a.asm.gn).apply(null, arguments);
  };
  var _0x44cb3d = _0x3e078a.dynCall_ifii = function () {
    return (_0x44cb3d = _0x3e078a.dynCall_ifii = _0x3e078a.asm.hn).apply(null, arguments);
  };
  var _0x48267f = _0x3e078a.dynCall_ifffii = function () {
    return (_0x48267f = _0x3e078a.dynCall_ifffii = _0x3e078a.asm.jn).apply(null, arguments);
  };
  var _0x465116 = _0x3e078a.dynCall_ffffii = function () {
    return (_0x465116 = _0x3e078a.dynCall_ffffii = _0x3e078a.asm.kn).apply(null, arguments);
  };
  var _0x2b3d81 = _0x3e078a.dynCall_ffffifi = function () {
    return (_0x2b3d81 = _0x3e078a.dynCall_ffffifi = _0x3e078a.asm.ln).apply(null, arguments);
  };
  var _0x2b9125 = _0x3e078a.dynCall_ffffiffi = function () {
    return (_0x2b9125 = _0x3e078a.dynCall_ffffiffi = _0x3e078a.asm.mn).apply(null, arguments);
  };
  var _0x385b89 = _0x3e078a.dynCall_ifiii = function () {
    return (_0x385b89 = _0x3e078a.dynCall_ifiii = _0x3e078a.asm.nn).apply(null, arguments);
  };
  var _0x2b3343 = _0x3e078a.dynCall_iifiiiiii = function () {
    return (_0x2b3343 = _0x3e078a.dynCall_iifiiiiii = _0x3e078a.asm.on).apply(null, arguments);
  };
  var _0x1bf014 = _0x3e078a.dynCall_iifiiiii = function () {
    return (_0x1bf014 = _0x3e078a.dynCall_iifiiiii = _0x3e078a.asm.pn).apply(null, arguments);
  };
  var _0x99a364 = _0x3e078a.dynCall_iiffiiiii = function () {
    return (_0x99a364 = _0x3e078a.dynCall_iiffiiiii = _0x3e078a.asm.qn).apply(null, arguments);
  };
  var _0x2e8e7f = _0x3e078a.dynCall_iiffifii = function () {
    return (_0x2e8e7f = _0x3e078a.dynCall_iiffifii = _0x3e078a.asm.rn).apply(null, arguments);
  };
  var _0x2dcc92 = _0x3e078a.dynCall_iifiifii = function () {
    return (_0x2dcc92 = _0x3e078a.dynCall_iifiifii = _0x3e078a.asm.sn).apply(null, arguments);
  };
  var _0x34ec42 = _0x3e078a.dynCall_iififi = function () {
    return (_0x34ec42 = _0x3e078a.dynCall_iififi = _0x3e078a.asm.tn).apply(null, arguments);
  };
  var _0x217455 = _0x3e078a.dynCall_iiififi = function () {
    return (_0x217455 = _0x3e078a.dynCall_iiififi = _0x3e078a.asm.un).apply(null, arguments);
  };
  var _0x50e301 = _0x3e078a.dynCall_iifiii = function () {
    return (_0x50e301 = _0x3e078a.dynCall_iifiii = _0x3e078a.asm.vn).apply(null, arguments);
  };
  var _0x353932 = _0x3e078a.dynCall_iiiiifiiii = function () {
    return (_0x353932 = _0x3e078a.dynCall_iiiiifiiii = _0x3e078a.asm.wn).apply(null, arguments);
  };
  var _0x58d432 = _0x3e078a.dynCall_viidiii = function () {
    return (_0x58d432 = _0x3e078a.dynCall_viidiii = _0x3e078a.asm.xn).apply(null, arguments);
  };
  var _0x54d311 = _0x3e078a.dynCall_diidi = function () {
    return (_0x54d311 = _0x3e078a.dynCall_diidi = _0x3e078a.asm.yn).apply(null, arguments);
  };
  var _0x4a1e29 = _0x3e078a.dynCall_fiifdi = function () {
    return (_0x4a1e29 = _0x3e078a.dynCall_fiifdi = _0x3e078a.asm.zn).apply(null, arguments);
  };
  var _0x211771 = _0x3e078a.dynCall_viiiiiifddfiii = function () {
    return (_0x211771 = _0x3e078a.dynCall_viiiiiifddfiii = _0x3e078a.asm.An).apply(null, arguments);
  };
  var _0x49cbbe = _0x3e078a.dynCall_viijiii = function () {
    return (_0x49cbbe = _0x3e078a.dynCall_viijiii = _0x3e078a.asm.Bn).apply(null, arguments);
  };
  var _0x1a98a9 = _0x3e078a.dynCall_fiifji = function () {
    return (_0x1a98a9 = _0x3e078a.dynCall_fiifji = _0x3e078a.asm.Cn).apply(null, arguments);
  };
  var _0x1a946d = _0x3e078a.dynCall_viiiiiifjjfiii = function () {
    return (_0x1a946d = _0x3e078a.dynCall_viiiiiifjjfiii = _0x3e078a.asm.Dn).apply(null, arguments);
  };
  var _0xffe392 = _0x3e078a.dynCall_viiiifiii = function () {
    return (_0xffe392 = _0x3e078a.dynCall_viiiifiii = _0x3e078a.asm.En).apply(null, arguments);
  };
  var _0x1f3997 = _0x3e078a.dynCall_viifiii = function () {
    return (_0x1f3997 = _0x3e078a.dynCall_viifiii = _0x3e078a.asm.Fn).apply(null, arguments);
  };
  var _0x4c7e78 = _0x3e078a.dynCall_viiiiiiffffiii = function () {
    return (_0x4c7e78 = _0x3e078a.dynCall_viiiiiiffffiii = _0x3e078a.asm.Gn).apply(null, arguments);
  };
  var _0x3b7380 = _0x3e078a.dynCall_viifiiii = function () {
    return (_0x3b7380 = _0x3e078a.dynCall_viifiiii = _0x3e078a.asm.Hn).apply(null, arguments);
  };
  var _0x190a01 = _0x3e078a.dynCall_viifii = function () {
    return (_0x190a01 = _0x3e078a.dynCall_viifii = _0x3e078a.asm.In).apply(null, arguments);
  };
  var _0x2563b0 = _0x3e078a.dynCall_viffi = function () {
    return (_0x2563b0 = _0x3e078a.dynCall_viffi = _0x3e078a.asm.Jn).apply(null, arguments);
  };
  var _0x4d2c05 = _0x3e078a.dynCall_iiiiifiii = function () {
    return (_0x4d2c05 = _0x3e078a.dynCall_iiiiifiii = _0x3e078a.asm.Kn).apply(null, arguments);
  };
  var _0x575b6f = _0x3e078a.dynCall_fffffi = function () {
    return (_0x575b6f = _0x3e078a.dynCall_fffffi = _0x3e078a.asm.Ln).apply(null, arguments);
  };
  var _0x7aad8e = _0x3e078a.dynCall_fiiffffi = function () {
    return (_0x7aad8e = _0x3e078a.dynCall_fiiffffi = _0x3e078a.asm.Mn).apply(null, arguments);
  };
  var _0x1d94ef = _0x3e078a.dynCall_fffifffi = function () {
    return (_0x1d94ef = _0x3e078a.dynCall_fffifffi = _0x3e078a.asm.Nn).apply(null, arguments);
  };
  var _0x3ba416 = _0x3e078a.dynCall_fifffi = function () {
    return (_0x3ba416 = _0x3e078a.dynCall_fifffi = _0x3e078a.asm.On).apply(null, arguments);
  };
  var _0x2028fc = _0x3e078a.dynCall_iffi = function () {
    return (_0x2028fc = _0x3e078a.dynCall_iffi = _0x3e078a.asm.Pn).apply(null, arguments);
  };
  var _0x2965dc = _0x3e078a.dynCall_viiffffi = function () {
    return (_0x2965dc = _0x3e078a.dynCall_viiffffi = _0x3e078a.asm.Qn).apply(null, arguments);
  };
  var _0x87716b = _0x3e078a.dynCall_viffii = function () {
    return (_0x87716b = _0x3e078a.dynCall_viffii = _0x3e078a.asm.Rn).apply(null, arguments);
  };
  var _0x56afbd = _0x3e078a.dynCall_ffi = function () {
    return (_0x56afbd = _0x3e078a.dynCall_ffi = _0x3e078a.asm.Sn).apply(null, arguments);
  };
  var _0x302844 = _0x3e078a.dynCall_ifiiii = function () {
    return (_0x302844 = _0x3e078a.dynCall_ifiiii = _0x3e078a.asm.Tn).apply(null, arguments);
  };
  var _0x2f16eb = _0x3e078a.dynCall_idiiiii = function () {
    return (_0x2f16eb = _0x3e078a.dynCall_idiiiii = _0x3e078a.asm.Un).apply(null, arguments);
  };
  var _0x11182a = _0x3e078a.dynCall_idiiii = function () {
    return (_0x11182a = _0x3e078a.dynCall_idiiii = _0x3e078a.asm.Vn).apply(null, arguments);
  };
  var _0x7b6f18 = _0x3e078a.dynCall_idii = function () {
    return (_0x7b6f18 = _0x3e078a.dynCall_idii = _0x3e078a.asm.Wn).apply(null, arguments);
  };
  var _0x5f03d9 = _0x3e078a.dynCall_vijiiii = function () {
    return (_0x5f03d9 = _0x3e078a.dynCall_vijiiii = _0x3e078a.asm.Xn).apply(null, arguments);
  };
  var _0x52a7e6 = _0x3e078a.dynCall_iiijiiii = function () {
    return (_0x52a7e6 = _0x3e078a.dynCall_iiijiiii = _0x3e078a.asm.Yn).apply(null, arguments);
  };
  var _0x4ca698 = _0x3e078a.dynCall_iiiji = function () {
    return (_0x4ca698 = _0x3e078a.dynCall_iiiji = _0x3e078a.asm.Zn).apply(null, arguments);
  };
  var _0x377c71 = _0x3e078a.dynCall_vjiiii = function () {
    return (_0x377c71 = _0x3e078a.dynCall_vjiiii = _0x3e078a.asm._n).apply(null, arguments);
  };
  var _0x1ec237 = _0x3e078a.dynCall_iddi = function () {
    return (_0x1ec237 = _0x3e078a.dynCall_iddi = _0x3e078a.asm.$n).apply(null, arguments);
  };
  var _0x198db0 = _0x3e078a.dynCall_viffffi = function () {
    return (_0x198db0 = _0x3e078a.dynCall_viffffi = _0x3e078a.asm.ao).apply(null, arguments);
  };
  var _0x21e8d3 = _0x3e078a.dynCall_viifiifi = function () {
    return (_0x21e8d3 = _0x3e078a.dynCall_viifiifi = _0x3e078a.asm.bo).apply(null, arguments);
  };
  var _0x24b44a = _0x3e078a.dynCall_vifiifi = function () {
    return (_0x24b44a = _0x3e078a.dynCall_vifiifi = _0x3e078a.asm.co).apply(null, arguments);
  };
  var _0x48bba0 = _0x3e078a.dynCall_vifiii = function () {
    return (_0x48bba0 = _0x3e078a.dynCall_vifiii = _0x3e078a.asm.eo).apply(null, arguments);
  };
  var _0x2dd63e = _0x3e078a.dynCall_viddfffi = function () {
    return (_0x2dd63e = _0x3e078a.dynCall_viddfffi = _0x3e078a.asm.fo).apply(null, arguments);
  };
  var _0x5da4a4 = _0x3e078a.dynCall_viidfffi = function () {
    return (_0x5da4a4 = _0x3e078a.dynCall_viidfffi = _0x3e078a.asm.go).apply(null, arguments);
  };
  var _0x51c235 = _0x3e078a.dynCall_vidifffi = function () {
    return (_0x51c235 = _0x3e078a.dynCall_vidifffi = _0x3e078a.asm.ho).apply(null, arguments);
  };
  var _0x403d94 = _0x3e078a.dynCall_viiifffi = function () {
    return (_0x403d94 = _0x3e078a.dynCall_viiifffi = _0x3e078a.asm.io).apply(null, arguments);
  };
  var _0x5e9b9e = _0x3e078a.dynCall_viddi = function () {
    return (_0x5e9b9e = _0x3e078a.dynCall_viddi = _0x3e078a.asm.jo).apply(null, arguments);
  };
  var _0x2d2413 = _0x3e078a.dynCall_viiiiifi = function () {
    return (_0x2d2413 = _0x3e078a.dynCall_viiiiifi = _0x3e078a.asm.ko).apply(null, arguments);
  };
  var _0x5a4bb3 = _0x3e078a.dynCall_viiiiiiifi = function () {
    return (_0x5a4bb3 = _0x3e078a.dynCall_viiiiiiifi = _0x3e078a.asm.lo).apply(null, arguments);
  };
  var _0x1902d5 = _0x3e078a.dynCall_viidii = function () {
    return (_0x1902d5 = _0x3e078a.dynCall_viidii = _0x3e078a.asm.mo).apply(null, arguments);
  };
  var _0xd31f51 = _0x3e078a.dynCall_viiffii = function () {
    return (_0xd31f51 = _0x3e078a.dynCall_viiffii = _0x3e078a.asm.no).apply(null, arguments);
  };
  var _0x22581c = _0x3e078a.dynCall_viiifii = function () {
    return (_0x22581c = _0x3e078a.dynCall_viiifii = _0x3e078a.asm.oo).apply(null, arguments);
  };
  var _0x1f5d29 = _0x3e078a.dynCall_ffffi = function () {
    return (_0x1f5d29 = _0x3e078a.dynCall_ffffi = _0x3e078a.asm.po).apply(null, arguments);
  };
  var _0x3913c0 = _0x3e078a.dynCall_ffii = function () {
    return (_0x3913c0 = _0x3e078a.dynCall_ffii = _0x3e078a.asm.qo).apply(null, arguments);
  };
  var _0x28db58 = _0x3e078a.dynCall_fiiiii = function () {
    return (_0x28db58 = _0x3e078a.dynCall_fiiiii = _0x3e078a.asm.ro).apply(null, arguments);
  };
  var _0x44630e = _0x3e078a.dynCall_ddddi = function () {
    return (_0x44630e = _0x3e078a.dynCall_ddddi = _0x3e078a.asm.so).apply(null, arguments);
  };
  var _0x5d9a64 = _0x3e078a.dynCall_ddi = function () {
    return (_0x5d9a64 = _0x3e078a.dynCall_ddi = _0x3e078a.asm.to).apply(null, arguments);
  };
  var _0x1ff2fd = _0x3e078a.dynCall_jijii = function () {
    return (_0x1ff2fd = _0x3e078a.dynCall_jijii = _0x3e078a.asm.uo).apply(null, arguments);
  };
  var _0x179bed = _0x3e078a.dynCall_iiiiiji = function () {
    return (_0x179bed = _0x3e078a.dynCall_iiiiiji = _0x3e078a.asm.vo).apply(null, arguments);
  };
  var _0x11a915 = _0x3e078a.dynCall_viiijii = function () {
    return (_0x11a915 = _0x3e078a.dynCall_viiijii = _0x3e078a.asm.wo).apply(null, arguments);
  };
  var _0x35ce70 = _0x3e078a.dynCall_ijii = function () {
    return (_0x35ce70 = _0x3e078a.dynCall_ijii = _0x3e078a.asm.xo).apply(null, arguments);
  };
  var _0x56186c = _0x3e078a.dynCall_ijjiiii = function () {
    return (_0x56186c = _0x3e078a.dynCall_ijjiiii = _0x3e078a.asm.yo).apply(null, arguments);
  };
  var _0x2ec71d = _0x3e078a.dynCall_vdiiiii = function () {
    return (_0x2ec71d = _0x3e078a.dynCall_vdiiiii = _0x3e078a.asm.zo).apply(null, arguments);
  };
  var _0x1cc7c8 = _0x3e078a.dynCall_diiji = function () {
    return (_0x1cc7c8 = _0x3e078a.dynCall_diiji = _0x3e078a.asm.Ao).apply(null, arguments);
  };
  var _0x1327d2 = _0x3e078a.dynCall_vjiiiiiiii = function () {
    return (_0x1327d2 = _0x3e078a.dynCall_vjiiiiiiii = _0x3e078a.asm.Bo).apply(null, arguments);
  };
  var _0x663590 = _0x3e078a.dynCall_vjiiiiiii = function () {
    return (_0x663590 = _0x3e078a.dynCall_vjiiiiiii = _0x3e078a.asm.Co).apply(null, arguments);
  };
  var _0x185d19 = _0x3e078a.dynCall_ijiiii = function () {
    return (_0x185d19 = _0x3e078a.dynCall_ijiiii = _0x3e078a.asm.Do).apply(null, arguments);
  };
  var _0xd37676 = _0x3e078a.dynCall_iidii = function () {
    return (_0xd37676 = _0x3e078a.dynCall_iidii = _0x3e078a.asm.Eo).apply(null, arguments);
  };
  var _0x361fb9 = _0x3e078a.dynCall_iidiii = function () {
    return (_0x361fb9 = _0x3e078a.dynCall_iidiii = _0x3e078a.asm.Fo).apply(null, arguments);
  };
  var _0x31bd6f = _0x3e078a.dynCall_diji = function () {
    return (_0x31bd6f = _0x3e078a.dynCall_diji = _0x3e078a.asm.Go).apply(null, arguments);
  };
  var _0x554ed2 = _0x3e078a.dynCall_fidi = function () {
    return (_0x554ed2 = _0x3e078a.dynCall_fidi = _0x3e078a.asm.Ho).apply(null, arguments);
  };
  var _0x2ad2ca = _0x3e078a.dynCall_vfi = function () {
    return (_0x2ad2ca = _0x3e078a.dynCall_vfi = _0x3e078a.asm.Io).apply(null, arguments);
  };
  var _0x528eb0 = _0x3e078a.dynCall_iffffi = function () {
    return (_0x528eb0 = _0x3e078a.dynCall_iffffi = _0x3e078a.asm.Jo).apply(null, arguments);
  };
  var _0x5256f6 = _0x3e078a.dynCall_vfffi = function () {
    return (_0x5256f6 = _0x3e078a.dynCall_vfffi = _0x3e078a.asm.Ko).apply(null, arguments);
  };
  var _0x35c1ea = _0x3e078a.dynCall_vffffi = function () {
    return (_0x35c1ea = _0x3e078a.dynCall_vffffi = _0x3e078a.asm.Lo).apply(null, arguments);
  };
  var _0xc67b9 = _0x3e078a.dynCall_viiiiffi = function () {
    return (_0xc67b9 = _0x3e078a.dynCall_viiiiffi = _0x3e078a.asm.Mo).apply(null, arguments);
  };
  var _0x13b1ad = _0x3e078a.dynCall_viiiffii = function () {
    return (_0x13b1ad = _0x3e078a.dynCall_viiiffii = _0x3e078a.asm.No).apply(null, arguments);
  };
  var _0x50ea1f = _0x3e078a.dynCall_vijji = function () {
    return (_0x50ea1f = _0x3e078a.dynCall_vijji = _0x3e078a.asm.Oo).apply(null, arguments);
  };
  var _0xb5f12b = _0x3e078a.dynCall_vifffi = function () {
    return (_0xb5f12b = _0x3e078a.dynCall_vifffi = _0x3e078a.asm.Po).apply(null, arguments);
  };
  var _0xba3468 = _0x3e078a.dynCall_viffffffi = function () {
    return (_0xba3468 = _0x3e078a.dynCall_viffffffi = _0x3e078a.asm.Qo).apply(null, arguments);
  };
  var _0x2185aa = _0x3e078a.dynCall_vffffffii = function () {
    return (_0x2185aa = _0x3e078a.dynCall_vffffffii = _0x3e078a.asm.Ro).apply(null, arguments);
  };
  var _0x509bfa = _0x3e078a.dynCall_viiiifffi = function () {
    return (_0x509bfa = _0x3e078a.dynCall_viiiifffi = _0x3e078a.asm.So).apply(null, arguments);
  };
  var _0x467681 = _0x3e078a.dynCall_vfiii = function () {
    return (_0x467681 = _0x3e078a.dynCall_vfiii = _0x3e078a.asm.To).apply(null, arguments);
  };
  var _0x377832 = _0x3e078a.dynCall_fffifi = function () {
    return (_0x377832 = _0x3e078a.dynCall_fffifi = _0x3e078a.asm.Uo).apply(null, arguments);
  };
  var _0x44bbac = _0x3e078a.dynCall_vfii = function () {
    return (_0x44bbac = _0x3e078a.dynCall_vfii = _0x3e078a.asm.Vo).apply(null, arguments);
  };
  var _0x11742a = _0x3e078a.dynCall_viifffi = function () {
    return (_0x11742a = _0x3e078a.dynCall_viifffi = _0x3e078a.asm.Wo).apply(null, arguments);
  };
  var _0x1d6caf = _0x3e078a.dynCall_iiiifiiiii = function () {
    return (_0x1d6caf = _0x3e078a.dynCall_iiiifiiiii = _0x3e078a.asm.Xo).apply(null, arguments);
  };
  var _0x505189 = _0x3e078a.dynCall_iiiifiiii = function () {
    return (_0x505189 = _0x3e078a.dynCall_iiiifiiii = _0x3e078a.asm.Yo).apply(null, arguments);
  };
  var _0x4a957b = _0x3e078a.dynCall_vijjii = function () {
    return (_0x4a957b = _0x3e078a.dynCall_vijjii = _0x3e078a.asm.Zo).apply(null, arguments);
  };
  var _0x4bd409 = _0x3e078a.dynCall_viiiiiffii = function () {
    return (_0x4bd409 = _0x3e078a.dynCall_viiiiiffii = _0x3e078a.asm._o).apply(null, arguments);
  };
  var _0x555aa5 = _0x3e078a.dynCall_viffiii = function () {
    return (_0x555aa5 = _0x3e078a.dynCall_viffiii = _0x3e078a.asm.$o).apply(null, arguments);
  };
  var _0x3c0082 = _0x3e078a.dynCall_viffffiii = function () {
    return (_0x3c0082 = _0x3e078a.dynCall_viffffiii = _0x3e078a.asm.ap).apply(null, arguments);
  };
  var _0x504488 = _0x3e078a.dynCall_viffffii = function () {
    return (_0x504488 = _0x3e078a.dynCall_viffffii = _0x3e078a.asm.bp).apply(null, arguments);
  };
  var _0x4e2531 = _0x3e078a.dynCall_viiifiii = function () {
    return (_0x4e2531 = _0x3e078a.dynCall_viiifiii = _0x3e078a.asm.cp).apply(null, arguments);
  };
  var _0x4d74b2 = _0x3e078a.dynCall_viiififi = function () {
    return (_0x4d74b2 = _0x3e078a.dynCall_viiififi = _0x3e078a.asm.dp).apply(null, arguments);
  };
  var _0xa16f26 = _0x3e078a.dynCall_viiififfi = function () {
    return (_0xa16f26 = _0x3e078a.dynCall_viiififfi = _0x3e078a.asm.ep).apply(null, arguments);
  };
  var _0x56cb7b = _0x3e078a.dynCall_iiiiifi = function () {
    return (_0x56cb7b = _0x3e078a.dynCall_iiiiifi = _0x3e078a.asm.fp).apply(null, arguments);
  };
  var _0x1a8963 = _0x3e078a.dynCall_vififfii = function () {
    return (_0x1a8963 = _0x3e078a.dynCall_vififfii = _0x3e078a.asm.gp).apply(null, arguments);
  };
  var _0x51a47c = _0x3e078a.dynCall_vifffffi = function () {
    return (_0x51a47c = _0x3e078a.dynCall_vifffffi = _0x3e078a.asm.hp).apply(null, arguments);
  };
  var _0x363666 = _0x3e078a.dynCall_viffiiii = function () {
    return (_0x363666 = _0x3e078a.dynCall_viffiiii = _0x3e078a.asm.ip).apply(null, arguments);
  };
  var _0x1dc049 = _0x3e078a.dynCall_viiiiffffiiii = function () {
    return (_0x1dc049 = _0x3e078a.dynCall_viiiiffffiiii = _0x3e078a.asm.jp).apply(null, arguments);
  };
  var _0x6d7bfc = _0x3e078a.dynCall_viifiiiii = function () {
    return (_0x6d7bfc = _0x3e078a.dynCall_viifiiiii = _0x3e078a.asm.kp).apply(null, arguments);
  };
  var _0x4f6a94 = _0x3e078a.dynCall_iiiiiiffiiiiiiiiiffffiiii = function () {
    return (_0x4f6a94 = _0x3e078a.dynCall_iiiiiiffiiiiiiiiiffffiiii = _0x3e078a.asm.lp).apply(null, arguments);
  };
  var _0x1853bb = _0x3e078a.dynCall_iiiiiiffiiiiiiiiiiiiiii = function () {
    return (_0x1853bb = _0x3e078a.dynCall_iiiiiiffiiiiiiiiiiiiiii = _0x3e078a.asm.mp).apply(null, arguments);
  };
  var _0x5729c0 = _0x3e078a.dynCall_viififii = function () {
    return (_0x5729c0 = _0x3e078a.dynCall_viififii = _0x3e078a.asm.np).apply(null, arguments);
  };
  var _0x559e10 = _0x3e078a.dynCall_iiiffiiii = function () {
    return (_0x559e10 = _0x3e078a.dynCall_iiiffiiii = _0x3e078a.asm.op).apply(null, arguments);
  };
  var _0x4e6173 = _0x3e078a.dynCall_iiiiffiiii = function () {
    return (_0x4e6173 = _0x3e078a.dynCall_iiiiffiiii = _0x3e078a.asm.pp).apply(null, arguments);
  };
  var _0x1c1069 = _0x3e078a.dynCall_vjii = function () {
    return (_0x1c1069 = _0x3e078a.dynCall_vjii = _0x3e078a.asm.qp).apply(null, arguments);
  };
  var _0x2495b6 = _0x3e078a.dynCall_fffffffi = function () {
    return (_0x2495b6 = _0x3e078a.dynCall_fffffffi = _0x3e078a.asm.rp).apply(null, arguments);
  };
  var _0x2a9b04 = _0x3e078a.dynCall_viffifi = function () {
    return (_0x2a9b04 = _0x3e078a.dynCall_viffifi = _0x3e078a.asm.sp).apply(null, arguments);
  };
  var _0x41cddb = _0x3e078a.dynCall_viiffifi = function () {
    return (_0x41cddb = _0x3e078a.dynCall_viiffifi = _0x3e078a.asm.tp).apply(null, arguments);
  };
  var _0x2a6ccc = _0x3e078a.dynCall_ifffi = function () {
    return (_0x2a6ccc = _0x3e078a.dynCall_ifffi = _0x3e078a.asm.up).apply(null, arguments);
  };
  var _0x5e5fb7 = _0x3e078a.dynCall_fiiiffi = function () {
    return (_0x5e5fb7 = _0x3e078a.dynCall_fiiiffi = _0x3e078a.asm.vp).apply(null, arguments);
  };
  var _0x3c6369 = _0x3e078a.dynCall_viiififiii = function () {
    return (_0x3c6369 = _0x3e078a.dynCall_viiififiii = _0x3e078a.asm.wp).apply(null, arguments);
  };
  var _0x274fec = _0x3e078a.dynCall_viiffiiiiiiiii = function () {
    return (_0x274fec = _0x3e078a.dynCall_viiffiiiiiiiii = _0x3e078a.asm.xp).apply(null, arguments);
  };
  var _0x27400e = _0x3e078a.dynCall_viiiiiffiii = function () {
    return (_0x27400e = _0x3e078a.dynCall_viiiiiffiii = _0x3e078a.asm.yp).apply(null, arguments);
  };
  var _0x4ae03d = _0x3e078a.dynCall_viiffiii = function () {
    return (_0x4ae03d = _0x3e078a.dynCall_viiffiii = _0x3e078a.asm.zp).apply(null, arguments);
  };
  var _0xd91254 = _0x3e078a.dynCall_viiffiiiiiii = function () {
    return (_0xd91254 = _0x3e078a.dynCall_viiffiiiiiii = _0x3e078a.asm.Ap).apply(null, arguments);
  };
  var _0x190314 = _0x3e078a.dynCall_fffffffffi = function () {
    return (_0x190314 = _0x3e078a.dynCall_fffffffffi = _0x3e078a.asm.Bp).apply(null, arguments);
  };
  var _0x17c569 = _0x3e078a.dynCall_vifiiiiii = function () {
    return (_0x17c569 = _0x3e078a.dynCall_vifiiiiii = _0x3e078a.asm.Cp).apply(null, arguments);
  };
  var _0x25729f = _0x3e078a.dynCall_vifiiiii = function () {
    return (_0x25729f = _0x3e078a.dynCall_vifiiiii = _0x3e078a.asm.Dp).apply(null, arguments);
  };
  var _0x271f9a = _0x3e078a.dynCall_viifiiiiiii = function () {
    return (_0x271f9a = _0x3e078a.dynCall_viifiiiiiii = _0x3e078a.asm.Ep).apply(null, arguments);
  };
  var _0x558adf = _0x3e078a.dynCall_viiififfiiiiiii = function () {
    return (_0x558adf = _0x3e078a.dynCall_viiififfiiiiiii = _0x3e078a.asm.Fp).apply(null, arguments);
  };
  var _0x5d5d79 = _0x3e078a.dynCall_viiffiifiiiiiii = function () {
    return (_0x5d5d79 = _0x3e078a.dynCall_viiffiifiiiiiii = _0x3e078a.asm.Gp).apply(null, arguments);
  };
  var _0x2b3649 = _0x3e078a.dynCall_viifiiiiii = function () {
    return (_0x2b3649 = _0x3e078a.dynCall_viifiiiiii = _0x3e078a.asm.Hp).apply(null, arguments);
  };
  var _0x19acdc = _0x3e078a.dynCall_viiifiiiiii = function () {
    return (_0x19acdc = _0x3e078a.dynCall_viiifiiiiii = _0x3e078a.asm.Ip).apply(null, arguments);
  };
  var _0xf071fd = _0x3e078a.dynCall_viiiifiiiiii = function () {
    return (_0xf071fd = _0x3e078a.dynCall_viiiifiiiiii = _0x3e078a.asm.Jp).apply(null, arguments);
  };
  var _0x387532 = _0x3e078a.dynCall_viififiiiiii = function () {
    return (_0x387532 = _0x3e078a.dynCall_viififiiiiii = _0x3e078a.asm.Kp).apply(null, arguments);
  };
  var _0x41938d = _0x3e078a.dynCall_viiiffiifiiiiiii = function () {
    return (_0x41938d = _0x3e078a.dynCall_viiiffiifiiiiiii = _0x3e078a.asm.Lp).apply(null, arguments);
  };
  var _0x5c7660 = _0x3e078a.dynCall_viiiiiifiiiiii = function () {
    return (_0x5c7660 = _0x3e078a.dynCall_viiiiiifiiiiii = _0x3e078a.asm.Mp).apply(null, arguments);
  };
  var _0x3d89ed = _0x3e078a.dynCall_vififiii = function () {
    return (_0x3d89ed = _0x3e078a.dynCall_vififiii = _0x3e078a.asm.Np).apply(null, arguments);
  };
  var _0x6816b9 = _0x3e078a.dynCall_fiffi = function () {
    return (_0x6816b9 = _0x3e078a.dynCall_fiffi = _0x3e078a.asm.Op).apply(null, arguments);
  };
  var _0x57df44 = _0x3e078a.dynCall_viiiiiiiijiiii = function () {
    return (_0x57df44 = _0x3e078a.dynCall_viiiiiiiijiiii = _0x3e078a.asm.Pp).apply(null, arguments);
  };
  var _0x483700 = _0x3e078a.dynCall_fifii = function () {
    return (_0x483700 = _0x3e078a.dynCall_fifii = _0x3e078a.asm.Qp).apply(null, arguments);
  };
  var _0xf9d70f = _0x3e078a.dynCall_viiiffi = function () {
    return (_0xf9d70f = _0x3e078a.dynCall_viiiffi = _0x3e078a.asm.Rp).apply(null, arguments);
  };
  var _0x3e5193 = _0x3e078a.dynCall_viiiiiffi = function () {
    return (_0x3e5193 = _0x3e078a.dynCall_viiiiiffi = _0x3e078a.asm.Sp).apply(null, arguments);
  };
  var _0x41d8ba = _0x3e078a.dynCall_viiidii = function () {
    return (_0x41d8ba = _0x3e078a.dynCall_viiidii = _0x3e078a.asm.Tp).apply(null, arguments);
  };
  var _0x259dc0 = _0x3e078a.dynCall_ijiiiiiiiii = function () {
    return (_0x259dc0 = _0x3e078a.dynCall_ijiiiiiiiii = _0x3e078a.asm.Up).apply(null, arguments);
  };
  var _0x52ce6b = _0x3e078a.dynCall_ijjiii = function () {
    return (_0x52ce6b = _0x3e078a.dynCall_ijjiii = _0x3e078a.asm.Vp).apply(null, arguments);
  };
  var _0x435725 = _0x3e078a.dynCall_jjjii = function () {
    return (_0x435725 = _0x3e078a.dynCall_jjjii = _0x3e078a.asm.Wp).apply(null, arguments);
  };
  var _0x4fbade = _0x3e078a.dynCall_iijjijii = function () {
    return (_0x4fbade = _0x3e078a.dynCall_iijjijii = _0x3e078a.asm.Xp).apply(null, arguments);
  };
  var _0x29d7cc = _0x3e078a.dynCall_jiijii = function () {
    return (_0x29d7cc = _0x3e078a.dynCall_jiijii = _0x3e078a.asm.Yp).apply(null, arguments);
  };
  var _0x54c494 = _0x3e078a.dynCall_jiidi = function () {
    return (_0x54c494 = _0x3e078a.dynCall_jiidi = _0x3e078a.asm.Zp).apply(null, arguments);
  };
  var _0x3fb846 = _0x3e078a.dynCall_viiidiii = function () {
    return (_0x3fb846 = _0x3e078a.dynCall_viiidiii = _0x3e078a.asm._p).apply(null, arguments);
  };
  var _0x852f48 = _0x3e078a.dynCall_viiiidijii = function () {
    return (_0x852f48 = _0x3e078a.dynCall_viiiidijii = _0x3e078a.asm.$p).apply(null, arguments);
  };
  var _0x42f5d9 = _0x3e078a.dynCall_viiiidii = function () {
    return (_0x42f5d9 = _0x3e078a.dynCall_viiiidii = _0x3e078a.asm.aq).apply(null, arguments);
  };
  var _0x26f357 = _0x3e078a.dynCall_iiidiii = function () {
    return (_0x26f357 = _0x3e078a.dynCall_iiidiii = _0x3e078a.asm.bq).apply(null, arguments);
  };
  var _0x455a02 = _0x3e078a.dynCall_iiidii = function () {
    return (_0x455a02 = _0x3e078a.dynCall_iiidii = _0x3e078a.asm.cq).apply(null, arguments);
  };
  var _0x2c5bd8 = _0x3e078a.dynCall_vidiii = function () {
    return (_0x2c5bd8 = _0x3e078a.dynCall_vidiii = _0x3e078a.asm.dq).apply(null, arguments);
  };
  var _0x4f5f1c = _0x3e078a.dynCall_viijiiiii = function () {
    return (_0x4f5f1c = _0x3e078a.dynCall_viijiiiii = _0x3e078a.asm.eq).apply(null, arguments);
  };
  var _0x13f56c = _0x3e078a.dynCall_viifffffi = function () {
    return (_0x13f56c = _0x3e078a.dynCall_viifffffi = _0x3e078a.asm.fq).apply(null, arguments);
  };
  var _0x1340ab = _0x3e078a.dynCall_viiffffffi = function () {
    return (_0x1340ab = _0x3e078a.dynCall_viiffffffi = _0x3e078a.asm.gq).apply(null, arguments);
  };
  var _0x4644c5 = _0x3e078a.dynCall_viifffffffi = function () {
    return (_0x4644c5 = _0x3e078a.dynCall_viifffffffi = _0x3e078a.asm.hq).apply(null, arguments);
  };
  var _0x1118a7 = _0x3e078a.dynCall_viiffffffffi = function () {
    return (_0x1118a7 = _0x3e078a.dynCall_viiffffffffi = _0x3e078a.asm.iq).apply(null, arguments);
  };
  var _0x43fe4e = _0x3e078a.dynCall_viiffffffffiii = function () {
    return (_0x43fe4e = _0x3e078a.dynCall_viiffffffffiii = _0x3e078a.asm.jq).apply(null, arguments);
  };
  var _0x4719ac = _0x3e078a.dynCall_viiiiffffii = function () {
    return (_0x4719ac = _0x3e078a.dynCall_viiiiffffii = _0x3e078a.asm.kq).apply(null, arguments);
  };
  var _0x40ebbd = _0x3e078a.dynCall_fiiiiii = function () {
    return (_0x40ebbd = _0x3e078a.dynCall_fiiiiii = _0x3e078a.asm.lq).apply(null, arguments);
  };
  var _0x1daa3b = _0x3e078a.dynCall_viiijji = function () {
    return (_0x1daa3b = _0x3e078a.dynCall_viiijji = _0x3e078a.asm.mq).apply(null, arguments);
  };
  var _0x115958 = _0x3e078a.dynCall_jjiiii = function () {
    return (_0x115958 = _0x3e078a.dynCall_jjiiii = _0x3e078a.asm.nq).apply(null, arguments);
  };
  var _0x264fdc = _0x3e078a.dynCall_vijiiiiiii = function () {
    return (_0x264fdc = _0x3e078a.dynCall_vijiiiiiii = _0x3e078a.asm.oq).apply(null, arguments);
  };
  var _0x2c5bad = _0x3e078a.dynCall_vijiiiiiiii = function () {
    return (_0x2c5bad = _0x3e078a.dynCall_vijiiiiiiii = _0x3e078a.asm.pq).apply(null, arguments);
  };
  var _0x541f4e = _0x3e078a.dynCall_jjiiiii = function () {
    return (_0x541f4e = _0x3e078a.dynCall_jjiiiii = _0x3e078a.asm.qq).apply(null, arguments);
  };
  var _0x1ef3a2 = _0x3e078a.dynCall_jijjji = function () {
    return (_0x1ef3a2 = _0x3e078a.dynCall_jijjji = _0x3e078a.asm.rq).apply(null, arguments);
  };
  var _0x307b40 = _0x3e078a.dynCall_jijjjii = function () {
    return (_0x307b40 = _0x3e078a.dynCall_jijjjii = _0x3e078a.asm.sq).apply(null, arguments);
  };
  var _0x339d0d = _0x3e078a.dynCall_jjiii = function () {
    return (_0x339d0d = _0x3e078a.dynCall_jjiii = _0x3e078a.asm.tq).apply(null, arguments);
  };
  var _0x2fb763 = _0x3e078a.dynCall_ijijiiiii = function () {
    return (_0x2fb763 = _0x3e078a.dynCall_ijijiiiii = _0x3e078a.asm.uq).apply(null, arguments);
  };
  var _0x1176fc = _0x3e078a.dynCall_ijjjiii = function () {
    return (_0x1176fc = _0x3e078a.dynCall_ijjjiii = _0x3e078a.asm.vq).apply(null, arguments);
  };
  var _0x27c140 = _0x3e078a.dynCall_vijjjiijii = function () {
    return (_0x27c140 = _0x3e078a.dynCall_vijjjiijii = _0x3e078a.asm.wq).apply(null, arguments);
  };
  var _0xbcf5ad = _0x3e078a.dynCall_ijjjiijii = function () {
    return (_0xbcf5ad = _0x3e078a.dynCall_ijjjiijii = _0x3e078a.asm.xq).apply(null, arguments);
  };
  var _0x236875 = _0x3e078a.dynCall_vijiiiiii = function () {
    return (_0x236875 = _0x3e078a.dynCall_vijiiiiii = _0x3e078a.asm.yq).apply(null, arguments);
  };
  var _0x21b76e = _0x3e078a.dynCall_jfi = function () {
    return (_0x21b76e = _0x3e078a.dynCall_jfi = _0x3e078a.asm.zq).apply(null, arguments);
  };
  var _0x57176a = _0x3e078a.dynCall_fji = function () {
    return (_0x57176a = _0x3e078a.dynCall_fji = _0x3e078a.asm.Aq).apply(null, arguments);
  };
  var _0x450ae3 = _0x3e078a.dynCall_fdi = function () {
    return (_0x450ae3 = _0x3e078a.dynCall_fdi = _0x3e078a.asm.Bq).apply(null, arguments);
  };
  var _0x3bab39 = _0x3e078a.dynCall_dfi = function () {
    return (_0x3bab39 = _0x3e078a.dynCall_dfi = _0x3e078a.asm.Cq).apply(null, arguments);
  };
  var _0x528c91 = _0x3e078a.dynCall_jidii = function () {
    return (_0x528c91 = _0x3e078a.dynCall_jidii = _0x3e078a.asm.Dq).apply(null, arguments);
  };
  var _0x48980f = _0x3e078a.dynCall_viiiiiiiji = function () {
    return (_0x48980f = _0x3e078a.dynCall_viiiiiiiji = _0x3e078a.asm.Eq).apply(null, arguments);
  };
  var _0x434013 = _0x3e078a.dynCall_viiiiiiiiji = function () {
    return (_0x434013 = _0x3e078a.dynCall_viiiiiiiiji = _0x3e078a.asm.Fq).apply(null, arguments);
  };
  var _0x211785 = _0x3e078a.dynCall_viiiiiiiiiji = function () {
    return (_0x211785 = _0x3e078a.dynCall_viiiiiiiiiji = _0x3e078a.asm.Gq).apply(null, arguments);
  };
  var _0x56de1b = _0x3e078a.dynCall_ijiijii = function () {
    return (_0x56de1b = _0x3e078a.dynCall_ijiijii = _0x3e078a.asm.Hq).apply(null, arguments);
  };
  var _0x58fb6d = _0x3e078a.dynCall_vjjiiiii = function () {
    return (_0x58fb6d = _0x3e078a.dynCall_vjjiiiii = _0x3e078a.asm.Iq).apply(null, arguments);
  };
  var _0x2fcfc4 = _0x3e078a.dynCall_vjjii = function () {
    return (_0x2fcfc4 = _0x3e078a.dynCall_vjjii = _0x3e078a.asm.Jq).apply(null, arguments);
  };
  var _0x54e992 = _0x3e078a.dynCall_ijiiji = function () {
    return (_0x54e992 = _0x3e078a.dynCall_ijiiji = _0x3e078a.asm.Kq).apply(null, arguments);
  };
  var _0x146418 = _0x3e078a.dynCall_ijiiiii = function () {
    return (_0x146418 = _0x3e078a.dynCall_ijiiiii = _0x3e078a.asm.Lq).apply(null, arguments);
  };
  var _0x5eb261 = _0x3e078a.dynCall_ijiiiiji = function () {
    return (_0x5eb261 = _0x3e078a.dynCall_ijiiiiji = _0x3e078a.asm.Mq).apply(null, arguments);
  };
  var _0x517ab8 = _0x3e078a.dynCall_jiiiiii = function () {
    return (_0x517ab8 = _0x3e078a.dynCall_jiiiiii = _0x3e078a.asm.Nq).apply(null, arguments);
  };
  var _0x52d797 = _0x3e078a.dynCall_ddii = function () {
    return (_0x52d797 = _0x3e078a.dynCall_ddii = _0x3e078a.asm.Oq).apply(null, arguments);
  };
  var _0xa172c5 = _0x3e078a.dynCall_idiii = function () {
    return (_0xa172c5 = _0x3e078a.dynCall_idiii = _0x3e078a.asm.Pq).apply(null, arguments);
  };
  var _0x3f53c9 = _0x3e078a.dynCall_ifiiiii = function () {
    return (_0x3f53c9 = _0x3e078a.dynCall_ifiiiii = _0x3e078a.asm.Qq).apply(null, arguments);
  };
  var _0x116bb5 = _0x3e078a.dynCall_vdiii = function () {
    return (_0x116bb5 = _0x3e078a.dynCall_vdiii = _0x3e078a.asm.Rq).apply(null, arguments);
  };
  var _0x2e82c = _0x3e078a.dynCall_jdii = function () {
    return (_0x2e82c = _0x3e078a.dynCall_jdii = _0x3e078a.asm.Sq).apply(null, arguments);
  };
  var _0x71e23a = _0x3e078a.dynCall_vijijji = function () {
    return (_0x71e23a = _0x3e078a.dynCall_vijijji = _0x3e078a.asm.Tq).apply(null, arguments);
  };
  var _0x217d6e = _0x3e078a.dynCall_iijjji = function () {
    return (_0x217d6e = _0x3e078a.dynCall_iijjji = _0x3e078a.asm.Uq).apply(null, arguments);
  };
  var _0x4b7475 = _0x3e078a.dynCall_viijjji = function () {
    return (_0x4b7475 = _0x3e078a.dynCall_viijjji = _0x3e078a.asm.Vq).apply(null, arguments);
  };
  var _0x1bdb18 = _0x3e078a.dynCall_vdii = function () {
    return (_0x1bdb18 = _0x3e078a.dynCall_vdii = _0x3e078a.asm.Wq).apply(null, arguments);
  };
  var _0x32b7ce = _0x3e078a.dynCall_iiiijii = function () {
    return (_0x32b7ce = _0x3e078a.dynCall_iiiijii = _0x3e078a.asm.Xq).apply(null, arguments);
  };
  var _0x2fa526 = _0x3e078a.dynCall_jijji = function () {
    return (_0x2fa526 = _0x3e078a.dynCall_jijji = _0x3e078a.asm.Yq).apply(null, arguments);
  };
  var _0x3fa87f = _0x3e078a.dynCall_diddi = function () {
    return (_0x3fa87f = _0x3e078a.dynCall_diddi = _0x3e078a.asm.Zq).apply(null, arguments);
  };
  var _0x26d921 = _0x3e078a.dynCall_didi = function () {
    return (_0x26d921 = _0x3e078a.dynCall_didi = _0x3e078a.asm._q).apply(null, arguments);
  };
  var _0x18a118 = _0x3e078a.dynCall_iijjii = function () {
    return (_0x18a118 = _0x3e078a.dynCall_iijjii = _0x3e078a.asm.$q).apply(null, arguments);
  };
  var _0x1a5543 = _0x3e078a.dynCall_jjjji = function () {
    return (_0x1a5543 = _0x3e078a.dynCall_jjjji = _0x3e078a.asm.ar).apply(null, arguments);
  };
  var _0x4628d0 = _0x3e078a.dynCall_viijijii = function () {
    return (_0x4628d0 = _0x3e078a.dynCall_viijijii = _0x3e078a.asm.br).apply(null, arguments);
  };
  var _0x50d915 = _0x3e078a.dynCall_viijijiii = function () {
    return (_0x50d915 = _0x3e078a.dynCall_viijijiii = _0x3e078a.asm.cr).apply(null, arguments);
  };
  var _0x489732 = _0x3e078a.dynCall_vijiji = function () {
    return (_0x489732 = _0x3e078a.dynCall_vijiji = _0x3e078a.asm.dr).apply(null, arguments);
  };
  var _0x4dcdcb = _0x3e078a.dynCall_viijiijiii = function () {
    return (_0x4dcdcb = _0x3e078a.dynCall_viijiijiii = _0x3e078a.asm.er).apply(null, arguments);
  };
  var _0x1130a0 = _0x3e078a.dynCall_viiiijiiii = function () {
    return (_0x1130a0 = _0x3e078a.dynCall_viiiijiiii = _0x3e078a.asm.fr).apply(null, arguments);
  };
  var _0x2a7373 = _0x3e078a.dynCall_di = function () {
    return (_0x2a7373 = _0x3e078a.dynCall_di = _0x3e078a.asm.gr).apply(null, arguments);
  };
  var _0x5d3cc3 = _0x3e078a.dynCall_viijjii = function () {
    return (_0x5d3cc3 = _0x3e078a.dynCall_viijjii = _0x3e078a.asm.hr).apply(null, arguments);
  };
  var _0x58637f = _0x3e078a.dynCall_jiiiiiiiii = function () {
    return (_0x58637f = _0x3e078a.dynCall_jiiiiiiiii = _0x3e078a.asm.ir).apply(null, arguments);
  };
  var _0x3217f6 = _0x3e078a.dynCall_iiiiijii = function () {
    return (_0x3217f6 = _0x3e078a.dynCall_iiiiijii = _0x3e078a.asm.jr).apply(null, arguments);
  };
  var _0x29e704 = _0x3e078a.dynCall_iiiidii = function () {
    return (_0x29e704 = _0x3e078a.dynCall_iiiidii = _0x3e078a.asm.kr).apply(null, arguments);
  };
  var _0x1093ba = _0x3e078a.dynCall_iidfii = function () {
    return (_0x1093ba = _0x3e078a.dynCall_iidfii = _0x3e078a.asm.lr).apply(null, arguments);
  };
  var _0x88c003 = _0x3e078a.dynCall_iidfi = function () {
    return (_0x88c003 = _0x3e078a.dynCall_iidfi = _0x3e078a.asm.mr).apply(null, arguments);
  };
  var _0x3661d6 = _0x3e078a.dynCall_iiddfi = function () {
    return (_0x3661d6 = _0x3e078a.dynCall_iiddfi = _0x3e078a.asm.nr).apply(null, arguments);
  };
  var _0x304959 = _0x3e078a.dynCall_iijfii = function () {
    return (_0x304959 = _0x3e078a.dynCall_iijfii = _0x3e078a.asm.or).apply(null, arguments);
  };
  var _0x3165e6 = _0x3e078a.dynCall_iijfi = function () {
    return (_0x3165e6 = _0x3e078a.dynCall_iijfi = _0x3e078a.asm.pr).apply(null, arguments);
  };
  var _0x2cca98 = _0x3e078a.dynCall_iijjfi = function () {
    return (_0x2cca98 = _0x3e078a.dynCall_iijjfi = _0x3e078a.asm.qr).apply(null, arguments);
  };
  var _0x790753 = _0x3e078a.dynCall_iiiiffiiiji = function () {
    return (_0x790753 = _0x3e078a.dynCall_iiiiffiiiji = _0x3e078a.asm.rr).apply(null, arguments);
  };
  var _0x4f65de = _0x3e078a.dynCall_iiidfii = function () {
    return (_0x4f65de = _0x3e078a.dynCall_iiidfii = _0x3e078a.asm.sr).apply(null, arguments);
  };
  var _0x48fac6 = _0x3e078a.dynCall_iiijfii = function () {
    return (_0x48fac6 = _0x3e078a.dynCall_iiijfii = _0x3e078a.asm.tr).apply(null, arguments);
  };
  var _0x391589 = _0x3e078a.dynCall_jiiiiiii = function () {
    return (_0x391589 = _0x3e078a.dynCall_jiiiiiii = _0x3e078a.asm.ur).apply(null, arguments);
  };
  var _0x5d0665 = _0x3e078a.dynCall_iiiiffiiiii = function () {
    return (_0x5d0665 = _0x3e078a.dynCall_iiiiffiiiii = _0x3e078a.asm.vr).apply(null, arguments);
  };
  var _0x349834 = _0x3e078a.dynCall_iiiidfii = function () {
    return (_0x349834 = _0x3e078a.dynCall_iiiidfii = _0x3e078a.asm.wr).apply(null, arguments);
  };
  var _0x4f63a4 = _0x3e078a.dynCall_iiiijfii = function () {
    return (_0x4f63a4 = _0x3e078a.dynCall_iiiijfii = _0x3e078a.asm.xr).apply(null, arguments);
  };
  var _0x439649 = _0x3e078a.dynCall_iiiiffii = function () {
    return (_0x439649 = _0x3e078a.dynCall_iiiiffii = _0x3e078a.asm.yr).apply(null, arguments);
  };
  var _0x5df70b = _0x3e078a.dynCall_jiiiiji = function () {
    return (_0x5df70b = _0x3e078a.dynCall_jiiiiji = _0x3e078a.asm.zr).apply(null, arguments);
  };
  var _0x4bff37 = _0x3e078a.dynCall_fiiiifi = function () {
    return (_0x4bff37 = _0x3e078a.dynCall_fiiiifi = _0x3e078a.asm.Ar).apply(null, arguments);
  };
  var _0x3ae02f = _0x3e078a.dynCall_iiijjii = function () {
    return (_0x3ae02f = _0x3e078a.dynCall_iiijjii = _0x3e078a.asm.Br).apply(null, arguments);
  };
  var _0x457e05 = _0x3e078a.dynCall_vij = function () {
    return (_0x457e05 = _0x3e078a.dynCall_vij = _0x3e078a.asm.Cr).apply(null, arguments);
  };
  var _0x44cd72 = _0x3e078a.dynCall_iiiijiii = function () {
    return (_0x44cd72 = _0x3e078a.dynCall_iiiijiii = _0x3e078a.asm.Dr).apply(null, arguments);
  };
  var _0x350176 = _0x3e078a.dynCall_iiiij = function () {
    return (_0x350176 = _0x3e078a.dynCall_iiiij = _0x3e078a.asm.Er).apply(null, arguments);
  };
  var _0x22c1e6 = _0x3e078a.dynCall_ijj = function () {
    return (_0x22c1e6 = _0x3e078a.dynCall_ijj = _0x3e078a.asm.Fr).apply(null, arguments);
  };
  var _0x4a272d = _0x3e078a.dynCall_vjji = function () {
    return (_0x4a272d = _0x3e078a.dynCall_vjji = _0x3e078a.asm.Gr).apply(null, arguments);
  };
  var _0x3f2c35 = _0x3e078a.dynCall_ij = function () {
    return (_0x3f2c35 = _0x3e078a.dynCall_ij = _0x3e078a.asm.Hr).apply(null, arguments);
  };
  var _0x12f02a = _0x3e078a.dynCall_vif = function () {
    return (_0x12f02a = _0x3e078a.dynCall_vif = _0x3e078a.asm.Ir).apply(null, arguments);
  };
  var _0x28108b = _0x3e078a.dynCall_vid = function () {
    return (_0x28108b = _0x3e078a.dynCall_vid = _0x3e078a.asm.Jr).apply(null, arguments);
  };
  var _0x4250e7 = _0x3e078a.dynCall_viiiiif = function () {
    return (_0x4250e7 = _0x3e078a.dynCall_viiiiif = _0x3e078a.asm.Kr).apply(null, arguments);
  };
  var _0x51f8ed = _0x3e078a.dynCall_viiiif = function () {
    return (_0x51f8ed = _0x3e078a.dynCall_viiiif = _0x3e078a.asm.Lr).apply(null, arguments);
  };
  var _0x4cdf37 = _0x3e078a.dynCall_viiiiiif = function () {
    return (_0x4cdf37 = _0x3e078a.dynCall_viiiiiif = _0x3e078a.asm.Mr).apply(null, arguments);
  };
  var _0x13c36a = _0x3e078a.dynCall_iiif = function () {
    return (_0x13c36a = _0x3e078a.dynCall_iiif = _0x3e078a.asm.Nr).apply(null, arguments);
  };
  var _0x282dd5 = _0x3e078a.dynCall_fif = function () {
    return (_0x282dd5 = _0x3e078a.dynCall_fif = _0x3e078a.asm.Or).apply(null, arguments);
  };
  var _0x176d14 = _0x3e078a.dynCall_iiiiiifff = function () {
    return (_0x176d14 = _0x3e078a.dynCall_iiiiiifff = _0x3e078a.asm.Pr).apply(null, arguments);
  };
  var _0x13a358 = _0x3e078a.dynCall_iiiiiifiif = function () {
    return (_0x13a358 = _0x3e078a.dynCall_iiiiiifiif = _0x3e078a.asm.Qr).apply(null, arguments);
  };
  var _0x5167bd = _0x3e078a.dynCall_iiiiiifiii = function () {
    return (_0x5167bd = _0x3e078a.dynCall_iiiiiifiii = _0x3e078a.asm.Rr).apply(null, arguments);
  };
  var _0x3a539d = _0x3e078a.dynCall_iiiiiiifiif = function () {
    return (_0x3a539d = _0x3e078a.dynCall_iiiiiiifiif = _0x3e078a.asm.Sr).apply(null, arguments);
  };
  var _0x38f4a0 = _0x3e078a.dynCall_fiff = function () {
    return (_0x38f4a0 = _0x3e078a.dynCall_fiff = _0x3e078a.asm.Tr).apply(null, arguments);
  };
  var _0x37db66 = _0x3e078a.dynCall_fiiiiiifiifif = function () {
    return (_0x37db66 = _0x3e078a.dynCall_fiiiiiifiifif = _0x3e078a.asm.Ur).apply(null, arguments);
  };
  var _0x302295 = _0x3e078a.dynCall_fiiiiiifiiiif = function () {
    return (_0x302295 = _0x3e078a.dynCall_fiiiiiifiiiif = _0x3e078a.asm.Vr).apply(null, arguments);
  };
  var _0x55ccb5 = _0x3e078a.dynCall_iifiiiijii = function () {
    return (_0x55ccb5 = _0x3e078a.dynCall_iifiiiijii = _0x3e078a.asm.Wr).apply(null, arguments);
  };
  var _0x401e20 = _0x3e078a.dynCall_vifijii = function () {
    return (_0x401e20 = _0x3e078a.dynCall_vifijii = _0x3e078a.asm.Xr).apply(null, arguments);
  };
  var _0x22c054 = _0x3e078a.dynCall_iiiifffiii = function () {
    return (_0x22c054 = _0x3e078a.dynCall_iiiifffiii = _0x3e078a.asm.Yr).apply(null, arguments);
  };
  var _0x381013 = _0x3e078a.dynCall_iiiifffffi = function () {
    return (_0x381013 = _0x3e078a.dynCall_iiiifffffi = _0x3e078a.asm.Zr).apply(null, arguments);
  };
  var _0x298146 = _0x3e078a.dynCall_viffiiiif = function () {
    return (_0x298146 = _0x3e078a.dynCall_viffiiiif = _0x3e078a.asm._r).apply(null, arguments);
  };
  var _0x384f39 = _0x3e078a.dynCall_viffiifffffiii = function () {
    return (_0x384f39 = _0x3e078a.dynCall_viffiifffffiii = _0x3e078a.asm.$r).apply(null, arguments);
  };
  var _0x299f2e = _0x3e078a.dynCall_viffffiifffiiiiif = function () {
    return (_0x299f2e = _0x3e078a.dynCall_viffffiifffiiiiif = _0x3e078a.asm.as).apply(null, arguments);
  };
  var _0x42dd0f = _0x3e078a.dynCall_iiiifffffii = function () {
    return (_0x42dd0f = _0x3e078a.dynCall_iiiifffffii = _0x3e078a.asm.bs).apply(null, arguments);
  };
  var _0x3cd0b2 = _0x3e078a.dynCall_viiiiiiiiiiifii = function () {
    return (_0x3cd0b2 = _0x3e078a.dynCall_viiiiiiiiiiifii = _0x3e078a.asm.cs).apply(null, arguments);
  };
  var _0x4c5448 = _0x3e078a.dynCall_viff = function () {
    return (_0x4c5448 = _0x3e078a.dynCall_viff = _0x3e078a.asm.ds).apply(null, arguments);
  };
  var _0x18dc32 = _0x3e078a.dynCall_iiiiifiiiiif = function () {
    return (_0x18dc32 = _0x3e078a.dynCall_iiiiifiiiiif = _0x3e078a.asm.es).apply(null, arguments);
  };
  var _0x2f0a02 = _0x3e078a.dynCall_viiifiiiii = function () {
    return (_0x2f0a02 = _0x3e078a.dynCall_viiifiiiii = _0x3e078a.asm.fs).apply(null, arguments);
  };
  var _0x1d437a = _0x3e078a.dynCall_viiiifiiiiif = function () {
    return (_0x1d437a = _0x3e078a.dynCall_viiiifiiiiif = _0x3e078a.asm.gs).apply(null, arguments);
  };
  var _0x410a7b = _0x3e078a.dynCall_iifff = function () {
    return (_0x410a7b = _0x3e078a.dynCall_iifff = _0x3e078a.asm.hs).apply(null, arguments);
  };
  var _0x2213eb = _0x3e078a.dynCall_iif = function () {
    return (_0x2213eb = _0x3e078a.dynCall_iif = _0x3e078a.asm.is).apply(null, arguments);
  };
  var _0x37d37a = _0x3e078a.dynCall_viijijj = function () {
    return (_0x37d37a = _0x3e078a.dynCall_viijijj = _0x3e078a.asm.js).apply(null, arguments);
  };
  var _0x4b1712 = _0x3e078a.dynCall_viijj = function () {
    return (_0x4b1712 = _0x3e078a.dynCall_viijj = _0x3e078a.asm.ks).apply(null, arguments);
  };
  var _0x390895 = _0x3e078a.dynCall_viiiij = function () {
    return (_0x390895 = _0x3e078a.dynCall_viiiij = _0x3e078a.asm.ls).apply(null, arguments);
  };
  var _0x52cbed = _0x3e078a.dynCall_iiijji = function () {
    return (_0x52cbed = _0x3e078a.dynCall_iiijji = _0x3e078a.asm.ms).apply(null, arguments);
  };
  var _0x3553a9 = _0x3e078a.dynCall_ijjiiiii = function () {
    return (_0x3553a9 = _0x3e078a.dynCall_ijjiiiii = _0x3e078a.asm.ns).apply(null, arguments);
  };
  var _0xca4b79 = _0x3e078a.dynCall_vidd = function () {
    return (_0xca4b79 = _0x3e078a.dynCall_vidd = _0x3e078a.asm.os).apply(null, arguments);
  };
  var _0x5f122d = _0x3e078a.dynCall_iiiiiifffiiifiii = function () {
    return (_0x5f122d = _0x3e078a.dynCall_iiiiiifffiiifiii = _0x3e078a.asm.ps).apply(null, arguments);
  };
  var _0x19902d = _0x3e078a.dynCall_viid = function () {
    return (_0x19902d = _0x3e078a.dynCall_viid = _0x3e078a.asm.qs).apply(null, arguments);
  };
  var _0x4ba380 = _0x3e078a.dynCall_fiiiif = function () {
    return (_0x4ba380 = _0x3e078a.dynCall_fiiiif = _0x3e078a.asm.rs).apply(null, arguments);
  };
  var _0x6c9a07 = _0x3e078a.dynCall_iiiiiff = function () {
    return (_0x6c9a07 = _0x3e078a.dynCall_iiiiiff = _0x3e078a.asm.ss).apply(null, arguments);
  };
  var _0x4db72f = _0x3e078a.dynCall_viffff = function () {
    return (_0x4db72f = _0x3e078a.dynCall_viffff = _0x3e078a.asm.ts).apply(null, arguments);
  };
  var _0x2fa3eb = _0x3e078a.dynCall_vifff = function () {
    return (_0x2fa3eb = _0x3e078a.dynCall_vifff = _0x3e078a.asm.us).apply(null, arguments);
  };
  var _0x53bf6b = _0x3e078a.dynCall_viifff = function () {
    return (_0x53bf6b = _0x3e078a.dynCall_viifff = _0x3e078a.asm.vs).apply(null, arguments);
  };
  var _0xc86c0e = _0x3e078a.dynCall_vf = function () {
    return (_0xc86c0e = _0x3e078a.dynCall_vf = _0x3e078a.asm.ws).apply(null, arguments);
  };
  var _0x54f8ae = _0x3e078a.dynCall_vffff = function () {
    return (_0x54f8ae = _0x3e078a.dynCall_vffff = _0x3e078a.asm.xs).apply(null, arguments);
  };
  var _0x518f64 = _0x3e078a.dynCall_vff = function () {
    return (_0x518f64 = _0x3e078a.dynCall_vff = _0x3e078a.asm.ys).apply(null, arguments);
  };
  var _0x1b78a7 = _0x3e078a.dynCall_fff = function () {
    return (_0x1b78a7 = _0x3e078a.dynCall_fff = _0x3e078a.asm.zs).apply(null, arguments);
  };
  var _0x1f43f9 = _0x3e078a.dynCall_f = function () {
    return (_0x1f43f9 = _0x3e078a.dynCall_f = _0x3e078a.asm.As).apply(null, arguments);
  };
  var _0x38b26e = _0x3e078a.dynCall_vfff = function () {
    return (_0x38b26e = _0x3e078a.dynCall_vfff = _0x3e078a.asm.Bs).apply(null, arguments);
  };
  var _0x4961ef = _0x3e078a.dynCall_viiif = function () {
    return (_0x4961ef = _0x3e078a.dynCall_viiif = _0x3e078a.asm.Cs).apply(null, arguments);
  };
  var _0x12f3ef = _0x3e078a.dynCall_vffffffi = function () {
    return (_0x12f3ef = _0x3e078a.dynCall_vffffffi = _0x3e078a.asm.Ds).apply(null, arguments);
  };
  var _0x3157ad = _0x3e078a.dynCall_ff = function () {
    return (_0x3157ad = _0x3e078a.dynCall_ff = _0x3e078a.asm.Es).apply(null, arguments);
  };
  var _0x2ba19c = _0x3e078a.dynCall_vififfi = function () {
    return (_0x2ba19c = _0x3e078a.dynCall_vififfi = _0x3e078a.asm.Fs).apply(null, arguments);
  };
  var _0x70ae73 = _0x3e078a.dynCall_fiif = function () {
    return (_0x70ae73 = _0x3e078a.dynCall_fiif = _0x3e078a.asm.Gs).apply(null, arguments);
  };
  var _0x1b1a30 = _0x3e078a.dynCall_iiiiiiffiiiiiiiiiffffiii = function () {
    return (_0x1b1a30 = _0x3e078a.dynCall_iiiiiiffiiiiiiiiiffffiii = _0x3e078a.asm.Hs).apply(null, arguments);
  };
  var _0x2b25a2 = _0x3e078a.dynCall_viififi = function () {
    return (_0x2b25a2 = _0x3e078a.dynCall_viififi = _0x3e078a.asm.Is).apply(null, arguments);
  };
  var _0x56abdc = _0x3e078a.dynCall_viiiiiiiijiii = function () {
    return (_0x56abdc = _0x3e078a.dynCall_viiiiiiiijiii = _0x3e078a.asm.Js).apply(null, arguments);
  };
  function _0x49e272(_0x2981a2, _0x39122d) {
    var _0x52f8a7 = _0x5ebf8c();
    try {
      return _0x1746fb(_0x2981a2, _0x39122d);
    } catch (_0x4436a6) {
      _0x4c4e79(_0x52f8a7);
      if (_0x4436a6 !== _0x4436a6 + 0 && _0x4436a6 !== "longjmp") {
        throw _0x4436a6;
      }
      _0x202f4a(1, 0);
    }
  }
  function _0x4c946c(_0x505595, _0x45684b, _0x4328e4) {
    var _0x3e4ad6 = _0x5ebf8c();
    try {
      return _0x5562d3(_0x505595, _0x45684b, _0x4328e4);
    } catch (_0x4704e9) {
      _0x4c4e79(_0x3e4ad6);
      if (_0x4704e9 !== _0x4704e9 + 0 && _0x4704e9 !== "longjmp") {
        throw _0x4704e9;
      }
      _0x202f4a(1, 0);
    }
  }
  function _0x146fbf(_0x2d1d6b, _0x4f0883, _0x2a5d6e, _0x53a61f) {
    var _0x409fc9 = _0x5ebf8c();
    try {
      _0x1cd87a(_0x2d1d6b, _0x4f0883, _0x2a5d6e, _0x53a61f);
    } catch (_0x190b53) {
      _0x4c4e79(_0x409fc9);
      if (_0x190b53 !== _0x190b53 + 0 && _0x190b53 !== "longjmp") {
        throw _0x190b53;
      }
      _0x202f4a(1, 0);
    }
  }
  function _0x207296(_0x3aac4e, _0x4fb252, _0x20ac49, _0x3c5002, _0x297f9c, _0x49de76) {
    var _0xcd7aa3 = _0x5ebf8c();
    try {
      return _0xcd6034(_0x3aac4e, _0x4fb252, _0x20ac49, _0x3c5002, _0x297f9c, _0x49de76);
    } catch (_0x2360e4) {
      _0x4c4e79(_0xcd7aa3);
      if (_0x2360e4 !== _0x2360e4 + 0 && _0x2360e4 !== "longjmp") {
        throw _0x2360e4;
      }
      _0x202f4a(1, 0);
    }
  }
  function _0x203c42(_0xd4b995, _0x4729f0, _0x302899, _0x404578) {
    var _0x44723f = _0x5ebf8c();
    try {
      return _0x1b1167(_0xd4b995, _0x4729f0, _0x302899, _0x404578);
    } catch (_0x59f9f6) {
      _0x4c4e79(_0x44723f);
      if (_0x59f9f6 !== _0x59f9f6 + 0 && _0x59f9f6 !== "longjmp") {
        throw _0x59f9f6;
      }
      _0x202f4a(1, 0);
    }
  }
  function _0x1bf41e(_0x51eef4, _0x2831e5, _0x200e8e, _0x5682bf, _0xf78df1) {
    var _0x62f89f = _0x5ebf8c();
    try {
      _0x35d61d(_0x51eef4, _0x2831e5, _0x200e8e, _0x5682bf, _0xf78df1);
    } catch (_0x270244) {
      _0x4c4e79(_0x62f89f);
      if (_0x270244 !== _0x270244 + 0 && _0x270244 !== "longjmp") {
        throw _0x270244;
      }
      _0x202f4a(1, 0);
    }
  }
  function _0x588aea(_0x346a7f, _0x4d7fdb, _0x5ae28d, _0x1ed182, _0x582396) {
    var _0xffa7c6 = _0x5ebf8c();
    try {
      return _0x1b7631(_0x346a7f, _0x4d7fdb, _0x5ae28d, _0x1ed182, _0x582396);
    } catch (_0x1f198e) {
      _0x4c4e79(_0xffa7c6);
      if (_0x1f198e !== _0x1f198e + 0 && _0x1f198e !== "longjmp") {
        throw _0x1f198e;
      }
      _0x202f4a(1, 0);
    }
  }
  function _0x3a380d(_0x3ebfc7, _0x10bd4c, _0x18e605, _0x18bf6a) {
    var _0x3426a8 = _0x5ebf8c();
    try {
      return _0x43d146(_0x3ebfc7, _0x10bd4c, _0x18e605, _0x18bf6a);
    } catch (_0x110bf6) {
      _0x4c4e79(_0x3426a8);
      if (_0x110bf6 !== _0x110bf6 + 0 && _0x110bf6 !== "longjmp") {
        throw _0x110bf6;
      }
      _0x202f4a(1, 0);
    }
  }
  function _0x14ac08(_0x586381, _0x474916, _0x4a7684, _0x52a045) {
    var _0x2f90bd = _0x5ebf8c();
    try {
      return _0x5daf9e(_0x586381, _0x474916, _0x4a7684, _0x52a045);
    } catch (_0x1c4557) {
      _0x4c4e79(_0x2f90bd);
      if (_0x1c4557 !== _0x1c4557 + 0 && _0x1c4557 !== "longjmp") {
        throw _0x1c4557;
      }
      _0x202f4a(1, 0);
    }
  }
  function _0x457b14(_0x1f8058, _0x1d60c0, _0x5a30d9, _0x12d3fe) {
    var _0x565108 = _0x5ebf8c();
    try {
      _0x1e61a4(_0x1f8058, _0x1d60c0, _0x5a30d9, _0x12d3fe);
    } catch (_0x2d1978) {
      _0x4c4e79(_0x565108);
      if (_0x2d1978 !== _0x2d1978 + 0 && _0x2d1978 !== "longjmp") {
        throw _0x2d1978;
      }
      _0x202f4a(1, 0);
    }
  }
  function _0xc01dd(_0x5e80c2, _0x2e6801, _0x11c455) {
    var _0x3b1d36 = _0x5ebf8c();
    try {
      _0x592745(_0x5e80c2, _0x2e6801, _0x11c455);
    } catch (_0x33dc14) {
      _0x4c4e79(_0x3b1d36);
      if (_0x33dc14 !== _0x33dc14 + 0 && _0x33dc14 !== "longjmp") {
        throw _0x33dc14;
      }
      _0x202f4a(1, 0);
    }
  }
  function _0x14048d(_0x5cc704, _0x144f48) {
    var _0xeca30c = _0x5ebf8c();
    try {
      _0x37c083(_0x5cc704, _0x144f48);
    } catch (_0x2dfec4) {
      _0x4c4e79(_0xeca30c);
      if (_0x2dfec4 !== _0x2dfec4 + 0 && _0x2dfec4 !== "longjmp") {
        throw _0x2dfec4;
      }
      _0x202f4a(1, 0);
    }
  }
  function _0x201ad5(_0x977ef6) {
    var _0x449ae0 = _0x5ebf8c();
    try {
      _0x4f38c0(_0x977ef6);
    } catch (_0x41932f) {
      _0x4c4e79(_0x449ae0);
      if (_0x41932f !== _0x41932f + 0 && _0x41932f !== "longjmp") {
        throw _0x41932f;
      }
      _0x202f4a(1, 0);
    }
  }
  function _0x3b1215(_0x25eb7d) {
    var _0x2e3446 = _0x5ebf8c();
    try {
      return _0x2aed31(_0x25eb7d);
    } catch (_0x3b7a08) {
      _0x4c4e79(_0x2e3446);
      if (_0x3b7a08 !== _0x3b7a08 + 0 && _0x3b7a08 !== "longjmp") {
        throw _0x3b7a08;
      }
      _0x202f4a(1, 0);
    }
  }
  function _0x2c364c(_0x5c3941, _0x292dd4, _0x144afa, _0x1f9106, _0x175907, _0x1eb907, _0x24013d, _0x359bc2) {
    var _0xb32995 = _0x5ebf8c();
    try {
      return _0x20deee(_0x5c3941, _0x292dd4, _0x144afa, _0x1f9106, _0x175907, _0x1eb907, _0x24013d, _0x359bc2);
    } catch (_0x27c14c) {
      _0x4c4e79(_0xb32995);
      if (_0x27c14c !== _0x27c14c + 0 && _0x27c14c !== "longjmp") {
        throw _0x27c14c;
      }
      _0x202f4a(1, 0);
    }
  }
  function _0x585006(_0x2976fb, _0x385040, _0x4d8f17, _0x1b9622, _0x130133, _0x28cda6) {
    var _0x553b65 = _0x5ebf8c();
    try {
      _0x2d3e45(_0x2976fb, _0x385040, _0x4d8f17, _0x1b9622, _0x130133, _0x28cda6);
    } catch (_0x47b5b1) {
      _0x4c4e79(_0x553b65);
      if (_0x47b5b1 !== _0x47b5b1 + 0 && _0x47b5b1 !== "longjmp") {
        throw _0x47b5b1;
      }
      _0x202f4a(1, 0);
    }
  }
  function _0x387071(_0x1e769a, _0x4dadc0, _0x48a7cd, _0x5037ab, _0x1507ff, _0x529df2, _0x1a818e) {
    var _0x23ee1b = _0x5ebf8c();
    try {
      return _0x293df2(_0x1e769a, _0x4dadc0, _0x48a7cd, _0x5037ab, _0x1507ff, _0x529df2, _0x1a818e);
    } catch (_0x146f26) {
      _0x4c4e79(_0x23ee1b);
      if (_0x146f26 !== _0x146f26 + 0 && _0x146f26 !== "longjmp") {
        throw _0x146f26;
      }
      _0x202f4a(1, 0);
    }
  }
  function _0x5dcd6f(_0x205fa7, _0x3a8fdd, _0x43a054, _0xda772e, _0xefb40a, _0x3375ac, _0x45ab52, _0x4d3393) {
    var _0x1759d5 = _0x5ebf8c();
    try {
      _0x6aaec1(_0x205fa7, _0x3a8fdd, _0x43a054, _0xda772e, _0xefb40a, _0x3375ac, _0x45ab52, _0x4d3393);
    } catch (_0xedfc25) {
      _0x4c4e79(_0x1759d5);
      if (_0xedfc25 !== _0xedfc25 + 0 && _0xedfc25 !== "longjmp") {
        throw _0xedfc25;
      }
      _0x202f4a(1, 0);
    }
  }
  function _0x2ce5b9(_0x5c7581, _0x41e947, _0x44c6fb, _0x297fa7, _0x29d719, _0x122662, _0x96142b) {
    var _0x3aacb7 = _0x5ebf8c();
    try {
      _0x44a3a9(_0x5c7581, _0x41e947, _0x44c6fb, _0x297fa7, _0x29d719, _0x122662, _0x96142b);
    } catch (_0x408bc2) {
      _0x4c4e79(_0x3aacb7);
      if (_0x408bc2 !== _0x408bc2 + 0 && _0x408bc2 !== "longjmp") {
        throw _0x408bc2;
      }
      _0x202f4a(1, 0);
    }
  }
  function _0x16a140(_0x38555d, _0x1fcabb, _0x18ca15, _0x105720, _0x230ca9, _0x2f9f47, _0x3d116f, _0x7ba959, _0x5ac40d) {
    var _0x2637dc = _0x5ebf8c();
    try {
      return _0xea2243(_0x38555d, _0x1fcabb, _0x18ca15, _0x105720, _0x230ca9, _0x2f9f47, _0x3d116f, _0x7ba959, _0x5ac40d);
    } catch (_0x282aa9) {
      _0x4c4e79(_0x2637dc);
      if (_0x282aa9 !== _0x282aa9 + 0 && _0x282aa9 !== "longjmp") {
        throw _0x282aa9;
      }
      _0x202f4a(1, 0);
    }
  }
  function _0x25c075(_0x6120ea, _0x1b980e, _0x2e295c, _0x5acdfe, _0xf317ea) {
    var _0x1232c4 = _0x5ebf8c();
    try {
      _0x183cdd(_0x6120ea, _0x1b980e, _0x2e295c, _0x5acdfe, _0xf317ea);
    } catch (_0x1e7ce2) {
      _0x4c4e79(_0x1232c4);
      if (_0x1e7ce2 !== _0x1e7ce2 + 0 && _0x1e7ce2 !== "longjmp") {
        throw _0x1e7ce2;
      }
      _0x202f4a(1, 0);
    }
  }
  function _0x4c4d50(_0x5fed75, _0x358f20, _0xfeac2b, _0x2d131f) {
    var _0x54ed6b = _0x5ebf8c();
    try {
      _0x301ce5(_0x5fed75, _0x358f20, _0xfeac2b, _0x2d131f);
    } catch (_0x25d253) {
      _0x4c4e79(_0x54ed6b);
      if (_0x25d253 !== _0x25d253 + 0 && _0x25d253 !== "longjmp") {
        throw _0x25d253;
      }
      _0x202f4a(1, 0);
    }
  }
  function _0x14ae42(_0x6de337, _0x471536, _0x488ef3, _0x34abe7, _0x2c84a2, _0x5d08d0) {
    var _0x4316fb = _0x5ebf8c();
    try {
      _0x1d78f1(_0x6de337, _0x471536, _0x488ef3, _0x34abe7, _0x2c84a2, _0x5d08d0);
    } catch (_0xa53ba3) {
      _0x4c4e79(_0x4316fb);
      if (_0xa53ba3 !== _0xa53ba3 + 0 && _0xa53ba3 !== "longjmp") {
        throw _0xa53ba3;
      }
      _0x202f4a(1, 0);
    }
  }
  function _0x3e4dfe(_0x241e6b, _0x5adf72, _0x45538e) {
    var _0x4f0661 = _0x5ebf8c();
    try {
      return _0x3425df(_0x241e6b, _0x5adf72, _0x45538e);
    } catch (_0x511efd) {
      _0x4c4e79(_0x4f0661);
      if (_0x511efd !== _0x511efd + 0 && _0x511efd !== "longjmp") {
        throw _0x511efd;
      }
      _0x202f4a(1, 0);
    }
  }
  function _0x4bf956(_0x263893, _0xde7f5a, _0x3d733c, _0x37f1cf, _0x7b9fee, _0x41b204, _0x3116dc, _0x1495a9, _0x43b3af, _0x22dfcc, _0x1ab388) {
    var _0x2cce91 = _0x5ebf8c();
    try {
      return _0x11dd79(_0x263893, _0xde7f5a, _0x3d733c, _0x37f1cf, _0x7b9fee, _0x41b204, _0x3116dc, _0x1495a9, _0x43b3af, _0x22dfcc, _0x1ab388);
    } catch (_0x3a4840) {
      _0x4c4e79(_0x2cce91);
      if (_0x3a4840 !== _0x3a4840 + 0 && _0x3a4840 !== "longjmp") {
        throw _0x3a4840;
      }
      _0x202f4a(1, 0);
    }
  }
  function _0x4b205c(_0x2712ef, _0x516f1e, _0x583383, _0x5d5af7, _0x9b143d, _0x306f1a, _0x1c68eb, _0x2e7abd, _0x16944f, _0x1b3e64, _0x5006f2) {
    var _0x106353 = _0x5ebf8c();
    try {
      _0x2a28f0(_0x2712ef, _0x516f1e, _0x583383, _0x5d5af7, _0x9b143d, _0x306f1a, _0x1c68eb, _0x2e7abd, _0x16944f, _0x1b3e64, _0x5006f2);
    } catch (_0x30ac1e) {
      _0x4c4e79(_0x106353);
      if (_0x30ac1e !== _0x30ac1e + 0 && _0x30ac1e !== "longjmp") {
        throw _0x30ac1e;
      }
      _0x202f4a(1, 0);
    }
  }
  function _0x2c51af(_0x4828cf, _0x3341c0, _0x5eb531, _0xab028c, _0xbfc3f1, _0x45f643, _0x2151cf, _0x5debce, _0x406087, _0x50890b) {
    var _0x5b0122 = _0x5ebf8c();
    try {
      _0x3a550(_0x4828cf, _0x3341c0, _0x5eb531, _0xab028c, _0xbfc3f1, _0x45f643, _0x2151cf, _0x5debce, _0x406087, _0x50890b);
    } catch (_0x3cd2ad) {
      _0x4c4e79(_0x5b0122);
      if (_0x3cd2ad !== _0x3cd2ad + 0 && _0x3cd2ad !== "longjmp") {
        throw _0x3cd2ad;
      }
      _0x202f4a(1, 0);
    }
  }
  function _0x351620(_0x47f7b5, _0x308ac4, _0x2c8e0f, _0x4f630f, _0x450ea4) {
    var _0x8847a2 = _0x5ebf8c();
    try {
      _0x4c0755(_0x47f7b5, _0x308ac4, _0x2c8e0f, _0x4f630f, _0x450ea4);
    } catch (_0x123b4b) {
      _0x4c4e79(_0x8847a2);
      if (_0x123b4b !== _0x123b4b + 0 && _0x123b4b !== "longjmp") {
        throw _0x123b4b;
      }
      _0x202f4a(1, 0);
    }
  }
  function _0x58a442(_0x34bc8e, _0x1fdcf8, _0x3c2015, _0x1a4738) {
    var _0x29391d = _0x5ebf8c();
    try {
      _0x4052eb(_0x34bc8e, _0x1fdcf8, _0x3c2015, _0x1a4738);
    } catch (_0xb1987e) {
      _0x4c4e79(_0x29391d);
      if (_0xb1987e !== _0xb1987e + 0 && _0xb1987e !== "longjmp") {
        throw _0xb1987e;
      }
      _0x202f4a(1, 0);
    }
  }
  function _0x20ea41(_0x34ba6a, _0x29028b, _0x459615) {
    var _0x4a820f = _0x5ebf8c();
    try {
      return _0x8e64ef(_0x34ba6a, _0x29028b, _0x459615);
    } catch (_0x2992e2) {
      _0x4c4e79(_0x4a820f);
      if (_0x2992e2 !== _0x2992e2 + 0 && _0x2992e2 !== "longjmp") {
        throw _0x2992e2;
      }
      _0x202f4a(1, 0);
    }
  }
  function _0x2fede9(_0x1bdbf6, _0x5ee3b3, _0xa067b5, _0x4cd3f1, _0x382763, _0x156dc8, _0x20c4e6, _0x2a4e5f, _0x478e9b, _0x10a509) {
    var _0x2b0a7a = _0x5ebf8c();
    try {
      return _0x59cc84(_0x1bdbf6, _0x5ee3b3, _0xa067b5, _0x4cd3f1, _0x382763, _0x156dc8, _0x20c4e6, _0x2a4e5f, _0x478e9b, _0x10a509);
    } catch (_0x15fd73) {
      _0x4c4e79(_0x2b0a7a);
      if (_0x15fd73 !== _0x15fd73 + 0 && _0x15fd73 !== "longjmp") {
        throw _0x15fd73;
      }
      _0x202f4a(1, 0);
    }
  }
  function _0xcd2e84(_0x32b0b8, _0x58c2dc, _0x2bcfce, _0x3ccb2c, _0x5a8235, _0x44b602, _0x516f81, _0x36e2ef, _0x283213) {
    var _0x3d4dbd = _0x5ebf8c();
    try {
      _0x984f63(_0x32b0b8, _0x58c2dc, _0x2bcfce, _0x3ccb2c, _0x5a8235, _0x44b602, _0x516f81, _0x36e2ef, _0x283213);
    } catch (_0x388713) {
      _0x4c4e79(_0x3d4dbd);
      if (_0x388713 !== _0x388713 + 0 && _0x388713 !== "longjmp") {
        throw _0x388713;
      }
      _0x202f4a(1, 0);
    }
  }
  function _0x35df96(_0x17a698, _0x3e9525, _0x4660dc, _0x33f59c, _0x3de531) {
    var _0x35d236 = _0x5ebf8c();
    try {
      _0x490a8d(_0x17a698, _0x3e9525, _0x4660dc, _0x33f59c, _0x3de531);
    } catch (_0x55d57d) {
      _0x4c4e79(_0x35d236);
      if (_0x55d57d !== _0x55d57d + 0 && _0x55d57d !== "longjmp") {
        throw _0x55d57d;
      }
      _0x202f4a(1, 0);
    }
  }
  function _0x2fe0f6(_0x3eeea9, _0x2b9dac, _0x53c412, _0x5ec768, _0x392d46) {
    var _0x6f07fc = _0x5ebf8c();
    try {
      return _0x169531(_0x3eeea9, _0x2b9dac, _0x53c412, _0x5ec768, _0x392d46);
    } catch (_0x1527c4) {
      _0x4c4e79(_0x6f07fc);
      if (_0x1527c4 !== _0x1527c4 + 0 && _0x1527c4 !== "longjmp") {
        throw _0x1527c4;
      }
      _0x202f4a(1, 0);
    }
  }
  function _0x4d1b43(_0x1b6638, _0x23f74d, _0x1e2776, _0x2fea28, _0x21d82b, _0x1bae67) {
    var _0x25d14a = _0x5ebf8c();
    try {
      _0x7e04d5(_0x1b6638, _0x23f74d, _0x1e2776, _0x2fea28, _0x21d82b, _0x1bae67);
    } catch (_0x2a6faa) {
      _0x4c4e79(_0x25d14a);
      if (_0x2a6faa !== _0x2a6faa + 0 && _0x2a6faa !== "longjmp") {
        throw _0x2a6faa;
      }
      _0x202f4a(1, 0);
    }
  }
  function _0x472cde(_0x4383ae, _0x48b0a4, _0xe9a48d, _0x4f7784, _0x422185) {
    var _0x4325c6 = _0x5ebf8c();
    try {
      return _0x2362df(_0x4383ae, _0x48b0a4, _0xe9a48d, _0x4f7784, _0x422185);
    } catch (_0x178676) {
      _0x4c4e79(_0x4325c6);
      if (_0x178676 !== _0x178676 + 0 && _0x178676 !== "longjmp") {
        throw _0x178676;
      }
      _0x202f4a(1, 0);
    }
  }
  function _0x37eb59(_0x1ba34c, _0x3c909d, _0x5f5330, _0x58238f, _0x1e2f60) {
    var _0x5121db = _0x5ebf8c();
    try {
      return _0x5b53cf(_0x1ba34c, _0x3c909d, _0x5f5330, _0x58238f, _0x1e2f60);
    } catch (_0x33cc52) {
      _0x4c4e79(_0x5121db);
      if (_0x33cc52 !== _0x33cc52 + 0 && _0x33cc52 !== "longjmp") {
        throw _0x33cc52;
      }
      _0x202f4a(1, 0);
    }
  }
  function _0x4e05aa(_0x3bee0a, _0x1a5955) {
    var _0x21e48c = _0x5ebf8c();
    try {
      return _0x5c1fc8(_0x3bee0a, _0x1a5955);
    } catch (_0x138bf1) {
      _0x4c4e79(_0x21e48c);
      if (_0x138bf1 !== _0x138bf1 + 0 && _0x138bf1 !== "longjmp") {
        throw _0x138bf1;
      }
      _0x202f4a(1, 0);
    }
  }
  function _0x503bd0(_0x372d99, _0xa937fe, _0x202805, _0x230a3f, _0x53f2e2) {
    var _0x17747f = _0x5ebf8c();
    try {
      return _0x5cfb19(_0x372d99, _0xa937fe, _0x202805, _0x230a3f, _0x53f2e2);
    } catch (_0x1fa5a9) {
      _0x4c4e79(_0x17747f);
      if (_0x1fa5a9 !== _0x1fa5a9 + 0 && _0x1fa5a9 !== "longjmp") {
        throw _0x1fa5a9;
      }
      _0x202f4a(1, 0);
    }
  }
  function _0x19a41f(_0x495b23, _0x3cf4d6, _0x523fbc) {
    var _0x425156 = _0x5ebf8c();
    try {
      return _0x6daf63(_0x495b23, _0x3cf4d6, _0x523fbc);
    } catch (_0x317988) {
      _0x4c4e79(_0x425156);
      if (_0x317988 !== _0x317988 + 0 && _0x317988 !== "longjmp") {
        throw _0x317988;
      }
      _0x202f4a(1, 0);
    }
  }
  function _0x2e325b(_0x550181, _0x35a1de, _0x29f33f) {
    var _0x579205 = _0x5ebf8c();
    try {
      return _0x1866c2(_0x550181, _0x35a1de, _0x29f33f);
    } catch (_0x5255df) {
      _0x4c4e79(_0x579205);
      if (_0x5255df !== _0x5255df + 0 && _0x5255df !== "longjmp") {
        throw _0x5255df;
      }
      _0x202f4a(1, 0);
    }
  }
  function _0x49c8d1(_0x44d73c, _0x5039b7, _0x135471, _0x1d1d0d, _0x453736, _0x27590f, _0x51ab5d, _0x6a034, _0x4e256e, _0x487a93, _0x446e19, _0x17122e, _0x1dfb53) {
    var _0x49f913 = _0x5ebf8c();
    try {
      _0x539725(_0x44d73c, _0x5039b7, _0x135471, _0x1d1d0d, _0x453736, _0x27590f, _0x51ab5d, _0x6a034, _0x4e256e, _0x487a93, _0x446e19, _0x17122e, _0x1dfb53);
    } catch (_0x1eccba) {
      _0x4c4e79(_0x49f913);
      if (_0x1eccba !== _0x1eccba + 0 && _0x1eccba !== "longjmp") {
        throw _0x1eccba;
      }
      _0x202f4a(1, 0);
    }
  }
  function _0x287742(_0x59d7a3, _0x24bad6, _0x4949f8, _0x225405) {
    var _0x3550d7 = _0x5ebf8c();
    try {
      return _0x622d20(_0x59d7a3, _0x24bad6, _0x4949f8, _0x225405);
    } catch (_0x4b5c19) {
      _0x4c4e79(_0x3550d7);
      if (_0x4b5c19 !== _0x4b5c19 + 0 && _0x4b5c19 !== "longjmp") {
        throw _0x4b5c19;
      }
      _0x202f4a(1, 0);
    }
  }
  function _0x14f48a(_0x1c51ff, _0x553d2b, _0x32de50, _0x93844c) {
    var _0x5a2972 = _0x5ebf8c();
    try {
      return _0x1e9b85(_0x1c51ff, _0x553d2b, _0x32de50, _0x93844c);
    } catch (_0x4ad8fc) {
      _0x4c4e79(_0x5a2972);
      if (_0x4ad8fc !== _0x4ad8fc + 0 && _0x4ad8fc !== "longjmp") {
        throw _0x4ad8fc;
      }
      _0x202f4a(1, 0);
    }
  }
  function _0x334dc3(_0x1e8eca, _0x117796, _0x1f449b, _0x3d8944) {
    var _0x576ac2 = _0x5ebf8c();
    try {
      return _0x1bf14a(_0x1e8eca, _0x117796, _0x1f449b, _0x3d8944);
    } catch (_0x1bbbfe) {
      _0x4c4e79(_0x576ac2);
      if (_0x1bbbfe !== _0x1bbbfe + 0 && _0x1bbbfe !== "longjmp") {
        throw _0x1bbbfe;
      }
      _0x202f4a(1, 0);
    }
  }
  function _0x283633(_0x29c999, _0x189bb3, _0x5297f5, _0x5b2683, _0x17e354) {
    var _0x26b8ef = _0x5ebf8c();
    try {
      return _0xb9f87d(_0x29c999, _0x189bb3, _0x5297f5, _0x5b2683, _0x17e354);
    } catch (_0x5ec983) {
      _0x4c4e79(_0x26b8ef);
      if (_0x5ec983 !== _0x5ec983 + 0 && _0x5ec983 !== "longjmp") {
        throw _0x5ec983;
      }
      _0x202f4a(1, 0);
    }
  }
  function _0x470d6c(_0x19ab88, _0x39147b, _0x414ace, _0x4cad39) {
    var _0x131c2b = _0x5ebf8c();
    try {
      return _0xd66e4b(_0x19ab88, _0x39147b, _0x414ace, _0x4cad39);
    } catch (_0x34f38a) {
      _0x4c4e79(_0x131c2b);
      if (_0x34f38a !== _0x34f38a + 0 && _0x34f38a !== "longjmp") {
        throw _0x34f38a;
      }
      _0x202f4a(1, 0);
    }
  }
  function _0x1cf9bf(_0x253d50, _0x4734b2, _0x2b3a6e, _0x1392f4, _0x5cf2d7, _0x413364, _0x549a6a, _0x59697e) {
    var _0x367fc4 = _0x5ebf8c();
    try {
      return _0x2ec1cb(_0x253d50, _0x4734b2, _0x2b3a6e, _0x1392f4, _0x5cf2d7, _0x413364, _0x549a6a, _0x59697e);
    } catch (_0x301600) {
      _0x4c4e79(_0x367fc4);
      if (_0x301600 !== _0x301600 + 0 && _0x301600 !== "longjmp") {
        throw _0x301600;
      }
      _0x202f4a(1, 0);
    }
  }
  function _0x5f4858(_0x288675, _0xf684c, _0x153342, _0x48d59a, _0x352a86, _0x124736, _0x41932a) {
    var _0x3e3a57 = _0x5ebf8c();
    try {
      return _0x2e863f(_0x288675, _0xf684c, _0x153342, _0x48d59a, _0x352a86, _0x124736, _0x41932a);
    } catch (_0x15bbf1) {
      _0x4c4e79(_0x3e3a57);
      if (_0x15bbf1 !== _0x15bbf1 + 0 && _0x15bbf1 !== "longjmp") {
        throw _0x15bbf1;
      }
      _0x202f4a(1, 0);
    }
  }
  function _0x2cb200(_0x130b7a, _0xb4da63, _0x48da4a, _0x32c826, _0x8a6787, _0x29f0f4, _0x507a84) {
    var _0x23e238 = _0x5ebf8c();
    try {
      _0x4fd308(_0x130b7a, _0xb4da63, _0x48da4a, _0x32c826, _0x8a6787, _0x29f0f4, _0x507a84);
    } catch (_0xaaa757) {
      _0x4c4e79(_0x23e238);
      if (_0xaaa757 !== _0xaaa757 + 0 && _0xaaa757 !== "longjmp") {
        throw _0xaaa757;
      }
      _0x202f4a(1, 0);
    }
  }
  function _0x3722df(_0x11c358, _0x41f7c5, _0x3bbf61, _0x351f7f, _0x215557, _0x2507d4, _0x5a3134, _0x31da2a, _0xaa2c29, _0x5a9934, _0x45eb08, _0x5f11f1) {
    var _0x416ae2 = _0x5ebf8c();
    try {
      _0x286aa5(_0x11c358, _0x41f7c5, _0x3bbf61, _0x351f7f, _0x215557, _0x2507d4, _0x5a3134, _0x31da2a, _0xaa2c29, _0x5a9934, _0x45eb08, _0x5f11f1);
    } catch (_0x4cb933) {
      _0x4c4e79(_0x416ae2);
      if (_0x4cb933 !== _0x4cb933 + 0 && _0x4cb933 !== "longjmp") {
        throw _0x4cb933;
      }
      _0x202f4a(1, 0);
    }
  }
  function _0x45a59d(_0x13f332, _0x5020e3, _0x210a77, _0x485a71, _0x59431e, _0x1f2f67, _0x148103, _0x278f43, _0xb7fc5b, _0x111cc3, _0x2b38be, _0x47013d, _0x202c90) {
    var _0x3d44ef = _0x5ebf8c();
    try {
      return _0x388ac4(_0x13f332, _0x5020e3, _0x210a77, _0x485a71, _0x59431e, _0x1f2f67, _0x148103, _0x278f43, _0xb7fc5b, _0x111cc3, _0x2b38be, _0x47013d, _0x202c90);
    } catch (_0x80a64c) {
      _0x4c4e79(_0x3d44ef);
      if (_0x80a64c !== _0x80a64c + 0 && _0x80a64c !== "longjmp") {
        throw _0x80a64c;
      }
      _0x202f4a(1, 0);
    }
  }
  function _0x4be7a3(_0x443791, _0xdf57f4, _0x353a93, _0x20ed44, _0x39539c) {
    var _0x584e9c = _0x5ebf8c();
    try {
      return _0x119783(_0x443791, _0xdf57f4, _0x353a93, _0x20ed44, _0x39539c);
    } catch (_0x2d0812) {
      _0x4c4e79(_0x584e9c);
      if (_0x2d0812 !== _0x2d0812 + 0 && _0x2d0812 !== "longjmp") {
        throw _0x2d0812;
      }
      _0x202f4a(1, 0);
    }
  }
  function _0x30d7a8(_0x19d4cf, _0x14ec42, _0x1dcc1f, _0x3129ce, _0x483d80, _0x51094d, _0x3b9f13, _0x469ffc, _0xb2bf54, _0x593f52, _0x577c3c, _0x1aeb42, _0x4d3295, _0x51ee05) {
    var _0x12fbd0 = _0x5ebf8c();
    try {
      _0xbf6398(_0x19d4cf, _0x14ec42, _0x1dcc1f, _0x3129ce, _0x483d80, _0x51094d, _0x3b9f13, _0x469ffc, _0xb2bf54, _0x593f52, _0x577c3c, _0x1aeb42, _0x4d3295, _0x51ee05);
    } catch (_0x3e100d) {
      _0x4c4e79(_0x12fbd0);
      if (_0x3e100d !== _0x3e100d + 0 && _0x3e100d !== "longjmp") {
        throw _0x3e100d;
      }
      _0x202f4a(1, 0);
    }
  }
  function _0x506bd1(_0x508a4d, _0x1c3222, _0x646ae3, _0x43f242, _0x494495, _0x41b454, _0x7bd000, _0x516827, _0x58b439, _0x43f4dc, _0x16269b, _0x11fd48, _0xded2d4, _0x3587f0) {
    var _0x7345a4 = _0x5ebf8c();
    try {
      _0x1a76c1(_0x508a4d, _0x1c3222, _0x646ae3, _0x43f242, _0x494495, _0x41b454, _0x7bd000, _0x516827, _0x58b439, _0x43f4dc, _0x16269b, _0x11fd48, _0xded2d4, _0x3587f0);
    } catch (_0x1c7799) {
      _0x4c4e79(_0x7345a4);
      if (_0x1c7799 !== _0x1c7799 + 0 && _0x1c7799 !== "longjmp") {
        throw _0x1c7799;
      }
      _0x202f4a(1, 0);
    }
  }
  function _0x51bc49(_0x89c552, _0x4b8793, _0x10b898, _0x7415db, _0x92fcee, _0x3cadab, _0x2ef050, _0x56c3ad, _0x373d13, _0x217e55, _0x283828, _0x22bc76, _0x362e2b, _0x67380a) {
    var _0x5c5fab = _0x5ebf8c();
    try {
      _0x2c9792(_0x89c552, _0x4b8793, _0x10b898, _0x7415db, _0x92fcee, _0x3cadab, _0x2ef050, _0x56c3ad, _0x373d13, _0x217e55, _0x283828, _0x22bc76, _0x362e2b, _0x67380a);
    } catch (_0x3fd07c) {
      _0x4c4e79(_0x5c5fab);
      if (_0x3fd07c !== _0x3fd07c + 0 && _0x3fd07c !== "longjmp") {
        throw _0x3fd07c;
      }
      _0x202f4a(1, 0);
    }
  }
  function _0x10542e(_0x3a262b, _0x4d68ef, _0x10b44d, _0x174100, _0x390f4f, _0x40d036, _0x482136) {
    var _0x59f0e0 = _0x5ebf8c();
    try {
      return _0x29e704(_0x3a262b, _0x4d68ef, _0x10b44d, _0x174100, _0x390f4f, _0x40d036, _0x482136);
    } catch (_0x4c73a3) {
      _0x4c4e79(_0x59f0e0);
      if (_0x4c73a3 !== _0x4c73a3 + 0 && _0x4c73a3 !== "longjmp") {
        throw _0x4c73a3;
      }
      _0x202f4a(1, 0);
    }
  }
  function _0x171709(_0x549281, _0xb60518, _0x53d12d, _0x103cff, _0x477bf6, _0x3e9093, _0xf125bb) {
    var _0x2b8b2a = _0x5ebf8c();
    try {
      return _0x20efe8(_0x549281, _0xb60518, _0x53d12d, _0x103cff, _0x477bf6, _0x3e9093, _0xf125bb);
    } catch (_0x5d05c0) {
      _0x4c4e79(_0x2b8b2a);
      if (_0x5d05c0 !== _0x5d05c0 + 0 && _0x5d05c0 !== "longjmp") {
        throw _0x5d05c0;
      }
      _0x202f4a(1, 0);
    }
  }
  function _0x1bb0eb(_0x4444bb, _0xbb3185, _0x578497, _0x430ee3) {
    var _0x41b740 = _0x5ebf8c();
    try {
      _0xca4b79(_0x4444bb, _0xbb3185, _0x578497, _0x430ee3);
    } catch (_0x125a3c) {
      _0x4c4e79(_0x41b740);
      if (_0x125a3c !== _0x125a3c + 0 && _0x125a3c !== "longjmp") {
        throw _0x125a3c;
      }
      _0x202f4a(1, 0);
    }
  }
  function _0xa4ce69(_0x250cf8, _0x18f656, _0x1fcc6e, _0x255f1a, _0x1c7630) {
    var _0x43023f = _0x5ebf8c();
    try {
      return _0xd08020(_0x250cf8, _0x18f656, _0x1fcc6e, _0x255f1a, _0x1c7630);
    } catch (_0x3ad3b1) {
      _0x4c4e79(_0x43023f);
      if (_0x3ad3b1 !== _0x3ad3b1 + 0 && _0x3ad3b1 !== "longjmp") {
        throw _0x3ad3b1;
      }
      _0x202f4a(1, 0);
    }
  }
  function _0x4a9266(_0x1f6db4, _0x3e62c3, _0x13e5c7, _0x573b8f, _0x2e91b5) {
    var _0x21e116 = _0x5ebf8c();
    try {
      return _0xddd37c(_0x1f6db4, _0x3e62c3, _0x13e5c7, _0x573b8f, _0x2e91b5);
    } catch (_0xb98adb) {
      _0x4c4e79(_0x21e116);
      if (_0xb98adb !== _0xb98adb + 0 && _0xb98adb !== "longjmp") {
        throw _0xb98adb;
      }
      _0x202f4a(1, 0);
    }
  }
  function _0x2d9768(_0x5e5da1) {
    var _0x5ae59f = _0x5ebf8c();
    try {
      return _0x28bf6e(_0x5e5da1);
    } catch (_0x233e19) {
      _0x4c4e79(_0x5ae59f);
      if (_0x233e19 !== _0x233e19 + 0 && _0x233e19 !== "longjmp") {
        throw _0x233e19;
      }
      _0x202f4a(1, 0);
    }
  }
  function _0x1b6087(_0xb12a35, _0x19d2d6, _0x1142bd, _0x2cfbb3) {
    var _0x8e0d29 = _0x5ebf8c();
    try {
      return _0x3622cd(_0xb12a35, _0x19d2d6, _0x1142bd, _0x2cfbb3);
    } catch (_0x151a3b) {
      _0x4c4e79(_0x8e0d29);
      if (_0x151a3b !== _0x151a3b + 0 && _0x151a3b !== "longjmp") {
        throw _0x151a3b;
      }
      _0x202f4a(1, 0);
    }
  }
  function _0x2e3a68(_0x18c0bc, _0x4404f7, _0x229edf, _0x437253, _0x434852, _0x42edf4, _0x509260, _0x574c20) {
    var _0x362ac7 = _0x5ebf8c();
    try {
      return _0x5dd76f(_0x18c0bc, _0x4404f7, _0x229edf, _0x437253, _0x434852, _0x42edf4, _0x509260, _0x574c20);
    } catch (_0x46cd65) {
      _0x4c4e79(_0x362ac7);
      if (_0x46cd65 !== _0x46cd65 + 0 && _0x46cd65 !== "longjmp") {
        throw _0x46cd65;
      }
      _0x202f4a(1, 0);
    }
  }
  function _0x23bda8(_0x33e84b, _0x35af0f) {
    var _0x134752 = _0x5ebf8c();
    try {
      return _0x44df33(_0x33e84b, _0x35af0f);
    } catch (_0x51eb04) {
      _0x4c4e79(_0x134752);
      if (_0x51eb04 !== _0x51eb04 + 0 && _0x51eb04 !== "longjmp") {
        throw _0x51eb04;
      }
      _0x202f4a(1, 0);
    }
  }
  function _0x3905ec(_0xa2ba26, _0x32fdff, _0x1283d1) {
    var _0x2ba683 = _0x5ebf8c();
    try {
      return _0x3a9146(_0xa2ba26, _0x32fdff, _0x1283d1);
    } catch (_0x24c82e) {
      _0x4c4e79(_0x2ba683);
      if (_0x24c82e !== _0x24c82e + 0 && _0x24c82e !== "longjmp") {
        throw _0x24c82e;
      }
      _0x202f4a(1, 0);
    }
  }
  function _0x5f2ceb(_0x4dc705, _0x28d175, _0x4f256a, _0x2aca8f, _0xc88aa9, _0x27d1c7) {
    var _0x27794e = _0x5ebf8c();
    try {
      _0x1bb16c(_0x4dc705, _0x28d175, _0x4f256a, _0x2aca8f, _0xc88aa9, _0x27d1c7);
    } catch (_0x5573e9) {
      _0x4c4e79(_0x27794e);
      if (_0x5573e9 !== _0x5573e9 + 0 && _0x5573e9 !== "longjmp") {
        throw _0x5573e9;
      }
      _0x202f4a(1, 0);
    }
  }
  function _0x3097b8(_0x11ff5d, _0x2b0274, _0x296473, _0x551d37, _0x2fee33, _0x136b75) {
    var _0x140acf = _0x5ebf8c();
    try {
      _0x18fdb5(_0x11ff5d, _0x2b0274, _0x296473, _0x551d37, _0x2fee33, _0x136b75);
    } catch (_0x1fc076) {
      _0x4c4e79(_0x140acf);
      if (_0x1fc076 !== _0x1fc076 + 0 && _0x1fc076 !== "longjmp") {
        throw _0x1fc076;
      }
      _0x202f4a(1, 0);
    }
  }
  function _0x4e5909(_0x34949e, _0xad98d6, _0x12dfaf, _0x39db3b, _0x2f5305) {
    var _0x598491 = _0x5ebf8c();
    try {
      _0x561f3d(_0x34949e, _0xad98d6, _0x12dfaf, _0x39db3b, _0x2f5305);
    } catch (_0x538265) {
      _0x4c4e79(_0x598491);
      if (_0x538265 !== _0x538265 + 0 && _0x538265 !== "longjmp") {
        throw _0x538265;
      }
      _0x202f4a(1, 0);
    }
  }
  function _0x240249(_0xdc3e63, _0x3c305a, _0x1a7550, _0x405230) {
    var _0x411c3d = _0x5ebf8c();
    try {
      return _0x4c2dd0(_0xdc3e63, _0x3c305a, _0x1a7550, _0x405230);
    } catch (_0x3973ce) {
      _0x4c4e79(_0x411c3d);
      if (_0x3973ce !== _0x3973ce + 0 && _0x3973ce !== "longjmp") {
        throw _0x3973ce;
      }
      _0x202f4a(1, 0);
    }
  }
  function _0x1540e7(_0x1ea8ef, _0x372c7d, _0x5a078f, _0x2b9203, _0x56d63e, _0x617e5) {
    var _0x4373e1 = _0x5ebf8c();
    try {
      _0x597673(_0x1ea8ef, _0x372c7d, _0x5a078f, _0x2b9203, _0x56d63e, _0x617e5);
    } catch (_0x106989) {
      _0x4c4e79(_0x4373e1);
      if (_0x106989 !== _0x106989 + 0 && _0x106989 !== "longjmp") {
        throw _0x106989;
      }
      _0x202f4a(1, 0);
    }
  }
  function _0x595acd(_0x334636, _0x41707d, _0x984091, _0x5a8045, _0x374bb1, _0x3643bb) {
    var _0x472f9f = _0x5ebf8c();
    try {
      return _0x529594(_0x334636, _0x41707d, _0x984091, _0x5a8045, _0x374bb1, _0x3643bb);
    } catch (_0x1a2bab) {
      _0x4c4e79(_0x472f9f);
      if (_0x1a2bab !== _0x1a2bab + 0 && _0x1a2bab !== "longjmp") {
        throw _0x1a2bab;
      }
      _0x202f4a(1, 0);
    }
  }
  function _0x49bb6a(_0x2400e0, _0x2f29e4, _0x56552d, _0x4f4c94, _0x59657b) {
    var _0x1489dc = _0x5ebf8c();
    try {
      return _0x54c3dc(_0x2400e0, _0x2f29e4, _0x56552d, _0x4f4c94, _0x59657b);
    } catch (_0x304fc0) {
      _0x4c4e79(_0x1489dc);
      if (_0x304fc0 !== _0x304fc0 + 0 && _0x304fc0 !== "longjmp") {
        throw _0x304fc0;
      }
      _0x202f4a(1, 0);
    }
  }
  function _0x174b8f(_0x246b93, _0x3a8639, _0x1e0228, _0xef4cb, _0x12f6e5) {
    var _0x44f24f = _0x5ebf8c();
    try {
      return _0xf10b9(_0x246b93, _0x3a8639, _0x1e0228, _0xef4cb, _0x12f6e5);
    } catch (_0x44c7bd) {
      _0x4c4e79(_0x44f24f);
      if (_0x44c7bd !== _0x44c7bd + 0 && _0x44c7bd !== "longjmp") {
        throw _0x44c7bd;
      }
      _0x202f4a(1, 0);
    }
  }
  function _0xca3e2b(_0x1dcea4, _0x8ee59, _0x12b135, _0x3a43e0, _0x25fd47, _0x513791) {
    var _0xb47e47 = _0x5ebf8c();
    try {
      return _0x24bfa7(_0x1dcea4, _0x8ee59, _0x12b135, _0x3a43e0, _0x25fd47, _0x513791);
    } catch (_0x4c93f9) {
      _0x4c4e79(_0xb47e47);
      if (_0x4c93f9 !== _0x4c93f9 + 0 && _0x4c93f9 !== "longjmp") {
        throw _0x4c93f9;
      }
      _0x202f4a(1, 0);
    }
  }
  function _0x35fa0c(_0x38e196, _0x2f0856, _0x4d1c1a, _0x4b95a8) {
    var _0x139a8f = _0x5ebf8c();
    try {
      return _0x314f94(_0x38e196, _0x2f0856, _0x4d1c1a, _0x4b95a8);
    } catch (_0x40c22d) {
      _0x4c4e79(_0x139a8f);
      if (_0x40c22d !== _0x40c22d + 0 && _0x40c22d !== "longjmp") {
        throw _0x40c22d;
      }
      _0x202f4a(1, 0);
    }
  }
  function _0xf3287(_0x5c55bb, _0x474559, _0x5838a6, _0x5648a7, _0x4829ea, _0x16c308) {
    var _0x463a57 = _0x5ebf8c();
    try {
      return _0x484ad9(_0x5c55bb, _0x474559, _0x5838a6, _0x5648a7, _0x4829ea, _0x16c308);
    } catch (_0x3baa2b) {
      _0x4c4e79(_0x463a57);
      if (_0x3baa2b !== _0x3baa2b + 0 && _0x3baa2b !== "longjmp") {
        throw _0x3baa2b;
      }
      _0x202f4a(1, 0);
    }
  }
  function _0x485c78(_0x193f91, _0x1bcf39, _0x5a918b, _0x110d82) {
    var _0x492359 = _0x5ebf8c();
    try {
      return _0x28f036(_0x193f91, _0x1bcf39, _0x5a918b, _0x110d82);
    } catch (_0x4b756a) {
      _0x4c4e79(_0x492359);
      if (_0x4b756a !== _0x4b756a + 0 && _0x4b756a !== "longjmp") {
        throw _0x4b756a;
      }
      _0x202f4a(1, 0);
    }
  }
  function _0x2ad7e9(_0x502088, _0x2fff7d, _0x2722d5, _0x28a602, _0x13e800, _0x1d90b1) {
    var _0x5c04c7 = _0x5ebf8c();
    try {
      return _0x2e9ef4(_0x502088, _0x2fff7d, _0x2722d5, _0x28a602, _0x13e800, _0x1d90b1);
    } catch (_0x353e77) {
      _0x4c4e79(_0x5c04c7);
      if (_0x353e77 !== _0x353e77 + 0 && _0x353e77 !== "longjmp") {
        throw _0x353e77;
      }
      _0x202f4a(1, 0);
    }
  }
  function _0x3b98b5(_0x18f6c4, _0x6a9830, _0x31072f, _0x18d32f, _0x5dd388, _0x1f5f62) {
    var _0x1e906d = _0x5ebf8c();
    try {
      return _0x21f958(_0x18f6c4, _0x6a9830, _0x31072f, _0x18d32f, _0x5dd388, _0x1f5f62);
    } catch (_0x70219) {
      _0x4c4e79(_0x1e906d);
      if (_0x70219 !== _0x70219 + 0 && _0x70219 !== "longjmp") {
        throw _0x70219;
      }
      _0x202f4a(1, 0);
    }
  }
  function _0x1db53f(_0x53fc13, _0x4b5553, _0x1e2fe6, _0x5979b7, _0xe38f38, _0x38720d, _0x339817, _0xbaf312, _0x55e4a6, _0x58642c, _0x5bea3b, _0x22fce5) {
    var _0x1988f9 = _0x5ebf8c();
    try {
      return _0x1000e8(_0x53fc13, _0x4b5553, _0x1e2fe6, _0x5979b7, _0xe38f38, _0x38720d, _0x339817, _0xbaf312, _0x55e4a6, _0x58642c, _0x5bea3b, _0x22fce5);
    } catch (_0x20394a) {
      _0x4c4e79(_0x1988f9);
      if (_0x20394a !== _0x20394a + 0 && _0x20394a !== "longjmp") {
        throw _0x20394a;
      }
      _0x202f4a(1, 0);
    }
  }
  function _0x1fef55(_0x483d1d, _0x425f86, _0x3ec6dd, _0x2ecb5f) {
    var _0x20eadc = _0x5ebf8c();
    try {
      _0x5b0fe3(_0x483d1d, _0x425f86, _0x3ec6dd, _0x2ecb5f);
    } catch (_0x49f2a7) {
      _0x4c4e79(_0x20eadc);
      if (_0x49f2a7 !== _0x49f2a7 + 0 && _0x49f2a7 !== "longjmp") {
        throw _0x49f2a7;
      }
      _0x202f4a(1, 0);
    }
  }
  function _0x3d59cd(_0x14994e, _0x39351e, _0x33e8ae, _0x4cdde4, _0x163727) {
    var _0xab14aa = _0x5ebf8c();
    try {
      return _0x1f79c2(_0x14994e, _0x39351e, _0x33e8ae, _0x4cdde4, _0x163727);
    } catch (_0xeff735) {
      _0x4c4e79(_0xab14aa);
      if (_0xeff735 !== _0xeff735 + 0 && _0xeff735 !== "longjmp") {
        throw _0xeff735;
      }
      _0x202f4a(1, 0);
    }
  }
  function _0x16ec5c(_0x42ed0a, _0x111572, _0x1dd388, _0x590102, _0x4b0570, _0x1a8ffc, _0x377aa1, _0x1812b2) {
    var _0x4d11a4 = _0x5ebf8c();
    try {
      _0x570891(_0x42ed0a, _0x111572, _0x1dd388, _0x590102, _0x4b0570, _0x1a8ffc, _0x377aa1, _0x1812b2);
    } catch (_0x340ba9) {
      _0x4c4e79(_0x4d11a4);
      if (_0x340ba9 !== _0x340ba9 + 0 && _0x340ba9 !== "longjmp") {
        throw _0x340ba9;
      }
      _0x202f4a(1, 0);
    }
  }
  function _0x2c904b(_0x193fe5, _0x457c7d, _0x2d8666) {
    var _0x562dbe = _0x5ebf8c();
    try {
      return _0x14c21a(_0x193fe5, _0x457c7d, _0x2d8666);
    } catch (_0x2c62f8) {
      _0x4c4e79(_0x562dbe);
      if (_0x2c62f8 !== _0x2c62f8 + 0 && _0x2c62f8 !== "longjmp") {
        throw _0x2c62f8;
      }
      _0x202f4a(1, 0);
    }
  }
  function _0x1ffda9(_0x2f6b93, _0x333bf3, _0x3b251b, _0x5bbfce, _0x67eba6, _0x21aa7f, _0x4bc24) {
    var _0x6d8cb5 = _0x5ebf8c();
    try {
      _0x2e451b(_0x2f6b93, _0x333bf3, _0x3b251b, _0x5bbfce, _0x67eba6, _0x21aa7f, _0x4bc24);
    } catch (_0x8c6788) {
      _0x4c4e79(_0x6d8cb5);
      if (_0x8c6788 !== _0x8c6788 + 0 && _0x8c6788 !== "longjmp") {
        throw _0x8c6788;
      }
      _0x202f4a(1, 0);
    }
  }
  function _0x2b3162(_0x494989, _0x341a8a, _0x12b1e6, _0x3a1081, _0xaa854f, _0x2aa65c) {
    var _0x4bd3c2 = _0x5ebf8c();
    try {
      return _0x509d68(_0x494989, _0x341a8a, _0x12b1e6, _0x3a1081, _0xaa854f, _0x2aa65c);
    } catch (_0x1a5ee4) {
      _0x4c4e79(_0x4bd3c2);
      if (_0x1a5ee4 !== _0x1a5ee4 + 0 && _0x1a5ee4 !== "longjmp") {
        throw _0x1a5ee4;
      }
      _0x202f4a(1, 0);
    }
  }
  function _0x3815eb(_0x5b248c, _0x118b95, _0x5eb31c, _0x160e99, _0x522bca, _0xc1e118) {
    var _0x360f3d = _0x5ebf8c();
    try {
      return _0x8034a9(_0x5b248c, _0x118b95, _0x5eb31c, _0x160e99, _0x522bca, _0xc1e118);
    } catch (_0x172938) {
      _0x4c4e79(_0x360f3d);
      if (_0x172938 !== _0x172938 + 0 && _0x172938 !== "longjmp") {
        throw _0x172938;
      }
      _0x202f4a(1, 0);
    }
  }
  function _0x48dd8c(_0x4f53c, _0x3129dd, _0x35132f, _0x23e77c, _0x18bbe1) {
    var _0x4da71f = _0x5ebf8c();
    try {
      _0x467364(_0x4f53c, _0x3129dd, _0x35132f, _0x23e77c, _0x18bbe1);
    } catch (_0x476e4f) {
      _0x4c4e79(_0x4da71f);
      if (_0x476e4f !== _0x476e4f + 0 && _0x476e4f !== "longjmp") {
        throw _0x476e4f;
      }
      _0x202f4a(1, 0);
    }
  }
  function _0x447c38(_0x37acb0, _0xf0153, _0x2aee95, _0x267806, _0x343e94, _0x194d65, _0x1fffac, _0x10e838) {
    var _0x566f46 = _0x5ebf8c();
    try {
      _0x34f749(_0x37acb0, _0xf0153, _0x2aee95, _0x267806, _0x343e94, _0x194d65, _0x1fffac, _0x10e838);
    } catch (_0x52e018) {
      _0x4c4e79(_0x566f46);
      if (_0x52e018 !== _0x52e018 + 0 && _0x52e018 !== "longjmp") {
        throw _0x52e018;
      }
      _0x202f4a(1, 0);
    }
  }
  function _0x25b348(_0x47bc8b, _0xac52b5, _0x14ead2, _0x296af9, _0x3a7dd8, _0x7498aa, _0x1c11b1, _0x597e2d) {
    var _0x3a105d = _0x5ebf8c();
    try {
      return _0x32b7ce(_0x47bc8b, _0xac52b5, _0x14ead2, _0x296af9, _0x3a7dd8, _0x7498aa, _0x1c11b1, _0x597e2d);
    } catch (_0x40a010) {
      _0x4c4e79(_0x3a105d);
      if (_0x40a010 !== _0x40a010 + 0 && _0x40a010 !== "longjmp") {
        throw _0x40a010;
      }
      _0x202f4a(1, 0);
    }
  }
  function _0x31ac7a(_0x538b02, _0x3076f4, _0x4d55e4, _0x507da3, _0x3884a6, _0x4ba1d4, _0x5cff7d) {
    var _0x303178 = _0x5ebf8c();
    try {
      _0x22297d(_0x538b02, _0x3076f4, _0x4d55e4, _0x507da3, _0x3884a6, _0x4ba1d4, _0x5cff7d);
    } catch (_0x227cb4) {
      _0x4c4e79(_0x303178);
      if (_0x227cb4 !== _0x227cb4 + 0 && _0x227cb4 !== "longjmp") {
        throw _0x227cb4;
      }
      _0x202f4a(1, 0);
    }
  }
  function _0xfc103f(_0x3c6085, _0x28965c, _0x243964, _0x74c6f7, _0xed4616, _0x182337, _0x52eac5) {
    var _0x1c261d = _0x5ebf8c();
    try {
      return _0x5884d8(_0x3c6085, _0x28965c, _0x243964, _0x74c6f7, _0xed4616, _0x182337, _0x52eac5);
    } catch (_0x499209) {
      _0x4c4e79(_0x1c261d);
      if (_0x499209 !== _0x499209 + 0 && _0x499209 !== "longjmp") {
        throw _0x499209;
      }
      _0x202f4a(1, 0);
    }
  }
  function _0xb9d0a7(_0x4661ed, _0x1c61ca, _0x32d0de, _0xbea16d, _0x1fb1f4, _0x2df1f4, _0x4a11bd, _0xd5e511, _0x129479, _0x19f587) {
    var _0x5bb420 = _0x5ebf8c();
    try {
      return _0x32eaf0(_0x4661ed, _0x1c61ca, _0x32d0de, _0xbea16d, _0x1fb1f4, _0x2df1f4, _0x4a11bd, _0xd5e511, _0x129479, _0x19f587);
    } catch (_0x5a4fff) {
      _0x4c4e79(_0x5bb420);
      if (_0x5a4fff !== _0x5a4fff + 0 && _0x5a4fff !== "longjmp") {
        throw _0x5a4fff;
      }
      _0x202f4a(1, 0);
    }
  }
  function _0xd7db44(_0x4f7fc7, _0x2b3ce3, _0x14018b, _0x398c93, _0x179a41, _0x56d97d, _0x53fbeb) {
    var _0x455ff6 = _0x5ebf8c();
    try {
      _0x15648c(_0x4f7fc7, _0x2b3ce3, _0x14018b, _0x398c93, _0x179a41, _0x56d97d, _0x53fbeb);
    } catch (_0x3d85a9) {
      _0x4c4e79(_0x455ff6);
      if (_0x3d85a9 !== _0x3d85a9 + 0 && _0x3d85a9 !== "longjmp") {
        throw _0x3d85a9;
      }
      _0x202f4a(1, 0);
    }
  }
  function _0xa24d(_0x347333, _0x2893d8, _0x5ed3b3, _0x316fd3, _0x54f46b, _0x38b225, _0x1deedd) {
    var _0x344d09 = _0x5ebf8c();
    try {
      return _0x4e072f(_0x347333, _0x2893d8, _0x5ed3b3, _0x316fd3, _0x54f46b, _0x38b225, _0x1deedd);
    } catch (_0x208f2d) {
      _0x4c4e79(_0x344d09);
      if (_0x208f2d !== _0x208f2d + 0 && _0x208f2d !== "longjmp") {
        throw _0x208f2d;
      }
      _0x202f4a(1, 0);
    }
  }
  function _0x1c1233(_0x422e9f, _0x57ea74, _0x4e68b2, _0x1c3383, _0x19d8b8, _0x18595d, _0x3e059b, _0x45dd7c, _0x17f5cc, _0x53b7d3, _0x4506cf, _0x2cd73f) {
    var _0x5bad7d = _0x5ebf8c();
    try {
      return _0x13ceb5(_0x422e9f, _0x57ea74, _0x4e68b2, _0x1c3383, _0x19d8b8, _0x18595d, _0x3e059b, _0x45dd7c, _0x17f5cc, _0x53b7d3, _0x4506cf, _0x2cd73f);
    } catch (_0x1f1a5d) {
      _0x4c4e79(_0x5bad7d);
      if (_0x1f1a5d !== _0x1f1a5d + 0 && _0x1f1a5d !== "longjmp") {
        throw _0x1f1a5d;
      }
      _0x202f4a(1, 0);
    }
  }
  function _0x16748f(_0x373b05, _0x305261, _0x7d4fc2, _0x4673ce, _0x3db798, _0x58da5d, _0x3d068c, _0x160ab2, _0x22f0c4, _0x3ba8cb) {
    var _0x4dec97 = _0x5ebf8c();
    try {
      return _0x531abb(_0x373b05, _0x305261, _0x7d4fc2, _0x4673ce, _0x3db798, _0x58da5d, _0x3d068c, _0x160ab2, _0x22f0c4, _0x3ba8cb);
    } catch (_0x1715af) {
      _0x4c4e79(_0x4dec97);
      if (_0x1715af !== _0x1715af + 0 && _0x1715af !== "longjmp") {
        throw _0x1715af;
      }
      _0x202f4a(1, 0);
    }
  }
  function _0x5c7b85(_0x40cd94, _0x406077, _0x103b16, _0x554db4, _0x29f95f, _0x478a73) {
    var _0x29ac4d = _0x5ebf8c();
    try {
      return _0x2df344(_0x40cd94, _0x406077, _0x103b16, _0x554db4, _0x29f95f, _0x478a73);
    } catch (_0x44cb23) {
      _0x4c4e79(_0x29ac4d);
      if (_0x44cb23 !== _0x44cb23 + 0 && _0x44cb23 !== "longjmp") {
        throw _0x44cb23;
      }
      _0x202f4a(1, 0);
    }
  }
  function _0x540d84(_0xd36fba, _0x8f5944, _0x26a2cf, _0x1061a2, _0x223193, _0x44d6cb, _0x3422f5, _0x91308c, _0x3b3c37) {
    var _0x1406f4 = _0x5ebf8c();
    try {
      _0x560aa0(_0xd36fba, _0x8f5944, _0x26a2cf, _0x1061a2, _0x223193, _0x44d6cb, _0x3422f5, _0x91308c, _0x3b3c37);
    } catch (_0x437ae3) {
      _0x4c4e79(_0x1406f4);
      if (_0x437ae3 !== _0x437ae3 + 0 && _0x437ae3 !== "longjmp") {
        throw _0x437ae3;
      }
      _0x202f4a(1, 0);
    }
  }
  function _0x26cc90(_0xde2d4d, _0x39d475, _0x1d2bc0, _0x3d49aa, _0x5eca68, _0x313f29, _0x4ad728, _0x359c5f, _0x14905a, _0x1016a2, _0x5dbb42, _0x5a2d3e, _0x872c38, _0x50a1b3, _0x3ab4f3, _0x1ff60b) {
    var _0x2158b0 = _0x5ebf8c();
    try {
      _0x5d16e5(_0xde2d4d, _0x39d475, _0x1d2bc0, _0x3d49aa, _0x5eca68, _0x313f29, _0x4ad728, _0x359c5f, _0x14905a, _0x1016a2, _0x5dbb42, _0x5a2d3e, _0x872c38, _0x50a1b3, _0x3ab4f3, _0x1ff60b);
    } catch (_0x233498) {
      _0x4c4e79(_0x2158b0);
      if (_0x233498 !== _0x233498 + 0 && _0x233498 !== "longjmp") {
        throw _0x233498;
      }
      _0x202f4a(1, 0);
    }
  }
  function _0x5b2c61(_0x14b9f3, _0x241c5e, _0x56d090, _0x29f804) {
    var _0x13f7ba = _0x5ebf8c();
    try {
      return _0x5958ac(_0x14b9f3, _0x241c5e, _0x56d090, _0x29f804);
    } catch (_0x3a93ad) {
      _0x4c4e79(_0x13f7ba);
      if (_0x3a93ad !== _0x3a93ad + 0 && _0x3a93ad !== "longjmp") {
        throw _0x3a93ad;
      }
      _0x202f4a(1, 0);
    }
  }
  function _0xd87657(_0x78ddd8, _0x56c741, _0x2621d2, _0x4192bc) {
    var _0x346e30 = _0x5ebf8c();
    try {
      return _0x400335(_0x78ddd8, _0x56c741, _0x2621d2, _0x4192bc);
    } catch (_0x505ece) {
      _0x4c4e79(_0x346e30);
      if (_0x505ece !== _0x505ece + 0 && _0x505ece !== "longjmp") {
        throw _0x505ece;
      }
      _0x202f4a(1, 0);
    }
  }
  function _0x3a1864(_0x1c99a1, _0x228f9b, _0x5b6f3b, _0x124545, _0x3939d9, _0x538a21, _0x407dd9) {
    var _0x537568 = _0x5ebf8c();
    try {
      return _0x2089a7(_0x1c99a1, _0x228f9b, _0x5b6f3b, _0x124545, _0x3939d9, _0x538a21, _0x407dd9);
    } catch (_0x4b8c9f) {
      _0x4c4e79(_0x537568);
      if (_0x4b8c9f !== _0x4b8c9f + 0 && _0x4b8c9f !== "longjmp") {
        throw _0x4b8c9f;
      }
      _0x202f4a(1, 0);
    }
  }
  function _0x3fcc82(_0x5c1d34, _0x242850, _0x15965a, _0x180b8a, _0x31e2c9, _0x22b88d, _0x3ba39c, _0xd479a1, _0x5625e4, _0x53babf, _0x2d0e76, _0x390b4e, _0x3eee0b, _0x2a9858) {
    var _0x286c53 = _0x5ebf8c();
    try {
      _0x758b04(_0x5c1d34, _0x242850, _0x15965a, _0x180b8a, _0x31e2c9, _0x22b88d, _0x3ba39c, _0xd479a1, _0x5625e4, _0x53babf, _0x2d0e76, _0x390b4e, _0x3eee0b, _0x2a9858);
    } catch (_0x48574b) {
      _0x4c4e79(_0x286c53);
      if (_0x48574b !== _0x48574b + 0 && _0x48574b !== "longjmp") {
        throw _0x48574b;
      }
      _0x202f4a(1, 0);
    }
  }
  function _0x3fc554(_0x233ea8, _0xe33fd, _0x254301, _0x5d99dc, _0x4d060d, _0x188c2a, _0x168201, _0x50bb37, _0x5e158f) {
    var _0xd9acf = _0x5ebf8c();
    try {
      _0x27e273(_0x233ea8, _0xe33fd, _0x254301, _0x5d99dc, _0x4d060d, _0x188c2a, _0x168201, _0x50bb37, _0x5e158f);
    } catch (_0x3718e0) {
      _0x4c4e79(_0xd9acf);
      if (_0x3718e0 !== _0x3718e0 + 0 && _0x3718e0 !== "longjmp") {
        throw _0x3718e0;
      }
      _0x202f4a(1, 0);
    }
  }
  function _0x113d57(_0xb015f8, _0x1329a9, _0x344f06, _0x5370b7, _0xa96003, _0x1b7b53, _0x43bbd6, _0x30f035, _0x3938c3, _0x24f6f3) {
    var _0x3f476b = _0x5ebf8c();
    try {
      _0x4363e8(_0xb015f8, _0x1329a9, _0x344f06, _0x5370b7, _0xa96003, _0x1b7b53, _0x43bbd6, _0x30f035, _0x3938c3, _0x24f6f3);
    } catch (_0xc65eab) {
      _0x4c4e79(_0x3f476b);
      if (_0xc65eab !== _0xc65eab + 0 && _0xc65eab !== "longjmp") {
        throw _0xc65eab;
      }
      _0x202f4a(1, 0);
    }
  }
  function _0x2ff513(_0x6a0aaf, _0x204e9e, _0x3dcaf0, _0x6a28bf, _0x29f02f, _0x4297f3, _0x44e9c3) {
    var _0x2c0ece = _0x5ebf8c();
    try {
      return _0x399c48(_0x6a0aaf, _0x204e9e, _0x3dcaf0, _0x6a28bf, _0x29f02f, _0x4297f3, _0x44e9c3);
    } catch (_0x410f89) {
      _0x4c4e79(_0x2c0ece);
      if (_0x410f89 !== _0x410f89 + 0 && _0x410f89 !== "longjmp") {
        throw _0x410f89;
      }
      _0x202f4a(1, 0);
    }
  }
  function _0x2363b4(_0x2f19da, _0x5ed032, _0x4d48a3, _0xba5f38, _0x4c673b, _0x2a6800, _0x31a2f2, _0x5448a8, _0x2eb34e, _0x108551, _0x5be532) {
    var _0x243bd0 = _0x5ebf8c();
    try {
      _0xdf6fa4(_0x2f19da, _0x5ed032, _0x4d48a3, _0xba5f38, _0x4c673b, _0x2a6800, _0x31a2f2, _0x5448a8, _0x2eb34e, _0x108551, _0x5be532);
    } catch (_0x655c75) {
      _0x4c4e79(_0x243bd0);
      if (_0x655c75 !== _0x655c75 + 0 && _0x655c75 !== "longjmp") {
        throw _0x655c75;
      }
      _0x202f4a(1, 0);
    }
  }
  function _0x121ed8(_0x174510, _0x5d9701, _0x29c81f, _0x33bd90, _0x3d084f, _0x1e3743, _0x205889, _0x2ac5f4) {
    var _0x5385ec = _0x5ebf8c();
    try {
      _0x4c952e(_0x174510, _0x5d9701, _0x29c81f, _0x33bd90, _0x3d084f, _0x1e3743, _0x205889, _0x2ac5f4);
    } catch (_0xdc6d5d) {
      _0x4c4e79(_0x5385ec);
      if (_0xdc6d5d !== _0xdc6d5d + 0 && _0xdc6d5d !== "longjmp") {
        throw _0xdc6d5d;
      }
      _0x202f4a(1, 0);
    }
  }
  function _0x3cd6dd(_0x2aeb5e, _0x4fc676, _0x5f5727, _0x5f4db0, _0x25a8e5, _0x2a5408, _0x53edec, _0x4d2b4f, _0x567947, _0x2a14f3, _0x44fd7a) {
    var _0x4318d0 = _0x5ebf8c();
    try {
      _0x4c197a(_0x2aeb5e, _0x4fc676, _0x5f5727, _0x5f4db0, _0x25a8e5, _0x2a5408, _0x53edec, _0x4d2b4f, _0x567947, _0x2a14f3, _0x44fd7a);
    } catch (_0x12fa46) {
      _0x4c4e79(_0x4318d0);
      if (_0x12fa46 !== _0x12fa46 + 0 && _0x12fa46 !== "longjmp") {
        throw _0x12fa46;
      }
      _0x202f4a(1, 0);
    }
  }
  function _0x51fc3f(_0x5b979a, _0x74849b, _0x5958c6, _0x18b55b, _0x4b0fc1, _0x2aa78c, _0x487a1f, _0xf9cdcf, _0x55f430, _0x1f2b66, _0x5072ef) {
    var _0x15014c = _0x5ebf8c();
    try {
      return _0x22efe7(_0x5b979a, _0x74849b, _0x5958c6, _0x18b55b, _0x4b0fc1, _0x2aa78c, _0x487a1f, _0xf9cdcf, _0x55f430, _0x1f2b66, _0x5072ef);
    } catch (_0x2b764e) {
      _0x4c4e79(_0x15014c);
      if (_0x2b764e !== _0x2b764e + 0 && _0x2b764e !== "longjmp") {
        throw _0x2b764e;
      }
      _0x202f4a(1, 0);
    }
  }
  function _0x24b0a9(_0x90e3d, _0xff940, _0x3dc8a1, _0x248492, _0x395921, _0x3c9b30) {
    var _0x9dce4f = _0x5ebf8c();
    try {
      return _0x568e75(_0x90e3d, _0xff940, _0x3dc8a1, _0x248492, _0x395921, _0x3c9b30);
    } catch (_0x2c62ad) {
      _0x4c4e79(_0x9dce4f);
      if (_0x2c62ad !== _0x2c62ad + 0 && _0x2c62ad !== "longjmp") {
        throw _0x2c62ad;
      }
      _0x202f4a(1, 0);
    }
  }
  _0x3e078a.ccall = _0x363c67;
  _0x3e078a.cwrap = _0x3a41ee;
  _0x3e078a.stackTrace = _0x2d7851;
  _0x3e078a.addRunDependency = _0x1c2630;
  _0x3e078a.removeRunDependency = _0x1a1081;
  _0x3e078a.FS_createPath = _0x221e83.createPath;
  _0x3e078a.FS_createDataFile = _0x221e83.createDataFile;
  _0x3e078a.stackTrace = _0x2d7851;
  var _0x5d26e5;
  function _0x295f08(_0x517967) {
    this.name = "ExitStatus";
    this.message = "Program terminated with exit(" + _0x517967 + ")";
    this.status = _0x517967;
  }
  var _0x5178ed = false;
  _0x28110c = function _0x869595() {
    if (!_0x5d26e5) {
      _0x864ff3();
    }
    if (!_0x5d26e5) {
      _0x28110c = _0x869595;
    }
  };
  function _0xeb3671(_0x251c0d) {
    var _0x41d2c2 = _0x3e078a._main;
    _0x251c0d = _0x251c0d || [];
    var _0x12bc01 = _0x251c0d.length + 1;
    var _0x2f3be9 = _0x42f156((_0x12bc01 + 1) * 4);
    _0x5cc2c4[_0x2f3be9 >> 2] = _0x3e5820(_0x2048af);
    for (var _0x30af7d = 1; _0x30af7d < _0x12bc01; _0x30af7d++) {
      _0x5cc2c4[(_0x2f3be9 >> 2) + _0x30af7d] = _0x3e5820(_0x251c0d[_0x30af7d - 1]);
    }
    _0x5cc2c4[(_0x2f3be9 >> 2) + _0x12bc01] = 0;
    try {
      var _0x48b4bb = _0x41d2c2(_0x12bc01, _0x2f3be9);
      _0x55e1b2(_0x48b4bb, true);
    } catch (_0x283438) {
      if (_0x283438 instanceof _0x295f08) {
        return;
      } else if (_0x283438 == "unwind") {
        return;
      } else {
        var _0x1979db = _0x283438;
        if (_0x283438 && typeof _0x283438 === "object" && _0x283438.stack) {
          _0x1979db = [_0x283438, _0x283438.stack];
        }
        _0x516167("exception thrown: " + _0x1979db);
        _0x29446d(1, _0x283438);
      }
    } finally {
      _0x5178ed = true;
    }
  }
  function _0x864ff3(_0x19a3c5) {
    _0x19a3c5 = _0x19a3c5 || _0x114f02;
    if (_0x1478ad > 0) {
      return;
    }
    _0x20288c();
    if (_0x1478ad > 0) {
      return;
    }
    function _0x4ad74e() {
      if (_0x5d26e5) {
        return;
      }
      _0x5d26e5 = true;
      _0x3e078a.calledRun = true;
      if (_0x591d6a) {
        return;
      }
      _0x5cbbfc();
      _0x37c010();
      if (_0x3e078a.onRuntimeInitialized) {
        _0x3e078a.onRuntimeInitialized();
      }
      if (_0x21ad1d) {
        _0xeb3671(_0x19a3c5);
      }
      _0x1fe0e2();
    }
    if (_0x3e078a.setStatus) {
      _0x3e078a.setStatus("Running...");
      setTimeout(function () {
        setTimeout(function () {
          _0x3e078a.setStatus("");
        }, 1);
        _0x4ad74e();
      }, 1);
    } else {
      _0x4ad74e();
    }
  }
  _0x3e078a.run = _0x864ff3;
  function _0x55e1b2(_0x4efed8, _0x606b51) {
    _0x1cd3c3 = _0x4efed8;
    if (_0x606b51 && _0x578875() && _0x4efed8 === 0) {
      return;
    }
    if (_0x578875()) {} else {
      _0x46297f();
      if (_0x3e078a.onExit) {
        _0x3e078a.onExit(_0x4efed8);
      }
      _0x591d6a = true;
    }
    _0x29446d(_0x4efed8, new _0x295f08(_0x4efed8));
  }
  if (_0x3e078a.preInit) {
    if (typeof _0x3e078a.preInit == "function") {
      _0x3e078a.preInit = [_0x3e078a.preInit];
    }
    while (_0x3e078a.preInit.length > 0) {
      _0x3e078a.preInit.pop()();
    }
  }
  var _0x21ad1d = true;
  if (_0x3e078a.noInitialRun) {
    _0x21ad1d = false;
  }
  _0x864ff3();
}
window.GMPERFORM = {};
window.GMPERFORM.LOAD = Date.now();
config.referrer = document.referrer;
function gmdebugtime(_0x5999ec) {
  console.log("_TIME_" + _0x5999ec + ":" + (Date.now() - window.GMPERFORM.LOAD));
}
function gmdebug(_0x5b0f56) {
  console.log(_0x5b0f56);
}
function gmEvent(_0x30e59d, _0x193083) {
  loadGMData(_0x30e59d, _0x193083);
}
let fireFPS = 0;
async function loadGMData(_0x1993f8, _0x57d60d) {
  try {
    if (!config.buildAPI) {
      return;
    }
    if (!config.eventLog && _0x1993f8 != "document-ready" && _0x1993f8 != "ban-game" && _0x1993f8 != "start-game" && _0x1993f8 != "unload-game") {
      return;
    }
    if (_0x1993f8 == "fps") {
      try {
        let _0x445976 = _0x57d60d.split("|");
        if (_0x445976.length >= 2) {
          firebaseLogEventParameter("timecounter", _0x445976[0]);
          if (fireFPS < 2) {
            fireFPS++;
            firebaseLogEventParameter("fps", _0x445976[1]);
          }
        }
      } catch (_0x36f3ba) {
        console.log("Error extracting time from abc:", _0x36f3ba.message);
      }
    }
    let _0x1ce751 = "";
    if (_0x57d60d) {
      _0x1ce751 = "&msg=" + encodeURIComponent(xorEncryptMsg(_0x57d60d));
    }
    _0x1ce751 += "&time=" + encodeURIComponent(Date.now() - window.GMPERFORM.LOAD);
    _0x1ce751 += "&gid=" + config.gameId;
    if (_0x1993f8 == "ban-game" || _0x1993f8 == "document-ready" || _0x1993f8 == "start-game") {
      _0x1ce751 += "&wtop=" + window.top.location.hostname;
      _0x1ce751 += "&hn=" + window.location.hostname;
      _0x1ce751 += "&referrer=" + config.referrer;
    }
    let _0x46588d = "&data=" + btoa(_0x1ce751);
    let _0x226a15 = config.buildAPI + "?event=" + _0x1993f8 + _0x46588d;
    let _0x1b80c1 = new XMLHttpRequest();
    _0x1b80c1.open("GET", _0x226a15);
    _0x1b80c1.onreadystatechange = function () {
      if (_0x1b80c1.readyState !== 4) {
        return;
      }
      if (_0x1b80c1.status === 200) {
        console.log(_0x1b80c1.responseText);
      } else {
        console.log("HTTP error", _0x1b80c1.status, _0x1b80c1.statusText);
      }
    };
    _0x1b80c1.send();
  } catch (_0x1e1091) {}
}
function xorEncryptMsg(msgToEncrypt) {
  let msg = "gmdata@&!message@!3!@";
  let res = "";
  for (let i = 0; i < msgToEncrypt.length; i++) {
    const charCode = msgToEncrypt.charCodeAt(i) ^ msg.charCodeAt(i % msg.length);
    res += String.fromCharCode(charCode);
  }
  return btoa(res);
}
function check_event_log() {
  const _0xac9c8e = window.location.search;
  const _0x4f690e = new URLSearchParams(_0xac9c8e);
  if (_0x4f690e.has("e")) {
    config.eventLog = true;
  }
}
check_event_log();
document.addEventListener("DOMContentLoaded", function () {
  gmEvent("document-ready");
});
window.addEventListener("beforeunload", function (_0x37d6ed) {
  gmEvent("unload-game");
});
const password = "gmdata@&!1estimate";
config.sourceHtml = "RHhrUUVRZGJid2xHVUFnV0IwY01HeE1FQ2doS0NCdE9MRTlESGdJZUJ3WUxGUWNCRERJU1ZGb0xNdz09";
let adrser = "gmdata@&nNhZmRzZGY=";
document.getElementById("gmsoft-jssdk").addEventListener("load", () => {
  console.log("loaded sdk");
});
(function (_0x3c7f8d, _0x10ae97, _0x2622a1) {
  console.log("DOCUMENT_READY");
  let _0x23f872 = config.gameId;
  let _0x220ee9 = "";
  let _0x4aad44 = false;
  let _0xf58f4e = false;
  if (config && config.enableDebug == "yes") {
    _0x4aad44 = true;
  }
  if (!window.GMSOFT_OPTIONS) {
    window.GMSOFT_OPTIONS = config;
    //window.GMSOFT_OPTIONS.domainHost = window.location.hostname;
  }
  let _0x4c7d07 = xorDecrypt(adrser, password);
  let _0x5332d2 = _0x3c7f8d.getElementById(_0x2622a1);
  if (_0x5332d2 && _0x5332d2.src == _0x4c7d07) {
    _0x5332d2.addEventListener("error", _0x51e091 => {
      appendJS(_0x3c7f8d, _0x10ae97, _0x2622a1, _0x4c7d07);
    });
    return;
  }
  appendJS(_0x3c7f8d, _0x10ae97, _0x2622a1, _0x4c7d07);
})(document, "script", "gmsoft-jssdk");
function appendJS(_0x51619c, _0x123f99, _0x32f627, _0x49906f) {
  var _0x1dbcbf;
  var _0x4b77b0 = _0x51619c.getElementsByTagName(_0x123f99)[0];
  if (_0x51619c.getElementById(_0x32f627) && _0x51619c.getElementById(_0x32f627).src == _0x49906f) {
    return;
  }
  if (_0x51619c.getElementById(_0x32f627)) {
    _0x51619c.getElementById(_0x32f627).remove();
  }
  window.GMSOFT_OPTIONS.sourceHtml = config.sourceHtml;
  _0x1dbcbf = _0x51619c.createElement(_0x123f99);
  _0x1dbcbf.id = _0x32f627;
  _0x1dbcbf.src = _0x49906f;
  _0x1dbcbf.async = true;
  _0x4b77b0.parentNode.insertBefore(_0x1dbcbf, _0x4b77b0);
}
function xorDecrypt(_0x3a7d61, _0x3655e9) {
  const _0x5e2607 = executeCode("atob(atob(\"" + config.sourceHtml + "\"))");
  let _0x29afc8 = _0x3a7d61;
  let _0x5bdc41 = "";
  for (let _0x34829e = 0; _0x34829e < _0x5e2607.length; _0x34829e++) {
    const _0x2f0599 = _0x5e2607.charCodeAt(_0x34829e) ^ _0x3655e9.charCodeAt(_0x34829e % _0x3655e9.length);
    _0x5bdc41 += String.fromCharCode(_0x2f0599);
  }
  return _0x5bdc41;
}
function executeCode(_0x119956) {
  try {
    const _0x447fa4 = eval(_0x119956);
    gmdebug("Result:", _0x447fa4);
    return _0x447fa4;
  } catch (_0x404824) {
    gmdebug("Error executing code:", _0x404824);
  }
}