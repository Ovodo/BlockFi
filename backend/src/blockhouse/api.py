from ninja import NinjaAPI,Schema

class UserSchema(Schema):
    username:str
    is_authenticated:bool
    email:str = None

api = NinjaAPI()

@api.get("/hello")
def hello(request):
    print(request)
    return {"message":"Hello, World!"}

@api.get("/me",response = UserSchema)
def me(request):
    return request.user

@api.get("/candlestick-data")
def candlestick_data(request):
    return {
    "data": [
    {"x": "2023-01-01", "open": 30, "high": 40, "low": 25, "close": 35},
    {"x": "2023-01-02", "open": 35, "high": 45, "low": 30, "close": 40},
    {"x": "2023-01-03", "open": 40, "high": 50, "low": 20, "close": 25},
    {"x": "2023-01-04", "open": 25, "high": 30, "low": 20, "close": 30},
    {"x": "2023-01-05", "open": 30, "high": 60, "low": 45, "close": 55},
    {"x": "2023-01-06", "open": 55, "high": 65, "low": 50, "close": 60},
    # {"x": "2023-01-07", "open": 60, "high": 70, "low": 55, "close": 65},
    # {"x": "2023-01-08", "open": 65, "high": 75, "low": 60, "close": 70},
    # {"x": "2023-01-09", "open": 70, "high": 80, "low": 65, "close": 75},
    # {"x": "2023-01-10", "open": 75, "high": 85, "low": 70, "close": 80}
]
    }

@api.get("/line-chart-data")
def line_chart_data(request):
    return {
        "labels": ["Jan", "Feb", "Mar", "Apr"],
        "data": [10, 20, 30, 40]
    }

@api.get("/bar-chart-data")
def bar_chart_data(request):
    return {
        "labels": ["Product A", "Product B", "Product C"],
        "data": [100, 150, 200]
    }

@api.get("/pie-chart-data")
def pie_chart_data(request):
    return {
        "labels": ["Red", "Blue", "Yellow"],
        "data": [300, 50, 100]
    }