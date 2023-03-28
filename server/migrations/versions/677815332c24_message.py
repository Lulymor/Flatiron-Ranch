"""message

Revision ID: 677815332c24
Revises: 5972fa01fdea
Create Date: 2023-03-28 15:22:45.621898

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '677815332c24'
down_revision = '5972fa01fdea'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    with op.batch_alter_table('animals', schema=None) as batch_op:
        batch_op.add_column(sa.Column('image', sa.String(), nullable=True))

    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    with op.batch_alter_table('animals', schema=None) as batch_op:
        batch_op.drop_column('image')

    # ### end Alembic commands ###