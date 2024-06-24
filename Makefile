include .env

# Define variables
APP_NAME = sshd911-homepage
PACKAGE_MANAGER = pnpm
DEV_CMD = run dev
BUILD_CMD = run build
CACHE_CLEAR_CMD = store prune
INSTALL_CMD = install
START_CMD = PORT=${PORT} pm2 start npm --name "${APP_NAME}" -- run start
STOP_CMD = pm2 stop ${APP_NAME} 
LOG_CMD = pm2 logs ${APP_NAME} 
STATUS_CMD = pm2 status
KILL_CMD = pm2 kill
RESTART_CMD = pm2 restart 0
INSTALL_MP2_CMD = sudo npm install pm2 -g
INSTALL_PNPM_CMD = curl -fsSL https://get.pnpm.io/install.sh | sh -  && export PNPM_HOME="/home/ec2-user/.local/share/pnpm" && source /home/ec2-user/.bashrc && install
GIT_PULL_CMD = git pull origin main

# Default target
all: install

# Run development server
dev:
	$(PACKAGE_MANAGER) $(DEV_CMD)

# Build the project
build:
	$(PACKAGE_MANAGER) $(BUILD_CMD)

# Clear npm cache
clean:
	$(PACKAGE_MANAGER) $(CACHE_CLEAR_CMD)

# Start application
start:
	${START_CMD} || ${INSTALL_MP2_CMD}

# Stop application
stop:
	${STOP_CMD}

# Kill application
kill:
	${KILL_CMD}

# Restart application
restart:
	${RESTART_CMD}
# Dump logs
logs:
	${LOG_CMD}

# Status
status:
	${STATUS_CMD}

# Install dependencies
install:
	$(PACKAGE_MANAGER) $(INSTALL_CMD) || ${INSTALL_PNPM_CMD} && $(PACKAGE_MANAGER) $(INSTALL_CMD) 

# update latest version
update:
	${KILL_CMD} && \
	${GIT_PULL_CMD} && \
	${PACKAGE_MANAGER} ${BUILD_CMD} && \
	${START_CMD}
