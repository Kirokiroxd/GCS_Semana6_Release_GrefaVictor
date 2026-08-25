from src.app import add_product, list_products

def test_add_and_list():
    add_product("laptop", 2)
    assert len(list_products()) >= 1
