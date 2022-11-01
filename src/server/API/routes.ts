/* tslint:disable */
/* eslint-disable */
// WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
  import { Controller, ValidationService, FieldErrors, ValidateError, TsoaRoute, HttpStatusCodeLiteral, TsoaResponse, fetchMiddlewares } from '@tsoa/runtime';
// WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
import { HafasExperimentalController } from './controller/Hafas/experimental';
// WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
import { HafasController } from './controller/Hafas/v1';
// WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
import { HafasControllerV2 } from './controller/Hafas/v2';
// WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
import { HafasControllerV3 } from './controller/Hafas/v3';
// WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
import { IrisControllerv2 } from './controller/Iris/v2';
// WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
import { JourneysV1Controller } from './controller/journeys/v1';
// WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
import { OEBBExperimentalController } from './controller/OEBB/experimental';
// WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
import { ReihungMonitoringController } from './controller/Reihung/monitor';
// WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
import { ReihungControllerV1 } from './controller/Reihung/v1';
// WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
import { ReihungControllerV4 } from './controller/Reihung/v4';
// WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
import { StopPlaceController } from './controller/StopPlace/v1';
import type { Middleware } from 'koa';
import * as KoaRouter from '@koa/router';

// WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

const models: TsoaRoute.Models = {
    "OpL": {
        "dataType": "refObject",
        "properties": {
            "name": {"dataType":"string","required":true},
            "icoX": {"dataType":"double","required":true},
        },
        "additionalProperties": true,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "CommonProductInfo": {
        "dataType": "refObject",
        "properties": {
            "name": {"dataType":"string","required":true},
            "line": {"dataType":"string"},
            "number": {"dataType":"string"},
            "type": {"dataType":"string"},
            "operator": {"ref":"OpL"},
            "admin": {"dataType":"string"},
        },
        "additionalProperties": true,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "ParsedProduct": {
        "dataType": "refAlias",
        "type": {"ref":"CommonProductInfo","validators":{}},
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "HafasCoordinates": {
        "dataType": "refObject",
        "properties": {
            "lat": {"dataType":"double","required":true},
            "lng": {"dataType":"double","required":true},
        },
        "additionalProperties": true,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "HafasStation": {
        "dataType": "refObject",
        "properties": {
            "products": {"dataType":"array","array":{"dataType":"refAlias","ref":"ParsedProduct"}},
            "coordinates": {"ref":"HafasCoordinates","required":true},
            "title": {"dataType":"string","required":true},
            "id": {"dataType":"string","required":true},
        },
        "additionalProperties": true,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "PubChL": {
        "dataType": "refObject",
        "properties": {
            "name": {"dataType":"string","required":true},
            "fDate": {"dataType":"string","required":true},
            "fTime": {"dataType":"string","required":true},
            "tDate": {"dataType":"string","required":true},
            "tTime": {"dataType":"string","required":true},
        },
        "additionalProperties": true,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "ParsedHimMessage": {
        "dataType": "refObject",
        "properties": {
            "hid": {"dataType":"string","required":true},
            "act": {"dataType":"boolean","required":true},
            "head": {"dataType":"string","required":true},
            "lead": {"dataType":"string","required":true},
            "text": {"dataType":"string","required":true},
            "icoX": {"dataType":"double","required":true},
            "prio": {"dataType":"double","required":true},
            "fLocX": {"dataType":"double","required":true},
            "tLocX": {"dataType":"double","required":true},
            "prod": {"dataType":"double","required":true},
            "affProdRefL": {"dataType":"array","array":{"dataType":"double"},"required":true},
            "IModDate": {"dataType":"string","required":true},
            "IModTime": {"dataType":"string","required":true},
            "sDate": {"dataType":"string","required":true},
            "sTime": {"dataType":"string","required":true},
            "eDate": {"dataType":"string","required":true},
            "eTime": {"dataType":"string","required":true},
            "comp": {"dataType":"string","required":true},
            "cat": {"dataType":"double","required":true},
            "pubChL": {"dataType":"array","array":{"dataType":"refObject","ref":"PubChL"},"required":true},
            "edgeRefL": {"dataType":"array","array":{"dataType":"double"},"required":true},
            "affectedProducts": {"dataType":"array","array":{"dataType":"refAlias","ref":"ParsedProduct"},"required":true},
            "startTime": {"dataType":"datetime","required":true},
            "endTime": {"dataType":"datetime","required":true},
            "fromStopPlace": {"ref":"HafasStation"},
            "toStopPlace": {"ref":"HafasStation"},
        },
        "additionalProperties": true,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "ParsedHimSearchResponse": {
        "dataType": "refObject",
        "properties": {
            "messages": {"dataType":"array","array":{"dataType":"refObject","ref":"ParsedHimMessage"},"required":true},
        },
        "additionalProperties": true,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "AllowedHafasProfile": {
        "dataType": "refEnum",
        "enums": ["db","oebb","bvg","hvv","rmv","sncb","avv","nahsh","insa","anachb","vao","sbb","dbnetz","pkp","dbregio","smartrbl","vbn"],
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "Crd": {
        "dataType": "refObject",
        "properties": {
            "x": {"dataType":"double","required":true},
            "y": {"dataType":"double","required":true},
            "z": {"dataType":"double"},
            "layerX": {"dataType":"double"},
            "crdSysX": {"dataType":"double"},
        },
        "additionalProperties": true,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "OptionalLocL": {
        "dataType": "refObject",
        "properties": {
            "lid": {"dataType":"string"},
            "type": {"dataType":"string"},
            "name": {"dataType":"string"},
            "icoX": {"dataType":"double"},
            "extId": {"dataType":"string"},
            "state": {"dataType":"string"},
            "crd": {"ref":"Crd"},
            "pCls": {"dataType":"double"},
            "pRefL": {"dataType":"array","array":{"dataType":"double"}},
        },
        "additionalProperties": true,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "HimFilterMode": {
        "dataType": "refAlias",
        "type": {"dataType":"union","subSchemas":[{"dataType":"enum","enums":["BIT"]},{"dataType":"enum","enums":["EXC"]},{"dataType":"enum","enums":["INC"]},{"dataType":"enum","enums":["UNDEF"]}],"validators":{}},
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "HimFilterType": {
        "dataType": "refAlias",
        "type": {"dataType":"union","subSchemas":[{"dataType":"enum","enums":["ADMIN"]},{"dataType":"enum","enums":["CAT"]},{"dataType":"enum","enums":["CH"]},{"dataType":"enum","enums":["COMP"]},{"dataType":"enum","enums":["DEPT"]},{"dataType":"enum","enums":["EID"]},{"dataType":"enum","enums":["HIMCAT"]},{"dataType":"enum","enums":["HIMID"]},{"dataType":"enum","enums":["LINE"]},{"dataType":"enum","enums":["OPR"]},{"dataType":"enum","enums":["PID"]},{"dataType":"enum","enums":["PROD"]},{"dataType":"enum","enums":["REG"]},{"dataType":"enum","enums":["TRAIN"]}],"validators":{}},
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "HimFilter": {
        "dataType": "refObject",
        "properties": {
            "mode": {"ref":"HimFilterMode","required":true},
            "type": {"ref":"HimFilterType","required":true},
            "value": {"dataType":"string","required":true},
        },
        "additionalProperties": true,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "HimSearchRequestOptions": {
        "dataType": "refObject",
        "properties": {
            "comp": {"dataType":"string"},
            "dailyB": {"dataType":"string"},
            "dailyE": {"dataType":"string"},
            "dateB": {"dataType":"string"},
            "dateE": {"dataType":"string"},
            "dept": {"dataType":"string"},
            "dirLoc": {"ref":"OptionalLocL"},
            "himFltrL": {"dataType":"array","array":{"dataType":"refObject","ref":"HimFilter"}},
            "maxNum": {"dataType":"double"},
            "onlyHimId": {"dataType":"boolean"},
            "onlyToday": {"dataType":"boolean"},
            "stLoc": {"ref":"OptionalLocL"},
            "timeB": {"dataType":"string"},
            "timeE": {"dataType":"string"},
        },
        "additionalProperties": true,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "RemL": {
        "dataType": "refObject",
        "properties": {
            "type": {"dataType":"string","required":true},
            "code": {"dataType":"string","required":true},
            "icoX": {"dataType":"double","required":true},
            "txtN": {"dataType":"string","required":true},
            "txtS": {"dataType":"string"},
            "prio": {"dataType":"double"},
            "sIdx": {"dataType":"double"},
        },
        "additionalProperties": true,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "StopInfo": {
        "dataType": "refObject",
        "properties": {
            "scheduledPlatform": {"dataType":"string"},
            "platform": {"dataType":"string"},
            "scheduledTime": {"dataType":"datetime","required":true},
            "time": {"dataType":"datetime","required":true},
            "delay": {"dataType":"integer"},
            "reihung": {"dataType":"boolean"},
            "messages": {"dataType":"array","array":{"dataType":"refObject","ref":"RemL"}},
            "cancelled": {"dataType":"boolean"},
            "wingIds": {"dataType":"array","array":{"dataType":"string"}},
            "hidden": {"dataType":"boolean"},
        },
        "additionalProperties": true,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "Pick_GroupedStopPlace.name-or-evaNumber_": {
        "dataType": "refAlias",
        "type": {"dataType":"nestedObjectLiteral","nestedProperties":{"name":{"dataType":"string","required":true},"evaNumber":{"dataType":"string","required":true}},"validators":{}},
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "MinimalStopPlace": {
        "dataType": "refAlias",
        "type": {"ref":"Pick_GroupedStopPlace.name-or-evaNumber_","validators":{}},
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "MessagePrio": {
        "dataType": "refAlias",
        "type": {"dataType":"union","subSchemas":[{"dataType":"enum","enums":["1"]},{"dataType":"enum","enums":["2"]},{"dataType":"enum","enums":["3"]},{"dataType":"enum","enums":["4"]}],"validators":{}},
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "IrisMessage": {
        "dataType": "refObject",
        "properties": {
            "text": {"dataType":"string","required":true},
            "timestamp": {"dataType":"datetime"},
            "superseded": {"dataType":"boolean"},
            "priority": {"ref":"MessagePrio"},
            "value": {"dataType":"double"},
        },
        "additionalProperties": true,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "HimIrisMessage": {
        "dataType": "refObject",
        "properties": {
            "text": {"dataType":"string","required":true},
            "timestamp": {"dataType":"datetime"},
            "superseded": {"dataType":"boolean"},
            "priority": {"ref":"MessagePrio"},
            "value": {"dataType":"double"},
            "head": {"dataType":"string","required":true},
            "stopPlace": {"ref":"HafasStation"},
        },
        "additionalProperties": true,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "Message": {
        "dataType": "refAlias",
        "type": {"dataType":"union","subSchemas":[{"ref":"IrisMessage"},{"ref":"HimIrisMessage"}],"validators":{}},
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "Messages": {
        "dataType": "refObject",
        "properties": {
            "qos": {"dataType":"array","array":{"dataType":"refObject","ref":"IrisMessage"},"required":true},
            "delay": {"dataType":"array","array":{"dataType":"refObject","ref":"IrisMessage"},"required":true},
            "him": {"dataType":"array","array":{"dataType":"refObject","ref":"HimIrisMessage"},"required":true},
        },
        "additionalProperties": {"dataType":"array","array":{"dataType":"refAlias","ref":"Message"}},
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "SubstituteRef": {
        "dataType": "refObject",
        "properties": {
            "trainNumber": {"dataType":"string","required":true},
            "trainType": {"dataType":"string","required":true},
            "train": {"dataType":"string","required":true},
        },
        "additionalProperties": true,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "Stop": {
        "dataType": "refObject",
        "properties": {
            "additional": {"dataType":"boolean"},
            "cancelled": {"dataType":"boolean"},
            "showVia": {"dataType":"boolean"},
            "name": {"dataType":"string","required":true},
        },
        "additionalProperties": true,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "TrainInfo": {
        "dataType": "refObject",
        "properties": {
            "name": {"dataType":"string","required":true},
            "line": {"dataType":"string"},
            "number": {"dataType":"string","required":true},
            "type": {"dataType":"string","required":true},
            "operator": {"ref":"OpL"},
            "admin": {"dataType":"string"},
        },
        "additionalProperties": true,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "Abfahrt": {
        "dataType": "refObject",
        "properties": {
            "initialDeparture": {"dataType":"datetime","required":true},
            "initialStopPlace": {"dataType":"string","required":true},
            "arrival": {"ref":"StopInfo"},
            "currentStopPlace": {"ref":"MinimalStopPlace","required":true},
            "departure": {"ref":"StopInfo"},
            "destination": {"dataType":"string","required":true},
            "id": {"dataType":"string","required":true},
            "additional": {"dataType":"boolean"},
            "cancelled": {"dataType":"boolean"},
            "mediumId": {"dataType":"string","required":true},
            "messages": {"ref":"Messages","required":true},
            "platform": {"dataType":"string","required":true},
            "productClass": {"dataType":"string","required":true},
            "rawId": {"dataType":"string","required":true},
            "ref": {"ref":"SubstituteRef"},
            "route": {"dataType":"array","array":{"dataType":"refObject","ref":"Stop"},"required":true},
            "scheduledDestination": {"dataType":"string","required":true},
            "scheduledPlatform": {"dataType":"string","required":true},
            "substitute": {"dataType":"boolean"},
            "train": {"ref":"TrainInfo","required":true},
        },
        "additionalProperties": true,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "Wings": {
        "dataType": "refObject",
        "properties": {
        },
        "additionalProperties": {"ref":"Abfahrt"},
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "AbfahrtenResult": {
        "dataType": "refObject",
        "properties": {
            "departures": {"dataType":"array","array":{"dataType":"refObject","ref":"Abfahrt"},"required":true},
            "lookbehind": {"dataType":"array","array":{"dataType":"refObject","ref":"Abfahrt"},"required":true},
            "wings": {"ref":"Wings"},
            "strike": {"dataType":"double"},
            "stopPlaces": {"dataType":"array","array":{"dataType":"string"},"required":true},
        },
        "additionalProperties": true,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "JourneyFilterMode": {
        "dataType": "refAlias",
        "type": {"dataType":"union","subSchemas":[{"dataType":"enum","enums":["BIT"]},{"dataType":"enum","enums":["EXC"]},{"dataType":"enum","enums":["INC"]},{"dataType":"enum","enums":["UNDEF"]}],"validators":{}},
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "JourneyFilterType": {
        "dataType": "refAlias",
        "type": {"dataType":"union","subSchemas":[{"dataType":"enum","enums":["ADM"]},{"dataType":"enum","enums":["ATTRF"]},{"dataType":"enum","enums":["ATTRJ"]},{"dataType":"enum","enums":["ATTRL"]},{"dataType":"enum","enums":["BC"]},{"dataType":"enum","enums":["CAT"]},{"dataType":"enum","enums":["COUCH"]},{"dataType":"enum","enums":["CTX_RECON"]},{"dataType":"enum","enums":["GROUP"]},{"dataType":"enum","enums":["INFOTEXTS"]},{"dataType":"enum","enums":["JID"]},{"dataType":"enum","enums":["LID"]},{"dataType":"enum","enums":["LINE"]},{"dataType":"enum","enums":["LINEID"]},{"dataType":"enum","enums":["META"]},{"dataType":"enum","enums":["NAME"]},{"dataType":"enum","enums":["NUM"]},{"dataType":"enum","enums":["OP"]},{"dataType":"enum","enums":["PID"]},{"dataType":"enum","enums":["PROD"]},{"dataType":"enum","enums":["ROUTE"]},{"dataType":"enum","enums":["SLEEP"]},{"dataType":"enum","enums":["STATIONS"]},{"dataType":"enum","enums":["UIC"]}],"validators":{}},
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "JourneyFilter": {
        "dataType": "refObject",
        "properties": {
            "mode": {"ref":"JourneyFilterMode","required":true},
            "type": {"ref":"JourneyFilterType","required":true},
            "value": {"dataType":"string","required":true},
        },
        "additionalProperties": true,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "GeoRect": {
        "dataType": "refObject",
        "properties": {
            "llCrd": {"ref":"Crd","required":true},
            "urCrd": {"ref":"Crd","required":true},
        },
        "additionalProperties": true,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "GeoRing": {
        "dataType": "refObject",
        "properties": {
            "cCrd": {"ref":"Crd","required":true},
            "maxDist": {"dataType":"double","required":true},
            "minDist": {"dataType":"double"},
        },
        "additionalProperties": true,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "JourneyTreeRequestOptions": {
        "dataType": "refObject",
        "properties": {
            "getChilds": {"dataType":"double"},
            "getHIM": {"dataType":"boolean"},
            "getParent": {"dataType":"boolean"},
            "getStatus": {"dataType":"boolean"},
            "himFltrL": {"dataType":"array","array":{"dataType":"refObject","ref":"HimFilter"}},
            "jnyFltrL": {"dataType":"array","array":{"dataType":"refObject","ref":"JourneyFilter"}},
            "pid": {"dataType":"string"},
            "rect": {"ref":"GeoRect"},
            "ring": {"ref":"GeoRing"},
        },
        "additionalProperties": true,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "JourneyGraphRequestOptions": {
        "dataType": "refObject",
        "properties": {
            "date": {"dataType":"string"},
            "getPasslist": {"dataType":"boolean"},
            "getProductStartEndInfo": {"dataType":"boolean"},
            "jnyFltrL": {"dataType":"array","array":{"dataType":"refObject","ref":"JourneyFilter"}},
        },
        "additionalProperties": true,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "HafasDirection": {
        "dataType": "refAlias",
        "type": {"dataType":"union","subSchemas":[{"dataType":"enum","enums":["B"]},{"dataType":"enum","enums":["F"]},{"dataType":"enum","enums":["FB"]}],"validators":{}},
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "JourneyCourseRequestOptions": {
        "dataType": "refObject",
        "properties": {
            "arrLoc": {"ref":"OptionalLocL"},
            "date": {"dataType":"string","required":true},
            "depLoc": {"ref":"OptionalLocL"},
            "dir": {"ref":"HafasDirection"},
            "getEdgeAni": {"dataType":"boolean"},
            "getEdgeCourse": {"dataType":"boolean"},
            "getIST": {"dataType":"boolean"},
            "getMainAni": {"dataType":"boolean"},
            "getMainCourse": {"dataType":"boolean"},
            "getPassLoc": {"dataType":"boolean"},
            "getPolyline": {"dataType":"boolean"},
            "jid": {"dataType":"string","required":true},
            "jnyFltrL": {"dataType":"array","array":{"dataType":"refObject","ref":"JourneyFilter"}},
            "perSize": {"dataType":"double"},
            "perStep": {"dataType":"double"},
            "time": {"dataType":"string"},
        },
        "additionalProperties": true,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "CommonStopInfo": {
        "dataType": "refObject",
        "properties": {
            "scheduledPlatform": {"dataType":"string"},
            "platform": {"dataType":"string"},
            "scheduledTime": {"dataType":"datetime","required":true},
            "time": {"dataType":"datetime","required":true},
            "delay": {"dataType":"integer"},
            "reihung": {"dataType":"boolean"},
            "messages": {"dataType":"array","array":{"dataType":"refObject","ref":"RemL"}},
            "cancelled": {"dataType":"boolean"},
        },
        "additionalProperties": true,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "RoutingStation": {
        "dataType": "refObject",
        "properties": {
            "title": {"dataType":"string","required":true},
            "id": {"dataType":"string","required":true},
        },
        "additionalProperties": true,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "AuslastungsValue": {
        "dataType": "refEnum",
        "enums": [1,2,3,4],
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "Route%24Auslastung": {
        "dataType": "refObject",
        "properties": {
            "first": {"ref":"AuslastungsValue"},
            "second": {"ref":"AuslastungsValue"},
        },
        "additionalProperties": true,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "Route%24Stop": {
        "dataType": "refObject",
        "properties": {
            "arrival": {"ref":"CommonStopInfo"},
            "departure": {"ref":"CommonStopInfo"},
            "station": {"ref":"RoutingStation","required":true},
            "auslastung": {"ref":"Route%24Auslastung"},
            "messages": {"dataType":"array","array":{"dataType":"refObject","ref":"RemL"}},
            "additional": {"dataType":"boolean"},
            "cancelled": {"dataType":"boolean"},
            "irisMessages": {"dataType":"array","array":{"dataType":"refAlias","ref":"Message"}},
        },
        "additionalProperties": true,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "SingleParsedJourneyGeoPos": {
        "dataType": "refObject",
        "properties": {
            "jid": {"dataType":"string","required":true},
            "date": {"dataType":"datetime","required":true},
            "train": {"ref":"ParsedProduct","required":true},
            "position": {"ref":"HafasCoordinates","required":true},
            "stops": {"dataType":"array","array":{"dataType":"refObject","ref":"Route%24Stop"},"required":true},
        },
        "additionalProperties": true,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "ParsedJourneyGeoPosResponse": {
        "dataType": "refAlias",
        "type": {"dataType":"array","array":{"dataType":"refObject","ref":"SingleParsedJourneyGeoPos"},"validators":{}},
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "InOutMode": {
        "dataType": "refAlias",
        "type": {"dataType":"union","subSchemas":[{"dataType":"enum","enums":["B"]},{"dataType":"enum","enums":["I"]},{"dataType":"enum","enums":["N"]},{"dataType":"enum","enums":["O"]}],"validators":{}},
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "JourneyTrainPosMode": {
        "dataType": "refAlias",
        "type": {"dataType":"union","subSchemas":[{"dataType":"enum","enums":["CALC"]},{"dataType":"enum","enums":["CALC_FOR_REPORT"]},{"dataType":"enum","enums":["CALC_ONLY"]},{"dataType":"enum","enums":["CALC_REPORT"]},{"dataType":"enum","enums":["REPORT_ONLY"]},{"dataType":"enum","enums":["REPORT_ONLY_WITH_STOPS"]}],"validators":{}},
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "JourneyGeoPosRequestOptions": {
        "dataType": "refObject",
        "properties": {
            "ageOfReport": {"dataType":"boolean"},
            "date": {"dataType":"string"},
            "time": {"dataType":"string"},
            "getSimpleTrainComposition": {"dataType":"boolean"},
            "getUnmatched": {"dataType":"boolean"},
            "inOut": {"ref":"InOutMode"},
            "jnyFltrL": {"dataType":"array","array":{"dataType":"refObject","ref":"JourneyFilter"}},
            "locL": {"dataType":"array","array":{"dataType":"refObject","ref":"OptionalLocL"}},
            "maxJny": {"dataType":"boolean"},
            "onlyRT": {"dataType":"boolean"},
            "perSize": {"dataType":"double"},
            "perStep": {"dataType":"double"},
            "rect": {"ref":"GeoRect"},
            "ring": {"ref":"GeoRing"},
            "rtMsgStatus": {"dataType":"boolean"},
            "trainPosMode": {"ref":"JourneyTrainPosMode"},
            "zoom": {"dataType":"double"},
        },
        "additionalProperties": true,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "JourneyGeoPosOptions": {
        "dataType": "refAlias",
        "type": {"ref":"JourneyGeoPosRequestOptions","validators":{}},
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "Route%24ValidDepartureStop": {
        "dataType": "refObject",
        "properties": {
            "arrival": {"ref":"CommonStopInfo"},
            "departure": {"ref":"CommonStopInfo","required":true},
            "station": {"ref":"RoutingStation","required":true},
            "auslastung": {"ref":"Route%24Auslastung"},
            "messages": {"dataType":"array","array":{"dataType":"refObject","ref":"RemL"}},
            "additional": {"dataType":"boolean"},
            "cancelled": {"dataType":"boolean"},
            "irisMessages": {"dataType":"array","array":{"dataType":"refAlias","ref":"Message"}},
        },
        "additionalProperties": true,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "Route%24ValidArrivalStop": {
        "dataType": "refObject",
        "properties": {
            "arrival": {"ref":"CommonStopInfo","required":true},
            "departure": {"ref":"CommonStopInfo"},
            "station": {"ref":"RoutingStation","required":true},
            "auslastung": {"ref":"Route%24Auslastung"},
            "messages": {"dataType":"array","array":{"dataType":"refObject","ref":"RemL"}},
            "additional": {"dataType":"boolean"},
            "cancelled": {"dataType":"boolean"},
            "irisMessages": {"dataType":"array","array":{"dataType":"refAlias","ref":"Message"}},
        },
        "additionalProperties": true,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "ParsedJourneyDetails": {
        "dataType": "refObject",
        "properties": {
            "train": {"ref":"ParsedProduct","required":true},
            "auslastung": {"ref":"Route%24Auslastung"},
            "jid": {"dataType":"string","required":true},
            "firstStop": {"ref":"Route%24ValidDepartureStop","required":true},
            "lastStop": {"ref":"Route%24ValidArrivalStop","required":true},
            "stops": {"dataType":"array","array":{"dataType":"refObject","ref":"Route%24Stop"},"required":true},
            "messages": {"dataType":"array","array":{"dataType":"refObject","ref":"RemL"}},
        },
        "additionalProperties": true,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "ArrivalStationBoardEntry": {
        "dataType": "refObject",
        "properties": {
            "train": {"ref":"ParsedProduct","required":true},
            "cancelled": {"dataType":"boolean"},
            "finalDestination": {"dataType":"string","required":true},
            "jid": {"dataType":"string","required":true},
            "stops": {"dataType":"array","array":{"dataType":"refObject","ref":"Route%24Stop"}},
            "currentStation": {"ref":"HafasStation","required":true},
            "messages": {"dataType":"array","array":{"dataType":"refObject","ref":"RemL"}},
            "arrival": {"ref":"CommonStopInfo","required":true},
        },
        "additionalProperties": true,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "EvaNumber": {
        "dataType": "refAlias",
        "type": {"dataType":"string","validators":{}},
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "DepartureStationBoardEntry": {
        "dataType": "refObject",
        "properties": {
            "train": {"ref":"ParsedProduct","required":true},
            "cancelled": {"dataType":"boolean"},
            "finalDestination": {"dataType":"string","required":true},
            "jid": {"dataType":"string","required":true},
            "stops": {"dataType":"array","array":{"dataType":"refObject","ref":"Route%24Stop"}},
            "currentStation": {"ref":"HafasStation","required":true},
            "messages": {"dataType":"array","array":{"dataType":"refObject","ref":"RemL"}},
            "departure": {"ref":"CommonStopInfo","required":true},
        },
        "additionalProperties": true,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "ParsedJourneyMatchResponse": {
        "dataType": "refObject",
        "properties": {
            "train": {"ref":"ParsedProduct","required":true},
            "stops": {"dataType":"array","array":{"dataType":"refObject","ref":"Route%24Stop"},"required":true},
            "jid": {"dataType":"string","required":true},
            "firstStop": {"ref":"Route%24Stop","required":true},
            "lastStop": {"ref":"Route%24Stop","required":true},
            "messages": {"dataType":"array","array":{"dataType":"refObject","ref":"RemL"}},
        },
        "additionalProperties": true,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "JourneyMatchOptions": {
        "dataType": "refObject",
        "properties": {
            "trainName": {"dataType":"string","required":true},
            "initialDepartureDate": {"dataType":"datetime","default":"now"},
            "jnyFltrL": {"dataType":"array","array":{"dataType":"refObject","ref":"JourneyFilter"}},
            "onlyRT": {"dataType":"boolean"},
        },
        "additionalProperties": true,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "ProdCtx": {
        "dataType": "refObject",
        "properties": {
            "name": {"dataType":"string","required":true},
            "num": {"dataType":"string"},
            "matchId": {"dataType":"string"},
            "catOut": {"dataType":"string"},
            "catOutS": {"dataType":"string"},
            "catOutL": {"dataType":"string"},
            "catIn": {"dataType":"string"},
            "catCode": {"dataType":"string"},
            "admin": {"dataType":"string"},
            "lineId": {"dataType":"string"},
            "line": {"dataType":"string"},
            "cls": {"dataType":"double","required":true},
            "icoX": {"dataType":"double","required":true},
        },
        "additionalProperties": true,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "ProdL": {
        "dataType": "refObject",
        "properties": {
            "name": {"dataType":"string","required":true},
            "number": {"dataType":"string"},
            "icoX": {"dataType":"double","required":true},
            "cls": {"dataType":"double","required":true},
            "oprX": {"dataType":"double"},
            "prodCtx": {"ref":"ProdCtx"},
            "addName": {"dataType":"string"},
            "nameS": {"dataType":"string"},
            "matchId": {"dataType":"string"},
        },
        "additionalProperties": true,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "TrnCmpSX": {
        "dataType": "refObject",
        "properties": {
            "tcocX": {"dataType":"array","array":{"dataType":"double"}},
            "tcM": {"dataType":"double"},
        },
        "additionalProperties": true,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "TxtC": {
        "dataType": "refObject",
        "properties": {
            "r": {"dataType":"double","required":true},
            "g": {"dataType":"double","required":true},
            "b": {"dataType":"double","required":true},
        },
        "additionalProperties": true,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "MsgL": {
        "dataType": "refObject",
        "properties": {
            "type": {"dataType":"string","required":true},
            "remX": {"dataType":"double","required":true},
            "txtC": {"ref":"TxtC","required":true},
            "prio": {"dataType":"double","required":true},
            "fIdx": {"dataType":"double","required":true},
            "tIdx": {"dataType":"double","required":true},
            "tagL": {"dataType":"array","array":{"dataType":"string"},"required":true},
        },
        "additionalProperties": true,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "CommonDeparture": {
        "dataType": "refObject",
        "properties": {
            "locX": {"dataType":"double","required":true},
            "idx": {"dataType":"double"},
            "dCncl": {"dataType":"boolean"},
            "dProdX": {"dataType":"double"},
            "dInS": {"dataType":"boolean","required":true},
            "dInR": {"dataType":"boolean","required":true},
            "dTimeS": {"dataType":"string","required":true},
            "dTimeR": {"dataType":"string"},
            "dPlatfS": {"dataType":"string"},
            "dPlatfR": {"dataType":"string"},
            "dProgType": {"dataType":"string"},
            "type": {"dataType":"string"},
            "dTZOffset": {"dataType":"double"},
            "dTrnCmpSX": {"ref":"TrnCmpSX"},
            "msgL": {"dataType":"array","array":{"dataType":"refObject","ref":"MsgL"}},
        },
        "additionalProperties": true,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "CommonArrival": {
        "dataType": "refObject",
        "properties": {
            "locX": {"dataType":"double","required":true},
            "idx": {"dataType":"double"},
            "aCncl": {"dataType":"boolean"},
            "aProdX": {"dataType":"double"},
            "aOutR": {"dataType":"boolean","required":true},
            "aTimeS": {"dataType":"string","required":true},
            "aTimeR": {"dataType":"string"},
            "aPlatfS": {"dataType":"string"},
            "aPlatfR": {"dataType":"string"},
            "aProgType": {"dataType":"string"},
            "type": {"dataType":"string"},
            "aTZOffset": {"dataType":"double"},
            "aTrnCmpSX": {"ref":"TrnCmpSX"},
            "msgL": {"dataType":"array","array":{"dataType":"refObject","ref":"MsgL"}},
        },
        "additionalProperties": true,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "CommonStop": {
        "dataType": "refObject",
        "properties": {
            "locX": {"dataType":"double","required":true},
            "idx": {"dataType":"double"},
            "aCncl": {"dataType":"boolean"},
            "aProdX": {"dataType":"double"},
            "aOutR": {"dataType":"boolean","required":true},
            "aTimeS": {"dataType":"string","required":true},
            "aTimeR": {"dataType":"string"},
            "aPlatfS": {"dataType":"string"},
            "aPlatfR": {"dataType":"string"},
            "aProgType": {"dataType":"string"},
            "type": {"dataType":"string"},
            "aTZOffset": {"dataType":"double"},
            "aTrnCmpSX": {"ref":"TrnCmpSX"},
            "msgL": {"dataType":"array","array":{"dataType":"refObject","ref":"MsgL"}},
            "dCncl": {"dataType":"boolean"},
            "dProdX": {"dataType":"double"},
            "dInS": {"dataType":"boolean","required":true},
            "dInR": {"dataType":"boolean","required":true},
            "dTimeS": {"dataType":"string","required":true},
            "dTimeR": {"dataType":"string"},
            "dPlatfS": {"dataType":"string"},
            "dPlatfR": {"dataType":"string"},
            "dProgType": {"dataType":"string"},
            "dTZOffset": {"dataType":"double"},
            "dTrnCmpSX": {"ref":"TrnCmpSX"},
            "isAdd": {"dataType":"boolean"},
        },
        "additionalProperties": true,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "JnyL": {
        "dataType": "refObject",
        "properties": {
            "jid": {"dataType":"string","required":true},
            "prodX": {"dataType":"double","required":true},
            "dirTxt": {"dataType":"string","required":true},
            "status": {"dataType":"string","required":true},
            "isRchbl": {"dataType":"boolean","required":true},
            "isCncl": {"dataType":"boolean"},
            "isPartCncl": {"dataType":"boolean"},
            "subscr": {"dataType":"string","required":true},
            "stopL": {"dataType":"array","array":{"dataType":"refObject","ref":"CommonStop"},"required":true},
            "msgL": {"dataType":"array","array":{"dataType":"refObject","ref":"MsgL"}},
        },
        "additionalProperties": true,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "Freq": {
        "dataType": "refObject",
        "properties": {
            "minC": {"dataType":"double","required":true},
            "maxC": {"dataType":"double","required":true},
            "numC": {"dataType":"double","required":true},
            "jnyL": {"dataType":"array","array":{"dataType":"refObject","ref":"JnyL"},"required":true},
        },
        "additionalProperties": true,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "Jny": {
        "dataType": "refObject",
        "properties": {
            "jid": {"dataType":"string","required":true},
            "prodX": {"dataType":"double","required":true},
            "dirTxt": {"dataType":"string","required":true},
            "status": {"dataType":"string","required":true},
            "isRchbl": {"dataType":"boolean","required":true},
            "isCncl": {"dataType":"boolean"},
            "isPartCncl": {"dataType":"boolean"},
            "subscr": {"dataType":"string","required":true},
            "stopL": {"dataType":"array","array":{"dataType":"refObject","ref":"CommonStop"}},
            "msgL": {"dataType":"array","array":{"dataType":"refObject","ref":"MsgL"}},
            "chgDurR": {"dataType":"double"},
            "ctxRecon": {"dataType":"string","required":true},
            "dTrnCmpSXmsgL": {"dataType":"array","array":{"dataType":"refObject","ref":"MsgL"},"required":true},
            "dTrnCmpSX": {"ref":"TrnCmpSX"},
            "freq": {"ref":"Freq","required":true},
        },
        "additionalProperties": true,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "SecLJNY": {
        "dataType": "refObject",
        "properties": {
            "type": {"dataType":"enum","enums":["JNY"],"required":true},
            "icoX": {"dataType":"double","required":true},
            "dep": {"ref":"CommonDeparture","required":true},
            "arr": {"ref":"CommonArrival","required":true},
            "jny": {"ref":"Jny","required":true},
            "parJnyL": {"dataType":"array","array":{"dataType":"refObject","ref":"Jny"}},
            "resState": {"dataType":"union","subSchemas":[{"dataType":"enum","enums":["N"]},{"dataType":"enum","enums":["B"]},{"dataType":"enum","enums":["S"]}],"required":true},
            "resRecommendation": {"dataType":"string","required":true},
        },
        "additionalProperties": true,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "Gis": {
        "dataType": "refObject",
        "properties": {
            "dist": {"dataType":"double","required":true},
            "durS": {"dataType":"string","required":true},
            "dirGeo": {"dataType":"double","required":true},
            "ctx": {"dataType":"string","required":true},
            "gisPrvr": {"dataType":"string","required":true},
            "getDescr": {"dataType":"boolean","required":true},
            "getPoly": {"dataType":"boolean","required":true},
        },
        "additionalProperties": true,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "SecLWALK": {
        "dataType": "refObject",
        "properties": {
            "type": {"dataType":"union","subSchemas":[{"dataType":"enum","enums":["WALK"]},{"dataType":"enum","enums":["TRSF"]}],"required":true},
            "icoX": {"dataType":"double","required":true},
            "dep": {"ref":"CommonDeparture","required":true},
            "arr": {"ref":"CommonArrival","required":true},
            "gis": {"ref":"Gis","required":true},
        },
        "additionalProperties": true,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "SecLKISS": {
        "dataType": "refObject",
        "properties": {
            "type": {"dataType":"enum","enums":["KISS"],"required":true},
        },
        "additionalProperties": true,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "SecL": {
        "dataType": "refAlias",
        "type": {"dataType":"union","subSchemas":[{"ref":"SecLJNY"},{"ref":"SecLWALK"},{"ref":"SecLKISS"}],"validators":{}},
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "Route%24TarifFare": {
        "dataType": "refObject",
        "properties": {
            "price": {"dataType":"integer","required":true,"validators":{"isInt":{"errorMsg":"in Cent"}}},
            "moreExpensiveAvailable": {"dataType":"boolean","required":true},
            "bookable": {"dataType":"boolean","required":true},
            "upsell": {"dataType":"boolean","required":true},
            "targetContext": {"dataType":"string","required":true},
        },
        "additionalProperties": true,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "Route%24TarifFareSet": {
        "dataType": "refObject",
        "properties": {
            "fares": {"dataType":"array","array":{"dataType":"refObject","ref":"Route%24TarifFare"},"required":true},
        },
        "additionalProperties": true,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "Route%24Journey": {
        "dataType": "refObject",
        "properties": {
            "cancelled": {"dataType":"boolean"},
            "changeDuration": {"dataType":"double"},
            "duration": {"dataType":"double"},
            "finalDestination": {"dataType":"string","required":true},
            "jid": {"dataType":"string","required":true},
            "product": {"ref":"ProdL"},
            "raw": {"ref":"SecL"},
            "segmentDestination": {"ref":"RoutingStation","required":true},
            "segmentStart": {"ref":"RoutingStation","required":true},
            "stops": {"dataType":"array","array":{"dataType":"refObject","ref":"Route%24Stop"},"required":true},
            "train": {"ref":"ParsedProduct","required":true},
            "auslastung": {"ref":"Route%24Auslastung"},
            "messages": {"dataType":"array","array":{"dataType":"refObject","ref":"RemL"}},
            "tarifSet": {"dataType":"array","array":{"dataType":"refObject","ref":"Route%24TarifFareSet"}},
        },
        "additionalProperties": true,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "ParsedSearchOnTripResponse": {
        "dataType": "refObject",
        "properties": {
            "cancelled": {"dataType":"boolean"},
            "changeDuration": {"dataType":"double"},
            "duration": {"dataType":"double"},
            "finalDestination": {"dataType":"string","required":true},
            "jid": {"dataType":"string","required":true},
            "product": {"ref":"ProdL"},
            "raw": {"ref":"SecL"},
            "segmentDestination": {"ref":"RoutingStation","required":true},
            "segmentStart": {"ref":"RoutingStation","required":true},
            "stops": {"dataType":"array","array":{"dataType":"refObject","ref":"Route%24Stop"},"required":true},
            "train": {"ref":"ParsedProduct","required":true},
            "auslastung": {"ref":"Route%24Auslastung"},
            "messages": {"dataType":"array","array":{"dataType":"refObject","ref":"RemL"}},
            "tarifSet": {"dataType":"array","array":{"dataType":"refObject","ref":"Route%24TarifFareSet"}},
            "type": {"dataType":"enum","enums":["JNY"],"required":true},
            "arrival": {"ref":"CommonStopInfo","required":true},
            "departure": {"ref":"CommonStopInfo","required":true},
            "wings": {"dataType":"array","array":{"dataType":"refObject","ref":"Route%24Journey"}},
            "currentStop": {"ref":"Route%24Stop"},
        },
        "additionalProperties": true,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "Route%24JourneySegmentTrain": {
        "dataType": "refObject",
        "properties": {
            "cancelled": {"dataType":"boolean"},
            "changeDuration": {"dataType":"double"},
            "duration": {"dataType":"double"},
            "finalDestination": {"dataType":"string","required":true},
            "jid": {"dataType":"string","required":true},
            "product": {"ref":"ProdL"},
            "raw": {"ref":"SecL"},
            "segmentDestination": {"ref":"RoutingStation","required":true},
            "segmentStart": {"ref":"RoutingStation","required":true},
            "stops": {"dataType":"array","array":{"dataType":"refObject","ref":"Route%24Stop"},"required":true},
            "train": {"ref":"ParsedProduct","required":true},
            "auslastung": {"ref":"Route%24Auslastung"},
            "messages": {"dataType":"array","array":{"dataType":"refObject","ref":"RemL"}},
            "tarifSet": {"dataType":"array","array":{"dataType":"refObject","ref":"Route%24TarifFareSet"}},
            "type": {"dataType":"enum","enums":["JNY"],"required":true},
            "arrival": {"ref":"CommonStopInfo","required":true},
            "departure": {"ref":"CommonStopInfo","required":true},
            "wings": {"dataType":"array","array":{"dataType":"refObject","ref":"Route%24Journey"}},
        },
        "additionalProperties": true,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "WalkStopInfo": {
        "dataType": "refAlias",
        "type": {"dataType":"nestedObjectLiteral","nestedProperties":{"delay":{"dataType":"double"},"time":{"dataType":"datetime","required":true}},"validators":{}},
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "Route%24JourneySegmentWalk": {
        "dataType": "refObject",
        "properties": {
            "type": {"dataType":"enum","enums":["WALK"],"required":true},
            "train": {"ref":"ParsedProduct","required":true},
            "arrival": {"ref":"WalkStopInfo","required":true},
            "departure": {"ref":"WalkStopInfo","required":true},
            "duration": {"dataType":"integer","required":true},
            "segmentStart": {"ref":"HafasStation","required":true},
            "segmentDestination": {"ref":"HafasStation","required":true},
        },
        "additionalProperties": true,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "Route%24JourneySegment": {
        "dataType": "refAlias",
        "type": {"dataType":"union","subSchemas":[{"ref":"Route%24JourneySegmentTrain"},{"ref":"Route%24JourneySegmentWalk"}],"validators":{}},
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "SingleRoute": {
        "dataType": "refObject",
        "properties": {
            "arrival": {"ref":"CommonStopInfo","required":true},
            "departure": {"ref":"CommonStopInfo","required":true},
            "isRideable": {"dataType":"boolean","required":true},
            "checksum": {"dataType":"string","required":true},
            "cid": {"dataType":"string","required":true},
            "date": {"dataType":"datetime","required":true},
            "duration": {"dataType":"integer","required":true,"validators":{"isInt":{"errorMsg":"in ms"}}},
            "changes": {"dataType":"integer","required":true},
            "segments": {"dataType":"array","array":{"dataType":"refAlias","ref":"Route%24JourneySegment"},"required":true},
            "segmentTypes": {"dataType":"array","array":{"dataType":"string"},"required":true},
            "tarifSet": {"dataType":"array","array":{"dataType":"refObject","ref":"Route%24TarifFareSet"}},
        },
        "additionalProperties": true,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "AllowedSotMode": {
        "dataType": "refAlias",
        "type": {"dataType":"union","subSchemas":[{"dataType":"enum","enums":["JI"]},{"dataType":"enum","enums":["RC"]}],"validators":{}},
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "SearchOnTripBody": {
        "dataType": "refObject",
        "properties": {
            "sotMode": {"ref":"AllowedSotMode","required":true},
            "id": {"dataType":"string","required":true},
        },
        "additionalProperties": true,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "RoutingResult": {
        "dataType": "refObject",
        "properties": {
            "routes": {"dataType":"array","array":{"dataType":"refObject","ref":"SingleRoute"},"required":true},
            "context": {"dataType":"nestedObjectLiteral","nestedProperties":{"later":{"dataType":"string","required":true},"earlier":{"dataType":"string","required":true}},"required":true},
        },
        "additionalProperties": true,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "TripSearchVia": {
        "dataType": "refObject",
        "properties": {
            "evaId": {"dataType":"string","required":true},
            "minChangeTime": {"dataType":"double"},
        },
        "additionalProperties": true,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "JnyCl": {
        "dataType": "refEnum",
        "enums": [1,2],
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "TravelerType": {
        "dataType": "refEnum",
        "enums": ["E","K","B"],
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "LoyalityCard": {
        "dataType": "refEnum",
        "enums": ["BC25First","BC25Second","BC50First","BC50Second","SHCard","ATVorteilscard","CHGeneral","CHHalfWithRailplus","CHHalfWithoutRailplus","NLWithRailplus","NLWithoutRailplus","BC100First","BC100Second"],
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "TripSearchTraveler": {
        "dataType": "refObject",
        "properties": {
            "type": {"ref":"TravelerType","required":true},
            "loyalityCard": {"ref":"LoyalityCard"},
        },
        "additionalProperties": true,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "TripSearchTarifRequest": {
        "dataType": "refObject",
        "properties": {
            "class": {"ref":"JnyCl","required":true},
            "traveler": {"dataType":"array","array":{"dataType":"refObject","ref":"TripSearchTraveler"},"required":true},
        },
        "additionalProperties": true,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "TripSearchOptionsV3": {
        "dataType": "refObject",
        "properties": {
            "economic": {"dataType":"boolean"},
            "getIV": {"dataType":"boolean"},
            "getPasslist": {"dataType":"boolean"},
            "getPolyline": {"dataType":"boolean"},
            "numF": {"dataType":"double"},
            "ctxScr": {"dataType":"string"},
            "ushrp": {"dataType":"boolean"},
            "start": {"ref":"EvaNumber","required":true},
            "destination": {"ref":"EvaNumber","required":true},
            "time": {"dataType":"datetime"},
            "transferTime": {"dataType":"double"},
            "maxChanges": {"dataType":"double"},
            "searchForDeparture": {"dataType":"boolean"},
            "onlyRegional": {"dataType":"boolean"},
            "onlyNetzcard": {"dataType":"boolean"},
            "tarif": {"ref":"TripSearchTarifRequest"},
            "via": {"dataType":"array","array":{"dataType":"refObject","ref":"TripSearchVia"}},
        },
        "additionalProperties": true,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "Record_EvaNumber.Route%24Auslastung_": {
        "dataType": "refAlias",
        "type": {"dataType":"nestedObjectLiteral","nestedProperties":{},"validators":{}},
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "AdditionalJourneyInformation": {
        "dataType": "refObject",
        "properties": {
            "operatorName": {"dataType":"string"},
            "occupancy": {"ref":"Record_EvaNumber.Route%24Auslastung_","required":true},
        },
        "additionalProperties": true,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "OEBBPlatforms": {
        "dataType": "refObject",
        "properties": {
            "scheduled": {"dataType":"integer","required":true},
            "reported": {"dataType":"integer","required":true},
        },
        "additionalProperties": true,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "OEBBSectorInfo": {
        "dataType": "refObject",
        "properties": {
            "scheduled": {"dataType":"string","required":true},
            "reported": {"dataType":"string"},
        },
        "additionalProperties": true,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "OEBBTimeFormat": {
        "dataType": "refObject",
        "properties": {
            "days": {"dataType":"integer","required":true},
            "hours": {"dataType":"integer","required":true},
            "minutes": {"dataType":"integer","required":true},
        },
        "additionalProperties": true,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "OEBBTime": {
        "dataType": "refObject",
        "properties": {
            "scheduled": {"ref":"OEBBTimeFormat","required":true},
            "reported": {"ref":"OEBBTimeFormat"},
        },
        "additionalProperties": true,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "OEBBPortion": {
        "dataType": "refObject",
        "properties": {
            "trainNr": {"dataType":"integer","required":true},
            "trainName": {"dataType":"string","required":true},
        },
        "additionalProperties": true,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "OEBBTimeTableInfo": {
        "dataType": "refObject",
        "properties": {
            "date": {"dataType":"string","required":true},
            "trainNr": {"dataType":"integer","required":true},
            "trainName": {"dataType":"string","required":true},
            "stationName": {"dataType":"string","required":true},
            "platform": {"ref":"OEBBPlatforms","required":true},
            "sectors": {"ref":"OEBBSectorInfo","required":true},
            "time": {"ref":"OEBBTime","required":true},
            "portions": {"dataType":"array","array":{"dataType":"refObject","ref":"OEBBPortion"},"required":true},
        },
        "additionalProperties": true,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "OEBBIdentifier": {
        "dataType": "refAlias",
        "type": {"dataType":"string","validators":{}},
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "OEBBCoachSequenceWagon": {
        "dataType": "refObject",
        "properties": {
            "uicNumber": {"dataType":"string"},
            "kind": {"dataType":"string"},
            "origin": {"ref":"OEBBIdentifier","required":true},
            "destination": {"ref":"OEBBIdentifier","required":true},
            "ranking": {"dataType":"double","required":true},
            "capacityBusinessClass": {"dataType":"double","required":true},
            "capacityFirstClass": {"dataType":"double","required":true},
            "capacitySecondClass": {"dataType":"double","required":true},
            "capacityCouchette": {"dataType":"double","required":true},
            "capacitySleeper": {"dataType":"double","required":true},
            "capacityWheelChair": {"dataType":"double","required":true},
            "capacityBicycle": {"dataType":"double","required":true},
            "isBicycleAllowed": {"dataType":"boolean","required":true},
            "isWheelChairAccessible": {"dataType":"boolean","required":true},
            "hasWifi": {"dataType":"boolean","required":true},
            "isInfoPoint": {"dataType":"boolean","required":true},
            "isPlayZone": {"dataType":"boolean","required":true},
            "isChildCinema": {"dataType":"boolean","required":true},
            "isDining": {"dataType":"boolean","required":true},
            "isQuietZone": {"dataType":"boolean","required":true},
            "isLocked": {"dataType":"boolean","required":true},
            "destinationName": {"dataType":"string","required":true},
            "lengthOverBuffers": {"dataType":"double","required":true},
            "originTime": {"dataType":"string","required":true},
            "destinationTime": {"dataType":"string","required":true},
            "seasoning": {"dataType":"nestedObjectLiteral","nestedProperties":{"seasoningString":{"dataType":"string","required":true},"startDate":{"dataType":"string","required":true}}},
        },
        "additionalProperties": true,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "OEBBTrainInfo": {
        "dataType": "refObject",
        "properties": {
            "trainNr": {"dataType":"double","required":true},
            "date": {"dataType":"string","required":true},
            "version": {"dataType":"double","required":true},
            "isReported": {"dataType":"boolean","required":true},
            "assemblyStation": {"dataType":"string","required":true},
            "source": {"dataType":"string","required":true},
            "stations": {"dataType":"array","array":{"dataType":"refAlias","ref":"OEBBIdentifier"},"required":true},
            "wagons": {"dataType":"array","array":{"dataType":"refObject","ref":"OEBBCoachSequenceWagon"},"required":true},
        },
        "additionalProperties": true,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "OEBBAccessType": {
        "dataType": "refAlias",
        "type": {"dataType":"union","subSchemas":[{"dataType":"enum","enums":["STIEGENAUFGANG"]},{"dataType":"enum","enums":["AUFZUG"]},{"dataType":"enum","enums":["STIEGENAUFGANG"]},{"dataType":"enum","enums":["ROLLTREPPE"]}],"validators":{}},
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "OEBBAccess": {
        "dataType": "refObject",
        "properties": {
            "platform": {"dataType":"string","required":true},
            "distance": {"dataType":"double","required":true},
            "name": {"dataType":"string","required":true},
            "type": {"ref":"OEBBAccessType","required":true},
        },
        "additionalProperties": true,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "OEBBTrainOnPlatform": {
        "dataType": "refObject",
        "properties": {
            "position": {"dataType":"double","required":true},
            "departureTowardsFirstSector": {"dataType":"boolean","required":true},
        },
        "additionalProperties": true,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "OEBBSector": {
        "dataType": "refObject",
        "properties": {
            "name": {"dataType":"string","required":true},
            "length": {"dataType":"double","required":true},
        },
        "additionalProperties": true,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "OEBBPlatformInfo": {
        "dataType": "refObject",
        "properties": {
            "platform": {"dataType":"integer","required":true},
            "length": {"dataType":"double","required":true},
            "sectors": {"dataType":"array","array":{"dataType":"refObject","ref":"OEBBSector"},"required":true},
        },
        "additionalProperties": true,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "OEBBInfo": {
        "dataType": "refObject",
        "properties": {
            "timeTableInfo": {"ref":"OEBBTimeTableInfo","required":true},
            "train": {"ref":"OEBBTrainInfo"},
            "accessess": {"dataType":"array","array":{"dataType":"refObject","ref":"OEBBAccess"},"required":true},
            "trainOnPlatform": {"ref":"OEBBTrainOnPlatform"},
            "platform": {"ref":"OEBBPlatformInfo"},
        },
        "additionalProperties": true,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "ReturnType_typeofinfo_": {
        "dataType": "refAlias",
        "type": {"ref":"OEBBInfo","validators":{}},
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "CoachSequencePosition": {
        "dataType": "refObject",
        "properties": {
            "startPercent": {"dataType":"double","required":true},
            "endPercent": {"dataType":"double","required":true},
        },
        "additionalProperties": true,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "CoachSequenceSector": {
        "dataType": "refObject",
        "properties": {
            "name": {"dataType":"string","required":true},
            "position": {"ref":"CoachSequencePosition","required":true},
        },
        "additionalProperties": true,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "CoachSequenceStop": {
        "dataType": "refObject",
        "properties": {
            "stopPlace": {"ref":"MinimalStopPlace","required":true},
            "sectors": {"dataType":"array","array":{"dataType":"refObject","ref":"CoachSequenceSector"},"required":true},
        },
        "additionalProperties": true,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "CoachSequenceProduct": {
        "dataType": "refObject",
        "properties": {
            "number": {"dataType":"string","required":true},
            "type": {"dataType":"string","required":true},
            "line": {"dataType":"string"},
        },
        "additionalProperties": true,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "FahrzeugKategorie": {
        "dataType": "refAlias",
        "type": {"dataType":"union","subSchemas":[{"dataType":"enum","enums":["DOPPELSTOCKSTEUERWAGENERSTEZWEITEKLASSE"]},{"dataType":"enum","enums":["DOPPELSTOCKSTEUERWAGENZWEITEKLASSE"]},{"dataType":"enum","enums":["DOPPELSTOCKWAGENERSTEKLASSE"]},{"dataType":"enum","enums":["DOPPELSTOCKWAGENERSTEZWEITEKLASSE"]},{"dataType":"enum","enums":["DOPPELSTOCKWAGENZWEITEKLASSE"]},{"dataType":"enum","enums":["HALBSPEISEWAGENERSTEKLASSE"]},{"dataType":"enum","enums":["HALBSPEISEWAGENZWEITEKLASSE"]},{"dataType":"enum","enums":["LOK"]},{"dataType":"enum","enums":["REISEZUGWAGENERSTEKLASSE"]},{"dataType":"enum","enums":["REISEZUGWAGENERSTEZWEITEKLASSE"]},{"dataType":"enum","enums":["REISEZUGWAGENZWEITEKLASSE"]},{"dataType":"enum","enums":["SPEISEWAGEN"]},{"dataType":"enum","enums":["STEUERWAGENERSTEKLASSE"]},{"dataType":"enum","enums":["STEUERWAGENERSTEZWEITEKLASSE"]},{"dataType":"enum","enums":["STEUERWAGENZWEITEKLASSE"]},{"dataType":"enum","enums":["TRIEBKOPF"]},{"dataType":"enum","enums":[""]}],"validators":{}},
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "VehicleCategory": {
        "dataType": "refAlias",
        "type": {"dataType":"union","subSchemas":[{"dataType":"enum","enums":["DOUBLEDECK_FIRST_ECONOMY_CLASS"]},{"dataType":"enum","enums":["DOUBLEDECK_FIRST_CLASS"]},{"dataType":"enum","enums":["DOUBLEDECK_ECONOMY_CLASS"]},{"dataType":"enum","enums":["DOUBLEDECK_CONTROLCAR_FIRST_ECONOMOY_CLASS"]},{"dataType":"enum","enums":["DOUBLEDECK_CONTROLCAR_FIRST_CLASS"]},{"dataType":"enum","enums":["DOUBLEDECK_CONTROLCAR_ECONOMY_CLASS"]},{"dataType":"enum","enums":["DOUBLEDECK_CARCARRIER_PASSENGERTRAIN"]},{"dataType":"enum","enums":["PASSENGERCARRIAGE_FIRST_ECONOMY_CLASS"]},{"dataType":"enum","enums":["PASSENGERCARRIAGE_FIRST_CLASS"]},{"dataType":"enum","enums":["PASSENGERCARRIAGE_ECONOMY_CLASS"]},{"dataType":"enum","enums":["CONTROLCAR_FIRST_CLASS"]},{"dataType":"enum","enums":["CONTROLCAR_ECONOMY_CLASS"]},{"dataType":"enum","enums":["CONTROLCAR_FIRST_ECONOMY_CLASS"]},{"dataType":"enum","enums":["DOUBLECONTROLCAR_ECONOMY_CLASS"]},{"dataType":"enum","enums":["DOUBLECONTROLCAR_FIRST_ECONOMY_CLASS"]},{"dataType":"enum","enums":["DININGCAR"]},{"dataType":"enum","enums":["HALFDININGCAR_FIRST_CLASS"]},{"dataType":"enum","enums":["HALFDININGCAR_ECONOMY_CLASS"]},{"dataType":"enum","enums":["SLEEPER_FIRST_CLASS"]},{"dataType":"enum","enums":["SLEEPER_FIRST_ECONOMY_CLASS"]},{"dataType":"enum","enums":["SLEEPER_ECONOMY_CLASS"]},{"dataType":"enum","enums":["COUCHETTE_FIRST_CLASS"]},{"dataType":"enum","enums":["COUCHETTE_ECONOMY_CLASS"]},{"dataType":"enum","enums":["BAGGAGECAR"]},{"dataType":"enum","enums":["HALFBAGGAGECAR"]},{"dataType":"enum","enums":["LOCOMOTIVE"]},{"dataType":"enum","enums":["POWERCAR"]},{"dataType":"enum","enums":["UNDEFINED"]}],"validators":{}},
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "CoachSequenceCoachFeatures": {
        "dataType": "refObject",
        "properties": {
            "dining": {"dataType":"boolean"},
            "wheelchair": {"dataType":"boolean"},
            "bike": {"dataType":"boolean"},
            "disabled": {"dataType":"boolean"},
            "quiet": {"dataType":"boolean"},
            "info": {"dataType":"boolean"},
            "family": {"dataType":"boolean"},
            "toddler": {"dataType":"boolean"},
            "wifi": {"dataType":"boolean"},
            "comfort": {"dataType":"boolean"},
        },
        "additionalProperties": true,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "CoachSequenceCoachSeats": {
        "dataType": "refObject",
        "properties": {
            "comfort": {"dataType":"string"},
            "disabled": {"dataType":"string"},
            "family": {"dataType":"string"},
        },
        "additionalProperties": true,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "CoachSequenceCoach": {
        "dataType": "refObject",
        "properties": {
            "class": {"dataType":"union","subSchemas":[{"dataType":"enum","enums":[0]},{"dataType":"enum","enums":[1]},{"dataType":"enum","enums":[2]},{"dataType":"enum","enums":[3]},{"dataType":"enum","enums":[4]}],"required":true},
            "category": {"ref":"FahrzeugKategorie","required":true},
            "vehicleCategory": {"ref":"VehicleCategory","required":true},
            "closed": {"dataType":"boolean"},
            "uic": {"dataType":"string"},
            "type": {"dataType":"string"},
            "identificationNumber": {"dataType":"string"},
            "position": {"ref":"CoachSequencePosition","required":true},
            "features": {"ref":"CoachSequenceCoachFeatures","required":true},
            "seats": {"ref":"CoachSequenceCoachSeats"},
        },
        "additionalProperties": true,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "AvailableBR": {
        "dataType": "refAlias",
        "type": {"dataType":"union","subSchemas":[{"dataType":"enum","enums":["401"]},{"dataType":"enum","enums":["402"]},{"dataType":"enum","enums":["403"]},{"dataType":"enum","enums":["406"]},{"dataType":"enum","enums":["407"]},{"dataType":"enum","enums":["408"]},{"dataType":"enum","enums":["410.1"]},{"dataType":"enum","enums":["411"]},{"dataType":"enum","enums":["412"]},{"dataType":"enum","enums":["415"]}],"validators":{}},
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "AvailableIdentifierOnly": {
        "dataType": "refAlias",
        "type": {"dataType":"union","subSchemas":[{"dataType":"enum","enums":["401.LDV"]},{"dataType":"enum","enums":["401.9"]},{"dataType":"enum","enums":["411.S1"]},{"dataType":"enum","enums":["411.S2"]},{"dataType":"enum","enums":["412.7"]},{"dataType":"enum","enums":["412.13"]},{"dataType":"enum","enums":["403.R"]},{"dataType":"enum","enums":["403.S1"]},{"dataType":"enum","enums":["403.S2"]},{"dataType":"enum","enums":["406.R"]},{"dataType":"enum","enums":["IC2.TWIN"]},{"dataType":"enum","enums":["IC2.KISS"]},{"dataType":"enum","enums":["MET"]},{"dataType":"enum","enums":["TGV"]}],"validators":{}},
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "AvailableIdentifier": {
        "dataType": "refAlias",
        "type": {"dataType":"union","subSchemas":[{"ref":"AvailableIdentifierOnly"},{"ref":"AvailableBR"}],"validators":{}},
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "CoachSequenceBaureihe": {
        "dataType": "refObject",
        "properties": {
            "name": {"dataType":"string","required":true},
            "baureihe": {"ref":"AvailableBR"},
            "identifier": {"ref":"AvailableIdentifier","required":true},
        },
        "additionalProperties": true,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "CoachSequenceGroup": {
        "dataType": "refObject",
        "properties": {
            "coaches": {"dataType":"array","array":{"dataType":"refObject","ref":"CoachSequenceCoach"},"required":true},
            "name": {"dataType":"string","required":true},
            "originName": {"dataType":"string","required":true},
            "destinationName": {"dataType":"string","required":true},
            "trainName": {"dataType":"string"},
            "number": {"dataType":"string","required":true},
            "baureihe": {"ref":"CoachSequenceBaureihe"},
        },
        "additionalProperties": true,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "CoachSequence": {
        "dataType": "refObject",
        "properties": {
            "groups": {"dataType":"array","array":{"dataType":"refObject","ref":"CoachSequenceGroup"},"required":true},
        },
        "additionalProperties": true,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "CoachSequenceInformation": {
        "dataType": "refObject",
        "properties": {
            "source": {"dataType":"union","subSchemas":[{"dataType":"enum","enums":["OEBB"]},{"dataType":"enum","enums":["NEW"]},{"dataType":"enum","enums":["DB"]}],"required":true},
            "stop": {"ref":"CoachSequenceStop","required":true},
            "product": {"ref":"CoachSequenceProduct","required":true},
            "sequence": {"ref":"CoachSequence","required":true},
            "multipleTrainNumbers": {"dataType":"boolean"},
            "multipleDestinations": {"dataType":"boolean"},
            "isRealtime": {"dataType":"boolean","required":true},
            "direction": {"dataType":"boolean"},
        },
        "additionalProperties": true,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "TrainRunStop": {
        "dataType": "refObject",
        "properties": {
            "name": {"dataType":"string","required":true},
            "evaNumber": {"dataType":"string","required":true},
            "arrivalTime": {"dataType":"datetime"},
            "departureTime": {"dataType":"datetime"},
        },
        "additionalProperties": true,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "Pick_TrainRun.Exclude_keyofTrainRun.primaryVehicleGroupName__": {
        "dataType": "refAlias",
        "type": {"dataType":"nestedObjectLiteral","nestedProperties":{"product":{"ref":"CoachSequenceProduct","required":true},"origin":{"ref":"TrainRunStop","required":true},"destination":{"ref":"TrainRunStop","required":true},"via":{"dataType":"array","array":{"dataType":"refObject","ref":"TrainRunStop"},"required":true},"dates":{"dataType":"array","array":{"dataType":"datetime"},"required":true}},"validators":{}},
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "TrainRunWithBR": {
        "dataType": "refObject",
        "properties": {
            "product": {"ref":"CoachSequenceProduct","required":true},
            "origin": {"ref":"TrainRunStop","required":true},
            "destination": {"ref":"TrainRunStop","required":true},
            "via": {"dataType":"array","array":{"dataType":"refObject","ref":"TrainRunStop"},"required":true},
            "dates": {"dataType":"array","array":{"dataType":"datetime"},"required":true},
            "br": {"ref":"CoachSequenceBaureihe"},
        },
        "additionalProperties": true,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "LageplanResponse": {
        "dataType": "refObject",
        "properties": {
            "lageplan": {"dataType":"string"},
        },
        "additionalProperties": true,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "TransportType": {
        "dataType": "refAlias",
        "type": {"dataType":"union","subSchemas":[{"dataType":"enum","enums":["HIGH_SPEED_TRAIN"]},{"dataType":"enum","enums":["INTERCITY_TRAIN"]},{"dataType":"enum","enums":["INTER_REGIONAL_TRAIN"]},{"dataType":"enum","enums":["REGIONAL_TRAIN"]},{"dataType":"enum","enums":["CITY_TRAIN"]},{"dataType":"enum","enums":["SUBWAY"]},{"dataType":"enum","enums":["TRAM"]},{"dataType":"enum","enums":["BUS"]},{"dataType":"enum","enums":["FERRY"]},{"dataType":"enum","enums":["FLIGHT"]},{"dataType":"enum","enums":["CAR"]},{"dataType":"enum","enums":["TAXI"]},{"dataType":"enum","enums":["SHUTTLE"]},{"dataType":"enum","enums":["BIKE"]},{"dataType":"enum","enums":["SCOOTER"]},{"dataType":"enum","enums":["WALK"]},{"dataType":"enum","enums":["UNKNOWN"]}],"validators":{}},
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "Coordinate2D": {
        "dataType": "refObject",
        "properties": {
            "latitude": {"dataType":"double","required":true},
            "longitude": {"dataType":"double","required":true},
        },
        "additionalProperties": true,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "StopPlaceIdentifier": {
        "dataType": "refObject",
        "properties": {
            "stationId": {"dataType":"string"},
            "ifopt": {"dataType":"string"},
            "ril100": {"dataType":"string"},
            "alternativeRil100": {"dataType":"array","array":{"dataType":"string"}},
            "evaNumber": {"dataType":"string","required":true},
        },
        "additionalProperties": true,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "GroupedStopPlace": {
        "dataType": "refObject",
        "properties": {
            "evaNumber": {"dataType":"string","required":true},
            "name": {"dataType":"string","required":true},
            "availableTransports": {"dataType":"array","array":{"dataType":"refAlias","ref":"TransportType"},"required":true},
            "position": {"ref":"Coordinate2D"},
            "identifier": {"ref":"StopPlaceIdentifier"},
        },
        "additionalProperties": true,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "TrainOccupancyList": {
        "dataType": "refObject",
        "properties": {
        },
        "additionalProperties": {"dataType":"union","subSchemas":[{"ref":"Route%24Auslastung"},{"dataType":"enum","enums":[null]}]},
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
};
const validationService = new ValidationService(models);

// WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

export function RegisterRoutes(router: KoaRouter) {
    // ###########################################################################################################
    //  NOTE: If you do not see routes for all of your controllers in this file, then you might not have informed tsoa of where to look
    //      Please look into the "controllerPathGlobs" config option described in the readme: https://github.com/lukeautry/tsoa
    // ###########################################################################################################
        router.get('/api/hafas/experimental/himMessages',
            ...(fetchMiddlewares<Middleware>(HafasExperimentalController)),
            ...(fetchMiddlewares<Middleware>(HafasExperimentalController.prototype.himMessages)),

            async function HafasExperimentalController_himMessages(context: any, next: any) {
            const args = {
                    req: {"in":"request","name":"req","required":true,"dataType":"object"},
                    himIds: {"in":"query","name":"himIds","required":true,"dataType":"array","array":{"dataType":"string"}},
                    profile: {"in":"query","name":"profile","ref":"AllowedHafasProfile"},
            };

            let validatedArgs: any[] = [];
            try {
              validatedArgs = getValidatedArgs(args, context, next);
            } catch (err) {
              const error = err as any;
              context.status = error.status;
              context.throw(error.status, JSON.stringify({ fields: error.fields }));
            }

            const controller = new HafasExperimentalController();

            const promise = controller.himMessages.apply(controller, validatedArgs as any);
            return promiseHandler(controller, promise, context, undefined, undefined);
        });
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        router.post('/api/hafas/experimental/HimSearch',
            ...(fetchMiddlewares<Middleware>(HafasExperimentalController)),
            ...(fetchMiddlewares<Middleware>(HafasExperimentalController.prototype.himSearch)),

            async function HafasExperimentalController_himSearch(context: any, next: any) {
            const args = {
                    req: {"in":"request","name":"req","required":true,"dataType":"object"},
                    options: {"in":"body","name":"options","required":true,"ref":"HimSearchRequestOptions"},
                    profile: {"in":"query","name":"profile","ref":"AllowedHafasProfile"},
            };

            let validatedArgs: any[] = [];
            try {
              validatedArgs = getValidatedArgs(args, context, next);
            } catch (err) {
              const error = err as any;
              context.status = error.status;
              context.throw(error.status, JSON.stringify({ fields: error.fields }));
            }

            const controller = new HafasExperimentalController();

            const promise = controller.himSearch.apply(controller, validatedArgs as any);
            return promiseHandler(controller, promise, context, undefined, undefined);
        });
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        router.get('/api/hafas/experimental/irisCompatibleAbfahrten/:evaId',
            ...(fetchMiddlewares<Middleware>(HafasExperimentalController)),
            ...(fetchMiddlewares<Middleware>(HafasExperimentalController.prototype.irisCompatibleAbfahrten)),

            async function HafasExperimentalController_irisCompatibleAbfahrten(context: any, next: any) {
            const args = {
                    evaId: {"in":"path","name":"evaId","required":true,"dataType":"string"},
                    profile: {"in":"query","name":"profile","ref":"AllowedHafasProfile"},
            };

            let validatedArgs: any[] = [];
            try {
              validatedArgs = getValidatedArgs(args, context, next);
            } catch (err) {
              const error = err as any;
              context.status = error.status;
              context.throw(error.status, JSON.stringify({ fields: error.fields }));
            }

            const controller = new HafasExperimentalController();

            const promise = controller.irisCompatibleAbfahrten.apply(controller, validatedArgs as any);
            return promiseHandler(controller, promise, context, undefined, undefined);
        });
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        router.post('/api/hafas/experimental/JourneyTree',
            ...(fetchMiddlewares<Middleware>(HafasExperimentalController)),
            ...(fetchMiddlewares<Middleware>(HafasExperimentalController.prototype.JourneyTree)),

            async function HafasExperimentalController_JourneyTree(context: any, next: any) {
            const args = {
                    options: {"in":"body","name":"options","required":true,"ref":"JourneyTreeRequestOptions"},
                    profile: {"in":"query","name":"profile","ref":"AllowedHafasProfile"},
            };

            let validatedArgs: any[] = [];
            try {
              validatedArgs = getValidatedArgs(args, context, next);
            } catch (err) {
              const error = err as any;
              context.status = error.status;
              context.throw(error.status, JSON.stringify({ fields: error.fields }));
            }

            const controller = new HafasExperimentalController();

            const promise = controller.JourneyTree.apply(controller, validatedArgs as any);
            return promiseHandler(controller, promise, context, undefined, undefined);
        });
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        router.post('/api/hafas/experimental/JourneyGraph',
            ...(fetchMiddlewares<Middleware>(HafasExperimentalController)),
            ...(fetchMiddlewares<Middleware>(HafasExperimentalController.prototype.JourneyGraph)),

            async function HafasExperimentalController_JourneyGraph(context: any, next: any) {
            const args = {
                    options: {"in":"body","name":"options","required":true,"ref":"JourneyGraphRequestOptions"},
                    profile: {"in":"query","name":"profile","ref":"AllowedHafasProfile"},
            };

            let validatedArgs: any[] = [];
            try {
              validatedArgs = getValidatedArgs(args, context, next);
            } catch (err) {
              const error = err as any;
              context.status = error.status;
              context.throw(error.status, JSON.stringify({ fields: error.fields }));
            }

            const controller = new HafasExperimentalController();

            const promise = controller.JourneyGraph.apply(controller, validatedArgs as any);
            return promiseHandler(controller, promise, context, undefined, undefined);
        });
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        router.post('/api/hafas/experimental/JourneyCourse',
            ...(fetchMiddlewares<Middleware>(HafasExperimentalController)),
            ...(fetchMiddlewares<Middleware>(HafasExperimentalController.prototype.JourneyCourse)),

            async function HafasExperimentalController_JourneyCourse(context: any, next: any) {
            const args = {
                    req: {"in":"request","name":"req","required":true,"dataType":"object"},
                    options: {"in":"body","name":"options","required":true,"ref":"JourneyCourseRequestOptions"},
                    profile: {"in":"query","name":"profile","ref":"AllowedHafasProfile"},
            };

            let validatedArgs: any[] = [];
            try {
              validatedArgs = getValidatedArgs(args, context, next);
            } catch (err) {
              const error = err as any;
              context.status = error.status;
              context.throw(error.status, JSON.stringify({ fields: error.fields }));
            }

            const controller = new HafasExperimentalController();

            const promise = controller.JourneyCourse.apply(controller, validatedArgs as any);
            return promiseHandler(controller, promise, context, undefined, undefined);
        });
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        router.get('/api/hafas/v1/detailsRedirect/:tripId',
            ...(fetchMiddlewares<Middleware>(HafasController)),
            ...(fetchMiddlewares<Middleware>(HafasController.prototype.detailsRedirect)),

            async function HafasController_detailsRedirect(context: any, next: any) {
            const args = {
                    tripId: {"in":"path","name":"tripId","required":true,"dataType":"string"},
                    res: {"in":"res","name":"302","required":true,"dataType":"void"},
                    profile: {"in":"query","name":"profile","ref":"AllowedHafasProfile"},
            };

            let validatedArgs: any[] = [];
            try {
              validatedArgs = getValidatedArgs(args, context, next);
            } catch (err) {
              const error = err as any;
              context.status = error.status;
              context.throw(error.status, JSON.stringify({ fields: error.fields }));
            }

            const controller = new HafasController();

            const promise = controller.detailsRedirect.apply(controller, validatedArgs as any);
            return promiseHandler(controller, promise, context, 302, undefined);
        });
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        router.get('/api/hafas/v1/geoStation',
            ...(fetchMiddlewares<Middleware>(HafasController)),
            ...(fetchMiddlewares<Middleware>(HafasController.prototype.geoStation)),

            async function HafasController_geoStation(context: any, next: any) {
            const args = {
                    req: {"in":"request","name":"req","required":true,"dataType":"object"},
                    lat: {"in":"query","name":"lat","required":true,"dataType":"double"},
                    lng: {"in":"query","name":"lng","required":true,"dataType":"double"},
                    maxDist: {"default":1000,"in":"query","name":"maxDist","dataType":"double"},
                    profile: {"in":"query","name":"profile","ref":"AllowedHafasProfile"},
            };

            let validatedArgs: any[] = [];
            try {
              validatedArgs = getValidatedArgs(args, context, next);
            } catch (err) {
              const error = err as any;
              context.status = error.status;
              context.throw(error.status, JSON.stringify({ fields: error.fields }));
            }

            const controller = new HafasController();

            const promise = controller.geoStation.apply(controller, validatedArgs as any);
            return promiseHandler(controller, promise, context, undefined, undefined);
        });
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        router.get('/api/hafas/v1/stopPlace/:searchTerm',
            ...(fetchMiddlewares<Middleware>(HafasController)),
            ...(fetchMiddlewares<Middleware>(HafasController.prototype.stopPlaceSearch)),

            async function HafasController_stopPlaceSearch(context: any, next: any) {
            const args = {
                    req: {"in":"request","name":"req","required":true,"dataType":"object"},
                    searchTerm: {"in":"path","name":"searchTerm","required":true,"dataType":"string"},
                    type: {"default":"S","in":"query","name":"type","dataType":"union","subSchemas":[{"dataType":"enum","enums":["S"]},{"dataType":"enum","enums":["ALL"]}]},
                    profile: {"in":"query","name":"profile","ref":"AllowedHafasProfile"},
            };

            let validatedArgs: any[] = [];
            try {
              validatedArgs = getValidatedArgs(args, context, next);
            } catch (err) {
              const error = err as any;
              context.status = error.status;
              context.throw(error.status, JSON.stringify({ fields: error.fields }));
            }

            const controller = new HafasController();

            const promise = controller.stopPlaceSearch.apply(controller, validatedArgs as any);
            return promiseHandler(controller, promise, context, undefined, undefined);
        });
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        router.post('/api/hafas/v1/journeyGeoPos',
            ...(fetchMiddlewares<Middleware>(HafasController)),
            ...(fetchMiddlewares<Middleware>(HafasController.prototype.journeyGeoPos)),

            async function HafasController_journeyGeoPos(context: any, next: any) {
            const args = {
                    req: {"in":"request","name":"req","required":true,"dataType":"object"},
                    body: {"in":"body","name":"body","required":true,"ref":"JourneyGeoPosOptions"},
                    profile: {"in":"query","name":"profile","ref":"AllowedHafasProfile"},
            };

            let validatedArgs: any[] = [];
            try {
              validatedArgs = getValidatedArgs(args, context, next);
            } catch (err) {
              const error = err as any;
              context.status = error.status;
              context.throw(error.status, JSON.stringify({ fields: error.fields }));
            }

            const controller = new HafasController();

            const promise = controller.journeyGeoPos.apply(controller, validatedArgs as any);
            return promiseHandler(controller, promise, context, undefined, undefined);
        });
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        router.get('/api/hafas/v1/positionForTrain/:trainName',
            ...(fetchMiddlewares<Middleware>(HafasController)),
            ...(fetchMiddlewares<Middleware>(HafasController.prototype.positionForTrain)),

            async function HafasController_positionForTrain(context: any, next: any) {
            const args = {
                    trainName: {"in":"path","name":"trainName","required":true,"dataType":"string"},
                    profile: {"in":"query","name":"profile","ref":"AllowedHafasProfile"},
            };

            let validatedArgs: any[] = [];
            try {
              validatedArgs = getValidatedArgs(args, context, next);
            } catch (err) {
              const error = err as any;
              context.status = error.status;
              context.throw(error.status, JSON.stringify({ fields: error.fields }));
            }

            const controller = new HafasController();

            const promise = controller.positionForTrain.apply(controller, validatedArgs as any);
            return promiseHandler(controller, promise, context, undefined, undefined);
        });
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        router.post('/api/hafas/v1/rawHafas',
            ...(fetchMiddlewares<Middleware>(HafasController)),
            ...(fetchMiddlewares<Middleware>(HafasController.prototype.rawHafas)),

            async function HafasController_rawHafas(context: any, next: any) {
            const args = {
                    body: {"in":"body","name":"body","required":true,"dataType":"any"},
                    profile: {"in":"query","name":"profile","ref":"AllowedHafasProfile"},
            };

            let validatedArgs: any[] = [];
            try {
              validatedArgs = getValidatedArgs(args, context, next);
            } catch (err) {
              const error = err as any;
              context.status = error.status;
              context.throw(error.status, JSON.stringify({ fields: error.fields }));
            }

            const controller = new HafasController();

            const promise = controller.rawHafas.apply(controller, validatedArgs as any);
            return promiseHandler(controller, promise, context, undefined, undefined);
        });
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        router.get('/api/hafas/v2/journeyDetails',
            ...(fetchMiddlewares<Middleware>(HafasControllerV2)),
            ...(fetchMiddlewares<Middleware>(HafasControllerV2.prototype.journeyDetails)),

            async function HafasControllerV2_journeyDetails(context: any, next: any) {
            const args = {
                    jid: {"in":"query","name":"jid","required":true,"dataType":"string"},
                    req: {"in":"request","name":"req","required":true,"dataType":"object"},
                    profile: {"in":"query","name":"profile","ref":"AllowedHafasProfile"},
            };

            let validatedArgs: any[] = [];
            try {
              validatedArgs = getValidatedArgs(args, context, next);
            } catch (err) {
              const error = err as any;
              context.status = error.status;
              context.throw(error.status, JSON.stringify({ fields: error.fields }));
            }

            const controller = new HafasControllerV2();

            const promise = controller.journeyDetails.apply(controller, validatedArgs as any);
            return promiseHandler(controller, promise, context, undefined, undefined);
        });
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        router.get('/api/hafas/v2/auslastung/:start/:destination/:trainNumber/:plannedDepartureTime',
            ...(fetchMiddlewares<Middleware>(HafasControllerV2)),
            ...(fetchMiddlewares<Middleware>(HafasControllerV2.prototype.auslastung)),

            async function HafasControllerV2_auslastung(context: any, next: any) {
            const args = {
                    start: {"in":"path","name":"start","required":true,"dataType":"string"},
                    destination: {"in":"path","name":"destination","required":true,"dataType":"string"},
                    trainNumber: {"in":"path","name":"trainNumber","required":true,"dataType":"string"},
                    plannedDepartureTime: {"in":"path","name":"plannedDepartureTime","required":true,"dataType":"datetime"},
            };

            let validatedArgs: any[] = [];
            try {
              validatedArgs = getValidatedArgs(args, context, next);
            } catch (err) {
              const error = err as any;
              context.status = error.status;
              context.throw(error.status, JSON.stringify({ fields: error.fields }));
            }

            const controller = new HafasControllerV2();

            const promise = controller.auslastung.apply(controller, validatedArgs as any);
            return promiseHandler(controller, promise, context, undefined, undefined);
        });
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        router.get('/api/hafas/v2/arrivalStationBoard',
            ...(fetchMiddlewares<Middleware>(HafasControllerV2)),
            ...(fetchMiddlewares<Middleware>(HafasControllerV2.prototype.arrivalStationBoard)),

            async function HafasControllerV2_arrivalStationBoard(context: any, next: any) {
            const args = {
                    req: {"in":"request","name":"req","required":true,"dataType":"object"},
                    station: {"in":"query","name":"station","required":true,"ref":"EvaNumber"},
                    date: {"in":"query","name":"date","dataType":"datetime"},
                    profile: {"in":"query","name":"profile","ref":"AllowedHafasProfile"},
            };

            let validatedArgs: any[] = [];
            try {
              validatedArgs = getValidatedArgs(args, context, next);
            } catch (err) {
              const error = err as any;
              context.status = error.status;
              context.throw(error.status, JSON.stringify({ fields: error.fields }));
            }

            const controller = new HafasControllerV2();

            const promise = controller.arrivalStationBoard.apply(controller, validatedArgs as any);
            return promiseHandler(controller, promise, context, undefined, undefined);
        });
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        router.get('/api/hafas/v2/departureStationBoard',
            ...(fetchMiddlewares<Middleware>(HafasControllerV2)),
            ...(fetchMiddlewares<Middleware>(HafasControllerV2.prototype.departureStationBoard)),

            async function HafasControllerV2_departureStationBoard(context: any, next: any) {
            const args = {
                    req: {"in":"request","name":"req","required":true,"dataType":"object"},
                    station: {"in":"query","name":"station","required":true,"ref":"EvaNumber"},
                    direction: {"in":"query","name":"direction","ref":"EvaNumber"},
                    date: {"in":"query","name":"date","dataType":"datetime"},
                    profile: {"in":"query","name":"profile","ref":"AllowedHafasProfile"},
            };

            let validatedArgs: any[] = [];
            try {
              validatedArgs = getValidatedArgs(args, context, next);
            } catch (err) {
              const error = err as any;
              context.status = error.status;
              context.throw(error.status, JSON.stringify({ fields: error.fields }));
            }

            const controller = new HafasControllerV2();

            const promise = controller.departureStationBoard.apply(controller, validatedArgs as any);
            return promiseHandler(controller, promise, context, undefined, undefined);
        });
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        router.post('/api/hafas/v2/journeyMatch',
            ...(fetchMiddlewares<Middleware>(HafasControllerV2)),
            ...(fetchMiddlewares<Middleware>(HafasControllerV2.prototype.postJourneyMatch)),

            async function HafasControllerV2_postJourneyMatch(context: any, next: any) {
            const args = {
                    req: {"in":"request","name":"req","required":true,"dataType":"object"},
                    options: {"in":"body","name":"options","required":true,"ref":"JourneyMatchOptions"},
                    profile: {"in":"query","name":"profile","ref":"AllowedHafasProfile"},
            };

            let validatedArgs: any[] = [];
            try {
              validatedArgs = getValidatedArgs(args, context, next);
            } catch (err) {
              const error = err as any;
              context.status = error.status;
              context.throw(error.status, JSON.stringify({ fields: error.fields }));
            }

            const controller = new HafasControllerV2();

            const promise = controller.postJourneyMatch.apply(controller, validatedArgs as any);
            return promiseHandler(controller, promise, context, undefined, undefined);
        });
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        router.get('/api/hafas/v2/details/:trainName',
            ...(fetchMiddlewares<Middleware>(HafasControllerV2)),
            ...(fetchMiddlewares<Middleware>(HafasControllerV2.prototype.details)),

            async function HafasControllerV2_details(context: any, next: any) {
            const args = {
                    notFoundResponse: {"in":"res","name":"404","required":true,"dataType":"void"},
                    trainName: {"in":"path","name":"trainName","required":true,"dataType":"string"},
                    stop: {"in":"query","name":"stop","dataType":"string"},
                    station: {"in":"query","name":"station","ref":"EvaNumber"},
                    date: {"in":"query","name":"date","dataType":"datetime"},
                    profile: {"in":"query","name":"profile","ref":"AllowedHafasProfile"},
            };

            let validatedArgs: any[] = [];
            try {
              validatedArgs = getValidatedArgs(args, context, next);
            } catch (err) {
              const error = err as any;
              context.status = error.status;
              context.throw(error.status, JSON.stringify({ fields: error.fields }));
            }

            const controller = new HafasControllerV2();

            const promise = controller.details.apply(controller, validatedArgs as any);
            return promiseHandler(controller, promise, context, undefined, undefined);
        });
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        router.post('/api/hafas/v2/searchOnTrip',
            ...(fetchMiddlewares<Middleware>(HafasControllerV2)),
            ...(fetchMiddlewares<Middleware>(HafasControllerV2.prototype.searchOnTrip)),

            async function HafasControllerV2_searchOnTrip(context: any, next: any) {
            const args = {
                    body: {"in":"body","name":"body","required":true,"ref":"SearchOnTripBody"},
                    req: {"in":"request","name":"req","required":true,"dataType":"object"},
                    profile: {"in":"query","name":"profile","ref":"AllowedHafasProfile"},
            };

            let validatedArgs: any[] = [];
            try {
              validatedArgs = getValidatedArgs(args, context, next);
            } catch (err) {
              const error = err as any;
              context.status = error.status;
              context.throw(error.status, JSON.stringify({ fields: error.fields }));
            }

            const controller = new HafasControllerV2();

            const promise = controller.searchOnTrip.apply(controller, validatedArgs as any);
            return promiseHandler(controller, promise, context, undefined, undefined);
        });
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        router.post('/api/hafas/v3/tripSearch',
            ...(fetchMiddlewares<Middleware>(HafasControllerV3)),
            ...(fetchMiddlewares<Middleware>(HafasControllerV3.prototype.tripSearch)),

            async function HafasControllerV3_tripSearch(context: any, next: any) {
            const args = {
                    req: {"in":"request","name":"req","required":true,"dataType":"object"},
                    body: {"in":"body","name":"body","required":true,"ref":"TripSearchOptionsV3"},
                    profile: {"in":"query","name":"profile","ref":"AllowedHafasProfile"},
            };

            let validatedArgs: any[] = [];
            try {
              validatedArgs = getValidatedArgs(args, context, next);
            } catch (err) {
              const error = err as any;
              context.status = error.status;
              context.throw(error.status, JSON.stringify({ fields: error.fields }));
            }

            const controller = new HafasControllerV3();

            const promise = controller.tripSearch.apply(controller, validatedArgs as any);
            return promiseHandler(controller, promise, context, undefined, undefined);
        });
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        router.get('/api/hafas/v3/additionalInformation/:trainName',
            ...(fetchMiddlewares<Middleware>(HafasControllerV3)),
            ...(fetchMiddlewares<Middleware>(HafasControllerV3.prototype.additionalInformation)),

            async function HafasControllerV3_additionalInformation(context: any, next: any) {
            const args = {
                    notFoundResponse: {"in":"res","name":"404","required":true,"dataType":"void"},
                    trainName: {"in":"path","name":"trainName","required":true,"dataType":"string"},
                    evaNumberAlongRoute: {"in":"query","name":"evaNumberAlongRoute","dataType":"string"},
                    initialDepartureDate: {"in":"query","name":"initialDepartureDate","dataType":"datetime"},
            };

            let validatedArgs: any[] = [];
            try {
              validatedArgs = getValidatedArgs(args, context, next);
            } catch (err) {
              const error = err as any;
              context.status = error.status;
              context.throw(error.status, JSON.stringify({ fields: error.fields }));
            }

            const controller = new HafasControllerV3();

            const promise = controller.additionalInformation.apply(controller, validatedArgs as any);
            return promiseHandler(controller, promise, context, undefined, undefined);
        });
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        router.get('/api/iris/v2/abfahrten/:evaNumber',
            ...(fetchMiddlewares<Middleware>(IrisControllerv2)),
            ...(fetchMiddlewares<Middleware>(IrisControllerv2.prototype.abfahrten)),

            async function IrisControllerv2_abfahrten(context: any, next: any) {
            const args = {
                    evaNumber: {"in":"path","name":"evaNumber","required":true,"ref":"EvaNumber"},
                    lookahead: {"default":150,"in":"query","name":"lookahead","dataType":"integer","validators":{"isInt":{"errorMsg":"lookahead"}}},
                    lookbehind: {"default":0,"in":"query","name":"lookbehind","dataType":"integer","validators":{"isInt":{"errorMsg":"lookbehind"}}},
            };

            let validatedArgs: any[] = [];
            try {
              validatedArgs = getValidatedArgs(args, context, next);
            } catch (err) {
              const error = err as any;
              context.status = error.status;
              context.throw(error.status, JSON.stringify({ fields: error.fields }));
            }

            const controller = new IrisControllerv2();

            const promise = controller.abfahrten.apply(controller, validatedArgs as any);
            return promiseHandler(controller, promise, context, undefined, undefined);
        });
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        router.get('/api/journeys/v1/find/:trainName',
            ...(fetchMiddlewares<Middleware>(JourneysV1Controller)),
            ...(fetchMiddlewares<Middleware>(JourneysV1Controller.prototype.find)),

            async function JourneysV1Controller_find(context: any, next: any) {
            const args = {
                    trainName: {"in":"path","name":"trainName","required":true,"dataType":"string"},
                    initialDepartureDate: {"in":"query","name":"initialDepartureDate","dataType":"datetime"},
                    filtered: {"in":"query","name":"filtered","dataType":"boolean"},
                    limit: {"in":"query","name":"limit","dataType":"double"},
            };

            let validatedArgs: any[] = [];
            try {
              validatedArgs = getValidatedArgs(args, context, next);
            } catch (err) {
              const error = err as any;
              context.status = error.status;
              context.throw(error.status, JSON.stringify({ fields: error.fields }));
            }

            const controller = new JourneysV1Controller();

            const promise = controller.find.apply(controller, validatedArgs as any);
            return promiseHandler(controller, promise, context, undefined, undefined);
        });
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        router.get('/api/journeys/v1/details/:trainName',
            ...(fetchMiddlewares<Middleware>(JourneysV1Controller)),
            ...(fetchMiddlewares<Middleware>(JourneysV1Controller.prototype.details)),

            async function JourneysV1Controller_details(context: any, next: any) {
            const args = {
                    notFoundResponse: {"in":"res","name":"404","required":true,"dataType":"void"},
                    trainName: {"in":"path","name":"trainName","required":true,"dataType":"string"},
                    evaNumberAlongRoute: {"in":"query","name":"evaNumberAlongRoute","ref":"EvaNumber"},
                    initialDepartureDate: {"in":"query","name":"initialDepartureDate","dataType":"datetime"},
            };

            let validatedArgs: any[] = [];
            try {
              validatedArgs = getValidatedArgs(args, context, next);
            } catch (err) {
              const error = err as any;
              context.status = error.status;
              context.throw(error.status, JSON.stringify({ fields: error.fields }));
            }

            const controller = new JourneysV1Controller();

            const promise = controller.details.apply(controller, validatedArgs as any);
            return promiseHandler(controller, promise, context, undefined, undefined);
        });
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        router.get('/api/oebb/experimental/trainInfo/:trainNumber/:evaNumber/:departureDate',
            ...(fetchMiddlewares<Middleware>(OEBBExperimentalController)),
            ...(fetchMiddlewares<Middleware>(OEBBExperimentalController.prototype.trainInfo)),

            async function OEBBExperimentalController_trainInfo(context: any, next: any) {
            const args = {
                    trainNumber: {"in":"path","name":"trainNumber","required":true,"dataType":"integer","validators":{"isInt":{"errorMsg":"trainNumber"}}},
                    evaNumber: {"in":"path","name":"evaNumber","required":true,"ref":"EvaNumber"},
                    departureDate: {"in":"path","name":"departureDate","required":true,"dataType":"datetime"},
            };

            let validatedArgs: any[] = [];
            try {
              validatedArgs = getValidatedArgs(args, context, next);
            } catch (err) {
              const error = err as any;
              context.status = error.status;
              context.throw(error.status, JSON.stringify({ fields: error.fields }));
            }

            const controller = new OEBBExperimentalController();

            const promise = controller.trainInfo.apply(controller, validatedArgs as any);
            return promiseHandler(controller, promise, context, undefined, undefined);
        });
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        router.get('/api/reihung/monitoring/wagen',
            ...(fetchMiddlewares<Middleware>(ReihungMonitoringController)),
            ...(fetchMiddlewares<Middleware>(ReihungMonitoringController.prototype.monitoring)),

            async function ReihungMonitoringController_monitoring(context: any, next: any) {
            const args = {
                    notFoundResponse: {"in":"res","name":"404","required":true,"dataType":"void"},
            };

            let validatedArgs: any[] = [];
            try {
              validatedArgs = getValidatedArgs(args, context, next);
            } catch (err) {
              const error = err as any;
              context.status = error.status;
              context.throw(error.status, JSON.stringify({ fields: error.fields }));
            }

            const controller = new ReihungMonitoringController();

            const promise = controller.monitoring.apply(controller, validatedArgs as any);
            return promiseHandler(controller, promise, context, undefined, undefined);
        });
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        router.get('/api/reihung/v1/trainName/:tz',
            ...(fetchMiddlewares<Middleware>(ReihungControllerV1)),
            ...(fetchMiddlewares<Middleware>(ReihungControllerV1.prototype.trainName)),

            async function ReihungControllerV1_trainName(context: any, next: any) {
            const args = {
                    tz: {"in":"path","name":"tz","required":true,"dataType":"string"},
                    notFoundResponse: {"in":"res","name":"404","required":true,"dataType":"void"},
            };

            let validatedArgs: any[] = [];
            try {
              validatedArgs = getValidatedArgs(args, context, next);
            } catch (err) {
              const error = err as any;
              context.status = error.status;
              context.throw(error.status, JSON.stringify({ fields: error.fields }));
            }

            const controller = new ReihungControllerV1();

            const promise = controller.trainName.apply(controller, validatedArgs as any);
            return promiseHandler(controller, promise, context, undefined, undefined);
        });
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        router.get('/api/reihung/v4/wagen/:trainNumber',
            ...(fetchMiddlewares<Middleware>(ReihungControllerV4)),
            ...(fetchMiddlewares<Middleware>(ReihungControllerV4.prototype.wagenreihung)),

            async function ReihungControllerV4_wagenreihung(context: any, next: any) {
            const args = {
                    notFoundResponse: {"in":"res","name":"404","required":true,"dataType":"void"},
                    trainNumber: {"in":"path","name":"trainNumber","required":true,"dataType":"integer","validators":{"isInt":{"errorMsg":"trainNumber"}}},
                    departure: {"in":"query","name":"departure","required":true,"dataType":"datetime"},
                    evaNumber: {"in":"query","name":"evaNumber","ref":"EvaNumber"},
                    initialDeparture: {"in":"query","name":"initialDeparture","dataType":"datetime"},
                    category: {"in":"query","name":"category","dataType":"string"},
            };

            let validatedArgs: any[] = [];
            try {
              validatedArgs = getValidatedArgs(args, context, next);
            } catch (err) {
              const error = err as any;
              context.status = error.status;
              context.throw(error.status, JSON.stringify({ fields: error.fields }));
            }

            const controller = new ReihungControllerV4();

            const promise = controller.wagenreihung.apply(controller, validatedArgs as any);
            return promiseHandler(controller, promise, context, undefined, undefined);
        });
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        router.get('/api/reihung/v4/runsPerDate/:date',
            ...(fetchMiddlewares<Middleware>(ReihungControllerV4)),
            ...(fetchMiddlewares<Middleware>(ReihungControllerV4.prototype.runsPerDate)),

            async function ReihungControllerV4_runsPerDate(context: any, next: any) {
            const args = {
                    date: {"in":"path","name":"date","required":true,"dataType":"datetime"},
                    baureihen: {"in":"query","name":"baureihen","dataType":"array","array":{"dataType":"refAlias","ref":"AvailableBR"}},
                    identifier: {"in":"query","name":"identifier","dataType":"array","array":{"dataType":"refAlias","ref":"AvailableIdentifier"}},
                    stopsAt: {"in":"query","name":"stopsAt","dataType":"array","array":{"dataType":"refAlias","ref":"EvaNumber"}},
            };

            let validatedArgs: any[] = [];
            try {
              validatedArgs = getValidatedArgs(args, context, next);
            } catch (err) {
              const error = err as any;
              context.status = error.status;
              context.throw(error.status, JSON.stringify({ fields: error.fields }));
            }

            const controller = new ReihungControllerV4();

            const promise = controller.runsPerDate.apply(controller, validatedArgs as any);
            return promiseHandler(controller, promise, context, undefined, undefined);
        });
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        router.get('/api/stopPlace/v1/lageplan/:stopPlaceName/:evaNumber',
            ...(fetchMiddlewares<Middleware>(StopPlaceController)),
            ...(fetchMiddlewares<Middleware>(StopPlaceController.prototype.lageplan)),

            async function StopPlaceController_lageplan(context: any, next: any) {
            const args = {
                    stopPlaceName: {"in":"path","name":"stopPlaceName","required":true,"dataType":"string"},
                    evaNumber: {"in":"path","name":"evaNumber","required":true,"ref":"EvaNumber"},
            };

            let validatedArgs: any[] = [];
            try {
              validatedArgs = getValidatedArgs(args, context, next);
            } catch (err) {
              const error = err as any;
              context.status = error.status;
              context.throw(error.status, JSON.stringify({ fields: error.fields }));
            }

            const controller = new StopPlaceController();

            const promise = controller.lageplan.apply(controller, validatedArgs as any);
            return promiseHandler(controller, promise, context, undefined, undefined);
        });
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        router.get('/api/stopPlace/v1/search/:searchTerm',
            ...(fetchMiddlewares<Middleware>(StopPlaceController)),
            ...(fetchMiddlewares<Middleware>(StopPlaceController.prototype.stopPlaceSearch)),

            async function StopPlaceController_stopPlaceSearch(context: any, next: any) {
            const args = {
                    searchTerm: {"in":"path","name":"searchTerm","required":true,"dataType":"string"},
                    max: {"in":"query","name":"max","dataType":"integer","validators":{"isInt":{"errorMsg":"max"}}},
                    filterForIris: {"default":false,"in":"query","name":"filterForIris","dataType":"boolean"},
                    groupedBySales: {"default":false,"in":"query","name":"groupedBySales","dataType":"boolean"},
            };

            let validatedArgs: any[] = [];
            try {
              validatedArgs = getValidatedArgs(args, context, next);
            } catch (err) {
              const error = err as any;
              context.status = error.status;
              context.throw(error.status, JSON.stringify({ fields: error.fields }));
            }

            const controller = new StopPlaceController();

            const promise = controller.stopPlaceSearch.apply(controller, validatedArgs as any);
            return promiseHandler(controller, promise, context, undefined, undefined);
        });
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        router.get('/api/stopPlace/v1/geoSearch',
            ...(fetchMiddlewares<Middleware>(StopPlaceController)),
            ...(fetchMiddlewares<Middleware>(StopPlaceController.prototype.stopPlaceGeoSearch)),

            async function StopPlaceController_stopPlaceGeoSearch(context: any, next: any) {
            const args = {
                    lat: {"in":"query","name":"lat","required":true,"dataType":"double"},
                    lng: {"in":"query","name":"lng","required":true,"dataType":"double"},
                    radius: {"default":5000,"in":"query","name":"radius","dataType":"integer","validators":{"isInt":{"errorMsg":"radius"}}},
                    filterForIris: {"default":false,"in":"query","name":"filterForIris","dataType":"boolean"},
                    max: {"in":"query","name":"max","dataType":"integer","validators":{"isInt":{"errorMsg":"max"}}},
            };

            let validatedArgs: any[] = [];
            try {
              validatedArgs = getValidatedArgs(args, context, next);
            } catch (err) {
              const error = err as any;
              context.status = error.status;
              context.throw(error.status, JSON.stringify({ fields: error.fields }));
            }

            const controller = new StopPlaceController();

            const promise = controller.stopPlaceGeoSearch.apply(controller, validatedArgs as any);
            return promiseHandler(controller, promise, context, undefined, undefined);
        });
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        router.get('/api/stopPlace/v1/:evaNumber',
            ...(fetchMiddlewares<Middleware>(StopPlaceController)),
            ...(fetchMiddlewares<Middleware>(StopPlaceController.prototype.stopPlaceByEva)),

            async function StopPlaceController_stopPlaceByEva(context: any, next: any) {
            const args = {
                    evaNumber: {"in":"path","name":"evaNumber","required":true,"ref":"EvaNumber"},
                    notFoundResponse: {"in":"res","name":"404","required":true,"dataType":"void"},
            };

            let validatedArgs: any[] = [];
            try {
              validatedArgs = getValidatedArgs(args, context, next);
            } catch (err) {
              const error = err as any;
              context.status = error.status;
              context.throw(error.status, JSON.stringify({ fields: error.fields }));
            }

            const controller = new StopPlaceController();

            const promise = controller.stopPlaceByEva.apply(controller, validatedArgs as any);
            return promiseHandler(controller, promise, context, undefined, undefined);
        });
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        router.get('/api/stopPlace/v1/:evaNumber/live',
            ...(fetchMiddlewares<Middleware>(StopPlaceController)),
            ...(fetchMiddlewares<Middleware>(StopPlaceController.prototype.stopPlaceByEvaLive)),

            async function StopPlaceController_stopPlaceByEvaLive(context: any, next: any) {
            const args = {
                    evaNumber: {"in":"path","name":"evaNumber","required":true,"ref":"EvaNumber"},
                    notFoundResponse: {"in":"res","name":"404","required":true,"dataType":"void"},
                    notAuthorized: {"in":"res","name":"401","required":true,"dataType":"void"},
            };

            let validatedArgs: any[] = [];
            try {
              validatedArgs = getValidatedArgs(args, context, next);
            } catch (err) {
              const error = err as any;
              context.status = error.status;
              context.throw(error.status, JSON.stringify({ fields: error.fields }));
            }

            const controller = new StopPlaceController();

            const promise = controller.stopPlaceByEvaLive.apply(controller, validatedArgs as any);
            return promiseHandler(controller, promise, context, undefined, undefined);
        });
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        router.get('/api/stopPlace/v1/:evaNumber/identifier',
            ...(fetchMiddlewares<Middleware>(StopPlaceController)),
            ...(fetchMiddlewares<Middleware>(StopPlaceController.prototype.stopPlaceIdentifier)),

            async function StopPlaceController_stopPlaceIdentifier(context: any, next: any) {
            const args = {
                    evaNumber: {"in":"path","name":"evaNumber","required":true,"ref":"EvaNumber"},
                    notFoundResponse: {"in":"res","name":"404","required":true,"dataType":"void"},
            };

            let validatedArgs: any[] = [];
            try {
              validatedArgs = getValidatedArgs(args, context, next);
            } catch (err) {
              const error = err as any;
              context.status = error.status;
              context.throw(error.status, JSON.stringify({ fields: error.fields }));
            }

            const controller = new StopPlaceController();

            const promise = controller.stopPlaceIdentifier.apply(controller, validatedArgs as any);
            return promiseHandler(controller, promise, context, undefined, undefined);
        });
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        router.get('/api/stopPlace/v1/:evaNumber/trainOccupancy',
            ...(fetchMiddlewares<Middleware>(StopPlaceController)),
            ...(fetchMiddlewares<Middleware>(StopPlaceController.prototype.trainOccupancy)),

            async function StopPlaceController_trainOccupancy(context: any, next: any) {
            const args = {
                    evaNumber: {"in":"path","name":"evaNumber","required":true,"ref":"EvaNumber"},
                    notFoundResponse: {"in":"res","name":"404","required":true,"dataType":"void"},
            };

            let validatedArgs: any[] = [];
            try {
              validatedArgs = getValidatedArgs(args, context, next);
            } catch (err) {
              const error = err as any;
              context.status = error.status;
              context.throw(error.status, JSON.stringify({ fields: error.fields }));
            }

            const controller = new StopPlaceController();

            const promise = controller.trainOccupancy.apply(controller, validatedArgs as any);
            return promiseHandler(controller, promise, context, undefined, undefined);
        });
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa


  // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

  function isController(object: any): object is Controller {
      return 'getHeaders' in object && 'getStatus' in object && 'setStatus' in object;
  }

  // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

  function promiseHandler(controllerObj: any, promise: Promise<any>, context: any, successStatus: any, next?: () => Promise<any>) {
      return Promise.resolve(promise)
        .then((data: any) => {
            let statusCode = successStatus;
            let headers;

            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            if (isController(controllerObj)) {
                headers = controllerObj.getHeaders();
                statusCode = controllerObj.getStatus() || statusCode;
            }
            return returnHandler(context, next, statusCode, data, headers);
        })
        .catch((error: any) => {
            context.status = error.status || 500;
            context.throw(context.status, error.message, error);
        });
    }

    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

    function returnHandler(context: any, next?: () => any, statusCode?: number, data?: any, headers: any={}) {
        if (!context.headerSent && !context.response.__tsoaResponded) {
            if (data !== null && data !== undefined) {
                context.body = data;
                context.status = 200;
            } else {
                context.status = 204;
            }

            if (statusCode) {
                context.status = statusCode;
            }

            context.set(headers);
            context.response.__tsoaResponded = true;
            return next ? next() : context;
        }
    }

    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

    function getValidatedArgs(args: any, context: any, next: () => any): any[] {
        const errorFields: FieldErrors = {};
        const values = Object.keys(args).map(key => {
            const name = args[key].name;
            switch (args[key].in) {
            case 'request':
                return context.request;
            case 'query':
                return validationService.ValidateParam(args[key], context.request.query[name], name, errorFields, undefined, {"noImplicitAdditionalProperties":"ignore"});
            case 'path':
                return validationService.ValidateParam(args[key], context.params[name], name, errorFields, undefined, {"noImplicitAdditionalProperties":"ignore"});
            case 'header':
                return validationService.ValidateParam(args[key], context.request.headers[name], name, errorFields, undefined, {"noImplicitAdditionalProperties":"ignore"});
            case 'body':
                return validationService.ValidateParam(args[key], context.request.body, name, errorFields, undefined, {"noImplicitAdditionalProperties":"ignore"});
            case 'body-prop':
                return validationService.ValidateParam(args[key], context.request.body[name], name, errorFields, 'body.', {"noImplicitAdditionalProperties":"ignore"});
            case 'formData':
                if (args[key].dataType === 'file') {
                  return validationService.ValidateParam(args[key], context.request.file, name, errorFields, undefined, {"noImplicitAdditionalProperties":"ignore"});
                } else if (args[key].dataType === 'array' && args[key].array.dataType === 'file') {
                  return validationService.ValidateParam(args[key], context.request.files, name, errorFields, undefined, {"noImplicitAdditionalProperties":"ignore"});
                } else {
                  return validationService.ValidateParam(args[key], context.request.body[name], name, errorFields, undefined, {"noImplicitAdditionalProperties":"ignore"});
                }
            case 'res':
                return responder(context, next);
            }
        });
        if (Object.keys(errorFields).length > 0) {
            throw new ValidateError(errorFields, '');
        }
        return values;
    }

    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

    function responder(context: any, next: () => any): TsoaResponse<HttpStatusCodeLiteral, unknown>  {
        return function(status, data, headers) {
           returnHandler(context, next, status, data, headers);
        };
    };

    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
}

// WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
