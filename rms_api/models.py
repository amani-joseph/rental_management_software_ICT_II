from database import Base
from sqlalchemy import Column, Integer, String, ForeignKey,Date
from sqlalchemy.orm import relationship


class User(Base):
    __tablename__ = 'users'

    id = Column(Integer, primary_key=True, index=True)
    f_name = Column(String)
    surname = Column(String)
    l_name = Column(String)
    email = Column(String)
    phone_number = Column(String)
    password = Column(String)
    confirm_password = Column(String)




class Tenant(Base):
    __tablename__ = 'tenants'

    id = Column(Integer, primary_key=True, index=True)
    f_name = Column(String)
    surname = Column(String)
    l_name = Column(String)
    email = Column(String)
    phone = Column(String)
    status = Column(String)
    lease_start_date = Column(Date)
    lease_end_date = Column(Date)
    monthly_rent = Column(Integer)


class Propety(Base):
    __tablename__ = 'properties'

    id = Column(Integer, primary_key=True, index=True)
    address = Column(String)
    type = Column(String)
    occupation = Column(String)
    tenant_id = Column(Integer, ForeignKey('tenants.id'))
    owner_id = Column(Integer, ForeignKey('users.id'))
    lease_start_date = Column(Date)
    lease_end_date = Column(Date)
    monthly_rent = Column(Integer)
    bathrooms = Column(Integer)
    bedrooms = Column(Integer)
    parkings = Column(Integer)


class Payments(Base):
    __tablename__ = 'payments'
    id = Column(Integer, primary_key=True, index=True)
    property_id = Column(Integer, ForeignKey('properties.id'))
    tenant_id = Column(Integer, ForeignKey('tenants.id'))
    owner_id = Column(Integer, ForeignKey('users.id'))
    date = Column(Date)
    amount = Column(Integer)
