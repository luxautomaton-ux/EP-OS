import{_ as x,C as _,r as N,a as M,g as y,i as O,p as G,u as J,F as A,f as I}from"./vendor-firebase-DS0W8Jfb.js";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const j="type.googleapis.com/google.protobuf.Int64Value",q="type.googleapis.com/google.protobuf.UInt64Value";function D(e,t){const n={};for(const r in e)e.hasOwnProperty(r)&&(n[r]=t(e[r]));return n}function w(e){if(e==null)return null;if(e instanceof Number&&(e=e.valueOf()),typeof e=="number"&&isFinite(e)||e===!0||e===!1||Object.prototype.toString.call(e)==="[object String]")return e;if(e instanceof Date)return e.toISOString();if(Array.isArray(e))return e.map(t=>w(t));if(typeof e=="function"||typeof e=="object")return D(e,t=>w(t));throw new Error("Data cannot be encoded in JSON: "+e)}function g(e){if(e==null)return e;if(e["@type"])switch(e["@type"]){case j:case q:{const t=Number(e.value);if(isNaN(t))throw new Error("Data cannot be decoded from JSON: "+e);return t}default:throw new Error("Data cannot be decoded from JSON: "+e)}return Array.isArray(e)?e.map(t=>g(t)):typeof e=="function"||typeof e=="object"?D(e,t=>g(t)):e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const P="functions";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const k={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class d extends A{constructor(t,n,r){super(`${P}/${t}`,n||""),this.details=r,Object.setPrototypeOf(this,d.prototype)}}function H(e){if(e>=200&&e<300)return"ok";switch(e){case 0:return"internal";case 400:return"invalid-argument";case 401:return"unauthenticated";case 403:return"permission-denied";case 404:return"not-found";case 409:return"aborted";case 429:return"resource-exhausted";case 499:return"cancelled";case 500:return"internal";case 501:return"unimplemented";case 503:return"unavailable";case 504:return"deadline-exceeded"}return"unknown"}function T(e,t){let n=H(e),r=n,s;try{const i=t&&t.error;if(i){const a=i.status;if(typeof a=="string"){if(!k[a])return new d("internal","internal");n=k[a],r=a}const o=i.message;typeof o=="string"&&(r=o),s=i.details,s!==void 0&&(s=g(s))}}catch{}return n==="ok"?null:new d(n,r,s)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class V{constructor(t,n,r,s){this.app=t,this.auth=null,this.messaging=null,this.appCheck=null,this.serverAppAppCheckToken=null,M(t)&&t.settings.appCheckToken&&(this.serverAppAppCheckToken=t.settings.appCheckToken),this.auth=n.getImmediate({optional:!0}),this.messaging=r.getImmediate({optional:!0}),this.auth||n.get().then(i=>this.auth=i,()=>{}),this.messaging||r.get().then(i=>this.messaging=i,()=>{}),this.appCheck||s==null||s.get().then(i=>this.appCheck=i,()=>{})}async getAuthToken(){if(this.auth)try{const t=await this.auth.getToken();return t==null?void 0:t.accessToken}catch{return}}async getMessagingToken(){if(!(!this.messaging||!("Notification"in self)||Notification.permission!=="granted"))try{return await this.messaging.getToken()}catch{return}}async getAppCheckToken(t){if(this.serverAppAppCheckToken)return this.serverAppAppCheckToken;if(this.appCheck){const n=t?await this.appCheck.getLimitedUseToken():await this.appCheck.getToken();return n.error?null:n.token}return null}async getContext(t){const n=await this.getAuthToken(),r=await this.getMessagingToken(),s=await this.getAppCheckToken(t);return{authToken:n,messagingToken:r,appCheckToken:s}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const b="us-central1",B=/^data: (.*?)(?:\n|$)/;function X(e){let t=null;return{promise:new Promise((n,r)=>{t=setTimeout(()=>{r(new d("deadline-exceeded","deadline-exceeded"))},e)}),cancel:()=>{t&&clearTimeout(t)}}}let Y=class{constructor(t,n,r,s,i=b,a=(...o)=>fetch(...o)){this.app=t,this.fetchImpl=a,this.emulatorOrigin=null,this.contextProvider=new V(t,n,r,s),this.cancelAllRequests=new Promise(o=>{this.deleteService=()=>Promise.resolve(o())});try{const o=new URL(i);this.customDomain=o.origin+(o.pathname==="/"?"":o.pathname),this.region=b}catch{this.customDomain=null,this.region=i}}_delete(){return this.deleteService()}_url(t){const n=this.app.options.projectId;return this.emulatorOrigin!==null?`${this.emulatorOrigin}/${n}/${this.region}/${t}`:this.customDomain!==null?`${this.customDomain}/${t}`:`https://${this.region}-${n}.cloudfunctions.net/${t}`}};function z(e,t,n){const r=O(t);e.emulatorOrigin=`http${r?"s":""}://${t}:${n}`,r&&(G(e.emulatorOrigin+"/backends"),J("Functions",!0))}function K(e,t,n){const r=s=>Q(e,t,s,n||{});return r.stream=(s,i)=>ee(e,t,s,i),r}function W(e,t,n){const r=s=>L(e,t,s,n||{});return r.stream=(s,i)=>U(e,t,s,i||{}),r}function R(e){return e.emulatorOrigin&&O(e.emulatorOrigin)?"include":void 0}async function Z(e,t,n,r,s){n["Content-Type"]="application/json";let i;try{i=await r(e,{method:"POST",body:JSON.stringify(t),headers:n,credentials:R(s)})}catch{return{status:0,json:null}}let a=null;try{a=await i.json()}catch{}return{status:i.status,json:a}}async function F(e,t){const n={},r=await e.contextProvider.getContext(t.limitedUseAppCheckTokens);return r.authToken&&(n.Authorization="Bearer "+r.authToken),r.messagingToken&&(n["Firebase-Instance-ID-Token"]=r.messagingToken),r.appCheckToken!==null&&(n["X-Firebase-AppCheck"]=r.appCheckToken),n}function Q(e,t,n,r){const s=e._url(t);return L(e,s,n,r)}async function L(e,t,n,r){n=w(n);const s={data:n},i=await F(e,r),a=r.timeout||7e4,o=X(a),u=await Promise.race([Z(t,s,i,e.fetchImpl,e),o.promise,e.cancelAllRequests]);if(o.cancel(),!u)throw new d("cancelled","Firebase Functions instance was deleted.");const l=T(u.status,u.json);if(l)throw l;if(!u.json)throw new d("internal","Response is not valid JSON object.");let c=u.json.data;if(typeof c>"u"&&(c=u.json.result),typeof c>"u")throw new d("internal","Response is missing data field.");return{data:g(c)}}function ee(e,t,n,r){const s=e._url(t);return U(e,s,n,r||{})}async function U(e,t,n,r){var m;n=w(n);const s={data:n},i=await F(e,r);i["Content-Type"]="application/json",i.Accept="text/event-stream";let a;try{a=await e.fetchImpl(t,{method:"POST",body:JSON.stringify(s),headers:i,signal:r==null?void 0:r.signal,credentials:R(e)})}catch(f){if(f instanceof Error&&f.name==="AbortError"){const E=new d("cancelled","Request was cancelled.");return{data:Promise.reject(E),stream:{[Symbol.asyncIterator](){return{next(){return Promise.reject(E)}}}}}}const p=T(0,null);return{data:Promise.reject(p),stream:{[Symbol.asyncIterator](){return{next(){return Promise.reject(p)}}}}}}let o,u;const l=new Promise((f,p)=>{o=f,u=p});(m=r==null?void 0:r.signal)==null||m.addEventListener("abort",()=>{const f=new d("cancelled","Request was cancelled.");u(f)});const c=a.body.getReader(),h=te(c,o,u,r==null?void 0:r.signal);return{stream:{[Symbol.asyncIterator](){const f=h.getReader();return{async next(){const{value:p,done:E}=await f.read();return{value:p,done:E}},async return(){return await f.cancel(),{done:!0,value:void 0}}}}},data:l}}function te(e,t,n,r){const s=(a,o)=>{const u=a.match(B);if(!u)return;const l=u[1];try{const c=JSON.parse(l);if("result"in c){t(g(c.result));return}if("message"in c){o.enqueue(g(c.message));return}if("error"in c){const h=T(0,c);o.error(h),n(h);return}}catch(c){if(c instanceof d){o.error(c),n(c);return}}},i=new TextDecoder;return new ReadableStream({start(a){let o="";return u();async function u(){if(r!=null&&r.aborted){const l=new d("cancelled","Request was cancelled");return a.error(l),n(l),Promise.resolve()}try{const{value:l,done:c}=await e.read();if(c){o.trim()&&s(o.trim(),a),a.close();return}if(r!=null&&r.aborted){const m=new d("cancelled","Request was cancelled");a.error(m),n(m),await e.cancel();return}o+=i.decode(l,{stream:!0});const h=o.split(`
`);o=h.pop()||"";for(const m of h)m.trim()&&s(m.trim(),a);return u()}catch(l){const c=l instanceof d?l:T(0,null);a.error(c),n(c)}}},cancel(){return e.cancel()}})}const C="@firebase/functions",S="0.13.2";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ne="auth-internal",re="app-check-internal",se="messaging-internal";function ie(e){const t=(n,{instanceIdentifier:r})=>{const s=n.getProvider("app").getImmediate(),i=n.getProvider(ne),a=n.getProvider(se),o=n.getProvider(re);return new Y(s,i,a,o,r)};x(new _(P,t,"PUBLIC").setMultipleInstances(!0)),N(C,S,e),N(C,S,"esm2020")}function v(e,t,n){z(y(e),t,n)}function oe(e,t,n){return K(y(e),t,n)}function ae(e,t,n){return W(y(e),t,n)}ie();const ce="@firebase/functions-compat",ue="0.4.2";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ${constructor(t,n){this.app=t,this._delegate=n,this._region=this._delegate.region,this._customDomain=this._delegate.customDomain}httpsCallable(t,n){return oe(this._delegate,t,n)}httpsCallableFromURL(t,n){return ae(this._delegate,t,n)}useFunctionsEmulator(t){const n=t.match("[a-zA-Z]+://([a-zA-Z0-9.-]+)(?::([0-9]+))?");if(n==null)throw new A("functions","No origin provided to useFunctionsEmulator()");if(n[2]==null)throw new A("functions","Port missing in origin provided to useFunctionsEmulator()");return v(this._delegate,n[1],Number(n[2]))}useEmulator(t,n){return v(this._delegate,t,n)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const le="us-central1",de=(e,{instanceIdentifier:t})=>{const n=e.getProvider("app-compat").getImmediate(),r=e.getProvider("functions").getImmediate({identifier:t??le});return new $(n,r)};function fe(){const e={Functions:$};I.INTERNAL.registerComponent(new _("functions-compat",de,"PUBLIC").setServiceProps(e).setMultipleInstances(!0))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */fe();I.registerVersion(ce,ue);
