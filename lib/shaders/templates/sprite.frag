{{#useTexture}}
uniform sampler2D texture;
varying vec2 uv0;
{{/useTexture}}

{{#useColor}}
uniform vec4 color;
{{/useColor}}

void main () {
  vec4 o = vec4(1, 1, 1, 1);

  {{#useTexture}}
  o *= texture2D(texture, uv0);
  {{/useTexture}}

  {{#useColor}}
  o *= color;
  {{/useColor}}

  gl_FragColor = o;
}