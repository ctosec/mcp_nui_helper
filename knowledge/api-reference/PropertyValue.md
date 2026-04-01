# PropertyValue

**Namespace:** `Tizen.NUI`
**Inherits:** `Disposable`
**Category:** basic

A value-type representing a property value.

## Methods

| Name | Signature | Description |
|------|-----------|-------------|
| EqualTo | `bool EqualTo(PropertyValue rhs)` | A value-type representing a property value. |
| NotEqualTo | `bool NotEqualTo(PropertyValue rhs)` | Determines whether the ProperyValue doesn't have equal value with the current ProperyValue. |
| CreateFromObject | `PropertyValue CreateFromObject(System.Object obj)` | Hidden API (Inhouse API).         Dispose. |
| Get | `bool Get(Size2D vectorValue)` | An extension to the property value class that allows us to create a         Property value from a C# object, for example, integer, float, or string.<br />         Warning : This API don't automatically release memory. |
| Get | `bool Get(Position2D vectorValue)` | Retrieves a Position2D value. |
| Get | `bool Get(Size vectorValue)` | Retrieves a Size value. |
| Get | `bool Get(Position vectorValue)` | Retrieves a Position value. |
| Get | `bool Get(Color vectorValue)` | Retrieves a Color value. |
| GetType | `new PropertyType GetType()` | Queries the type of this property value. |
| Get | `bool Get(out bool boolValue)` | Retrieves a boolean value. |
| Get | `bool Get(out float floatValue)` | Retrieves a floating-point value. |
| Get | `bool Get(out int integerValue)` | Retrieves an integer value. |
| Get | `bool Get(Rectangle rect)` | Retrieves an integer rectangle. |
| Get | `bool Get(Vector2 vectorValue)` | Retrieves a vector value. |
| Get | `bool Get(Vector3 vectorValue)` | Retrieves a vector value. |
| Get | `bool Get(Vector4 vectorValue)` | Retrieves a vector value. |
| Get | `bool Get(RelativeVector2 vectorValue)` | Retrieves a vector value. |
| Get | `bool Get(RelativeVector3 vectorValue)` | Retrieves a vector value. |
| Get | `bool Get(RelativeVector4 vectorValue)` | Retrieves a vector value. |
| Get | `bool Get(Rotation quaternionValue)` | Retrieves a rotation value. |
| Get | `bool Get(out string stringValue)` | Retrieves a string property value. |
| Get | `bool Get(PropertyArray arrayValue)` | Retrieves an array property value. |
| Get | `bool Get(PropertyMap mapValue)` | Retrieves a map property value. |
| Get | `bool Get(ref PropertyMap mapValue)` | Retrieves a map property value. |
| Get | `bool Get(Extents extentsValue)` | Retrieves a Extents value. |
| Get | `bool Get(Matrix3 matrixValue)` | Retrieves a Matrix3 value. |
| Get | `bool Get(Matrix matrixValue)` | Retrieves a Matrix value. |
| Set | `void Set(bool boolValue)` | Get each components of Vector2. It will be failed if the type is not Vector2. |
| Set | `void Set(float floatValue)` | Sets a floating-point value. |
| Set | `void Set(int integerValue)` | Sets an integer value. |
| Set | `void Set(Vector2 vectorValue)` | Sets a vector value. |
| Set | `void Set(Vector3 vectorValue)` | Sets a vector value. |
| Set | `void Set(Vector4 vectorValue)` | Sets a vector value. |
| Set | `void Set(Rectangle rectValue)` | Sets a rectangle value. |
| Set | `void Set(Rotation rotationValue)` | Sets a rotation value (quaternion). |
| Set | `void Set(string stringValue)` | Sets a string value. |
| Set | `void Set(PropertyArray arrayValue)` | Sets an array property value. |
| Set | `void Set(PropertyMap mapValue)` | Sets a map property value. |
| Set | `void Set(Extents extentsValue)` | Sets an extents value. |
| Set | `void Set(UIColor color)` | Sets an UIColor value. |
| Set | `void Set(UICorner corner)` | Sets an UICorner value. |
| Set | `void Set(UIExtents uiExtents)` | Sets an UIExtents value. |
| Set | `void Set(UIVector2 vector2)` | Sets an UIVector2 value. |
| Set | `void Set(UIVector3 vector3)` | Sets an UIVector3 value. |
| Set | `void Set(Matrix3 matrixValue)` | Sets a matrix3 value. |
| Set | `void Set(Matrix matrixValue)` | Sets a matrix value. |

